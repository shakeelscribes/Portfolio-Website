"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";

const traitsData = [
  {
    title: "Full-stack, end to end",
    desc: "From designing PostgreSQL schemas to building responsive Next.js interfaces. I don't just write backend APIs or frontend views; I own the entire feature lifecycle.",
    tags: ["Next.js", "FastAPI", "React", "PostgreSQL", "Supabase"]
  },
  {
    title: "AI-native by default",
    desc: "I treat LLMs as core infrastructure, not just a gimmick. Whether it's wiring LangChain agents or building RAG pipelines, I know how to make AI useful in production.",
    tags: ["LangChain", "Groq", "RAG", "Prompt Engineering"]
  },
  {
    title: "Mobile & Web fluent",
    desc: "I build native-feeling mobile apps with Flutter and responsive web platforms. A unified backend feeding multiple clients is my comfort zone.",
    tags: ["Flutter", "Dart", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Automate everything",
    desc: "I hate repetitive tasks. If it can be scripted, I'll automate it using n8n workflows, Python scripts, or custom Telegram bots.",
    tags: ["n8n", "Python", "Docker", "CI/CD"]
  }
];

export default function Traits() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const traitsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const windowHeight = window.innerHeight;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      
      if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
        let newActiveIndex = activeIndex;
        
        traitsRef.current.forEach((trait, index) => {
          if (!trait) return;
          const rect = trait.getBoundingClientRect();
          const triggerPoint = windowHeight * 0.4;
          
          if (rect.top < triggerPoint && rect.bottom > triggerPoint) {
            newActiveIndex = index;
          }
        });
        
        if (newActiveIndex !== activeIndex) {
          setActiveIndex(newActiveIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <section className="traits" ref={sectionRef} style={{ background: 'transparent' }}>
      <div className="container-main">
        <ScrollReveal style={{ marginBottom: "4em" }}>
          <span className="section-label">[ 01 ]</span>
          <TextReveal
            as="h2"
            accentLastWord={true}
            delay={0.2}
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              marginTop: "0.5em",
              color: "var(--text-primary)",
            }}
          >
            Who I am
          </TextReveal>
        </ScrollReveal>

        <div className="traits-layout">
          <div className="traits-rail">
            <div 
              className="traits-rail-fill" 
              style={{ top: `${(activeIndex / traitsData.length) * 100}%`, height: `${100 / traitsData.length}%` }} 
            />
          </div>
          <div className="traits-list">
            {traitsData.map((trait, index) => (
              <div 
                key={index} 
                className={`trait ${index === activeIndex ? "is-active" : ""}`}
                ref={(el) => { traitsRef.current[index] = el; }}
              >
                <h3>{trait.title}</h3>
                <p>{trait.desc}</p>
                <div className="tags">
                  {trait.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
