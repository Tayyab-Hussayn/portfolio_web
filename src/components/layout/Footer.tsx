"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Footer() {
    const buttonRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    // GSAP Magnetic Effect
    useGSAP(() => {
        const button = buttonRef.current;
        const text = textRef.current;
        if (!button || !text) return;

        const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const xToText = gsap.quickTo(text, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yToText = gsap.quickTo(text, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = button.getBoundingClientRect();

            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            xTo(x * 0.5);
            yTo(y * 0.5);
            xToText(x * 0.2);
            yToText(y * 0.2);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
            xToText(0);
            yToText(0);
        };

        button.addEventListener("mousemove", handleMouseMove as any);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove as any);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, { scope: buttonRef });

    const socialLinks = [
        { name: "GitHub", icon: Github, href: "https://github.com" },
        { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
        { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
        { name: "Email", icon: Mail, href: "mailto:hello@example.com" },
    ];

    return (
        <footer className="relative h-[80vh] bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
            {/* Sub-atomic Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center gap-8">
                {/* Headline */}
                <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 select-none">
                    Have an idea?
                </h2>
                <p className="text-xl text-neutral-400 font-light tracking-wide">
                    Let&apos;s build the extraordinary together.
                </p>

                {/* Magnetic Button */}
                <div className="mt-12 p-10 cursor-pointer">
                    <div
                        ref={buttonRef}
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors duration-300 flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] group"
                    >
                        <span ref={textRef} className="text-white font-medium text-lg md:text-xl pointer-events-none">
                            Get in touch
                        </span>
                    </div>
                </div>
            </div>

            {/* Social Links Row */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-between items-end px-8 md:px-12">
                <div className="text-neutral-500 text-sm font-mono tracking-tighter">
                    © 2026 / LOCALHOST
                </div>

                <div className="flex gap-8 group/socials">
                    {socialLinks.map((social) => (
                        <Link
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110 group-hover/socials:not(:hover):opacity-20 group-hover/socials:not(:hover):scale-90"
                        >
                            <social.icon className="w-6 h-6" />
                            <span className="sr-only">{social.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
