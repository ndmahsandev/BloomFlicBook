import React from 'react';
import Link from 'next/link';
import { BookOpen, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-white/10 pt-24 pb-12 overflow-hidden relative transition-colors duration-300">
            {/* Accent Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative text-gray-900 dark:text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link href="/" className="inline-flex items-center space-x-2 group">
                            <div className="p-2 bg-gradient-to-tr from-primary-600 to-primary-400 rounded-xl">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight italic">FlipFlow</span>
                        </Link>
                        <p className="max-w-md text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic">
                            Empowering publishers to create the worlds most immersive
                            digital reading experiences.
                        </p>
                        <div className="flex items-center space-x-5">
                            <Link href="#" className="p-3 bg-gray-100 dark:bg-white/5 rounded-2xl hover:bg-primary-500/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all text-gray-500">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-3 bg-gray-100 dark:bg-white/5 rounded-2xl hover:bg-primary-500/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all text-gray-500">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-3 bg-gray-100 dark:bg-white/5 rounded-2xl hover:bg-primary-500/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all text-gray-500">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Nav Columns */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-gray-900 dark:text-white">Product</h4>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-400 font-medium">
                            <li><Link href="#features" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Features</Link></li>
                            <li><Link href="#pricing" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Custom Solutions</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-gray-900 dark:text-white">Company</h4>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-400 font-medium">
                            <li><Link href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Legal</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-gray-900 dark:text-white">Get in touch</h4>
                        <p className="text-gray-600 dark:text-gray-400 font-medium pr-4">Subscribe to our newsletter for the latest digital publishing insights.</p>
                        <div className="flex p-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-transparent border-none outline-none px-4 text-gray-900 dark:text-white text-sm"
                            />
                            <button className="px-5 py-2.5 bg-primary-600 dark:bg-white text-white dark:text-black text-sm font-bold rounded-xl hover:opacity-90 transition-colors">Join</button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between text-gray-500 font-medium text-sm gap-4">
                    <p>© 2026 FlipFlow Inc. All rights reserved.</p>
                    <p className="underline underline-offset-4 decoration-primary-500/30">Built by Antigravity for the USER.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
