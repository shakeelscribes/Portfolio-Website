"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";

export default function Experience() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        padding: "4em 0",
        background: "transparent",
        position: "relative",
      }}
    >
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal style={{ marginBottom: "4em" }}>
          <span className="section-label">[ 04 ]</span>
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
            Where I've worked
          </TextReveal>
        </ScrollReveal>

        {/* Timeline */}
        <div
          style={{
            display: "flex",
            gap: "2em",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(2em)",
            transition: "opacity 0.8s ease, transform 0.8s var(--cubic-default)",
          }}
        >
          {/* Timeline Connector */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <div className="timeline-dot" />
            <div
              className="timeline-line"
              style={{
                height: visible ? "100%" : "0%",
                transition: "height 1.2s var(--cubic-default) 0.3s",
              }}
            />
          </div>

          {/* Content */}
          <div
            className="card"
            style={{
              flex: 1,
              marginBottom: "2em",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "0.5em",
                marginBottom: "1em",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "1.25em",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    lineHeight: 1.2,
                  }}
                >
                  Full Stack Development With Java Intern
                </h3>
                <span
                  style={{
                    fontSize: "0.9375em",
                    color: "var(--accent)",
                    fontWeight: 500,
                  }}
                >
                  Phoenix Softech
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875em",
                  color: "var(--text-dim)",
                  whiteSpace: "nowrap",
                }}
              >
                Jul 2025 – Aug 2025 · Remote
              </span>
            </div>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75em",
              }}
            >
              {[
                "Developed Java applications under guidance, enhancing coding skills and understanding of the software development lifecycle.",
                "Assisted in troubleshooting and debugging software issues, improving system reliability and performance.",
                "Documented technical processes and solutions, contributing to knowledge sharing within the team.",
              ].map((point, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "0.8125em",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    paddingLeft: "1.25em",
                    position: "relative",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(1em)",
                    transition: `opacity 0.6s ease ${0.4 + i * 0.15}s, transform 0.6s var(--cubic-default) ${0.4 + i * 0.15}s`,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--accent)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.85em",
                    }}
                  >
                    →
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Location Tag */}
            <div style={{ marginTop: "1.25em" }}>
              <span className="tech-tag">
                📍 Madurai, India
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
