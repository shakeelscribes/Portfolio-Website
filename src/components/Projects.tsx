"use client";

import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "CardioGuard",
    cmd: "./run-cardioguard.sh",
    role: "Team Lead / AI Engineer",
    year: "2025 – 2026",
    description:
      "Cardiovascular disease risk prediction ecosystem with a Next.js 14 web app and Flutter mobile app. Real-time cross-platform data sync via Supabase.",
    details:
      "Engineered a FastAPI backend with a Random Forest Classifier to predict cardiovascular risk from biometric inputs. Deployed on Render + Vercel with Tailwind CSS and Framer Motion.",
    tech: ["Next.js", "Flutter", "FastAPI", "Supabase", "Python"],
    link: "https://cardioguard-website.vercel.app/",
    color: "#0f111a", // Deep terminal background
  },
  {
    title: "CineSync",
    cmd: "./run-cinesync.sh",
    role: "Developer",
    year: "2025",
    description:
      "AI-powered Telegram bot using n8n automation, integrating a LangChain AI Agent with Groq LLM to understand natural language movie requests.",
    details:
      "Fetched real-time movie metadata from OMDB API and delivered formatted HTML recommendations via Telegram with persistent per-session chat memory.",
    tech: ["n8n", "LangChain", "Groq LLM", "Docker", "Telegram API"],
    color: "#131620", // Slightly different shade for stacking contrast
  },
  {
    title: "BriefMind",
    cmd: "./run-briefmind.sh",
    role: "Developer",
    year: "2024",
    description:
      "Multi-format AI document summarization web app supporting PDF, TXT, and CSV ingestion with PyMuPDF.",
    details:
      "Powered by Groq API (Llama 3.3 70B) with real-time token streaming, delivering executive-level summaries with ~30-50% reduction in reading time.",
    tech: ["Python", "Streamlit", "Groq API", "Llama 3.3", "PyMuPDF"],
    color: "#0f111a",
  },
  {
    title: "LexAI",
    cmd: "./run-lexai.sh",
    role: "Developer",
    year: "2024 – 2025",
    description:
      "AI-powered Indian legal assistant chatbot delivering lightning-fast responses with ultra-low latency inference via Groq API.",
    details:
      "Implemented multi-turn conversation memory, streaming responses, and automatic rate-limit retry logic. Deployed live on Streamlit Cloud.",
    tech: ["Streamlit", "Groq API", "LLAMA 3.3", "Python", "NLP"],
    link: "https://legal-assistant-fromshakeel.streamlit.app",
    color: "#131620",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.stack-card') as HTMLElement[];
      
      cards.forEach((card, i) => {
        // We don't shrink the very last card
        if (i === cards.length - 1) return;
        
        // Shrink and dim the current card when the NEXT card scrolls up over it
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.4,
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom", // When next card enters from bottom
            end: "top 15%",     // Until next card reaches its sticky position
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      style={{
        padding: "4em 0 10em", // Extra bottom padding for scrolling
        background: "transparent",
        position: "relative",
      }}
    >
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal style={{ marginBottom: "6em" }}>
          <span className="section-label">[ 03 ]</span>
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
            What I've built
          </TextReveal>
        </ScrollReveal>

        {/* Stacking Cards Layout */}
        <div className="stack-container">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="stack-card terminal-window"
              style={{
                top: `calc(5vh + ${index * 20}px)`, // Sticky top position offset by index so headers peek
                zIndex: index, // Ensure later cards stack on top
                backgroundColor: project.color,
              }}
            >
              {/* Terminal Header */}
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="btn close"></span>
                  <span className="btn minimize"></span>
                  <span className="btn maximize"></span>
                </div>
                <div className="terminal-title">guest@shakeel-portfolio: ~/projects</div>
              </div>

              {/* Terminal Content (User-Friendly CLI) */}
              <div className="terminal-content">
                
                {/* Simulated Command Execution */}
                <div className="command-line">
                  <span className="user">guest@shakeel-portfolio</span>
                  <span className="colon">:</span>
                  <span className="path">~/projects</span>
                  <span className="prompt">$</span>
                  <span className="typing-text">{project.cmd}</span>
                </div>

                {/* Friendly Output */}
                <div className="command-output">
                  <div className="output-row title-row">
                    <span className="bullet">[+]</span> <span className="label">Project:</span> <span className="value highlight">{project.title}</span>
                  </div>
                  
                  <div className="output-row">
                    <span className="bullet">[+]</span> <span className="label">Role & Timeline:</span> <span className="value">{project.role} ({project.year})</span>
                  </div>

                  <div className="output-section">
                    <div className="terminal-section-label">&gt; What it does:</div>
                    <p className="section-text">{project.description}</p>
                    <p className="section-text muted">{project.details}</p>
                  </div>

                  <div className="output-section">
                    <div className="terminal-section-label">&gt; Technologies Used:</div>
                    <div className="tech-flex">
                      {project.tech.map(t => (
                        <span key={t} className="terminal-tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  {project.link && (
                    <div className="output-section link-section">
                      <span className="bullet">[🔗]</span> 
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="live-link">
                        Click here to view Live Project ↗
                      </a>
                    </div>
                  )}

                  {/* Blinking Cursor at the end */}
                  <div className="command-line" style={{ marginTop: "1em", marginBottom: "0" }}>
                    <span className="user">guest@shakeel-portfolio</span>
                    <span className="colon">:</span>
                    <span className="path">~/projects</span>
                    <span className="prompt">$</span>
                    <span className="cursor blinking">_</span>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .stack-container {
            display: flex;
            flex-direction: column;
            gap: 15vh; /* Large gap so user has to scroll to see the next one slide up */
            width: 100%;
            padding-bottom: 5vh;
          }
          
          /* Combining stack logic with terminal UI */
          .stack-card {
            position: sticky;
            border: 1px solid #2a2d3d;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            box-shadow: 0 -20px 40px rgba(0, 0, 0, 0.6);
            will-change: transform, opacity;
            overflow: hidden;
            font-family: var(--font-mono);
          }

          .terminal-header {
            background: #1a1d27;
            padding: 12px 16px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #2a2d3d;
          }

          .terminal-buttons {
            display: flex;
            gap: 8px;
            position: absolute;
          }

          .btn {
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }

          .btn.close { background: #ff5f56; }
          .btn.minimize { background: #ffbd2e; }
          .btn.maximize { background: #27c93f; }

          .terminal-title {
            width: 100%;
            text-align: center;
            font-size: 0.8em;
            color: #6a7382;
          }

          .terminal-content {
            padding: 1.5em 2em;
            display: flex;
            flex-direction: column;
          }

          .command-line {
            font-size: 0.9em;
            margin-bottom: 1em;
          }

          .user { color: #ffbd2e; }
          .colon { color: #a6acb8; }
          .path { color: #298DFF; }
          .prompt { color: #27c93f; margin: 0 0.75em; }
          .typing-text { color: #fff; }

          .command-output {
            padding-left: 0.5em;
          }

          .output-row {
            margin-bottom: 0.5em;
            font-size: 0.95em;
          }

          .bullet { color: #27c93f; margin-right: 0.5em; }
          .label { color: #8be9fd; font-weight: 600; margin-right: 0.5em; }
          .value { color: #f8f8f2; }
          .value.highlight { color: #ff79c6; font-size: 1.1em; font-weight: 700; }

          .output-section {
            margin-top: 1.25em;
          }

          .terminal-section-label {
            color: #ffbd2e;
            font-weight: 600;
            margin-bottom: 0.5em;
            font-size: 0.95em;
          }

          .section-text {
            color: #f8f8f2;
            line-height: 1.5;
            font-size: 0.85em;
            max-width: 800px;
            padding-left: 1em;
            border-left: 2px solid #44475a;
            margin-bottom: 0.75em;
          }
          
          .section-text.muted {
            color: #6272a4;
          }

          .tech-flex {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5em;
            padding-left: 1em;
          }

          .terminal-tag {
            background: rgba(139, 233, 253, 0.1);
            color: #8be9fd;
            border: 1px solid rgba(139, 233, 253, 0.3);
            padding: 0.3em 0.8em;
            border-radius: 4px;
            font-size: 0.8em;
          }

          .link-section {
            margin-top: 1.5em;
            padding-left: 1em;
          }

          .live-link {
            color: #50fa7b;
            text-decoration: underline;
            text-decoration-color: transparent;
            transition: all 0.2s ease;
            font-weight: 600;
            font-size: 0.95em;
            padding: 0.4em 0.8em;
            border: 1px solid #50fa7b;
            border-radius: 6px;
            background: rgba(80, 250, 123, 0.05);
            display: inline-block;
          }

          .live-link:hover {
            background: rgba(80, 250, 123, 0.2);
            text-decoration-color: #50fa7b;
          }

          .cursor {
            display: inline-block;
            width: 10px;
            background: #fff;
            color: transparent;
            margin-left: 4px;
          }
          
          .cursor.blinking {
            animation: blink 1s step-end infinite;
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          
          @media (max-width: 768px) {
            .terminal-content { padding: 1.5em; }
            .section-text { padding-left: 0.75em; border-left: 1px solid #44475a; }
            .stack-container { gap: 10vh; }
            .live-link { font-size: 0.95em; }
          }
        `}</style>
      </div>
    </section>
  );
}
