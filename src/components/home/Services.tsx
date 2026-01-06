"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Zap, Wallet, LifeBuoy, MonitorSmartphone } from "lucide-react";

const features = [
    {
        id: 1,
        icon: MonitorSmartphone,
        title: "Modern tech stack for future-proof applications",
        desc: "Build with React, Next.js, and cutting-edge frameworks. We architect scalable solutions designed for performance, SEO, and long-term growth.",
        gradient: "from-blue-500 to-purple-500"
    },
    {
        id: 2,
        icon: Wallet,
        title: "Transparent pricing and grow within budget",
        desc: "Fixed-price projects with no hidden costs. Get detailed breakdowns, milestone-based payments, and predictable timelines that respect your budget.",
        gradient: "from-green-400 to-cyan-500"
    },
    {
        id: 3,
        icon: LifeBuoy,
        title: "Ongoing support from dedicated developers",
        desc: "Get 24/7 maintenance, real-time updates, and priority bug fixes. Our dedicated support team ensures your website runs smoothly long after launch.",
        gradient: "from-pink-500 to-rose-500"
    },
    {
        id: 4,
        icon: Zap,
        title: "Blazing-fast performance for better conversion",
        desc: "Sub-second load times, 99.9% uptime, and mobile-first responsive design. We optimize every pixel to deliver exceptional user experiences.",
        gradient: "from-amber-400 to-orange-500"
    }
];

export function Services() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container>
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-heading leading-tight mb-8"
                    >
                        Lightning-fast development, pixel-perfect execution, seamless delivery.
                    </motion.h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="flex flex-col gap-24">
                    {features.map((feature, idx) => (
                        <div
                            key={feature.id}
                            className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Illustration Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex-1 w-full"
                            >
                                <div className={`aspect-square md:aspect-[4/3] rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-10 flex items-center justify-center relative overflow-hidden group`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 blur-3xl`} />
                                    <feature.icon size={120} className={`text-gray-900 opacity-20 group-hover:scale-110 transition-transform duration-500`} />
                                </div>
                            </motion.div>

                            {/* Content Side */}
                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex-1"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}>
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="text-3xl font-bold font-heading mb-4 text-gray-900">{feature.title}</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
