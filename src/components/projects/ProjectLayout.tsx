"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Calendar, Layers } from "lucide-react";

// Mock Data (Replace with props later)
const project = {
    title: "FinTech Dashboard Core",
    desc: "A high-performance analytics engine processing 50k+ transactions.",
    image: "/your-project-image.png", // Use a placeholder
    role: "Lead Architect",
    timeline: "3 Months",
    stack: ["Next.js", "TypeScript", "D3.js"],
    liveUrl: "#",
    repoUrl: "#"
};

const ProjectLayout = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Parallax effect

    return (
        <div className="bg-[#050505] min-h-screen text-white pb-32">

            {/* 1. CINEMATIC HERO */}
            <div ref={container} className="relative h-[80vh] overflow-hidden flex items-end pb-20 px-6">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    {/* Placeholder for Project Image */}
                    <div className="w-full h-full bg-gradient-to-b from-blue-900/20 to-black/90 bg-cover bg-center" style={{ backgroundImage: `url('/grid-pattern.png')` }}>
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                </motion.div>

                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">{project.title}</h1>
                    <p className="text-xl text-zinc-400 max-w-2xl">{project.desc}</p>
                </div>
            </div>

            {/* 2. THE SPEC SHEET (Sticky Bar) */}
            <div className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-md border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1 flex items-center gap-2"><Layers className="w-3 h-3" /> Role</div>
                        <div className="font-mono text-sm">{project.role}</div>
                    </div>
                    <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1 flex items-center gap-2"><Calendar className="w-3 h-3" /> Timeline</div>
                        <div className="font-mono text-sm">{project.timeline}</div>
                    </div>
                    <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Stack</div>
                        <div className="font-mono text-sm">{project.stack.join(" • ")}</div>
                    </div>
                    <div className="flex items-center gap-4 justify-end">
                        <a href={project.liveUrl} className="flex items-center gap-2 text-sm font-bold hover:text-blue-400 transition-colors">
                            Live Demo <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            {/* 3. THE BLUEPRINT (Content) */}
            <div className="max-w-4xl mx-auto px-6 py-32 space-y-32">

                {/* The Problem */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
                    <h2 className="text-3xl font-bold text-zinc-500">The Challenge</h2>
                    <div className="text-lg text-zinc-300 leading-relaxed">
                        <p>
                            Real-time financial data is heavy. The client needed to visualize 50,000+ data points without lagging the browser.
                            Traditional charting libraries were crashing the DOM. We needed a custom WebGL solution.
                        </p>
                    </div>
                </div>

                {/* The Code Reveal (Technical Proof) */}
                <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
                    <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-4 text-xs text-zinc-500 font-mono">useWebSocket.ts</span>
                    </div>
                    <div className="p-6 font-mono text-xs md:text-sm text-blue-300 leading-relaxed overflow-x-auto">
                        {`const socket = new WebSocket(process.env.WS_URL);
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  // Batch processing to prevent UI blocking
  requestAnimationFrame(() => updateChart(data));
};`}
                    </div>
                </div>

                {/* The Result */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
                    <h2 className="text-3xl font-bold text-zinc-500">The Result</h2>
                    <div className="space-y-6">
                        <p className="text-lg text-zinc-300 leading-relaxed">
                            By switching to a custom D3.js + Canvas layer, we reduced render time by 90%.
                            The dashboard now handles high-frequency trading data with zero stutter.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                                <div className="text-4xl font-black text-white mb-2">90%</div>
                                <div className="text-xs text-zinc-500 uppercase">Latency Reduction</div>
                            </div>
                            <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                                <div className="text-4xl font-black text-white mb-2">50k+</div>
                                <div className="text-xs text-zinc-500 uppercase">Points Rendered</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Next Project CTA */}
            <div className="border-t border-white/10 pt-32 text-center">
                <h3 className="text-zinc-500 text-sm uppercase tracking-widest mb-4">Next Case Study</h3>
                <h2 className="text-5xl md:text-7xl font-black text-white hover:text-blue-500 transition-colors cursor-pointer">
                    AI Content Engine
                </h2>
            </div>

        </div>
    );
};

export default ProjectLayout;
