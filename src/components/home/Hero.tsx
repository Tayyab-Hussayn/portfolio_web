"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { TerminalHUD } from "./TerminalHUD";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] py-20 pt-32 selection:bg-primary/30 selection:text-white perspective-1000">

            {/* 1. BACKGROUND LAYER: DEPTH GRID */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Ambient background glow (Preserved) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10 w-full px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* 2. LEFT COLUMN: TYPOGRAPHY & INFO */}
                    <div className="flex flex-col items-start gap-8 text-left">

                        {/* System Online Badge (Preserved) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium text-gray-300 tracking-wide">SYSTEM: ONLINE</span>
                        </motion.div>

                        {/* A. The "Architect" Text (Blueprint Style) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
                                <span className="text-white block">FUTURE</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 text-stroke-2 text-stroke-white opacity-40 hover:opacity-100 transition-opacity duration-500 block">
                                    ARCHITECT
                                </span>
                            </h1>
                        </motion.div>

                        {/* C. The Description & Socials */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-400 font-mono max-w-xl leading-relaxed"
                        >
                            I design and build high-performance digital infrastructure.
                            Merging creative vision with engineering precision to define the next web.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex items-center gap-6 mt-2"
                        >
                            <Link href="/projects">
                                <button className="h-12 px-8 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                                    Initialize Project
                                </button>
                            </Link>

                            {/* Socials - Dimmed until hover */}
                            <div className="flex gap-4 text-gray-500">
                                <Link href="#" className="hover:text-white transition-colors cursor-pointer">
                                    <Github className="w-6 h-6" />
                                </Link>
                                <Link href="#" className="hover:text-white transition-colors cursor-pointer">
                                    <Linkedin className="w-6 h-6" />
                                </Link>
                                <Link href="#" className="hover:text-white transition-colors cursor-pointer">
                                    <Twitter className="w-6 h-6" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* 3. RIGHT COLUMN: 3D TERMINAL (THE HOLOGRAM) */}
                    <div className="relative w-full flex justify-center lg:justify-end perspective-1000">
                        {/* B. The 3D Terminal */}
                        <motion.div
                            initial={{ opacity: 0, rotateY: -30, x: 100 }}
                            animate={{ opacity: 1, rotateY: -12, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative z-10 w-full max-w-lg bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-4 transform perspective-1000"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Glossy reflection overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-xl" />

                            <TerminalHUD />
                        </motion.div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
