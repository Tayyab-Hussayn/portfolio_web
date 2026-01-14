"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Zap, Send, MoveRight } from "lucide-react";
import { useState } from "react";

export function Header() {
    const pathname = usePathname();

    const routes = [
        { name: "Home", path: "/", icon: Home },
        { name: "About", path: "/about", icon: User },
        { name: "Work", path: "/projects", icon: Briefcase },
        { name: "Services", path: "/services", icon: Zap },
        { name: "Contact", path: "/contact", icon: Send },
    ];

    return (
        <header className="pointer-events-none fixed top-0 left-0 w-full h-24 z-[50] mix-blend-difference md:mix-blend-normal">
            {/* 
               NOTE: We use 'pointer-events-none' on the container so clicks pass through 
               to the hero section, but re-enable pointer-events on the actual buttons.
            */}

            {/* 1. LEFT ANCHOR: IDENTITY */}
            <div className="pointer-events-auto fixed top-6 left-6 z-50 hidden md:flex items-center gap-3">
                {/* Logo Circle: Brighter & slightly larger border */}
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-inner">
                    <span className="font-bold text-white font-mono text-sm">JD</span>
                </div>

                {/* Text: Uppercase & Tracking for 'System' vibe */}
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-white tracking-wider uppercase">John Doe</span>
                    <span className="text-[10px] text-zinc-400 font-mono leading-none mt-0.5">FULL STACK DEV</span>
                </div>
            </div>

            {/* 2. CENTER ANCHOR: THE CAPSULE (Existing logic wrapped) */}
            <div className="pointer-events-auto fixed top-6 left-1/2 -translate-x-1/2 z-[100] hidden md:block">
                <div className="flex items-center gap-1 p-1 rounded-full bg-neutral-900/50 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20">
                    {routes.map((route) => (
                        <ExpandableIcon
                            key={route.name}
                            route={route}
                            isActive={pathname === route.path}
                        />
                    ))}
                </div>
            </div>

            {/* 3. RIGHT ANCHOR: CTA BUTTON */}
            <div className="pointer-events-auto fixed top-6 right-6 z-50 hidden md:block">
                <a
                    href="#contact"
                    // Changes: h-10 (Height match), Text-sm (Font match), Shadow-lg (Depth)
                    className="group flex items-center gap-2 h-10 px-6 bg-white text-black rounded-full font-semibold text-sm transition-all duration-300 hover:bg-zinc-200 hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                    <span>Let&apos;s Talk</span>
                    {/* Arrow: Stays simple */}
                    <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
            </div>

            {/* MOBILE HEADER (Simple Top Bar for Mobile) */}
            <div className="pointer-events-auto fixed top-4 left-4 right-4 z-50 flex md:hidden justify-between items-center">
                {/* Simple Logo for Mobile */}
                <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
                    <span className="font-bold text-xs text-white">JD</span>
                </div>
                {/* Mobile Menu Trigger could go here if needed, or rely on Bottom Bar */}
            </div>

            {/* MOBILE TAB BAR (Floating Bottom) - Preserved */}
            <div className="pointer-events-auto fixed bottom-4 left-4 right-4 h-16 bg-[#050505]/90 backdrop-blur-xl border border-white/10 rounded-2xl md:hidden z-50 px-2 shadow-2xl">
                <div className="flex justify-between items-center h-full px-2">
                    {routes.map((route) => {
                        const isActive = pathname === route.path;
                        return (
                            <Link
                                key={route.name}
                                href={route.path}
                                className="relative flex flex-col items-center justify-center w-12 h-12"
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="mobile-active-pill"
                                        className="absolute inset-0 bg-blue-500/10 rounded-xl"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <route.icon
                                    className={`w-6 h-6 z-10 transition-colors duration-300 ${isActive ? "text-blue-500" : "text-gray-500"
                                        }`}
                                />
                                {isActive && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -bottom-1 w-1 h-1 bg-blue-500 rounded-full"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}

// Helper Component for Expandable Desktop Icons
function ExpandableIcon({ route, isActive }: { route: any, isActive: boolean }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={route.path}>
            <motion.div
                className={`relative flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${isActive ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                layout
            >
                {/* 1. Icon (Smaller & Sharper) */}
                <route.icon strokeWidth={1.5} className="w-4 h-4 md:w-5 md:h-5 z-10 relative" />

                {/* 2. Text Label (Tight & Clean) */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.span
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            className="overflow-hidden whitespace-nowrap text-sm font-medium z-10 relative"
                        >
                            {route.name}
                        </motion.span>
                    )}
                </AnimatePresence>

                {/* 3. Active Dot (Absolute Positioned - DOES NOT AFFECT HEIGHT) */}
                {isActive && (
                    <motion.div
                        layoutId="active-nav-indicator"
                        className="absolute bottom-1 w-1 h-1 bg-white rounded-full"
                    />
                )}
            </motion.div>
        </Link>
    );
}
