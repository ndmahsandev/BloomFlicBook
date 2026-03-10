'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    BarChart3,
    Files,
    Clock,
    Eye,
    Users,
    ArrowUpRight,
    Plus,
    Sparkles
} from 'lucide-react';
import Link from 'next/link';

const STATS = [
    { label: 'Total Flipbooks', value: '12', icon: <Files size={20} />, color: 'text-primary-400', bg: 'bg-primary-500/10' },
    { label: 'Total Views', value: '8.4k', icon: <Eye size={20} />, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'Unique Visitors', value: '2.1k', icon: <Users size={20} />, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Avg. Reading Time', value: '4m 12s', icon: <Clock size={20} />, color: 'text-amber-400', bg: 'bg-amber-500/10' },
];

export default function DashboardOverview() {
    return (
        <div className="space-y-10">
            {/* Welcome Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-4xl font-black tracking-tight text-white italic">Welcome back, John!</h1>
                    <p className="text-gray-500 font-medium">Here's a snapshot of your digital publishing empire today.</p>
                </div>
                <Link
                    href="/dashboard/upload"
                    className="px-6 py-3 bg-primary-600 text-white font-bold rounded-2xl flex items-center gap-2 hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(14,165,233,0.3)] transition-all active:scale-95"
                >
                    <Plus size={18} />
                    Create New Flipbook
                </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {STATS.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-6 bg-white/5 border border-white/5 rounded-[32px] hover:border-white/10 transition-colors group"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <div className="flex items-center gap-1 text-[10px] font-black text-green-500 bg-green-500/10 px-2 py-1 rounded-lg">
                                +12% <ArrowUpRight size={10} />
                            </div>
                        </div>
                        <p className="text-sm font-bold text-gray-500 mb-1">{stat.label}</p>
                        <p className="text-3xl font-black text-white tracking-tighter italic">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                {/* Recent Activity / Chart Preview */}
                <div className="xl:col-span-8 p-1 border border-white/5 rounded-[40px] bg-gradient-to-tr from-white/5 to-transparent">
                    <div className="bg-[#0a0a0a] p-8 rounded-[38px] h-96 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-black text-white flex items-center gap-2 italic">
                                <BarChart3 size={20} className="text-primary-400" />
                                Traffic Overview
                            </h3>
                            <div className="flex gap-2">
                                {['24h', '7d', '30d'].map(t => (
                                    <button key={t} className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${t === '7d' ? 'bg-primary-600 text-white' : 'text-gray-500 hover:text-white'}`}>{t}</button>
                                ))}
                            </div>
                        </div>

                        {/* Fake Graph */}
                        <div className="flex-1 flex items-end gap-1.5 py-10 px-4">
                            {[40, 70, 45, 90, 65, 85, 55, 100, 75, 40, 60, 80].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ delay: 0.5 + (i * 0.05), duration: 1 }}
                                    className="flex-1 bg-gradient-to-t from-primary-600/10 to-primary-500/40 rounded-t-lg border-t border-primary-400/20 group relative"
                                >
                                    <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-[10px] font-black opacity-0 group-hover:opacity-100 transition-opacity">
                                        {h}k
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Premium CTA */}
                <div className="xl:col-span-4 p-8 rounded-[40px] bg-primary-600 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-20 transform translate-x-4 -translate-y-4">
                        <Sparkles size={120} className="text-white" />
                    </div>
                    <div className="relative space-y-6">
                        <h3 className="text-3xl font-black text-white italic leading-tight">Unlock Professional <br /> Branding</h3>
                        <p className="text-primary-100 font-medium leading-relaxed opacity-90">Remove the FlipFlow watermark and use your own custom domain for all books.</p>
                        <button className="w-full py-4 bg-white text-primary-600 font-black rounded-2xl hover:scale-105 transition-transform active:scale-95 flex items-center justify-center gap-2 shadow-2xl">
                            GO PRO NOW <ArrowUpRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
