"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, Command, RefreshCw, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface CommandLog {
    type: "user" | "system" | "error" | "success";
    content: React.ReactNode;
}

export function TerminalHUD() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<CommandLog[]>([
        { type: "system", content: "Initializing portfolio kernel..." },
        { type: "system", content: "Loading interface... OK" },
        { type: "success", content: 'Welcome. Type "help" for available commands.' }
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        const newHistory = [...history, { type: "user" as const, content: cmd }];

        switch (trimmedCmd) {
            case "help":
                setHistory([
                    ...newHistory,
                    {
                        type: "system",
                        content: (
                            <div className="flex flex-col gap-1">
                                <span className="text-gray-400">Available commands:</span>
                                <span className="text-blue-400">projects</span> - View my work
                                <span className="text-blue-400">about</span> - Who am I?
                                <span className="text-blue-400">contact</span> - Get in touch
                                <span className="text-blue-400">clear</span> - Clear terminal
                            </div>
                        ),
                    },
                ]);
                break;
            case "projects":
                setHistory([...newHistory, { type: "success", content: "Navigating to /projects..." }]);
                setTimeout(() => router.push("/projects"), 800);
                break;
            case "about":
                setHistory([...newHistory, { type: "success", content: "Navigating to /about..." }]);
                setTimeout(() => router.push("/about"), 800);
                break;
            case "contact":
                setHistory([...newHistory, { type: "success", content: "Opening communication channels..." }]);
                setTimeout(() => router.push("/contact"), 800);
                break;
            case "clear":
                setHistory([]);
                break;
            default:
                setHistory([
                    ...newHistory,
                    { type: "error", content: `Command not found: ${cmd}. Type "help" for assistance.` },
                ]);
        }
        setInput("");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        handleCommand(input);
    };

    return (
        <div className="w-full h-full flex flex-col font-mono text-sm md:text-base">

            {/* Terminal Output */}
            <div ref={scrollRef} className="h-64 md:h-80 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
                {history.map((log, i) => (
                    <div key={i} className="leading-relaxed break-words">
                        {log.type === "user" && (
                            <div className="flex items-center gap-2 text-gray-400">
                                <span className="text-blue-500">➜</span>
                                <span className="text-white">{log.content}</span>
                            </div>
                        )}
                        {log.type === "system" && <div className="text-gray-400">{log.content}</div>}
                        {log.type === "success" && <div className="text-green-400">{log.content}</div>}
                        {log.type === "error" && <div className="text-red-400">{log.content}</div>}
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 bg-black/20 border-t border-white/5">
                <span className="text-blue-500 font-bold hidden sm:inline">visitor@portfolio:~$</span>
                <span className="text-blue-500 font-bold sm:hidden">➜</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-600 font-medium"
                    placeholder="Type command (e.g., 'help')"
                    autoFocus
                />
                <button type="submit" className="p-2 hover:bg-white/5 rounded-md transition-colors text-primary">
                    <Send className="w-4 h-4" />
                </button>
            </form>

            {/* Quick Actions (Mobile Friendly) */}
            <div className="flex gap-2 p-2 px-3 bg-white/2 border-t border-white/5 overflow-x-auto">
                {["projects", "about", "contact", "help"].map((cmd) => (
                    <button
                        key={cmd}
                        onClick={() => handleCommand(cmd)}
                        className="px-3 py-1 text-xs bg-white/5 hover:bg-white/10 border border-white/5 rounded text-gray-300 transition-all font-mono whitespace-nowrap"
                    >
                        {cmd}
                    </button>
                ))}
            </div>
        </div>
    );
}
