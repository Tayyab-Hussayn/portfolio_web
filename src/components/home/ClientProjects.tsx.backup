"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ClientProjects() {
    return (
        <section className="py-24 bg-primary text-white overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 w-fit backdrop-blur-sm border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                            <span className="text-xs font-semibold tracking-wider uppercase text-pink-300">Featured Case Study</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight">
                            ProjectFlow: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                                AI-Powered Recruitment
                            </span>
                        </h2>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            A high-performance SaaS platform that leverages advanced AI algorithms to match enterprises with pre-vetted development teams in record time.
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                            {["Real-time AI Matching", "Next.js 14 Integration", "Automated Vetting", "Stripe Payments"].map((item) => (
                                <li key={item} className="flex items-center gap-2 text-sm font-medium text-blue-100">
                                    <CheckCircle2 className="text-white" size={18} />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-4 pt-4">
                            <Button size="lg" className="bg-white text-[#2d1b4e] hover:bg-gray-100 font-semibold">
                                View Case Study
                            </Button>
                        </div>
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-pink-900/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                            <Image
                                src="/project_flow_interface.png"
                                alt="ProjectFlow Interface"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">98%</div>
                                <div>
                                    <div className="text-xs text-gray-500 font-semibold uppercase">Match Accuracy</div>
                                    <div className="text-sm font-bold text-gray-900">Top Rated AI Model</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
