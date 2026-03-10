'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileUp, Sparkles, BookCopy, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary-600/10 dark:from-primary-900/20 to-transparent pointer-events-none -z-10 blur-3xl rounded-full opacity-50" />
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary-600/5 dark:bg-primary-600/10 pointer-events-none -z-10 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-purple-600/5 dark:bg-purple-600/10 pointer-events-none -z-10 blur-[100px] rounded-full delay-1000 animate-pulse" />

            <div className="container mx-auto px-6 text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full backdrop-blur-md mb-8"
                >
                    <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    <span className="text-xs font-semibold tracking-wide text-primary-700 dark:text-primary-200 uppercase">Interactive PDF Experience</span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Turn PDFs into <br />
                    <span className="bg-gradient-to-tr from-primary-600 via-primary-400 to-primary-600 dark:from-white dark:via-primary-300 dark:to-white bg-clip-text text-transparent italic tracking-tighter">
                        Digital Magic
                    </span>
                </motion.h1>

                <motion.p
                    className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Experience the most realistic page-flip reader ever built.
                    Upload your PDF and create professional digital catalogs,
                    magazines, and brochures in seconds.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button className="group relative px-8 py-4 bg-primary-600 text-white font-bold rounded-2xl flex items-center space-x-3 hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all">
                        <span className="text-lg">Upload PDF Now</span>
                        <FileUp className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </button>

                    <button className="px-8 py-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white font-bold rounded-2xl flex items-center space-x-2 transition-colors">
                        <span>Explore Samples</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>

                {/* Dashboard Preview Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    className="relative max-w-6xl mx-auto mt-24"
                >
                    <div className="p-2 border border-gray-200 dark:border-white/10 rounded-[32px] bg-gray-50/50 dark:bg-white/5 backdrop-blur-2xl shadow-2xl relative">
                        <div className="w-full h-[600px] border border-gray-200 dark:border-white/10 rounded-[24px] overflow-hidden bg-white dark:bg-black/40 relative">
                            {/* Dashboard Skeleton */}
                            <div className="absolute inset-0 grid grid-cols-12 gap-0 overflow-hidden opacity-30 dark:opacity-50">
                                <div className="col-span-2 border-r border-gray-200 dark:border-white/10 p-6 flex flex-col space-y-6">
                                    <div className="w-full h-8 bg-gray-200 dark:bg-white/5 rounded-lg" />
                                    <div className="w-full h-8 bg-gray-300 dark:bg-white/10 rounded-lg" />
                                    <div className="w-full h-8 bg-gray-200 dark:bg-white/5 rounded-lg" />
                                </div>
                                <div className="col-span-10 p-10 flex flex-col space-y-10">
                                    <div className="flex justify-between">
                                        <div className="w-48 h-12 bg-gray-200 dark:bg-white/10 rounded-2xl" />
                                        <div className="w-32 h-12 bg-primary-600/10 dark:bg-primary-600/20 rounded-2xl border border-primary-500/20" />
                                    </div>
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="h-32 bg-gray-200 dark:bg-white/5 rounded-[24px]" />
                                        <div className="h-32 bg-gray-200 dark:bg-white/5 rounded-[24px]" />
                                        <div className="h-32 bg-gray-200 dark:bg-white/5 rounded-[24px]" />
                                    </div>
                                    <div className="flex-1 bg-gray-100 dark:bg-white/5 rounded-[32px]" />
                                </div>
                            </div>

                            {/* Flipsnack Animation Preview Overlay */}
                            <div className="absolute inset-x-0 bottom-0 top-1/4 flex items-center justify-center p-12">
                                <div className="w-3/4 h-full flex transform rotate-x-6 space-x-2">
                                    <div className="flex-1 bg-white p-2 rounded-l-lg shadow-2xl origin-right -rotate-y-12 transition-transform hover:rotate-y-0 group">
                                        <div className="w-full h-full bg-gray-100 rounded-sm border flex items-center justify-center">
                                            <BookCopy className="w-12 h-12 text-gray-300" />
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-white p-2 rounded-r-lg shadow-2xl origin-left rotate-y-12 transition-transform hover:rotate-y-0">
                                        <div className="w-full h-full bg-gray-100 rounded-sm border flex items-center justify-center">
                                            <BookCopy className="w-12 h-12 text-gray-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Accent */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-600 rounded-full blur-3xl opacity-20" />
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-600 rounded-full blur-[100px] opacity-20" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
