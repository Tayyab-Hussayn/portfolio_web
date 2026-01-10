import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { TechStack } from "@/components/home/TechStack";
import { BentoGrid } from "@/components/home/BentoGrid";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { WorkflowTimeline } from "@/components/home/WorkflowTimeline";
import { Footer } from "@/components/layout/Footer";
import { FAQ } from "@/components/home/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary">
      <Header />
      <Hero />
      <TechStack />
      <BentoGrid />
      <ProjectShowcase />
      <WorkflowTimeline />
      {/* <Testimonials /> */}
      {/* <Services /> */}
      <FAQ />
      {/* <ContactCTA /> */}
      <Footer />
    </main>
  );
}
