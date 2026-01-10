"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer
            className="fixed bottom-0 left-0 w-full h-screen bg-[#050505] text-white z-0 flex flex-col justify-between p-4 md:p-10"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            {/* Background Texture (Noise) - Optional */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("/noise.png")' }}></div>

            {/* TOP: MASSIVE TEXT */}
            <div className="flex-grow flex items-center justify-center">
                <h1 className="text-[12vw] leading-none font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 hover:text-blue-600 transition-colors duration-500 cursor-pointer select-none">
                    Let&apos;s Talk
                </h1>
            </div>

            {/* BOTTOM: THE DATA GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10 relative z-10 bg-[#050505]/50 backdrop-blur-sm">

                {/* Col 1: Identity */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500 uppercase text-xs tracking-widest">Identify</span>
                        <span className="text-lg font-bold">John Doe</span>
                        <span className="text-gray-400">Full Stack Engineer</span>
                    </div>
                    <div className="flex flex-col gap-1 mt-auto">
                        <span className="text-gray-500 uppercase text-xs tracking-widest">Local Time</span>
                        <span className="text-xl font-mono text-cyan-400">{time} GMT+5</span>
                    </div>
                </div>

                {/* Col 2: Socials */}
                <div className="flex flex-col gap-4">
                    <span className="text-gray-500 uppercase text-xs tracking-widest">Socials</span>
                    <Link href="https://linkedin.com" className="hover:text-blue-500 transition-colors flex items-center gap-2 group">
                        <span className="w-2 h-2 rounded-full bg-neutral-600 group-hover:bg-blue-500 transition-colors"></span>
                        LinkedIn
                    </Link>
                    <Link href="https://github.com" className="hover:text-blue-500 transition-colors flex items-center gap-2 group">
                        <span className="w-2 h-2 rounded-full bg-neutral-600 group-hover:bg-blue-500 transition-colors"></span>
                        GitHub
                    </Link>
                    <Link href="https://twitter.com" className="hover:text-blue-500 transition-colors flex items-center gap-2 group">
                        <span className="w-2 h-2 rounded-full bg-neutral-600 group-hover:bg-blue-500 transition-colors"></span>
                        Twitter
                    </Link>
                    <Link href="mailto:hello@example.com" className="hover:text-blue-500 transition-colors flex items-center gap-2 group">
                        <span className="w-2 h-2 rounded-full bg-neutral-600 group-hover:bg-blue-500 transition-colors"></span>
                        Email
                    </Link>
                </div>

                {/* Col 3: Navigation */}
                <div className="flex flex-col gap-4">
                    <span className="text-gray-500 uppercase text-xs tracking-widest">Menu</span>
                    <Link href="/" className="hover:text-white text-gray-400 transition-colors">Home</Link>
                    <Link href="/projects" className="hover:text-white text-gray-400 transition-colors">Work</Link>
                    <Link href="/about" className="hover:text-white text-gray-400 transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-white text-gray-400 transition-colors">Contact</Link>
                </div>

                {/* Col 4: Action */}
                <div className="flex flex-col justify-between items-end">
                    <button
                        onClick={scrollToTop}
                        className="w-16 h-16 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center group"
                    >
                        <ArrowUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
                    </button>
                    <span className="text-neutral-600 text-xs font-mono">© 2026 Portfolio</span>
                </div>
            </div>
        </footer>
    );
}
