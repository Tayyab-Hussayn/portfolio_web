"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/home/ContactCTA";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

// Filter categories
const categories = ["All", "Web App", "Mobile", "AI/ML", "E-commerce"];

// Project Data
const projects = [
    {
        id: 1,
        title: "ProjectFlow",
        category: "AI/ML",
        image: "/project_flow_interface.png",
        description: "AI-powered recruitment platform matching enterprises with vetted developers. Features real-time matching algorithms and automated vetting pipelines.",
        tech: ["Next.js 14", "Python", "TensorFlow", "PostgreSQL"],
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "EcoMarket",
        category: "E-commerce",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop",
        description: "Sustainable marketplace with multi-vendor support, inventory management, and carbon footprint tracking for every purchase.",
        tech: ["React", "Node.js", "Stripe", "MongoDB"],
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "FinDash",
        category: "Web App",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        description: "Comprehensive financial dashboard for SMEs to track expenses, invoices, and cash flow in real-time with predictive analytics.",
        tech: ["Vue.js", "D3.js", "Firebase", "Express"],
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "HealthTrack Mobile",
        category: "Mobile",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
        description: "Cross-platform mobile app for patient monitoring and telemedicine consultations with secure video calling.",
        tech: ["React Native", "WebRTC", "Redux", "Node.js"],
        link: "#",
        github: "#"
    }
];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <main className="min-h-screen bg-white">
            <Header />
            <PageHeader
                title="Our Projects"
                subtitle="A showcase of technical excellence and innovative solutions delivered to clients worldwide."
                gradient="blue"
            />

            <section className="py-20">
                <Container>
                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                        ? "bg-primary text-white shadow-lg scale-105"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key={project.id}
                                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
                                        <Button variant="secondary" size="sm" className="bg-white text-gray-900 border-none" asChild>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={16} className="mr-2" /> Live Demo
                                            </a>
                                        </Button>
                                        <Button variant="secondary" size="sm" className="bg-white text-gray-900 border-none" asChild>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github size={16} className="mr-2" /> Code
                                            </a>
                                        </Button>
                                    </div>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        unoptimized // using external urls
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold uppercase tracking-wider rounded-md text-gray-900 shadow-sm">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </Container>
            </section>

            <ContactCTA />
            <Footer />
        </main>
    );
}
