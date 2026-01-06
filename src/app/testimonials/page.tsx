"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactCTA } from "@/components/home/ContactCTA";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        content: "Working with this developer was a game-changer for our business. The attention to detail and technical expertise is unmatched. Highly recommended!",
        author: "Sarah Johnson",
        role: "CTO, TechFlow Inc.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
        rating: 5
    },
    {
        id: 2,
        content: "Delivered a complex e-commerce platform ahead of schedule. The code quality is excellent and the site performs flawlessly under high traffic.",
        author: "Michael Chen",
        role: "Founder, EcoMarket",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
        rating: 5
    },
    {
        id: 3,
        content: "A true partner in our digital transformation. They understood our vision perfectly and executed it with precision. The best agency experience we've had.",
        author: "Emily Rodriguez",
        role: "VP of Product, FinDash",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
        rating: 5
    },
    {
        id: 4,
        content: "Exceptional problem-solving skills. They tackled our legacy codebase migration with ease and modernized our entire stack.",
        author: "David Kim",
        role: "Director of Engineering, HealthTrack",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
        rating: 5
    },
    {
        id: 5,
        content: "Professional, communicative, and incredibly talented. Our new website has doubled our conversion rate since launch.",
        author: "Lisa Martinez",
        role: "Marketing Director, StartUp Co.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
        rating: 5
    },
    {
        id: 6,
        content: "I was impressed by the deep understanding of both frontend and backend technologies. A true full-stack expert.",
        author: "James Wilson",
        role: "Tech Lead, InnovateX",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
        rating: 5
    }
];

export const metadata = {
    title: "Client Testimonials & Reviews",
    description: "Read what industry leaders and business owners say about working with me. 5-star reviews for web development excellence.",
};

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <PageHeader
                title="Client Testimonials"
                subtitle="Don't just take my word for it. Here's what industry leaders have to say."
                gradient="purple"
            />

            <section className="py-24 bg-gray-50">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((t) => (
                            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-shadow duration-300">
                                <div className="mb-6">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <Quote className="text-primary/20 mb-2" size={32} />
                                    <p className="text-gray-700 italic leading-relaxed">"{t.content}"</p>
                                </div>

                                <div className="mt-auto flex items-center gap-4 pt-6 border-t border-gray-100">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                                        <Image
                                            src={t.image}
                                            alt={t.author}
                                            fill
                                            className="object-cover"
                                            unoptimized // using external urls
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">{t.author}</h4>
                                        <p className="text-gray-500 text-xs">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Trust Badges / Clients */}
                    <div className="mt-32 text-center">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-10">Trusted by innovative companies</p>
                        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Placeholders for logos */}
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="h-8 w-32 bg-gray-300 rounded animate-pulse" />
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <ContactCTA />
            <Footer />
        </main>
    );
}
