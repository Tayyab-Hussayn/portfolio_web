"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

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

    return (
        <footer
            className="fixed bottom-0 left-0 w-full h-screen bg-[#050505] text-white z-0 flex flex-col justify-between"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            {/* Background Texture (Noise) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("/noise.png")' }}></div>
            {/* Technical Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

            {/* TOP: KINETIC TYPOGRAPHY */}
            <div className="flex-grow flex items-center justify-center relative z-10 w-full overflow-hidden">
                <div className="group relative flex items-center justify-center w-full h-[40vh] cursor-pointer">
                    {/* The Static Text (Visible by default) */}
                    <h1 className="text-[12vw] font-black uppercase tracking-tighter text-white group-hover:opacity-0 transition-opacity duration-300 select-none">
                        Start Project
                    </h1>

                    {/* The Marquee (Visible on Hover) */}
                    <div className="absolute inset-0 flex items-center whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="animate-marquee flex gap-10">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <span key={i} className="text-[12vw] font-black uppercase tracking-tighter text-blue-500 stroke-text select-none">
                                    Let&apos;s Build • Let&apos;s Build •
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM: THE COCKPIT DATA ROW */}
            <div className="border-t border-white/10 bg-black/50 backdrop-blur-sm p-8 flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">

                {/* Column 1: Identity (Mono Font) */}
                <div className="font-mono text-sm space-y-2 ml-15">
                    <div className="flex items-center gap-2 text-gray-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span>SYSTEM STATUS: ONLINE</span>
                    </div>
                    <div className="text-white font-bold text-xl tracking-tight">Tayyab Hussain</div>
                    <div className="text-gray-500">FULL STACK ENGINEER</div>
                </div>

                {/* Column 2: The Social Pills */}
                <div className="flex flex-wrap gap-3">
                    {[
                        { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: "https://github.com" },
                        { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com" },
                        { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com" },
                        { name: 'Email', icon: <Mail className="w-5 h-5" />, href: "mailto:hello@example.com" }
                    ].map((social) => (
                        <Link
                            key={social.name}
                            href={social.href}
                            className="group flex items-center gap-2 h-12 px-4 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
                        >
                            <span className="group-hover:scale-110 transition-transform text-white group-hover:text-black">
                                {social.icon}
                            </span>
                            {/* Text reveals on hover */}
                            <span className="w-0 overflow-hidden group-hover:w-auto group-hover:ml-2 transition-all duration-300 font-medium whitespace-nowrap">
                                {social.name}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Column 3: Local Time (Mono) */}
                <div className="font-mono text-right mr-15 hidden md:block">
                    <div className="text-xs text-gray-500 uppercase mb-1">Local Time (PKT)</div>
                    <div className="text-3xl text-white font-light">{time}</div>
                </div>
            </div>
        </footer>
    );
}
