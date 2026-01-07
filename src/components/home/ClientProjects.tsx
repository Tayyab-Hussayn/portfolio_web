"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ExternalLink, Github, Calendar, Users, Zap } from "lucide-react";

const projectStats = [
    { icon: Users, label: "Active Users", value: "50K+", color: "text-blue-400" },
    { icon: Zap, label: "Performance", value: "98%", color: "text-green-400" },
    { icon: Calendar, label: "Timeline", value: "3 Months", color: "text-purple-400" }
];

const techStack = ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Stripe API"];

export function ClientProjects() {
    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,182,193,0.1),transparent_50%)] pointer-events-none" />

            <Container className="relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#453478]/10 to-purple-500/10 border border-[#453478]/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#453478] animate-pulse" />
                        <span className="text-sm font-semibold text-[#453478]">Featured Case Study</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-4">
                        Client Success Stories
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Transforming ideas into powerful digital solutions that drive real business results
                    </p>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
                    
                    {/* Main Project Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 group"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* Project Info */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-[#453478] transition-colors">
                                        ProjectFlow
                                    </h3>
                                    <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#453478] to-purple-600 font-semibold">
                                        AI-Powered Recruitment Platform
                                    </p>
                                </div>

                                <p className="text-gray-600 leading-relaxed">
                                    A high-performance SaaS platform leveraging advanced AI algorithms to match enterprises with pre-vetted development teams in record time.
                                </p>

                                {/* Tech Stack Pills */}
                                <div className="flex flex-wrap gap-2">
                                    {techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-[#453478] hover:text-white transition-colors cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-2">
                                    <Button className="bg-[#453478] hover:bg-[#453478]/90 text-white">
                                        <ExternalLink size={16} className="mr-2" />
                                        Live Demo
                                    </Button>
                                    <Button variant="outline" className="border-gray-300 hover:border-[#453478] hover:text-[#453478]">
                                        <Github size={16} className="mr-2" />
                                        View Code
                                    </Button>
                                </div>
                            </div>

                            {/* Project Image */}
                            <div className="relative group/image">
                                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#453478]/20 to-purple-500/20 opacity-0 group-hover/image:opacity-100 transition-opacity z-10" />
                                    <Image
                                        src="/project_flow_interface.png"
                                        alt="ProjectFlow Interface"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover/image:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Cards */}
                    <div className="lg:col-span-4 space-y-6">
                        {projectStats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group/stat"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover/stat:scale-110 transition-transform ${stat.color}`}>
                                        <stat.icon size={24} />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Features Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-6 bg-gradient-to-br from-[#453478] to-purple-600 rounded-3xl p-8 text-white shadow-xl"
                    >
                        <h4 className="text-2xl font-bold mb-6">Key Features</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["Real-time AI Matching", "Automated Vetting System", "Integrated Payments", "Performance Analytics"].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                                    <CheckCircle2 size={18} className="text-green-300 flex-shrink-0" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Results Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-6 bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl"
                    >
                        <h4 className="text-2xl font-bold text-gray-900 mb-6">Project Impact</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-200">
                                <span className="text-gray-700 font-medium">Hiring Time Reduced</span>
                                <span className="text-2xl font-bold text-green-600">75%</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                                <span className="text-gray-700 font-medium">Match Accuracy</span>
                                <span className="text-2xl font-bold text-blue-600">98%</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                                <span className="text-gray-700 font-medium">Client Satisfaction</span>
                                <span className="text-2xl font-bold text-purple-600">4.9/5</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Button size="lg" className="bg-[#453478] hover:bg-[#453478]/90 text-white px-8">
                        View All Projects
                        <ArrowRight size={18} className="ml-2" />
                    </Button>
                </motion.div>
            </Container>
        </section>
    );
}
