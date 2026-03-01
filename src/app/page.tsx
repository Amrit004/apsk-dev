import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Seeking from "@/components/Seeking";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingSpinner from "@/components/LoadingSpinner";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <main id="main-content" role="main" className="min-h-screen">
      <LoadingSpinner />
      <ScrollProgress />
      <Navigation />
      <Hero />
      <div className="section-divider max-w-4xl mx-auto"></div>
      <About />
      <div className="section-divider max-w-4xl mx-auto"></div>
      <Education />
      <div className="section-divider max-w-4xl mx-auto"></div>
      <Experience />
      <div className="section-divider max-w-4xl mx-auto"></div>
      <Skills />
      <div className="section-divider max-w-4xl mx-auto"></div>
      <Seeking />
      <div className="section-divider max-w-4xl mx-auto"></div>
      <Projects />
      <div className="section-divider max-w-4xl mx-auto"></div>
      <Contact />
    </main>
  );
}
