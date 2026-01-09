"use client";

import React, { useRef, useState } from "react";
import { Search, Layout, Code, Rocket } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
    Search,
    Layout,
    Code,
    Rocket
};

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
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                {/* Section Header */}
                <div className="mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Engineering Pipeline</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A systematic approach to building reliable software. Every project follows this proven workflow.
                    </p>
                </div>

                {/* Timeline Container */}
                <div ref={containerRef} className="relative">
                    {/* The Static Track (Gray Line) */}
                    <div className="absolute left-8 md:left-12 top-0 w-0.5 h-full bg-neutral-800" />

                    {/* The Liquid Line (Animated Fill) */}
                    <div
                        ref={lineRef}
                        className="absolute left-8 md:left-12 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 origin-top"
                        style={{ transform: 'scaleY(0)' }}
                    />

                    {/* Timeline Steps */}
                    <div className="space-y-16 md:space-y-24">
                        {steps.map((step, index) => {
                            const Icon = iconMap[step.icon as keyof typeof iconMap];
                            const isActive = index <= activeStep;

                            return (
                                <div
                                    key={step.id}
                                    id={`step-${index}`}
                                    className="relative flex items-start gap-6 md:gap-12"
                                >
                                    {/* Icon Node */}
                                    <div className="relative flex-shrink-0">
                                        <div
                                            className={`
                                                w-16 h-16 rounded-full flex items-center justify-center
                                                border-2 transition-all duration-500
                                                ${isActive
                                                    ? 'bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/50'
                                                    : 'bg-neutral-900 border-neutral-700'
                                                }
                                            `}
                                        >
                                            <Icon
                                                className={`w-7 h-7 transition-colors duration-500 ${isActive ? 'text-white' : 'text-neutral-500'
                                                    }`}
                                            />
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div
                                        className={`
                                            flex-1 pb-8 pl-6 border-l-2 transition-all duration-500
                                            ${isActive
                                                ? 'border-blue-500 bg-white/5 rounded-r-lg pr-6 -ml-px'
                                                : 'border-transparent'
                                            }
                                        `}
                                    >
                                        {/* Phase Label */}
                                        <span className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2 block">
                                            {step.phase}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 leading-relaxed">
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
