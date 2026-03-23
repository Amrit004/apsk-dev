import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <header role="banner" aria-label="Site header">
        <Navigation />
      </header>
      <main id="main-content" role="main" aria-label="Main content" className="min-h-screen">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}
