"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";

const content = "In a world of digital noise, I build signals. I don't just write code; I engineer digital dominance. Your vision deserves more than a template—it deserves an architect.";

const Manifesto = () => {
    const container = useRef(null);

    // Track scroll progress relative to this section
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "end 0.5"], // Animation starts when top hits 90% of screen, ends at 50%
    });

    const words = content.split(" ");

    return (
        <section
            ref={container}
            className="min-h-[50vh] flex items-center justify-center bg-[#050505] py-32 px-6 relative z-10 overflow-hidden"
        >
            {/* 1. BACKGROUND GRID (The Texture) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* 2. MAIN CONTAINER (With Side Borders) */}
            <div className="max-w-4xl mx-auto relative z-20">
                {/* Architectural Side Lines */}
                <div className="absolute -left-12 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>
                <div className="absolute -right-12 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>

                <p className="flex flex-wrap text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                    {words.map((word, i) => {
                        // Calculate relative timing for each word
                        const start = i / words.length;
                        const end = start + (1 / words.length);

                        return (
                            <Word key={i} range={[start, end]} progress={scrollYProgress}>
                                {word}
                            </Word>
                        );
                    })}
                </p>
            </div>
        </section>
    );
};

interface WordProps {
    children: string;
    range: [number, number];
    progress: MotionValue<number>;
}

const Word = ({ children, range, progress }: WordProps) => {
    // Map scroll progress to opacity (0 to 1)
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span className="relative mr-2 lg:mr-3 mt-1.5">
            {/* 1. The Ghost Layer (Always visible, dark gray) */}
            <span className="absolute opacity-20 text-white select-none pointer-events-none">
                {children}
            </span>

            {/* 2. The Reveal Layer (Animates from invisible to white) */}
            <motion.span style={{ opacity }} className="text-white relative z-10">
                {children}
            </motion.span>
        </span>
    );
};

export default Manifesto;
