'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Monitor,
    Share2,
    BarChart3,
    Layers,
    Zap,
    ShieldCheck
} from 'lucide-react';

const FEATURE_LIST = [
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Instant Conversion",
        desc: "Upload a PDF and see the magic happen. No waiting around. Fast, efficient, and effortless."
    },
    {
        icon: <Monitor className="w-6 h-6" />,
        title: "Responsive Reader",
        desc: "Your flipbooks work everywhere. On mobile, tablet, and desktop. Perfect 60fps animations on all devices."
    },
    {
        icon: <Share2 className="w-6 h-6" />,
        title: "Embed Anywhere",
        desc: "Simply copy-paste an iframe and showcase your interactive magazines directly on your business website."
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Powerful Analytics",
        desc: "Track every page view, average reading time, and click through rates. Know exactly what your readers love."
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: "Interactive Editor",
        desc: "Add links, videos, and shopping buttons directly onto your flipbook pages to drive massive engagement."
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Private & Secure",
        desc: "Password protect your content or share unlisted links for private internal catalogs and whitepapers."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 lg:py-40 bg-white dark:bg-black relative transition-colors duration-300">
            {/* Accents */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-600/5 blur-[120px] rounded-full" />

            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">Everything you need to <span className="text-primary-600 dark:text-primary-400 italic">wow</span> your audience.</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">Professional features designed for marketing agencies, real estate agents, and digital publishers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {FEATURE_LIST.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="p-8 pb-10 rounded-[32px] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary-500/30 hover:bg-gray-100 dark:hover:bg-white/10 transition-all group shadow-sm dark:shadow-none"
                        >
                            <div className="w-14 h-14 bg-gradient-to-tr from-primary-600 to-primary-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <div className="text-white">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
