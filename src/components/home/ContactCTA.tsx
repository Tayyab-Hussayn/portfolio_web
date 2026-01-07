"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function ContactCTA() {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <Container className="relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                    Ready to launch your <br /> next big project?
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
                    Let's collaborate to build a digital experience that converts visitors into customers and scales with your business.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 h-14 text-lg w-full sm:w-auto" asChild>
                        <Link href="/contact">
                            Start a Project <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/90 bg-white/10 text-white hover:bg-black/10 hover:text-white font-medium px-8 h-14 text-lg w-full sm:w-auto backdrop-blur-sm" asChild>
                        <Link href="mailt:tayyabhussayn@gmail.com">
                            <Mail className="mr-2 w-5 h-5" />
                            contact@tayyab.com
                        </Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
}
