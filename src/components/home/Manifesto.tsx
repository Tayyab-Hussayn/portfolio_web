"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const content = "In a world of digital noise, I build signals. I don't just write code; I engineer digital dominance. Your vision deserves more than a template—it deserves an architect.";

const Manifesto = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.25"], // Adjusts when the effect starts/ends
    });

    const words = content.split(" ");

    return (
        <section
            ref={container}
            className="min-h-[50vh] flex items-center justify-center bg-[#050505] py-32 px-6 relative z-10"
        >
            <div className="max-w-5xl mx-auto">
                <p className="flex flex-wrap gap-x-4 gap-y-2 text-4xl md:text-6xl font-black leading-tight tracking-tight">
                    {words.map((word, i) => {
                        // Calculate start/end for each word based on its index
                        const start = i / words.length;
                        const end = start + 1 / words.length;

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

// Sub-component for individual word opacity
const Word = ({ children, range, progress }: any) => {
    const opacity = useTransform(progress, range, [0.1, 1]); // 0.1 is gray, 1 is white

    return (
        <motion.span style={{ opacity }} className="text-white transition-colors">
            {children}
        </motion.span>
    );
};

export default Manifesto;
