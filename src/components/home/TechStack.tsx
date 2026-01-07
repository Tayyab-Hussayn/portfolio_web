"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import {
    Globe
} from "lucide-react";
import React from "react";
import Image from "next/image";

const technologies = [
    { 
        icon: "https://cdn-icons-png.flaticon.com/512/3393/3393920.png", 
        title: "React Ecosystem", 
        desc: "Next.js, RSC, Server Actions" 
    },
    { 
        icon: "https://cdn-icons-png.flaticon.com/512/15484/15484278.png", 
        title: "Vue.js", 
        desc: "Alternative component framework" 
    },
    { 
        icon: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg", 
        title: "Tailwind CSS", 
        desc: "Utility-first CSS framework" 
    },
    { 
        icon: "https://cdn-icons-png.flaticon.com/512/15484/15484303.png", 
        title: "Node.js", 
        desc: "JavaScript runtime environment" 
    },
    { 
        icon: "https://expressjs.com/images/brand/logo-dark.svg", 
        title: "Express.js", 
        desc: "Web framework for Node.js" 
    },
    { 
        icon: "https://cdn-icons-png.flaticon.com/512/1822/1822920.png", 
        title: "Python", 
        desc: "High-level programming language" 
    },
    { 
        icon: "https://cdn-icons-png.flaticon.com/512/2906/2906206.png", 
        title: "Database & Storage", _desc: "Firestore, Postgres" 
    },
    { 
        icon: "https://cdn-icons-png.flaticon.com/512/17034/17034231.png", 
        title: "API & Integration", 
        desc: "REST, GraphQL" 
    }
];

const MotionDiv = motion.div;

export function TechStack() {
    const radius = 300;
    const iconSize = 80;

    return (
        <section className="py-24 sm:py-32 bg-background overflow-hidden">
            <Container>
                <div className="text-center mb-16 sm:mb-24 max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold font-heading mb-4 text-gray-900"
                    >
                        Our Technology Stack
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        We leverage a powerful and modern stack to build robust, scalable, and beautiful applications.
                    </motion.p>
                </div>

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative flex items-center justify-center min-h-[600px]"
                >
                    {/* Concentric Circles */}
                    <motion.div
                        variants={{
                            initial: { scale: 0, opacity: 0 },
                            animate: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        className="absolute border border-gray-500/30 rounded-full"
                        style={{
                            width: `${radius * 2}px`,
                            height: `${radius * 2}px`,
                            left: `calc(50% + ${-radius - (iconSize / 6)}px)`,
                            top: `calc(50% + ${-radius - (iconSize / 6)}px)`
                        }}
                    />
                    <motion.div
                        variants={{
                            initial: { scale: 0, opacity: 0 },
                            animate: { scale: 1, opacity: 1, transition: { delay: 0.2, duration: 0.8, ease: "easeOut" } }
                        }}
                        className="absolute w-[400px] h-[400px] border border-gray-500/30 rounded-full"
                    />
                     <motion.div
                        variants={{
                            initial: { scale: 0, opacity: 0 },
                            animate: { scale: 1, opacity: 1, transition: { delay: 0.4, duration: 0.8, ease: "easeOut" } }
                        }}
                        className="absolute w-[200px] h-[200px] border border-gray-300/10 rounded-full"
                    />

                    {/* Central Element */}
                    <motion.div
                        variants={{
                            initial: { scale: 0.5, opacity: 0 },
                            animate: { scale: 1, opacity: 1, transition: { delay: 0.5, duration: 0.5 } }
                        }}
                        className="relative z-10 flex flex-col items-center justify-center bg-background p-4 rounded-full"
                    >
                        <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center border-8 border-background">
                            <Globe size={56} className="text-primary" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-bold text-lg mt-4 text-gray-900">Full-Stack</h3>
                        <p className="text-sm text-gray-500">Expertise</p>
                    </motion.div>

                    {/* Tech Icons */}
                    {technologies.map((tech, index) => {
                        const angle = (index / technologies.length) * 2 * Math.PI;
                        const x = Math.cos(angle) * radius - (iconSize / 6);
                        const y = Math.sin(angle) * radius - (iconSize / 6);

                        return (
                            <motion.div
                                key={tech.title}
                                className="absolute group"
                                variants={{
                                    initial: { x: 0, y: 0, opacity: 0, scale: 0.5 },
                                    animate: {
                                        x: x,
                                        y: y,
                                        opacity: 1,
                                        scale: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 12,
                                            delay: 0.8 + index * 0.1,
                                        }
                                    }
                                }}
                            >
                                <div
                                    className="w-20 h-20 bg-background/80 backdrop-blur-sm border rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                                    style={{ 
                                        width: iconSize, 
                                        height: iconSize,
                                        backgroundColor: '#453478'
                                    }}
                                >
                                    <Image
                                        src={tech.icon}
                                        alt={tech.title}
                                        width={40}
                                        height={40}
                                        className="text-foreground/70"
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-12 w-48 text-center p-2 bg-card/80 backdrop-blur-md rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <h4 className="font-bold text-lg mb-2">{tech.title}</h4>
                                    <p className="text-sm text-gray-500">{tech.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Container>
        </section>
    );
}

