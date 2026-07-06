import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsTicker from "@/components/SkillsTicker";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Statement from "@/components/Statement";
import Traits from "@/components/Traits";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkillsTicker />
        <Statement />
        <Traits />
        <section id="about">
          <TechStack />
        </section>
        <Projects />
        
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
