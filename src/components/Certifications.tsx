"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";

const certifications = [
  {
    title: "Introduction to Generative AI (MDL-388)",
    issuer: "IBM Skills Build",
    date: "Aug 2025",
    color: "#298DFF",
    url: "https://www.credly.com/badges/c4cf6108-1fcb-42cd-b501-5805264b2bf8/public_url"
  },
  {
    title: "Micro Certification",
    issuer: "ServiceNow",
    date: "Sep 2025",
    color: "#5CA9FF",
    url: "https://www.credly.com/badges/142b8053-a8f8-4e59-a1c0-3dd89913758f/public_url"
  },
  {
    title: "Beginner Cloud Cybersecurity Certificate",
    issuer: "Google",
    date: "May 2024",
    color: "#8FCBFF",
    url: "https://www.credly.com/badges/72715545-842b-4343-9494-575f9418d0d7/public_url"
  },
];

export default function Certifications() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(index));
          } else {
            setVisibleCards((prev) => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        padding: "4em 0",
        background: "transparent",
        position: "relative",
      }}
    >
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal style={{ marginBottom: "4em" }}>
          <span className="section-label">[ 06 ]</span>
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
            What I've earned
          </TextReveal>
        </ScrollReveal>

        {/* Cards — 3 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18em), 1fr))",
            gap: "1.5em",
          }}
        >
          {certifications.map((cert, index) => (
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.title}
              ref={(el) => { cardRefs.current[index] = el; }}
              data-index={index}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
                opacity: visibleCards.has(index) ? 1 : 0,
                transform: visibleCards.has(index) ? "translateY(0)" : "translateY(2em)",
                transition: `opacity 0.8s ease ${index * 0.12}s, transform 0.8s var(--cubic-default) ${index * 0.12}s`,
                position: "relative",
                overflow: "hidden",
                textDecoration: "none",
                cursor: "pointer"
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: `linear-gradient(to right, ${cert.color}, transparent)`,
                }}
              />

              {/* Date Tag */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875em",
                    color: cert.color,
                    padding: "0.25em 0.625em",
                    borderRadius: "999px",
                    backgroundColor: `${cert.color}15`,
                    border: `1px solid ${cert.color}30`,
                  }}
                >
                  {cert.date}
                </span>

                {/* Arrow */}
                <div
                  className="arrow-button"
                  style={{
                    width: "1.75em",
                    height: "1.75em",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 14 14" fill="none" style={{ overflow: "hidden" }}>
                    <path
                      d="M2 12L12 2M12 2H4M12 2V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 2M12 2H4M12 2V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1em",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  lineHeight: 1.3,
                }}
              >
                {cert.title}
              </h3>

              {/* Issuer */}
              <span
                style={{
                  fontSize: "0.8125em",
                  color: "var(--text-muted)",
                  marginTop: "auto",
                }}
              >
                {cert.issuer}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
