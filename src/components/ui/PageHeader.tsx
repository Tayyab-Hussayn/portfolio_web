"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    gradient?: "purple" | "blue" | "pink";
}

export function PageHeader({ title, subtitle, gradient = "purple" }: PageHeaderProps) {
    const gradients = {
        purple: "from-[#453478] to-[#6c5ce7]",
        blue: "from-blue-600 to-cyan-500",
        pink: "from-pink-600 to-rose-500",
    };

    return (
        <div className={`relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br ${gradients[gradient]}`}>
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <Container className="relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 drop-shadow-md"
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </Container>
        </div>
    );
}
