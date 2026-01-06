import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ProjectList } from "@/components/projects/ProjectList";

export const metadata = {
    title: "Portfolio Projects | Full-Stack Web Development",
    description: "Explore my portfolio of custom web applications, mobile apps, and AI solutions built for global clients.",
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <PageHeader
                title="Our Projects"
                subtitle="A showcase of technical excellence and innovative solutions delivered to clients worldwide."
                gradient="blue"
            />

            <ProjectList />

            <ContactCTA />
            <Footer />
        </main>
    );
}
