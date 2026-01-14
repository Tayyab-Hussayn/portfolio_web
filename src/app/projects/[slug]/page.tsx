"use client";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Calendar, Layers, Cpu, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header"; // CRITICAL IMPORT
import { Footer } from "@/components/layout/Footer"; // CRITICAL IMPORT

// --- DYNAMIC DATA STORE ---
const projectData: Record<string, any> = {
    "fintech-core": {
        title: "FinTech Dashboard",
        tagline: "Processing 50k+ transactions with sub-millisecond latency.",
        role: "Lead Architect",
        timeline: "3 Months",
        stack: ["Next.js", "TypeScript", "D3.js", "WebSockets"],
        challenge: "Rendering 50,000 live data points froze the DOM.",
        solution: "Built a custom WebGL renderer with OffscreenCanvas web workers.",
        codeTitle: "OptimizedSocket.ts",
        code: `const socket = new WebSocket(process.env.WS_URL);
socket.onmessage = ({ data }) => {
  // Batch updates to sync with 120Hz refresh rate
  requestAnimationFrame(() => updateCanvas(data));
};`,
        stats: [
            { label: "Latency", value: "< 20ms" },
            { label: "Throughput", value: "50k TPS" }
        ]
    },
    "ecommerce-api": {
        title: "Headless E-Com API",
        tagline: "Omnichannel architecture serving Web, iOS, and Android.",
        role: "Backend Lead",
        timeline: "2 Months",
        stack: ["Node.js", "GraphQL", "Redis", "Docker"],
        challenge: "Handling Black Friday traffic spikes (10x load).",
        solution: "Implemented Redis styling and Read/Write splitting on Postgres.",
        codeTitle: "CacheMiddleware.ts",
        code: `async function checkCache(req, res, next) {
  const key = generateKey(req);
  const cached = await redis.get(key);
  if (cached) return res.json(JSON.parse(cached));
  next();
}`,
        stats: [
            { label: "Uptime", value: "99.99%" },
            { label: "Req/Sec", value: "12,000" }
        ]
    },
    // Add 'ai-content-generator' here matching the slug from Step 1
    "ai-content-generator": {
        title: "AI Content Engine",
        tagline: "Generative SaaS platform scaling to 10k users.",
        role: "Full Stack Dev",
        timeline: "2 Months",
        stack: ["React", "Python", "FastAPI", "Stripe"],
        challenge: "Managing state for streaming text responses across multiple concurrent user sessions.",
        solution: "Utilized Server-Sent Events (SSE) with a Redis Pub/Sub layer for real-time token tracking.",
        codeTitle: "StreamHandler.ts",
        code: `async function* streamResponse(prompt) {
  const stream = await openai.chat.completions.create({ stream: true, ... });
  for await (const chunk of stream) {
    yield chunk.choices[0]?.delta?.content || "";
  }
}`,
        stats: [
            { label: "Users", value: "10,000+" },
            { label: "Uptime", value: "99.9%" }
        ]
    }
};

const ProjectDetail = () => {
    const params = useParams();
    const slug = params?.slug as string;
    const project = projectData[slug] || projectData["fintech-core"]; // Fallback

    return (
        <>
            <Header /> {/* CRITICAL: The Navigation */}

            <main className="relative z-10 bg-[#050505] min-h-screen text-white mb-[50vh] md:mb-[100vh] shadow-2xl border-b border-white/10">

                {/* 1. CINEMATIC HERO */}
                <section className="relative min-h-[80vh] flex items-end pt-40 pb-20 px-6 overflow-hidden bg-[#050505]">
                    {/* Background Texture */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                    <div className="max-w-7xl mx-auto w-full relative z-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6 uppercase tracking-widest">
                                Case Study
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
                                {project.title}
                            </h1>
                            <p className="text-xl text-zinc-400 max-w-2xl border-l-2 border-blue-500 pl-6">
                                {project.tagline}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* 2. STICKY SPEC BAR */}
                <div className="sticky top-6 z-40 px-4 md:px-0">
                    <div className="max-w-7xl mx-auto bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1 flex items-center gap-2"><Layers className="w-3 h-3" /> Role</div>
                            <div className="font-mono text-sm">{project.role}</div>
                        </div>
                        <div>
                            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1 flex items-center gap-2"><Calendar className="w-3 h-3" /> Timeline</div>
                            <div className="font-mono text-sm">{project.timeline}</div>
                        </div>
                        <div className="col-span-2 md:col-span-2">
                            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1 flex items-center gap-2"><Cpu className="w-3 h-3" /> Tech Stack</div>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((t: string) => (
                                    <span key={t} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-300">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. CONTENT GRID */}
                <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Left: Narrative */}
                    <div className="space-y-16">
                        <section>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500">01.</span> The Challenge
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed">{project.challenge}</p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500">02.</span> The Solution
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed">{project.solution}</p>
                        </section>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 pt-8">
                            {project.stats.map((stat: any, i: number) => (
                                <div key={i} className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                                    <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                                    <div className="text-xs text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Code Visual */}
                    <div className="relative">
                        <div className="sticky top-40">
                            <div className="rounded-xl bg-[#080808] border border-white/10 overflow-hidden shadow-2xl">
                                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                    </div>
                                    <div className="text-xs text-zinc-500 font-mono">{project.codeTitle}</div>
                                </div>
                                <div className="p-6 overflow-x-auto">
                                    <pre className="font-mono text-sm text-blue-300 leading-relaxed">
                                        <code>{project.code}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
            <Footer /> {/* CRITICAL: The Footer */}
        </>
    );
};

export default ProjectDetail;
