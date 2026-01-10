"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Zap, Send } from "lucide-react";
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
        <>
            {/* DESKTOP CAPSULE (The Razor Capsule) */}
            <div className="fixed top-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1 p-1 rounded-full bg-neutral-900/50 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20 z-[100]">
                {routes.map((route) => (
                    <ExpandableIcon
                        key={route.name}
                        route={route}
                        isActive={pathname === route.path}
                    />
                ))}
            </div>

            {/* MOBILE TAB BAR (Floating Bottom) */}
            <div className="fixed bottom-4 left-4 right-4 h-16 bg-[#050505]/90 backdrop-blur-xl border border-white/10 rounded-2xl md:hidden z-50 px-2 shadow-2xl">
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
        </>
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
