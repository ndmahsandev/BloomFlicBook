'use client';

import React from 'react';
import { Files, Search, Filter, Plus, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const LibraryPage = () => {
    return (
        <div className="space-y-10">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-white italic tracking-tight flex items-center gap-3">
                        My Library
                        <Files className="text-primary-500" />
                    </h1>
                    <p className="text-gray-500 font-medium">Manage and edit your digital flipbooks.</p>
                </div>
                <Link
                    href="/dashboard/upload"
                    className="px-6 py-3 bg-primary-600 text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-primary-500 active:scale-95 transition-all shadow-lg shadow-primary-500/20"
                >
                    <Plus size={20} />
                    New Flipbook
                </Link>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-2 rounded-[28px] border border-white/10 max-w-2xl">
                <div className="flex-1 flex items-center gap-3 px-4">
                    <Search size={18} className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search by title or category..."
                        className="bg-transparent border-none outline-none text-sm font-medium text-white placeholder:text-gray-600 w-full"
                    />
                </div>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl text-xs font-black text-gray-400 uppercase tracking-widest transition-all">
                    <Filter size={14} />
                    Filter
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="group relative bg-white/5 border border-white/10 rounded-[40px] overflow-hidden hover:border-primary-500/30 transition-all hover:bg-white/[0.07]">
                        <div className="aspect-[4/3] bg-gradient-to-tr from-gray-900 to-black relative overflow-hidden flex items-center justify-center p-8">
                            <div className="w-full h-full border border-white/5 rounded-xl bg-white/5 backdrop-blur-3xl flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                                <Files size={48} className="text-gray-700 group-hover:text-primary-500/30 transition-colors" />
                            </div>
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                                <Link
                                    href={`/dashboard/editor/${i}`}
                                    className="p-4 bg-white text-black rounded-2xl hover:scale-110 active:scale-90 transition-all font-black"
                                >
                                    EDIT
                                </Link>
                                <button className="p-4 bg-white/10 border border-white/20 text-white rounded-2xl hover:scale-110 active:scale-90 transition-all">
                                    <ArrowUpRight size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="p-8 space-y-2">
                            <h3 className="text-xl font-black text-white italic tracking-tight">Project Delta-0{i}</h3>
                            <div className="flex items-center justify-between">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Last modified 2h ago</p>
                                <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-[10px] font-black text-green-500 uppercase tracking-tighter">
                                    Ready
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LibraryPage;
