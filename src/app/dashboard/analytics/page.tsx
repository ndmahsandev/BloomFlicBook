'use client';

import React from 'react';
import { BarChart3, TrendingUp, Users, Clock, ArrowUpRight } from 'lucide-react';

const AnalyticsPage = () => {
    const STATS = [
        { label: 'Total Page Views', value: '124.8K', icon: <BarChart3 className="text-primary-500" />, trend: '+12.4%' },
        { label: 'Avg. Reading Time', value: '4m 32s', icon: <Clock className="text-amber-500" />, trend: '+5.2%' },
        { label: 'Unique Readers', value: '48.2K', icon: <Users className="text-purple-500" />, trend: '+8.1%' },
        { label: 'CTR on Hotspots', value: '24.1%', icon: <TrendingUp className="text-green-500" />, trend: '+2.4%' }
    ];

    return (
        <div className="space-y-12">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-white italic tracking-tight flex items-center gap-3">
                        Deep Analytics
                        <Sparkles className="text-amber-500 animate-pulse" />
                    </h1>
                    <p className="text-gray-500 font-medium">Real-time data for your Bloom FlipFlow publications.</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-6 py-2.5 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black text-gray-400 uppercase tracking-widest transition-all hover:bg-white/10">
                        Export CSV
                    </button>
                    <button className="px-6 py-2.5 bg-primary-600 text-white border border-transparent rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all hover:bg-primary-500">
                        Generate Report
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {STATS.map((stat, idx) => (
                    <div key={idx} className="p-8 bg-white/5 border border-white/5 rounded-[40px] space-y-4 hover:border-primary-500/30 transition-all hover:bg-white/10 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary-600/5 blur-3xl pointer-events-none -z-10 group-hover:bg-primary-600/10 transition-colors" />
                        <div className="flex items-center justify-between">
                            <div className="p-3 bg-white/5 rounded-2xl border border-white/5 shadow-inner">
                                {stat.icon}
                            </div>
                            <span className="text-[10px] font-black text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full tracking-widest">
                                {stat.trend}
                            </span>
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</p>
                            <h3 className="text-3xl font-black text-white italic tracking-tight">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-12 border border-white/5 bg-white/5 rounded-[60px] flex flex-col items-center justify-center space-y-6 text-center shadow-inner relative overflow-hidden group">
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-primary-600/5 to-transparent pointer-events-none -z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="w-24 h-24 bg-primary-600/10 rounded-full flex items-center justify-center border border-primary-500/20 group-hover:scale-110 transition-transform shadow-[0_0_32px_rgba(14,165,233,0.1)]">
                    <BarChart3 size={40} className="text-primary-400 opacity-50" />
                </div>
                <div className="space-y-2">
                    <h4 className="text-2xl font-black text-white italic tracking-tight uppercase">Charts are powering up</h4>
                    <p className="text-gray-500 font-medium max-w-md mx-auto">
                        Once your first flipbook gets over 1,000 views, beautiful interactive heatmaps and geo-analytics will appear here.
                    </p>
                </div>
                <button className="text-[10px] font-black text-primary-400 flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest">
                    Upgrade to Enterprise for more nodes <ArrowUpRight size={16} />
                </button>
            </div>
        </div>
    );
};

import { Sparkles } from 'lucide-react';

export default AnalyticsPage;
