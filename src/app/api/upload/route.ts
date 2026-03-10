import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
    console.log("Upload request received");
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            console.error("No file found in form data");
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        console.log(`Processing file: ${file.name}, Size: ${file.size}`);

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Ensure public/uploads exists
        const uploadDir = path.join(process.cwd(), "public", "uploads");

        try {
            const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
            const filePath = path.join(uploadDir, filename);
            console.log(`Saving file to: ${filePath}`);
            await writeFile(filePath, buffer);
            const pdfUrl = `/uploads/${filename}`;

            // Create record in DB (MySQL)
            let userId = "dummy-user-id";
            let dbSuccess = false;

            try {
                // Try to find any user or create a default one
                const users = await prisma.user.findMany({ take: 1 });
                if (users.length > 0) {
                    userId = users[0].id;
                } else {
                    const defaultUser = await prisma.user.create({
                        data: {
                            email: "default@bloomflipflow.com",
                            passwordHash: "dummy-hash",
                            name: "Default User"
                        }
                    });
                    userId = defaultUser.id;
                }

                const flipbook = await prisma.flipbook.create({
                    data: {
                        userId: userId,
                        title: file.name.split('.')[0],
                        pdfUrl: pdfUrl,
                        fileExtension: file.name.split('.').pop() || 'pdf',
                        fileSize: file.size,
                        status: "ready"
                    }
                });
                console.log(`Database record created: ${flipbook.id}`);
                dbSuccess = true;

                return NextResponse.json({
                    success: true,
                    message: "File uploaded successfully",
                    flipbookId: flipbook.id,
                    url: pdfUrl
                });

            } catch (dbError: any) {
                console.warn("Database operation failed, but file was saved:", dbError.message);
                return NextResponse.json({
                    success: true,
                    message: "File saved locally, but database record failed. (Is MySQL running in XAMPP?)",
                    url: pdfUrl,
                    warning: "DATABASE_OFFLINE"
                }, { status: 200 });
            }

        } catch (fsError: any) {
            console.error("Filesystem error:", fsError);
            return NextResponse.json({ error: `Failed to save file: ${fsError.message}` }, { status: 500 });
        }

    } catch (error: any) {
        console.error("Critical upload error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
