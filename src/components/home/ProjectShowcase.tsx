"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: "01",
        title: "FinTech Dashboard Core",
        category: "System Architecture",
        description: "A high-performance financial analytics engine processing 50k+ transactions per second. Built with real-time WebSockets and optimized SQL queries.",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "D3.js"],
        image: "/projects/fintech-screen.png",
        accent_color: "#3B82F6" // Blue glow
    },
    {
        id: "02",
        title: "E-Commerce Headless API",
        category: "Backend Engineering",
        description: "A scalable headless architecture serving 3 platforms (Web, iOS, Android). Features Redis caching and Stripe integration with zero downtime.",
        stack: ["Node.js", "GraphQL", "Redis", "Docker"],
        image: "/projects/backend-diagram.png",
        accent_color: "#10B981" // Green glow
    },
    {
        id: "03",
        title: "AI Content Generator",
        category: "Full Stack AI",
        description: "SaaS platform leveraging OpenAI API. Features stream-based responses, credit systems, and multi-tenant authentication.",
        stack: ["React", "Python", "FastAPI", "Stripe"],
        image: "/projects/ai-ui.png",
        accent_color: "#8B5CF6" // Purple glow
    }
];

export function ProjectShowcase() {
    const [activeProject, setActiveProject] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        projects.forEach((project, index) => {
            ScrollTrigger.create({
                trigger: `#project-content-${index}`,
                start: 'top 60%',
                end: 'bottom 60%',
                onEnter: () => setActiveProject(index),
                onEnterBack: () => setActiveProject(index),
            });
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative bg-[#050505] py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-20">

                    {/* LEFT COLUMN: VISUALS (Sticky) */}
                    <div className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#1e1e1e]" style={{ boxShadow: `0 25px 50px -12px ${projects[activeProject].accent_color}40` }}>
                            {/* Back Glow (Levitation) */}
                            <div
                                className="absolute -inset-4 opacity-20 blur-2xl -z-10 rounded-full transition-colors duration-700"
                                style={{
                                    background: `linear-gradient(to right, ${projects[activeProject].accent_color}, ${projects[activeProject].accent_color})`
                                }}
                            />

                            {/* Ambient Glow based on active project */}
                            <div
                                className="absolute inset-0 opacity-20 blur-3xl transition-colors duration-700"
                                style={{ backgroundColor: projects[activeProject].accent_color }}
                            />

                            {/* Images */}
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={cn(
                                        "absolute inset-0 w-full h-full transition-all duration-700 ease-in-out",
                                        index === activeProject ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                    )}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                    {/* Glass Overlay/Reflection */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: NARRATIVE (Scroll) */}
                    <div className="w-full md:w-1/2 flex flex-col pb-[20vh]">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                id={`project-content-${index}`}
                                className="min-h-screen flex flex-col justify-center gap-8 relative overflow-visible"
                            >
                                {/* Mobile Image Fallback */}
                                <div className="md:hidden w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 mb-8 relative">
                                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                                </div>

                                <div className="relative overflow-visible">
                                    {/* Massive Background Number for Depth */}
                                    <div
                                        className="absolute -top-20 -left-10 text-[12rem] md:text-[15rem] leading-none font-black select-none pointer-events-none text-white/8 z-0"
                                        aria-hidden="true"
                                    >
                                        {project.id}
                                    </div>

                                    <div className="relative z-10">
                                        <span className="text-sm font-mono text-primary uppercase tracking-wider mb-2 block" style={{ color: project.accent_color }}>
                                            {project.category}
                                        </span>
                                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                            {project.title}
                                        </h2>
                                        <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 mb-8">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:bg-white/10 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 text-white font-medium group w-fit cursor-pointer"
                                >
                                    <span className="border-b border-white/30 pb-1 group-hover:border-white transition-colors">View Case Study</span>
                                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
