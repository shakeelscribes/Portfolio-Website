"use client";

import ScrollReveal from "./ScrollReveal";

const skills = [
  "Python", "Java", "C", "TypeScript", "Dart", "JavaScript",
  "Next.js 14", "FastAPI", "Flutter", "Streamlit", "Scikit-Learn",
  "Pandas", "NumPy", "TensorFlow", "Supabase", "Docker",
  "n8n", "Git", "Vercel", "Render", "LangGraph", "LangChain",
];

export default function SkillsTicker() {
  return (
    <section
      style={{
        borderTop: "1px solid var(--border-default)",
        borderBottom: "1px solid var(--border-default)",
        padding: "2em 0",
        overflow: "hidden",
        background: "transparent",
        position: "relative",
      }}
    >
      {/* Label */}
      <ScrollReveal>
      <div className="container-main" style={{ marginBottom: "1.5em" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875em",
            letterSpacing: "0.1em",
            color: "var(--text-dim)",
            textTransform: "uppercase",
          }}
        >
          Technologies I work with
        </span>
      </div>

      {/* Ticker */}
      <div style={{ overflow: "hidden", position: "relative" }}>
        {/* Left fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "6em",
            background: "linear-gradient(to right, var(--bg-surface), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "6em",
            background: "linear-gradient(to left, var(--bg-surface), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div className="ticker-track">
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5em",
                padding: "0 1.5em",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  fontSize: "0.9375em",
                  fontWeight: 500,
                  color: "var(--text-muted)",
                  transition: "color 0.3s ease",
                }}
              >
                {skill}
              </span>
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent)",
                  flexShrink: 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
