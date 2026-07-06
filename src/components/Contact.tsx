"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";

const contactLinks = [
  {
    label: "Email",
    value: "ahamedshakeel2005@gmail.com",
    href: "mailto:ahamedshakeel2005@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13L2 4" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 9080065048",
    href: "tel:+919080065048",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "mohamed-shakeel",
    href: "https://linkedin.com/in/mohamed-shakeel-720b2a29b",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "shakeelscribes",
    href: "https://github.com/shakeelscribes",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Slack",
    value: "Shakeel's Cob",
    href: "https://join.slack.com/t/shakeelscob/shared_invite/zt-4322dkwtt-IYvOwUdR5A5dtUzFwD6xhQ",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1 2.521-2.52A2.528 2.528 0 0 1 13.877 5.042a2.527 2.527 0 0 1-2.522 2.52H8.834v-2.52zM8.834 6.313a2.527 2.527 0 0 1 2.521 2.521 2.527 2.527 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.527 2.527 0 0 1-2.522 2.52h-2.522v-2.52zM17.688 8.834a2.527 2.527 0 0 1-2.523 2.52 2.527 2.527 0 0 1-2.52-2.52V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1-2.523 2.522A2.528 2.528 0 0 1 10.12 18.956a2.527 2.527 0 0 1 2.522-2.52h2.523v2.52zM15.165 17.688a2.527 2.527 0 0 1-2.523-2.523 2.526 2.526 0 0 1 2.523-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("sending");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit message");
      }

      setSubmitStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      console.error("Error submitting message:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
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
          <span className="section-label">[ 07 ]</span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 4rem)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              marginTop: "0.5em",
              color: "var(--text-primary)",
            }}
          >
            <TextReveal as="span" delay={0.2}>How to reach</TextReveal>
            <br />
            <TextReveal as="span" delay={0.4} style={{ color: "var(--accent)" }}>me</TextReveal>
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22em), 1fr))",
            gap: "3em",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(2em)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s var(--cubic-default) 0.2s",
          }}
        >
          {/* Contact Links */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1em",
            }}
          >
            <div
              style={{
                fontSize: "0.85em",
                fontFamily: "var(--font-mono)",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: "2em",
                padding: "1.25em",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-default)",
                borderLeft: "3px solid var(--accent-light)",
                borderRadius: "0.5em",
                display: "flex",
                alignItems: "center",
                gap: "1em"
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--accent-light)", flexShrink: 0 }}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              <div>
                <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>CONNECT /</span><br />
                Always open to discussing new AI/ML projects, creative collaborations, or opportunities. Reach out via any of these channels.
              </div>
            </div>

            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1em",
                  padding: "1em 1.25em",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    width: "2.5em",
                    height: "2.5em",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-glow)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  {link.icon}
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875em",
                      color: "var(--text-dim)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {link.label}
                    <span style={{ color: "var(--accent)" }}>/</span>
                  </span>
                  <div
                    style={{
                      fontSize: "0.875em",
                      color: "var(--text-primary)",
                      marginTop: "0.125em",
                    }}
                  >
                    {link.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: "0.85em",
                fontFamily: "var(--font-mono)",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: "2em",
                padding: "1.25em",
                backgroundColor: "var(--accent-glow)",
                border: "1px solid var(--accent-glow-strong)",
                borderLeft: "3px solid var(--accent)",
                borderRadius: "0.5em",
                display: "flex",
                alignItems: "center",
                gap: "1em"
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--accent)", flexShrink: 0 }}>
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1 2.521-2.52A2.528 2.528 0 0 1 13.877 5.042a2.527 2.527 0 0 1-2.522 2.52H8.834v-2.52zM8.834 6.313a2.527 2.527 0 0 1 2.521 2.521 2.527 2.527 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.527 2.527 0 0 1-2.522 2.52h-2.522v-2.52zM17.688 8.834a2.527 2.527 0 0 1-2.523 2.52 2.527 2.527 0 0 1-2.52-2.52V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1-2.523 2.522A2.528 2.528 0 0 1 10.12 18.956a2.527 2.527 0 0 1 2.522-2.52h2.523v2.52zM15.165 17.688a2.527 2.527 0 0 1-2.523-2.523 2.526 2.526 0 0 1 2.523-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
              </svg>
              <div>
                <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>FAST RESPONSE /</span><br />
                Messages submitted here bypass my inbox and go directly to my <span style={{ color: "var(--accent)", fontWeight: 600 }}>Slack</span>. Expect a lightning-fast reply!
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25em",
              }}
            >
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875em",
                    color: "var(--text-dim)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    display: "block",
                    marginBottom: "0.5em",
                  }}
                >
                  Name<span style={{ color: "var(--accent)" }}>/</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875em",
                    color: "var(--text-dim)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    display: "block",
                    marginBottom: "0.5em",
                  }}
                >
                  Email<span style={{ color: "var(--accent)" }}>/</span>
                </label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875em",
                    color: "var(--text-dim)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    display: "block",
                    marginBottom: "0.5em",
                  }}
                >
                  Message<span style={{ color: "var(--accent)" }}>/</span>
                </label>
                <textarea
                  className="form-input"
                  placeholder="Tell me about your project..."
                  rows={5}
                  style={{ resize: "none" }}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={submitStatus === "sending"}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  fontSize: "0.875em",
                  padding: "1em",
                  opacity: submitStatus === "sending" ? 0.7 : 1,
                }}
              >
                {submitStatus === "idle" && (
                  <>
                    <span>Send Message</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
                {submitStatus === "sending" && <span>Sending...</span>}
                {submitStatus === "success" && <span>✓ Message Sent!</span>}
                {submitStatus === "error" && <span>Error — Try Again</span>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
