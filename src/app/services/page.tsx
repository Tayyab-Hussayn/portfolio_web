import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ArrowRight, CheckCircle, Code2, Database, Layout, Smartphone } from "lucide-react";

const services = [
    {
        icon: Layout,
        title: "Custom Web Development",
        desc: "Tailor-made websites built with modern frameworks like React and Next.js. Focus on speed, SEO, and conversion.",
        features: ["SPA & PWA Development", "E-commerce Solutions", "CMS Integration", "Performance Optimization"],
        price: "From $2,500"
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        desc: "Cross-platform mobile applications that provide native-like experiences on iOS and Android devices.",
        features: ["React Native Apps", "UI/UX Design", "App Store Deployment", "API Integration"],
        price: "From $4,000"
    },
    {
        icon: Database,
        title: "Backend & API Solutions",
        desc: "Robust server-side architectures designed to handle high traffic and complex data operations securely.",
        features: ["RESTful & GraphQL APIs", "Database Design", "Cloud Infrastructure", "Payment Gateways"],
        price: "From $3,000"
    },
    {
        icon: Code2,
        title: "Technical Consulting",
        desc: "Expert advice on technology stack selection, architecture design, and digital transformation strategies.",
        features: ["Code Audits", "Architecture Planning", "Team Training", "CTO as a Service"],
        price: "From $150/hr"
    }
];

export const metadata = {
    title: "Web Development Services & Pricing",
    description: "Professional web development services including custom apps, e-commerce, and technical consulting. Transparent pricing and process.",
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <PageHeader
                title="Services & Pricing"
                subtitle="Transparent, value-driven solutions tailored to your business goals."
                gradient="pink"
            />

            <section className="py-24">
                <Container>
                    {/* Process Section */}
                    <div className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold font-heading mb-4">Our Development Process</h2>
                            <p className="text-gray-600">A proven workflow that ensures quality and transparency.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {["Discovery", "Design", "Development", "Launch"].map((step, idx) => (
                                <div key={idx} className="relative">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-xl font-bold text-primary border border-gray-100 mb-6 shadow-sm z-10 relative">
                                            {idx + 1}
                                        </div>
                                        <h3 className="font-bold text-lg mb-2">{step}</h3>
                                        <p className="text-sm text-gray-500">
                                            {idx === 0 && "Understanding your goals and requirements."}
                                            {idx === 1 && "Creating intuitive and beautiful interfaces."}
                                            {idx === 2 && "Writing clean, efficient, and scalable code."}
                                            {idx === 3 && "Deploying to production and monitoring."}
                                        </p>
                                    </div>
                                    {idx !== 3 && (
                                        <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-gray-100 -z-0" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Services List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                                        <service.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold font-heading mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed h-14">{service.desc}</p>

                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                                                <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                                        <div>
                                            <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Starting at</span>
                                            <div className="text-2xl font-bold text-primary">{service.price}</div>
                                        </div>
                                        <Button className="rounded-full w-12 h-12 p-0 flex items-center justify-center">
                                            <ArrowRight size={20} />
                                        </Button>
                                    </div>
                                </div>
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
