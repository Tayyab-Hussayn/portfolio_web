"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Determine if we're past the hero section (assuming hero is ~100vh)
            const pastHero = currentScrollY > window.innerHeight * 0.8;
            setScrolled(pastHero);

            // Header visibility logic
            if (currentScrollY < 100) {
                // Always show header at the top
                setVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down - hide header
                setVisible(false);
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up - show header
                setVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navigation = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: visible ? 0 : -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200" 
                    : "bg-transparent"
            }`}
        >
            <Container>
                <div className="flex items-center justify-between h-20">
                    <Link 
                        href="/" 
                        className={`text-2xl font-bold font-heading transition-colors duration-300 ${
                            scrolled ? "text-[#453478]" : "text-white"
                        }`}
                    >
                        DevPortfolio<span className={scrolled ? "text-[#453478]" : "text-white"}>.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors duration-300 ${
                                    scrolled 
                                        ? "text-gray-700 hover:text-[#453478]" 
                                        : "text-white/90 hover:text-white"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button 
                            variant="primary" 
                            className={`ml-4 transition-all duration-300 ${
                                scrolled 
                                    ? "bg-[#453478] hover:bg-[#453478]/90 text-white" 
                                    : "bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                            }`} 
                            asChild
                        >
                            <Link href="/contact">Hire Me</Link>
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden p-2 transition-colors duration-300 ${
                            scrolled ? "text-gray-700" : "text-white"
                        }`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </Container>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 overflow-hidden"
                    >
                        <Container className="py-4 flex flex-col gap-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-base font-medium text-gray-700 hover:text-[#453478] py-2 block transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button 
                                className="w-full justify-center bg-[#453478] hover:bg-[#453478]/90" 
                                asChild
                            >
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    Hire Me
                                </Link>
                            </Button>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
