"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const metadata = {
    title: "Contact Me | Hire a Full-Stack Developer",
    description: "Get in touch to discuss your next web project. Available for freelance and contract work globally.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <PageHeader
                title="Get in Touch"
                subtitle="Have a project in mind? Let's discuss how we can bring your vision to life."
                gradient="blue"
            />

            <section className="py-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold font-heading mb-6">Let's build something amazing</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    I'm currently available for freelance projects and open to long-term collaborations.
                                    Whether you have a specific idea or just need technical consultation, feel free to reach out.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Email</h3>
                                        <p className="text-gray-500 mb-1">Our friendly team is here to help.</p>
                                        <a href="mailto:hello@devportfolio.com" className="text-primary font-medium hover:underline">hello@devportfolio.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Phone</h3>
                                        <p className="text-gray-500 mb-1">Mon-Fri from 8am to 5pm.</p>
                                        <a href="tel:+15550000000" className="text-primary font-medium hover:underline">+1 (555) 000-0000</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Office</h3>
                                        <p className="text-gray-500 mb-1">Come say hello at our office HQ.</p>
                                        <p className="text-gray-900 font-medium">100 Smith Street, Collingwood VIC 3066 AU</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-lg">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First name</label>
                                        <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white" placeholder="First name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last name</label>
                                        <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white" placeholder="Last name" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white" placeholder="you@company.com" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white resize-none" placeholder="Tell us about your project..."></textarea>
                                </div>

                                <Button size="lg" className="w-full gap-2">
                                    Send Message <Send size={18} />
                                </Button>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
