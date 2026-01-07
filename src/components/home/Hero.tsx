import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background Gradient - Subtle replacement for 3D effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#453478] via-white to-[#453478] pointer-events-none" />

            {/* Gradient Overlay for text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/80 pointer-events-none z-0" />

            {/* Content Overlay */}
            <div className="relative z-10 w-full">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center gap-6">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading uppercase leading-none tracking-tight text-primary drop-shadow-sm">
                            Engineering <br />
                            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Excellence</span>
                        </h1>

                        <p className="text-xl md:text-2xl font-light text-gray-600 max-w-2xl mx-auto">
                            Full-Stack Expertise. Scalable Solutions. <br /> World-Class Performance for Global Enterprise.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-semibold text-lg px-8 border-none shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all" asChild>
                                <Link href="/projects">View Projects</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 font-semibold text-lg px-8 bg-white/50 backdrop-blur-sm" asChild>
                                <Link href="/contact">Contact Me</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none text-primary">
                <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-primary rounded-full" />
                </div>
            </div>
        </section>
    );
}
