import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { HeroScene } from "./HeroScene";

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black">
            {/* 3D Background */}
            <HeroScene />

            {/* Content Overlay */}
            <div className="relative z-10 w-full pointer-events-none">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center gap-6">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading uppercase leading-none tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] select-none">
                            Engineering <br />
                            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Excellence</span>
                        </h1>

                        <p className="text-xl md:text-2xl font-light text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                            Full-Stack Expertise. Scalable Solutions. <br /> World-Class Performance for Global Enterprise.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8 pointer-events-auto">
                            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8 border-none" asChild>
                                <Link href="/projects">View Projects</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white font-semibold text-lg px-8 backdrop-blur-sm" asChild>
                                <Link href="/contact">Contact Me</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full" />
                </div>
            </div>
        </section>
    );
}
