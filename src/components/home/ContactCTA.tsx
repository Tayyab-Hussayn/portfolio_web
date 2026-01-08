"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
    return (
        <section className="py-20 bg-[#0a0a0a] border-t border-white/5">
            <Container>
                <div className="flex flex-col items-center text-center space-y-8 bg-gradient-to-b from-[#1e1e1e] to-[#0a0a0a] p-12 rounded-2xl border border-white/5 shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Ready to Build Something Amazing?
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Let's collaborate to turn your vision into a high-performance digital reality.
                        I'm currently available for freelance projects and consulting.
                    </p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 h-12" asChild>
                        <Link href="/contact">
                            Start a Conversation <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
}
