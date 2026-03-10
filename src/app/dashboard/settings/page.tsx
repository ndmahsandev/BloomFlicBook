'use client';

import React from 'react';
import { Settings, User, Bell, Shield, Paintbrush, Globe, CheckCircle2 } from 'lucide-react';

const SettingsPage = () => {
    return (
        <div className="space-y-12">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-white italic tracking-tight flex items-center gap-3">
                        General Settings
                        <Settings className="text-primary-500 animate-[spin_3s_linear_infinite]" />
                    </h1>
                    <p className="text-gray-500 font-medium">Configure your workspace and preferences.</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-6 py-2.5 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black text-gray-400 hover:text-white transition-all uppercase tracking-widest">
                        Reset Default
                    </button>
                    <button className="px-6 py-2.5 bg-primary-600 text-white border border-transparent rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all hover:bg-primary-500">
                        Save Preferences
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-10">
                <div className="col-span-4 space-y-2 flex flex-col items-start bg-white/5 p-6 rounded-[40px] border border-white/5 shadow-inner self-start">
                    <SettingNav icon={<User size={18} />} label="Personal Settings" active />
                    <SettingNav icon={<Paintbrush size={18} />} label="Logo & Branding" />
                    <SettingNav icon={<Globe size={18} />} label="Custom Domain" />
                    <SettingNav icon={<Bell size={18} />} label="Email Notifications" />
                    <SettingNav icon={<Shield size={18} />} label="Security & Passwords" />
                </div>

                <div className="col-span-8 space-y-10">
                    <div className="p-10 bg-white/5 border border-white/5 rounded-[60px] space-y-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-primary-600/10 blur-[80px] group-hover:bg-primary-600/20 transition-all pointer-events-none -z-10" />
                        <div className="space-y-2">
                            <h2 className="text-2xl font-black text-white italic tracking-tight uppercase">Public Profile</h2>
                            <p className="text-gray-500 font-medium text-sm">Update your public presence on the Bloom FlipFlow gallery.</p>
                        </div>
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <SettingInput label="Display Name" value="John Doe" />
                                <SettingInput label="Public Email" value="john.doe@example.com" placeholder="email@domain.com" />
                            </div>
                            <SettingTextarea label="Bio" value="Digital publication specialist. Expert in immersive interactive experiences for leading global brands." />
                        </div>
                    </div>

                    <div className="p-10 bg-white/5 border border-white/5 rounded-[60px] space-y-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[80px] pointer-events-none -z-10" />
                        <div className="space-y-2">
                            <h2 className="text-2xl font-black text-white italic tracking-tight uppercase">Usage Statistics</h2>
                            <p className="text-gray-500 font-medium text-sm">Your current consumption on the Bloom FlipFlow infrastructure.</p>
                        </div>
                        <div className="space-y-6">
                            <div className="p-6 bg-black/40 rounded-3xl border border-white/5 space-y-2">
                                <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-gray-500">
                                    <span>Cloud Storage Used</span>
                                    <span className="text-white">45.2 MB / 500 MB</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 shadow-inner">
                                    <div className="h-full w-[10%] bg-gradient-to-r from-primary-600 to-indigo-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SettingNav = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
    <button className={`w-full p-4 rounded-2xl flex items-center justify-between transition-all group ${active
            ? 'bg-primary-600/10 text-primary-400 border border-primary-500/20 px-6'
            : 'text-gray-500 hover:bg-white/5 hover:text-white border border-transparent px-4'
        }`}>
        <div className="flex items-center gap-3">
            {icon}
            <span className="text-sm font-bold tracking-wide">{label}</span>
        </div>
        {active && <CheckCircle2 size={14} className="text-primary-500" />}
    </button>
);

const SettingInput = ({ label, value, placeholder = "" }: { label: string, value?: string, placeholder?: string }) => (
    <div className="space-y-2 flex flex-col">
        <label className="text-[10px] uppercase font-black tracking-widest text-gray-500 px-1">{label}</label>
        <input
            type="text"
            defaultValue={value}
            placeholder={placeholder}
            className="p-4 bg-white/5 border border-white/5 rounded-2xl text-sm font-bold text-white placeholder:text-gray-700 outline-none focus:border-primary-500/30 hover:bg-white/10 transition-all font-mono"
        />
    </div>
);

const SettingTextarea = ({ label, value }: { label: string, value: string }) => (
    <div className="space-y-2 flex flex-col">
        <label className="text-[10px] uppercase font-black tracking-widest text-gray-500 px-1">{label}</label>
        <textarea
            rows={3}
            defaultValue={value}
            className="p-4 bg-white/5 border border-white/5 rounded-2xl text-sm font-bold text-white outline-none focus:border-primary-500/30 hover:bg-white/10 transition-all leading-relaxed"
        />
    </div>
);

export default SettingsPage;
