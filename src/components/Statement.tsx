"use client";

import React, { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";

export default function Statement() {
  const statementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!statementRef.current) return;

    const el = statementRef.current;
    const words = el.querySelectorAll('.word');
    
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          words.forEach((word, index) => {
            setTimeout(() => {
              word.classList.add('is-in');
            }, index * 20); // 20ms stagger per word
          });
        } else {
          words.forEach((word) => word.classList.remove('is-in'));
        }
      });
    }, { threshold: 0.15 });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // Helper to split text into word spans
  const renderText = (text: string) => {
    return text.trim().split(/\s+/).map((word, i, arr) => (
      <React.Fragment key={i}>
        <span className="word">{word}</span>
        {i < arr.length - 1 ? ' ' : ''}
      </React.Fragment>
    ));
  };

  return (
    <section className="statement" id="about" style={{ background: 'transparent' }}>
      <div className="container-main">
        <ScrollReveal style={{ marginBottom: "4em" }}>
          <TextReveal
            as="h2"
            delay={0.2}
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "var(--text-primary)",
            }}
          >
            What I bring to a team
          </TextReveal>
        </ScrollReveal>
        
        <p className="statement-text" ref={statementRef}>
          {renderText("I'm a builder who ships")}
          {' '}
          <span className="chip word" data-chip="Full-stack">full products</span>
          {', '}
          {renderText("not just prototypes — from writing")}
          {' '}
          <span className="chip word" data-chip="Next.js / FastAPI">clean architecture</span>
          {' '}
          {renderText("to orchestrating")}
          {' '}
          <span className="chip word" data-chip="Docker / CI-CD">deployments</span>
          {' '}
          {renderText("and wiring up")}
          {' '}
          <span className="chip word" data-chip="LLMs / RAG">AI agents</span>
          {' '}
          {renderText("that actually work in production.")}
        </p>
      </div>
    </section>
  );
}
