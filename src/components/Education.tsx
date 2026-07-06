"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const educationItems = [
  {
    degree: "B.E Computer Science and Engineering",
    institution: "Nellai College of Engineering",
    location: "Tirunelveli, India",
    period: "2022 – 2026",
    score: "CGPA: 7.83",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Little Flower Matriculation Higher Secondary School",
    location: "Tirunelveli, India",
    period: "2021 – 2022",
    score: "Percentage: 86%",
    icon: "📚",
  },
];

export default function Education() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate the main vertical line drawing down based on scroll
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center", // Start drawing when section hits center of viewport
              end: "bottom 80%", // Finish drawing near the bottom of section
              scrub: 1, // Smooth scrubbing
            },
          }
        );
      }

      // Animate each education card sliding in as user scrolls to it
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const dot = card.querySelector(".timeline-dot");
        const content = card.querySelector(".education-card");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%", // Trigger animation when card is 85% down the viewport
            toggleActions: "play none none reverse",
          },
        });

        if (dot) {
          tl.fromTo(
            dot,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
          );
        }

        if (content) {
          tl.fromTo(
            content,
            { x: 30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
            "-=0.3" // Overlap slightly with the dot animation
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={containerRef}
      style={{
        padding: "4em 0",
        background: "transparent",
        position: "relative",
      }}
    >
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal style={{ marginBottom: "4em" }}>
          <span className="section-label">[ 05 ]</span>
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
            Where I've studied
          </TextReveal>
        </ScrollReveal>

        {/* Education Timeline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          {/* Continuous Vertical Line Background (Dim) */}
          <div
            style={{
              position: "absolute",
              left: "5px",
              top: "1.5em",
              bottom: "2em",
              width: "2px",
              background: "rgba(255, 255, 255, 0.05)",
            }}
          />

          {/* Continuous Vertical Line Animated (Bright) */}
          <div
            ref={lineRef}
            style={{
              position: "absolute",
              left: "5px",
              top: "1.5em",
              bottom: "2em",
              width: "2px",
              background: "var(--accent)",
              transformOrigin: "top",
              zIndex: 1,
            }}
          />

          {educationItems.map((item, index) => (
            <div
              key={item.degree}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="education-timeline-row"
              style={{
                position: "relative",
                paddingLeft: "2.5em",
                paddingBottom: index === educationItems.length - 1 ? "0" : "3em",
              }}
            >
              {/* Timeline Dot */}
              <div
                className="timeline-dot"
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0.5em",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--bg-default)",
                  border: "2px solid var(--accent)",
                  transition: "all 0.4s ease",
                  zIndex: 2,
                }}
              />

              {/* Education Card */}
              <div
                className="card education-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25em",
                }}
              >
                {/* Icon + Period */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "2em" }}>{item.icon}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875em",
                      color: "var(--text-dim)",
                    }}
                  >
                    {item.period}
                  </span>
                </div>

                {/* Degree */}
                <h3
                  style={{
                    fontSize: "1.125em",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    lineHeight: 1.3,
                  }}
                >
                  {item.degree}
                </h3>

                {/* Institution */}
                <p
                  style={{
                    fontSize: "0.8125em",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {item.institution}
                </p>

                {/* Score + Location */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5em",
                    marginTop: "auto",
                  }}
                >
                  <span
                    className="tech-tag"
                    style={{
                      color: "var(--accent)",
                      borderColor: "var(--accent)",
                      backgroundColor: "var(--accent-glow)",
                    }}
                  >
                    {item.score}
                  </span>
                  <span className="tech-tag">📍 {item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .education-timeline-row {
            cursor: pointer;
          }
          .education-timeline-row:hover .timeline-dot {
            background: var(--accent);
            box-shadow: 0 0 12px var(--accent);
            transform: scale(1.3) !important; /* override gsap */
          }
          .education-timeline-row:hover .education-card {
            border-color: var(--border-default);
            background: var(--bg-card);
            transform: translateX(10px) !important; /* override gsap */
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          }
          .education-card {
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            border: 1px solid transparent;
            background: transparent;
          }
        `}</style>
      </div>
    </section>
  );
}
