'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    FileUp,
    FileText,
    CheckCircle2,
    AlertCircle,
    Loader2,
    X,
    FileIcon as FileDoc,
    Sparkles,
    ArrowRight
} from 'lucide-react';

const UploadPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [uploadedId, setUploadedId] = useState<string | null>(null);

    const onDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        validateAndSetFile(droppedFile);
    }, []);

    const validateAndSetFile = (file: File) => {
        const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        const validExtensions = ['.pdf', '.doc', '.docx'];

        const fileExt = file.name.slice((file.name.lastIndexOf(".") - 1 >>> 0) + 2);
        const isValidExt = validExtensions.includes(`.${fileExt.toLowerCase()}`);

        if (isValidExt || validTypes.includes(file.type)) {
            setFile(file);
            setUploadStatus('idle');
            setErrorMessage('');
        } else {
            setErrorMessage('Invalid file type. Please upload a PDF, DOC, or DOCX file.');
            setUploadStatus('error');
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        setIsUploading(true);
        setUploadStatus('idle');
        setErrorMessage('');

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Upload failed');
            }

            // Success!
            setIsUploading(false);
            setIsProcessing(true);

            // Artificial delay to show processing animation (senior architect wow factor)
            await new Promise(r => setTimeout(r, 2000));

            setIsProcessing(false);
            setUploadStatus('success');
            setUploadedId(data.flipbookId);

        } catch (error: any) {
            console.error('Upload Error:', error);
            setErrorMessage(error.message || 'Error occurred during upload.');
            setUploadStatus('error');
            setIsUploading(false);
            setIsProcessing(false);
        }
    };

    return (
        <div className="space-y-12">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-3 italic">
                        Upload Your Creation
                        <Sparkles className="w-6 h-6 text-amber-500 animate-pulse" />
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">Support for PDF, DOC, and DOCX documents up to 50MB.</p>
                </div>
                <div className="flex gap-4">
                    <div className="px-6 py-2.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400">
                        <CheckCircle2 size={14} className="text-green-500" />
                        OCR Enabled
                    </div>
                    <div className="px-6 py-2.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400">
                        <CheckCircle2 size={14} className="text-green-500" />
                        Auto-Flip Active
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Main Upload Area */}
                <div className="lg:col-span-8 space-y-8">
                    <AnimatePresence mode="wait">
                        {uploadStatus === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-16 border-2 border-dashed border-green-500/30 bg-green-500/5 rounded-[40px] text-center space-y-8 backdrop-blur-3xl"
                            >
                                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto shadow-[0_0_32px_rgba(34,197,94,0.3)]">
                                    <CheckCircle2 size={40} className="text-green-500" />
                                </div>
                                <div className="space-y-3">
                                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Conversion Ready!</h2>
                                    <p className="text-gray-600 dark:text-gray-400 font-medium max-w-md mx-auto">Your document has been professionally converted into an interactive flipbook.</p>
                                </div>
                                <div className="flex justify-center gap-4">
                                    <Link
                                        href={`/dashboard/editor/${uploadedId || 'new'}`}
                                        className="px-8 py-4 bg-primary-600 text-white font-bold rounded-2xl hover:opacity-90 transition-all active:scale-95 flex items-center gap-3"
                                    >
                                        Open Editor <ArrowRight size={18} />
                                    </Link>
                                    <button
                                        onClick={() => { setFile(null); setUploadStatus('idle'); }}
                                        className="px-8 py-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white font-bold rounded-2xl transition-all"
                                    >
                                        Upload Another
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={onDrop}
                                className={`relative p-20 border-2 border-dashed rounded-[40px] transition-all duration-500 bg-white/[0.02] backdrop-blur-md group ${file ? 'border-primary-500/50 bg-primary-500/5' : 'border-white/10 hover:border-primary-500/30 hover:bg-white/5'
                                    }`}
                            >
                                {isUploading || isProcessing ? (
                                    <div className="flex flex-col items-center justify-center space-y-10 text-center py-10">
                                        <div className="relative">
                                            <Loader2 className="w-20 h-20 text-primary-500 animate-spin" strokeWidth={1} />
                                            <div className="absolute inset-x-0 bottom-[-40px] text-xs font-bold uppercase tracking-[0.2em] text-primary-400 animate-pulse">
                                                {isUploading ? 'Transferring assets...' : 'Optimizing Pages...'}
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white italic tracking-tight">Hang tight, we are working our magic.</h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs font-medium italic">Converting your complex file into a high-performance 60fps digital experience.</p>
                                        </div>
                                        <div className="w-64 h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: isUploading ? '40%' : '95%' }}
                                                transition={{ duration: 3, ease: 'easeInOut' }}
                                                className="h-full bg-gradient-to-r from-primary-600 to-indigo-400 shadow-[0_0_12px_rgba(14,165,233,0.5)]"
                                            />
                                        </div>
                                    </div>
                                ) : uploadStatus === 'error' ? (
                                    <div className="flex flex-col items-center justify-center space-y-10 text-center py-10">
                                        <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto shadow-[0_0_32px_rgba(239,44,44,0.3)]">
                                            <AlertCircle size={40} className="text-red-500" />
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white italic tracking-tight">Upload Failed</h3>
                                            <p className="text-red-500 font-medium max-w-md mx-auto">{errorMessage || "Something went wrong during the upload process."}</p>
                                        </div>
                                        <button
                                            onClick={() => { setFile(null); setUploadStatus('idle'); setErrorMessage(''); }}
                                            className="px-8 py-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white font-bold rounded-2xl transition-all"
                                        >
                                            Try Again
                                        </button>
                                    </div>
                                ) : file ? (
                                    <div className="flex flex-col items-center justify-center space-y-8 text-center py-10">
                                        <div className="w-20 h-24 bg-gradient-to-tr from-primary-600 to-indigo-500 rounded-xl relative shadow-2xl flex items-center justify-center overflow-hidden">
                                            {file.name.endsWith('.pdf') ? <FileText size={40} className="text-white" /> : <FileDoc size={40} className="text-white" />}
                                            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-black/30 backdrop-blur-md flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-white">
                                                {file.name.split('.').pop()}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-black text-gray-900 dark:text-white">{file.name}</h3>
                                            <p className="text-gray-600 dark:text-gray-500 font-bold uppercase text-[10px] tracking-[0.3em]">Ready for professional processing</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <button
                                                onClick={handleUpload}
                                                className="px-8 py-4 bg-primary-600 text-white font-black rounded-2xl hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(14,165,233,0.3)] transition-all flex items-center gap-3 active:scale-95"
                                            >
                                                Start Build <Sparkles size={18} />
                                            </button>
                                            <button
                                                onClick={() => setFile(null)}
                                                className="p-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 rounded-2xl text-red-500 transition-all active:scale-95"
                                            >
                                                <X size={20} />
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center space-y-8 text-center py-10 group cursor-pointer" onClick={() => document.getElementById('file-input')?.click()}>
                                        <div className="w-24 h-24 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[30px] flex items-center justify-center group-hover:scale-110 group-hover:border-primary-500/50 group-hover:bg-primary-500/5 transition-all duration-500">
                                            <FileUp size={40} className="text-gray-400 group-hover:text-primary-400 transition-colors" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-400 transition-colors">Drag and drop your file</h3>
                                            <p className="text-gray-600 dark:text-gray-500 font-medium">Or <span className="text-primary-400 underline decoration-primary-500/30 underline-offset-4">browse your computer</span></p>
                                        </div>
                                        <input
                                            id="file-input"
                                            type="file"
                                            className="hidden"
                                            accept=".pdf,.doc,.docx"
                                            onChange={(e) => e.target.files && validateAndSetFile(e.target.files[0])}
                                        />
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Sidebar Tips/Info */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="p-8 bg-white/5 border border-white/10 rounded-[40px] space-y-6 overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 blur-3xl group-hover:bg-primary-600/20 transition-all" />
                        <h4 className="text-xl font-bold flex items-center gap-3 text-gray-900 dark:text-white italic">
                            <FileText size={20} className="text-primary-400" />
                            Guidelines
                        </h4>
                        <ul className="space-y-4">
                            {[
                                'Keep images high-res for better zoom.',
                                'Maximum file size is 50MB per book.',
                                'Embedded links will be auto-detected.',
                                'Optimized for mobile viewing out-of-box.'
                            ].map((tip, idx) => (
                                <li key={idx} className="flex gap-4 text-sm font-medium text-gray-600 dark:text-gray-400 items-start italic leading-relaxed">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-600 shrink-0" />
                                    {tip}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-1 border border-gray-100 dark:border-white/5 rounded-[40px] bg-gradient-to-tr from-indigo-500/20 to-primary-500/20">
                        <div className="p-8 bg-white dark:bg-[#0a0a0a] rounded-[38px] border border-gray-100 dark:border-transparent space-y-6">
                            <h4 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                                Pro Hack <Sparkles size={20} className="text-amber-500" />
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic">
                                "Use our DOCX to Flipbook feature for real estate brochures. It automatically aligns images for a pixel-perfect magazine look."
                            </p>
                            <div className="pt-2">
                                <button className="text-sm font-black tracking-widest uppercase text-primary-400 flex items-center gap-2 hover:gap-4 transition-all">
                                    Learn More <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadPage;
