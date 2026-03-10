'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Save,
    Share2,
    Settings,
    Layers,
    Type,
    Image as ImageIcon,
    Play,
    ChevronLeft,
    CheckCircle2,
    Sparkles,
    MousePointer2,
    Plus,
    Undo2,
    ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const EditorPage = () => {
    const params = useParams();
    const id = params.id;
    const [activeTool, setActiveTool] = useState<'select' | 'image' | 'text' | 'media' | 'pages' | 'settings'>('select');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [bgColor, setBgColor] = useState('#FFFFFF');

    const handleSave = () => {
        setToastMessage('Changes saved to cloud successfully!');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const handleShare = () => {
        setToastMessage('Public link copied to clipboard!');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-black overflow-hidden transition-colors">
            {/* Toast Notification */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed bottom-10 left-1/2 -translate-x-1/2 px-8 py-4 bg-gray-900 border border-white/10 rounded-2xl shadow-2xl flex items-center gap-3 z-[100] backdrop-blur-3xl"
                    >
                        <CheckCircle2 size={20} className="text-green-500" />
                        <span className="text-sm font-bold text-white">{toastMessage}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Top Bar */}
            <header className="h-[72px] border-b border-gray-200 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-md flex items-center justify-between px-8 z-50">
                <div className="flex items-center gap-5">
                    <Link href="/dashboard" className="p-2.5 hover:bg-gray-100 dark:hover:bg-white/5 rounded-2xl transition-all border border-transparent hover:border-gray-200 dark:hover:border-white/10 group active:scale-95">
                        <ChevronLeft size={22} className="text-gray-500 dark:text-gray-400 group-hover:text-primary-500" />
                    </Link>
                    <div className="h-6 w-px bg-gray-200 dark:bg-white/10 mx-1" />
                    <div>
                        <h1 className="text-base font-black text-gray-900 dark:text-white flex items-center gap-3 italic tracking-tighter">
                            PROJECT DELTA-77
                            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 text-[10px] rounded-lg font-black uppercase tracking-[0.2em]">
                                LIVE EDITOR
                            </span>
                        </h1>
                        <p className="text-[10px] text-gray-500 dark:text-gray-500 font-black uppercase tracking-widest pl-0.5">ID: {id}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 pr-4 border-r border-gray-200 dark:border-white/10">
                        <button className="p-2.5 text-gray-400 hover:text-primary-500 transition-colors">
                            <Undo2 size={18} />
                        </button>
                    </div>
                    <button className="hidden md:block px-5 py-2.5 text-sm font-black text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-all uppercase tracking-widest">
                        Preview
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-8 py-2.5 bg-primary-600 text-white text-sm font-black rounded-2xl hover:bg-primary-500 transition-all flex items-center gap-3 shadow-lg shadow-primary-500/20 active:scale-95 uppercase tracking-widest"
                    >
                        <Save size={18} />
                        Sync
                    </button>
                    <button
                        onClick={handleShare}
                        className="p-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-all active:scale-95 shadow-inner"
                    >
                        <Share2 size={20} />
                    </button>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Left Sidebar - Toolbar */}
                <aside className="w-[88px] border-r border-gray-200 dark:border-white/10 bg-white dark:bg-black flex flex-col items-center py-8 gap-6 shadow-inner">
                    <ToolButton
                        icon={<MousePointer2 size={24} />}
                        label="Select"
                        active={activeTool === 'select'}
                        onClick={() => setActiveTool('select')}
                    />
                    <ToolButton
                        icon={<ImageIcon size={24} />}
                        label="Images"
                        active={activeTool === 'image'}
                        onClick={() => setActiveTool('image')}
                    />
                    <ToolButton
                        icon={<Type size={24} />}
                        label="Typography"
                        active={activeTool === 'text'}
                        onClick={() => setActiveTool('text')}
                    />
                    <ToolButton
                        icon={<Play size={24} />}
                        label="Media"
                        active={activeTool === 'media'}
                        onClick={() => setActiveTool('media')}
                    />
                    <ToolButton
                        icon={<Layers size={24} />}
                        label="Pages"
                        active={activeTool === 'pages'}
                        onClick={() => setActiveTool('pages')}
                    />
                    <div className="mt-auto">
                        <ToolButton
                            icon={<Settings size={22} />}
                            label="Settings"
                            active={activeTool === 'settings'}
                            onClick={() => setActiveTool('settings')}
                        />
                    </div>
                </aside>

                {/* Main Editor Canvas */}
                <main className="flex-1 overflow-auto bg-gray-100 dark:bg-[#080808] p-16 flex items-center justify-center relative group">
                    {/* Collaborative UI */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/80 dark:bg-white/5 backdrop-blur-3xl rounded-full border border-gray-200 dark:border-white/10 flex items-center gap-5 shadow-2xl transition-all hover:scale-105 cursor-pointer z-40"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-[#080808] bg-gradient-to-tr from-primary-600 to-indigo-600 overflow-hidden shadow-lg flex items-center justify-center font-bold text-[10px] text-white">
                                    {String.fromCharCode(64 + i)}
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#080808] bg-white dark:bg-white/10 flex items-center justify-center text-[10px] font-black text-primary-500">
                                +12
                            </div>
                        </div>
                        <div className="h-4 w-px bg-gray-200 dark:bg-white/10" />
                        <span className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] animate-pulse">Live View Editing</span>
                    </motion.div>

                    <div className="absolute inset-x-0 bottom-12 flex justify-center gap-4 z-40">
                        <button className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl flex items-center gap-2 font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl">
                            <Plus size={16} /> Add Hotspot
                        </button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-[840px] aspect-[1/1.4] bg-white dark:bg-black shadow-[0_64px_128px_rgba(0,0,0,0.15)] dark:shadow-[0_64px_128px_rgba(0,0,0,0.6)] rounded-sm overflow-hidden relative border border-gray-200 dark:border-white/5 transition-all duration-700"
                        style={{ backgroundColor: bgColor }}
                    >
                        {/* Page Content Placeholder */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-24 space-y-8">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary-600/30 blur-[60px] animate-pulse rounded-full" />
                                <div className="w-40 h-40 bg-primary-100 dark:bg-primary-500/10 rounded-[60px] flex items-center justify-center relative border border-primary-500/20 shadow-inner group-hover:scale-110 transition-transform duration-1000">
                                    <Sparkles className="w-20 h-20 text-primary-600 dark:text-primary-400 drop-shadow-2xl" strokeWidth={1} />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-4xl font-black text-gray-900 dark:text-white italic tracking-tighter leading-none">MASTERPIECE READY.</h2>
                                <p className="text-gray-600 dark:text-gray-400 font-bold text-sm max-w-sm mx-auto leading-relaxed uppercase tracking-tighter opacity-80">
                                    Click any element or drag from the toolbox to start your immersive professional interaction design.
                                </p>
                            </div>
                            <div className="pt-4">
                                <button
                                    onClick={() => {
                                        setToastMessage('Hotspot editor launched! Select an area on the canvas.');
                                        setShowToast(true);
                                        setTimeout(() => setShowToast(false), 3000);
                                    }}
                                    className="px-10 py-5 bg-primary-600 text-white font-black rounded-[24px] hover:translate-y-[-4px] active:scale-95 transition-all text-xs tracking-[0.2em] shadow-2xl shadow-primary-500/30"
                                >
                                    CREATE INTERACTION
                                </button>
                            </div>
                        </div>

                        {/* Page Number */}
                        <div className="absolute right-12 bottom-12 text-[10px] font-black text-gray-300 dark:text-white/10 uppercase tracking-[0.4em]">
                            FOLIO / P.01
                        </div>
                    </motion.div>
                </main>

                {/* Right Sidebar - Properties */}
                <aside className="w-88 border-l border-gray-200 dark:border-white/10 bg-white dark:bg-black p-8 space-y-10 overflow-y-auto shadow-inner">
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em]">PROPERTIES / GLOBAL</h4>
                        <div className="space-y-5">
                            <PropertyItem label="Page Background" value={bgColor} type="color" onChange={setBgColor} />
                            <PropertyItem label="Page Size Preset" value="A4 / Standard (8.27 x 11.69)" />
                            <PropertyItem label="Fold Simulation" value="Realistic Glass Glossy" />
                        </div>
                    </div>

                    <div className="pt-10 border-t border-gray-100 dark:border-white/10 space-y-6">
                        <h4 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em]">INTERACTIVE NODES</h4>
                        <div
                            onClick={() => {
                                setToastMessage('Adding new interaction node...');
                                setShowToast(true);
                                setTimeout(() => setShowToast(false), 3000);
                            }}
                            className="bg-gray-100/50 dark:bg-white/5 rounded-[32px] p-8 flex flex-col items-center justify-center text-center py-12 gap-5 border-2 border-dashed border-gray-200 dark:border-white/10 group-hover:border-primary-500/30 transition-all cursor-pointer"
                        >
                            <div className="w-16 h-16 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                <Plus size={32} className="text-gray-300 dark:text-gray-800" />
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-500 font-bold uppercase tracking-tight leading-relaxed max-w-[140px]">
                                Add your first hotspot or interaction node
                            </p>
                        </div>
                    </div>

                    <div className="p-8 bg-gradient-to-tr from-primary-600/10 to-indigo-600/10 border border-primary-500/20 rounded-[40px] space-y-4">
                        <h5 className="text-[10px] font-black text-primary-500 uppercase tracking-widest">Editor Hint</h5>
                        <p className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic">
                            "Double-click any text area to launch the AI Typography Assist for professional kerning."
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

const ToolButton = ({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) => (
    <button
        onClick={onClick}
        className={cn(
            "p-4 rounded-[24px] transition-all group relative active:scale-90",
            active
                ? "bg-primary-600 text-white shadow-[0_12px_24px_rgba(14,165,233,0.4)] translate-x-1"
                : "text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
        )}
    >
        {icon}
        <span className="absolute left-full ml-6 px-3 py-1.5 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap z-[100] pointer-events-none shadow-2xl border border-white/10">
            {label}
        </span>
    </button>
);

const PropertyItem = ({ label, value, type = 'text', onChange }: { label: string, value: string, type?: string, onChange?: (val: string) => void }) => (
    <div className="space-y-2.5">
        <label className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1">{label}</label>
        <div
            className="px-5 py-3.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl text-[11px] font-black text-gray-900 dark:text-white cursor-pointer hover:border-primary-500/50 transition-all flex items-center justify-between group"
            onClick={() => type === 'color' && onChange?.(value === '#FFFFFF' ? '#F0F9FF' : '#FFFFFF')}
        >
            <span className="truncate">{value}</span>
            {type === 'color' && (
                <div
                    className="w-4 h-4 rounded-full border border-gray-400 dark:border-white/20 shadow-sm"
                    style={{ backgroundColor: value }}
                />
            )}
            <ChevronRight size={14} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
        </div>
    </div>
);

export default EditorPage;
