"use client";
import React from "react";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden pt-32 lg:pt-20">

            {/* 1. BACKGROUND GRID (Full Screen) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* 2. ARCHITECTURAL SIDE LINES (The Frame) */}
            {/* Left Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5 hidden 2xl:block"></div>
            {/* Right Line */}
            <div className="absolute right-6 top-0 bottom-0 w-px bg-white/5 hidden 2xl:block"></div>

            {/* 3. TECHNICAL MARGINALIA (Filling the Void) */}
            {/* Left Data */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden 2xl:flex flex-col gap-8">
                <span className="text-[10px] text-zinc-700 font-mono -rotate-90 tracking-widest">EST. 2024</span>
                <span className="text-[10px] text-zinc-700 font-mono -rotate-90 tracking-widest">V.2.0.0</span>
            </div>
            {/* Right Data */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden 2xl:flex flex-col gap-8">
                <span className="text-[10px] text-zinc-700 font-mono rotate-90 tracking-widest">SCROLL_DOWN</span>
                <div className="w-px h-20 bg-zinc-800 mx-auto"></div>
            </div>


            {/* 4. MAIN CONTAINER (Wider Aperture) */}
            <div className="w-full max-w-[90%] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">

                {/* THE GRID: Spaced out 60% / 40% */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* === LEFT COLUMN: TEXT (Span 7) === */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-400 font-mono mb-8 tracking-widest">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                            SYSTEM: ONLINE
                        </div>

                        {/* Headline: Scaled for Wide Screen */}
                        <h1 className="text-5xl md:text-7xl 2xl:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                            <span className="text-white block">FUTURE</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-blue-500 block">
                                ARCHITECT
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light mb-12 border-l border-zinc-800 pl-6">
                            I design and build <span className="text-white font-medium">high-performance</span> digital infrastructure. Merging creative vision with engineering precision to define the next web.
                        </p>

                        {/* CTA Row */}
                        <div className="flex flex-col sm:flex-row items-center gap-8 w-full sm:w-auto">
                            <button className="group relative w-full sm:w-auto h-12 px-8 bg-white text-black rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
                                <span>Initialize Project</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>

                            {/* Divider Line */}
                            <div className="hidden sm:block h-8 w-px bg-zinc-700"></div>

                            {/* Socials */}
                            <div className="flex gap-6 w-full sm:w-auto justify-center sm:justify-start">
                                {[Github, Linkedin, Twitter].map((Icon, i) => (
                                    <Icon key={i} className="w-6 h-6 text-zinc-500 hover:text-white transition-colors cursor-pointer hover:scale-110 duration-200" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* === RIGHT COLUMN: TERMINAL (Span 5) === */}
                    <div className="lg:col-span-5 w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
                        <div className="relative w-full max-w-lg 2xl:max-w-xl">

                            {/* Glow Behind Terminal */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>

                            {/* Terminal Window */}
                            <div className="relative rounded-xl bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs md:text-sm">

                                {/* Terminal Header */}
                                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                    </div>
                                    <div className="text-[10px] text-zinc-500">zsh — 80x24</div>
                                </div>

                                {/* Terminal Body */}
                                <div className="p-6 space-y-4 min-h-[320px] text-zinc-300">

                                    {/* Command 1 */}
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-emerald-500">➜</span>
                                            <span className="text-blue-500">~</span>
                                            <span className="text-zinc-100">npm install portfolio-v2</span>
                                        </div>
                                        <div className="text-zinc-500 mt-2 pl-4 border-l-2 border-zinc-800">
                                            <p>added 142 packages in 452ms</p>
                                            <p>found <span className="text-emerald-500">0 vulnerabilities</span></p>
                                        </div>
                                    </div>

                                    {/* Command 2 */}
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-emerald-500">➜</span>
                                            <span className="text-blue-500">~</span>
                                            <span className="text-zinc-100">current_status</span>
                                        </div>
                                        <div className="text-emerald-400 mt-2 pl-4 border-l-2 border-zinc-800">
                                            [●] Available for work
                                        </div>
                                    </div>

                                    {/* Active Cursor */}
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-emerald-500">➜</span>
                                            <span className="text-blue-500">~</span>
                                            <span className="animate-pulse w-2.5 h-5 bg-zinc-500 block"></span>
                                        </div>
                                    </div>

                                </div>

                                {/* Terminal Footer */}
                                <div className="bg-[#121212] border-t border-white/5 px-3 py-1.5 flex justify-between items-center text-[10px] text-zinc-600 font-medium">
                                    <div className="flex gap-3">
                                        <span className="text-blue-500">NORMAL</span>
                                        <span>main*</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <span>utf-8</span>
                                        <span>typescript</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
