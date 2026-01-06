"use client";

import { Container } from "@/components/ui/Container";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer: "Project timelines vary based on complexity. A standard business website typically takes 2-4 weeks, while complex web applications can take 8-12 weeks. We provide a detailed timeline during the initial consultation."
    },
    {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer comprehensive maintenance packages that include updates, security patches, backups, and content changes to ensure your website remains secure and up-to-date."
    },
    {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely. All our websites are designed with a mobile-first approach, ensuring they look and perform perfectly on smartphones, tablets, and desktop computers."
    },
    {
        question: "Can you help with SEO?",
        answer: "Yes, SEO is built into our development process. We implement best practices for on-page SEO, site speed, and structure to help your site rank well in search engines."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gray-50">
            <Container className="max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-heading mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600">Everything you need to know about working with us.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors"
                            >
                                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                                <span className="text-primary">
                                    {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
