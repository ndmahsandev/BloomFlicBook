'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import { Search, Bell, Sparkles } from 'lucide-react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex bg-black min-h-screen text-white">
            <Sidebar />
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Top Navbar */}
                <header className="h-[72px] border-b border-white/5 bg-black/40 backdrop-blur-3xl flex items-center justify-between px-10 sticky top-0 z-40">
                    <div className="flex items-center gap-4 bg-white/5 border border-white/5 px-4 py-2.5 rounded-2xl w-96 group focus-within:border-primary-500/30 transition-all">
                        <Search size={18} className="text-gray-500 group-focus-within:text-primary-400" />
                        <input
                            type="text"
                            placeholder="Search flipbooks..."
                            className="bg-transparent border-none outline-none text-sm font-medium text-white placeholder:text-gray-500 flex-1"
                        />
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-gradient-to-tr from-amber-600/10 to-amber-400/10 border border-amber-500/20 rounded-lg text-amber-500 text-[11px] font-extrabold uppercase tracking-widest">
                            <Sparkles size={14} />
                            Upgrade to Pro
                        </div>
                        <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 rounded-xl border border-transparent transition-all relative">
                            <Bell size={20} />
                            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-black shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                        </button>
                        <div className="h-6 w-px bg-white/10 mx-2" />
                        <div className="w-10 h-10 rounded-xl bg-primary-600/10 border border-primary-500/20 text-primary-400 font-black text-xs flex items-center justify-center shadow-[0_0_12px_rgba(14,165,233,0.1)]">
                            FL
                        </div>
                    </div>
                </header>

                {/* Dynamic Page Content */}
                <main className="flex-1 overflow-y-auto overflow-x-hidden p-10 bg-gradient-to-b from-black via-black to-zinc-950/40 relative">
                    {/* Ambient Glow */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/10 blur-[120px] rounded-full pointer-events-none -z-10 opacity-30" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none -z-10 opacity-20" />

                    <div className="max-w-[1240px] mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
