import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactCTA } from "@/components/home/ContactCTA";
import Image from "next/image";
import { Code, Users, Rocket, Heart } from "lucide-react";

export const metadata = {
    title: "About Me | Full-Stack Web Developer",
    description: "Learn more about my journey, values, and expertise as a professional full-stack web developer.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <PageHeader
                title="About Me"
                subtitle="Passionate about building digital products that make a difference. Coding with purpose and precision."
            />

            {/* Story Section */}
            <section className="py-20">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                                <Image
                                    src="https://images.unsplash.com/photo-1507238691126-3d9272b0e63b?q=80&w=1000&auto=format&fit=crop"
                                    alt="Developer working"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-2xl -z-0 hidden md:block" />
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-heading text-gray-900">
                                Crafting code since <span className="text-primary">2018</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Hello! I'm a full-stack developer with a deep passion for modern web technologies. My journey began with simple HTML pages and has evolved into architecting complex, scalable applications for international clients.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                I believe that great software is more than just code—it's about solving real-world problems with elegant solutions. Whether it's a high-performance e-commerce platform or an AI-powered SaaS, I bring the same level of dedication and craftsmanship to every project.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div>
                                    <span className="block text-4xl font-bold text-gray-900">5+</span>
                                    <span className="text-sm text-gray-500 uppercase tracking-wider">Years Exp.</span>
                                </div>
                                <div>
                                    <span className="block text-4xl font-bold text-gray-900">50+</span>
                                    <span className="text-sm text-gray-500 uppercase tracking-wider">Projects Done</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-heading">My Core Values</h2>
                        <p className="text-gray-600 mt-4">The principles that guide every line of code I write.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Code, title: "Clean Code", desc: "Maintainable, scalable, and self-documenting code is my standard." },
                            { icon: Users, title: "User-Centric", desc: "I build with the end-user in mind, ensuring intuitive experiences." },
                            { icon: Rocket, title: "Performance", desc: "Speed is a feature. I optimize for sub-second load times." },
                            { icon: Heart, title: "Committment", desc: "Dedicated to project success even after the launch." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <ContactCTA />
            <Footer />
        </main>
    );
}
