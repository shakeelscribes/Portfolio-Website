"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";

const stackItems = [
  {
    number: "01",
    label: "Languages",
    items: ["Python", "Java", "C", "TypeScript", "Dart", "JavaScript"],
  },
  {
    number: "02",
    label: "Frameworks",
    items: ["Next.js 14", "FastAPI", "Flutter", "Streamlit", "Scikit-Learn", "Pandas", "NumPy", "TensorFlow"],
  },
  {
    number: "03",
    label: "Tools",
    items: ["Supabase", "Docker", "n8n", "Git", "Android Studio", "Vercel", "Render", "LangGraph"],
  },
  {
    number: "04",
    label: "Concepts",
    items: ["Machine Learning", "NLP", "REST APIs", "Workflow Automation", "LangChain", "RAG", "Prompt Engineering"],
  },
];

export default function TechStack() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(index));
          } else {
            setVisibleItems((prev) => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      style={{
        padding: "4em 0",
        background: "transparent",
        position: "relative",
      }}
    >
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal style={{ marginBottom: "4em" }}>
          <span className="section-label">[ 02 ]</span>
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
            What I use
          </TextReveal>
        </ScrollReveal>

        {/* Stack Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {stackItems.map((item, index) => (
            <div
              key={item.number}
              ref={(el) => { itemRefs.current[index] = el; }}
              data-index={index}
              style={{
                borderTop: "1px solid var(--border-default)",
                padding: "2em 0",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "2em",
                alignItems: "start",
                opacity: visibleItems.has(index) ? 1 : 0,
                transform: visibleItems.has(index) ? "translateY(0)" : "translateY(1.5em)",
                transition: `opacity 0.8s ease ${index * 0.15}s, transform 0.8s var(--cubic-default) ${index * 0.15}s`,
              }}
            >
              {/* Number + Label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "1em",
                  minWidth: "14em",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125em",
                    color: "var(--accent)",
                    fontWeight: 500,
                  }}
                >
                  {item.number}
                </span>
                <span
                  style={{
                    fontSize: "1.125em",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  {item.label}
                  <span style={{ color: "var(--accent)", marginLeft: "0.1em" }}>/</span>
                </span>
              </div>

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5em",
                }}
              >
                {item.items.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom border */}
          <div style={{ borderTop: "1px solid var(--border-default)" }} />
        </div>

      </div>
    </section>
  );
}
