"use client";

import { motion } from "framer-motion";
import { Terminal, Copy, Check, FileCode2, GitBranch, X, Minus, Square } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CodeWindowProps {
    children: React.ReactNode;
    className?: string;
    fileName?: string;
}

export function CodeWindow({ children, className, fileName = "Hero.tsx" }: CodeWindowProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
                "relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#1e1e1e] backdrop-blur-sm",
                className
            )}
        >
            {/* Window Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-white/5">
                <div className="flex items-center gap-2">
                    <div className="flex gap-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
                    </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 bg-[#1e1e1e] rounded-t-lg text-xs font-medium text-gray-400 border-t border-x border-white/5">
                    <FileCode2 className="w-3.5 h-3.5 text-blue-400" />
                    {fileName}
                </div>

                <div className="flex items-center gap-3">
                    <div className="text-xs text-gray-500 hidden sm:block">krawin@portfolio: ~</div>
                </div>
            </div>

            {/* Editor Content */}
            <div className="relative flex min-h-[500px] md:min-h-[600px]">
                {/* Line Numbers */}
                <div className="hidden sm:flex flex-col items-end gap-1 p-4 pr-6 bg-[#1e1e1e] border-r border-white/5 text-gray-600 text-sm font-mono select-none">
                    {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className="leading-relaxed">
                            {i + 1}
                        </div>
                    ))}
                </div>

                {/* Code Content Area */}
                <div className="flex-1 p-6 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
                    {children}
                </div>
            </div>

            {/* Status Bar */}
            <div className="flex items-center justify-between px-4 py-1 bg-[#007acc] text-white text-[10px] sm:text-xs">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <GitBranch className="w-3 h-3" />
                        <span>main</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <X className="w-3 h-3" />
                        <span>0</span>
                        <div className="w-3 h-3 flex items-center justify-center">⚠</div>
                        <span>0</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span>Ln 15, Col 32</span>
                    <span>UTF-8</span>
                    <span>TypeScript JSX</span>
                    <span className="hidden sm:inline">Prettier</span>
                </div>
            </div>
        </motion.div>
    );
}
