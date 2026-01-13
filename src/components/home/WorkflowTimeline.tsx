"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: "01",
        phase: "Discovery",
        title: "Requirement Analysis",
        desc: "I don't start coding until I understand the business goal. We define technical specs, user flows, and edge cases upfront.",
        icon: "Search"
    },
    {
        id: "02",
        phase: "Architecture",
        title: "System Design",
        desc: "Designing scalable schemas and API contracts. I treat infrastructure as code to ensure stability from Day 1.",
        icon: "Layout"
    },
    {
        id: "03",
        phase: "Development",
        title: "The Build",
        desc: "Type-safe code with rigorous testing. I work in short sprints with transparent progress updates.",
        icon: "Code"
    },
    {
        id: "04",
        phase: "Launch",
        title: "Deployment & Scale",
        desc: "Zero-downtime CI/CD pipelines. I handle the SSL, DNS, and server optimization so you don't have to.",
        icon: "Rocket"
    }
];

export function WorkflowTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);

    useGSAP(() => {
        if (!containerRef.current || !lineRef.current) return;

        // Animate the liquid line fill
        gsap.to(lineRef.current, {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
            }
        });

        // Activate steps as the line reaches them
        steps.forEach((step, index) => {
            ScrollTrigger.create({
                trigger: `#step-${index}`,
                start: "top 60%",
                end: "bottom 60%",
                onEnter: () => setActiveStep(index),
                onEnterBack: () => setActiveStep(index),
            });
        });
    }, { scope: containerRef });

    return (
        <section className="relative bg-[#050505] py-32">
            {/* === THE SEPARATOR LINE === */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                {/* Section Header */}
                <div className="mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Engineering Pipeline</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A systematic approach to building reliable software. Every project follows this proven workflow.
                    </p>
                </div>

                {/* Timeline Container */}
                <div ref={containerRef} className="relative pl-4 md:pl-0">
                    {/* The Static Track (Gray Laser Line) */}
                    <div className="absolute left-4 md:left-[3.5rem] top-0 w-[1px] h-full bg-neutral-800" />

                    {/* The Liquid Line (Animated Fill) */}
                    <div
                        ref={lineRef}
                        className="absolute left-4 md:left-[3.5rem] top-0 w-[2px] h-full bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-500 origin-top shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        style={{ transform: 'scaleY(0)' }}
                    />

                    {/* Timeline Steps */}
                    <div className="space-y-24">
                        {steps.map((step, index) => {
                            const isActive = index === activeStep; // Only current is fully active
                            const isPast = index < activeStep;

                            return (
                                <div
                                    key={step.id}
                                    id={`step-${index}`}
                                    className={`
                                        relative pl-16 md:pl-32 py-4 transition-all duration-700 ease-out
                                        ${isActive ? 'opacity-100 blur-0 scale-100' : 'opacity-30 blur-[1px] scale-95'}
                                    `}
                                >
                                    {/* The Node (The "Pulse") */}
                                    <div className="absolute left-4 md:left-[3.5rem] top-8 -translate-x-1/2 flex items-center justify-center">
                                        <div
                                            className={`
                                                rounded-full transition-all duration-500
                                                ${isActive || isPast
                                                    ? 'w-4 h-4 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]'
                                                    : 'w-3 h-3 border border-neutral-600 bg-black'
                                                }
                                            `}
                                        />
                                    </div>

                                    {/* The Content (Typography Hero) */}
                                    <div className="flex flex-col">
                                        <span className="font-mono text-xs text-cyan-500 mb-3 tracking-widest uppercase">
                                            {step.phase}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                            {step.title}
                                        </h3>
                                        <p className="text-neutral-400 leading-relaxed text-lg max-w-xl">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
