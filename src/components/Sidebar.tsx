'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    BarChart3,
    FileUp,
    Files,
    Settings,
    LogOut,
    ChevronRight,
    BookOpen,
    LayoutDashboard
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
    const pathname = usePathname();

    const NAV_ITEMS = [
        { label: 'Overview', icon: <LayoutDashboard size={20} />, href: '/dashboard' },
        { label: 'My Flipbooks', icon: <Files size={20} />, href: '/dashboard/library' },
        { label: 'Upload New', icon: <FileUp size={20} />, href: '/dashboard/upload' },
        { label: 'Analytics', icon: <BarChart3 size={20} />, href: '/dashboard/analytics' },
        { label: 'Settings', icon: <Settings size={20} />, href: '/dashboard/settings' },
    ];

    return (
        <aside className="w-64 h-screen border-r border-white/5 bg-black/40 backdrop-blur-3xl sticky top-0 flex flex-col pt-8">
            {/* Brand */}
            <div className="px-8 mb-10">
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="p-1.5 bg-primary-600 rounded-lg group-hover:scale-110 transition-transform">
                        <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white group-hover:text-primary-400 transition-colors">Bloom FlipFlow</span>
                </Link>
            </div>

            {/* Navigation */}
            <div className="flex-1 px-4 space-y-1">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "group flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300",
                                isActive
                                    ? "bg-primary-600/10 text-primary-400 border border-primary-500/20"
                                    : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <span className={cn(isActive ? "text-primary-400" : "text-gray-500 group-hover:text-white")}>{item.icon}</span>
                                <span className="text-sm font-semibold tracking-wide">{item.label}</span>
                            </div>
                            {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(14,165,233,0.5)]" />}
                        </Link>
                    );
                })}
            </div>

            {/* User Area */}
            <div className="p-6 border-t border-white/5">
                <div className="bg-white/5 rounded-2xl p-4 mb-4 flex items-center gap-3 border border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-white uppercase tracking-wider">
                        JD
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <p className="text-sm font-bold text-white truncate">John Doe</p>
                        <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Free Plan</p>
                    </div>
                </div>
                <button className="w-full py-3 px-4 flex items-center gap-3 text-sm font-semibold text-gray-400 hover:text-red-400 hover:bg-red-500/5 rounded-2xl transition-all group">
                    <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
                    <span>Sign Out</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
