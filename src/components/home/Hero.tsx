"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { TerminalHUD } from "./TerminalHUD";
import { SpotlightGrid } from "@/components/ui/SpotlightGrid";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] py-20 pt-32 selection:bg-primary/30 selection:text-white">

            <SpotlightGrid />

            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10 w-full px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Typography & Info */}
                    <div className="flex flex-col items-start gap-8 text-left">

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

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight tracking-tighter text-white mix-blend-screen">
                                FUTURE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
                                    ARCHITECT
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed border-l-2 border-primary/50 pl-6"
                        >
                            I design and build high-performance digital infrastructure.
                            Merging creative vision with engineering precision to define the next web.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-wrap gap-5 mt-2"
                        >
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold px-8 h-14 text-base shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all" asChild>
                                <Link href="/projects">
                                    Initialize Project <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>

                            <div className="flex items-center gap-4 px-6 border-l border-white/10">
                                <Link href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                                    <Github className="w-6 h-6" />
                                </Link>
                                <Link href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                                    <Linkedin className="w-6 h-6" />
                                </Link>
                                <Link href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                                    <Twitter className="w-6 h-6" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Terminal HUD */}
                    <div className="relative w-full flex justify-center lg:justify-end">
                        {/* Decorative HUD Elements */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/0 rounded-full blur-[60px] pointer-events-none" />

                        <div className="absolute -z-10 w-[120%] h-[120%] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
                        <div className="absolute -z-10 w-[80%] h-[80%] border border-dashed border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

                        <TerminalHUD />
                    </div>
                </div>
            </Container>
        </section>
    );
}
