"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["INITIALIZING", "LOADING ASSETS", "COMPILING CORE", "ESTABLISHING UPLINK", "SYSTEM READY"];

const Preloader = () => {
    const [index, setIndex] = useState(0);
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 200);
                    return 100;
                }
                // Non-linear speed (starts fast, slows down at the end)
                return prev + (prev < 80 ? 1 : 0.5);
            });
        }, 20);

        const wordInterval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 350);

        return () => {
            clearInterval(interval);
            clearInterval(wordInterval);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden"
                >
                    {/* 1. Background Grid (Texture) */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

                    {/* 2. Corner Brackets (HUD Look) */}
                    <div className="absolute top-0 left-0 p-10">
                        <div className="w-12 h-12 border-t-2 border-l-2 border-white/20"></div>
                    </div>
                    <div className="absolute top-0 right-0 p-10">
                        <div className="w-12 h-12 border-t-2 border-r-2 border-white/20"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-10">
                        <div className="w-12 h-12 border-b-2 border-l-2 border-white/20"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 p-10">
                        <div className="w-12 h-12 border-b-2 border-r-2 border-white/20"></div>
                    </div>

                    {/* 3. Center Counter */}
                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <h1 className="text-9xl font-black font-mono tracking-tighter text-white">
                            {Math.round(count)}%
                        </h1>
                        <div className="flex items-center gap-2 text-zinc-500 font-mono text-sm uppercase tracking-widest">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                            <span>{words[Math.min(index, words.length - 1)]}</span>
                        </div>
                    </div>

                    {/* 4. The Progress Bar (Visual Filler) */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-800">
                        <motion.div
                            className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
                            initial={{ width: "0%" }}
                            animate={{ width: `${count}%` }}
                            transition={{ ease: "linear" }}
                        />
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
