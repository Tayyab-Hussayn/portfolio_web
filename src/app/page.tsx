import { Header } from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import { BentoGrid } from "@/components/home/BentoGrid";
import Manifesto from "@/components/home/Manifesto";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { WorkflowTimeline } from "@/components/home/WorkflowTimeline";
import { Footer } from "@/components/layout/Footer";
import { FAQ } from "@/components/home/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary">
      <Header />

      {/* Main Content Wrapper (The Curtain) */}
      <div className="relative z-10 bg-[#050505] shadow-2xl mb-[100vh]">
        <Hero />
        <BentoGrid />
        <Manifesto />
        <ProjectShowcase />
        <WorkflowTimeline />
        {/* <Testimonials /> */}
        {/* <Services /> */}
        <FAQ />
        {/* <ContactCTA /> */}
      </div>

      {/* Fixed Sticky Footer (The Reveal) */}
      <Footer />
    </main>
  );
}
