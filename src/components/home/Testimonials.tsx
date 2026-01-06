"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
    { id: 1, name: "Sarah J.", role: "CTO, TechFlow", img: "https://i.pravatar.cc/150?u=1", text: "Incredible attention to detail and performance." },
    { id: 2, name: "Michael C.", role: "Founder, StartUp", img: "https://i.pravatar.cc/150?u=2", text: "Delivered ahead of schedule and beyond expectations." },
    { id: 3, name: "Emily R.", role: "Product Mgr", img: "https://i.pravatar.cc/150?u=3", text: "The best developer we've worked with." },
    { id: 4, name: "David K.", role: "Director", img: "https://i.pravatar.cc/150?u=4", text: "Transformed our digital presence completely." },
    { id: 5, name: "Lisa M.", role: "Marketing VP", img: "https://i.pravatar.cc/150?u=5", text: "A true partner in our growth strategy." },
    { id: 6, name: "James L.", role: "CEO", img: "https://i.pravatar.cc/150?u=6", text: "World-class code quality and communication." },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container>
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4"
                    >
                        Client Success Stories
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-6"
                    >
                        Trusted by leaders <br />
                        <span className="text-gray-400">from various industries</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
                    >
                        Learn why businesses trust our web development solutions to build powerful digital experiences.
                    </motion.p>
                </div>

                {/* Scattered/Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${idx % 2 === 1 ? 'md:translate-y-12' : ''}`}
                        >
                            <Quote className="text-primary/20 mb-4" size={40} />
                            <p className="text-gray-800 font-medium text-lg leading-relaxed mb-6">
                                "{item.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                        unoptimized // using external url
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                                    <p className="text-sm text-gray-500">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <Button size="lg" className="rounded-full px-8 gap-2 group">
                        Read Success Stories <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

            </Container>
        </section>
    );
}
