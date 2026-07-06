"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    if (!section || !heading) return;

    const rect = section.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    section.style.setProperty("--mouse-x", `${x}%`);
    section.style.setProperty("--mouse-y", `${y}%`);

    const headingRect = heading.getBoundingClientRect();
    const tx = ((e.clientX - headingRect.left) / headingRect.width) * 100;
    const ty = ((e.clientY - headingRect.top) / headingRect.height) * 100;

    heading.style.setProperty("--text-x", `${tx}%`);
    heading.style.setProperty("--text-y", `${ty}%`);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Fade in animation on load
  useEffect(() => {
    const timer = setTimeout(() => {
      const el = document.getElementById("hero-content");
      if (el) el.style.opacity = "1";
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // Parallax Blobs
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".blob-lightblue", {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
      gsap.to(".blob-blue", {
        y: -150,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
      gsap.to(".blob-dark", {
        y: 300,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      {/* Background Blobs */}
      <div
        className="blob blob-lightblue"
        style={{
          width: "50vw",
          height: "50vh",
          top: "-10%",
          left: "20%",
        }}
      />
      <div
        className="blob blob-blue"
        style={{
          width: "45vw",
          height: "45vh",
          top: "20%",
          right: "-10%",
        }}
      />
      <div
        className="blob blob-dark"
        style={{
          width: "60vw",
          height: "60vh",
          bottom: "-20%",
          left: "-10%",
        }}
      />

      {/* Progressive Backdrop Blur Layers */}
      <div className="gradient-blur">
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Content */}
      <div
        id="hero-content"
        style={{
          position: "relative",
          zIndex: 11,
          textAlign: "center",
          maxWidth: "56em",
          padding: "0 2em",
          opacity: 0,
          transition: "opacity 1.2s ease",
        }}
      >
        {/* Name */}
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            marginBottom: "0.2em",
          }}
        >
          Mohamed Shakeel
        </div>
        {/* Title */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)",
            letterSpacing: "0.15em",
            color: "var(--accent)",
            textTransform: "uppercase",
            marginBottom: "2.5em",
          }}
        >
          AI/ML Engineer &amp; Generative AI Developer
        </div>

        {/* Main Headline */}
        <TextReveal
          as="h1"
          delay={0.6}
          duration={1}
          stagger={0.1}
          start="top 90%"
        >
          <div
            ref={headingRef as React.RefObject<HTMLDivElement>}
            className="hero-heading hero-heading-sharp"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: "0.95",
              letterSpacing: "-0.04em",
              marginBottom: "0.5em",
            }}
          >
            Building Intelligent
            <br />
            Systems That Scale
          </div>
        </TextReveal>

        {/* Sub-heading (non-gradient, pure white) */}
        <ScrollReveal delay={0.9} distance={30}>
          <p
          style={{
            fontSize: "clamp(1rem, 1.25vw, 1.25rem)",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            maxWidth: "36em",
            margin: "0 auto",
            marginBottom: "2.5em",
          }}
        >
          Motivated Computer Science undergraduate experienced in building AI-powered products,
          generative AI, and workflow automation. From first
          commit to global scale.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1em",
            flexWrap: "wrap",
          }}
        >
          <a href="#projects" className="btn-primary" onClick={(e) => {
            e.preventDefault();
            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
          }}>
            <span>View Projects</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L8 3M13 8L8 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#contact" className="btn-secondary" onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}>
            <span>Contact Me</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 14L14 2M14 2H5M14 2V11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        </ScrollReveal>
      </div>


    </section>
  );
}
