"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CodeWindow } from "./CodeWindow";
import { useTypewriter } from "@/hooks/useTypewriter";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

export function Hero() {
    const typewriterText = useTypewriter({
        words: [
            "Building Digital Excellence",
            "Engineering Scalable Solutions",
            "Crafting Modern web Experiences",
            "Solving Complex Problems"
        ],
        typingSpeed: 100,
        deletingSpeed: 50,
        pauseTime: 2000,
    });

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a] py-20 pt-32">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0a0a0a] to-[#000000]" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-30" />

            <Container className="relative z-10 w-full px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Introduction & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-start gap-6 text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Available for hire
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-tight tracking-tight text-white">
                            I Am A <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Full-Stack
                            </span> <br />
                            Developer.
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                            Transforming complex challenges into elegant, high-performance web applications. I build the systems that power modern businesses.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-4">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-14 text-base" asChild>
                                <Link href="/projects">
                                    View Projects <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 hover:bg-white/5 text-white" asChild>
                                <Link href="/contact">
                                    <Mail className="mr-2 w-4 h-4" /> Contact Me
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Code Window Simulation */}
                    <div className="relative perspective-[2000px]">
                        {/* Floating Elements (Background decorations behind window) */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-xl border border-blue-500/20 backdrop-blur-md z-0 rotate-12"
                        />
                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full border border-purple-500/20 backdrop-blur-md z-0"
                        />

                        <CodeWindow className="z-10 relative">
                            <div className="text-gray-300 font-mono text-sm md:text-base selection:bg-blue-500/30">
                                <span className="text-pink-500">import</span> <span className="text-blue-400">{"{"}</span> <span className="text-yellow-400">Passion</span><span className="text-gray-400">,</span> <span className="text-yellow-400">Skill</span> <span className="text-blue-400">{"}"}</span> <span className="text-pink-500">from</span> <span className="text-green-400">"developer-life"</span><span className="text-gray-400">;</span>
                                <br /><br />

                                <span className="text-pink-500">const</span> <span className="text-blue-400">Portfolio</span> <span className="text-pink-500">=</span> <span className="text-yellow-400">()</span> <span className="text-pink-500">={">"}</span> <span className="text-yellow-400">{"{"}</span>
                                <br />
                                &nbsp;&nbsp;<span className="text-pink-500">const</span> <span className="text-blue-400">currentFocus</span> <span className="text-pink-500">=</span> <span className="text-yellow-400">{"{"}</span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">mission:</span> <span className="text-green-400">"Evaluate. optimize. Deploy."</span><span className="text-gray-400">,</span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">stack:</span> <span className="text-blue-400">[</span>
                                <span className="text-green-400">"Next.js"</span><span className="text-gray-400">,</span> <span className="text-green-400">"React"</span><span className="text-gray-400">,</span> <span className="text-green-400">"TypeScript"</span>
                                <span className="text-blue-400">]</span>
                                <br />
                                &nbsp;&nbsp;<span className="text-yellow-400">{"}"}</span><span className="text-gray-400">;</span>
                                <br /><br />

                                &nbsp;&nbsp;<span className="text-pink-500">return</span> <span className="text-blue-400">(</span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">{"<"}</span><span className="text-green-400">HeroSection</span><span className="text-gray-500">{">"}</span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">{"<"}</span><span className="text-green-400">Heading</span><span className="text-gray-500">{">"}</span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white border-r-2 border-primary animate-pulse pr-1">
                                    {typewriterText}
                                </span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">{"</"}</span><span className="text-green-400">Heading</span><span className="text-gray-500">{">"}</span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">{"<"}</span><span className="text-green-400">Button</span> <span className="text-blue-300">onClick</span><span className="text-pink-500">=</span><span className="text-blue-400">{"{"}</span><span className="text-yellow-400">exploreWork</span><span className="text-blue-400">{"}"}</span><span className="text-gray-500">{" />"}</span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">{"</"}</span><span className="text-green-400">HeroSection</span><span className="text-gray-500">{">"}</span>
                                <br />
                                &nbsp;&nbsp;<span className="text-blue-400">)</span><span className="text-gray-400">;</span>
                                <br />
                                <span className="text-yellow-400">{"}"}</span><span className="text-gray-400">;</span>
                            </div>
                        </CodeWindow>
                    </div>
                </div>
            </Container>
        </section>
    );
}
