"use client";

import ScrollReveal from "./ScrollReveal";

const footerLinks = {
  "Quick Links": [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
  ],
  "Projects": [
    { label: "CardioGuard", href: "https://cardioguard-website.vercel.app/" },
    { label: "CineSync", href: "#projects" },
    { label: "BriefMind", href: "#projects" },
    { label: "LexAI", href: "#projects" },
  ],
  "Socials": [
    { label: "LinkedIn", href: "https://linkedin.com/in/mohamed-shakeel-720b2a29b" },
    { label: "GitHub", href: "https://github.com/shakeelscribes" },
    { label: "Slack", href: "https://join.slack.com/t/shakeelscob/shared_invite/zt-4322dkwtt-IYvOwUdR5A5dtUzFwD6xhQ" },
    { label: "Instagram", href: "https://instagram.com/shakeelscribes" },
    { label: "Email", href: "mailto:ahamedshakeel2005@gmail.com", isEmail: true },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-default)",
        padding: "4em 0 2em",
        background: "transparent",
      }}
    >
      <div className="container-main">
        {/* Top Section — Logo + Links */}
        <ScrollReveal
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 14em), 1fr))",
            gap: "3em",
            marginBottom: "4em",
          }}
        >
          {/* Brand Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1.125em",
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "var(--text-primary)",
              }}
            >
              SHAKEEL<span style={{ color: "var(--accent)" }}>.</span>
            </span>
            <p
              style={{
                fontSize: "0.85em",
                color: "var(--text-muted)",
                lineHeight: 1.6,
                maxWidth: "20em",
              }}
            >
              AI/ML Engineer &amp; Generative AI Developer. Building intelligent, scalable systems and intuitive web experiences.
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "1em", marginTop: "0.5em" }}>
              {/* GitHub */}
              <a
                href="https://github.com/shakeelscribes"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/mohamed-shakeel-720b2a29b"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:ahamedshakeel2005@gmail.com"
                onClick={(e) => {
                  e.preventDefault();
                  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                  if (isMobile) {
                    window.location.href = "mailto:ahamedshakeel2005@gmail.com";
                  } else {
                    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=ahamedshakeel2005@gmail.com", "_blank");
                  }
                }}
                className="social-icon"
                aria-label="Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13L2 4" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/shakeelscribes"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://join.slack.com/t/shakeelscob/shared_invite/zt-4322dkwtt-IYvOwUdR5A5dtUzFwD6xhQ"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Slack"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1 2.521-2.52A2.528 2.528 0 0 1 13.877 5.042a2.527 2.527 0 0 1-2.522 2.52H8.834v-2.52zM8.834 6.313a2.527 2.527 0 0 1 2.521 2.521 2.527 2.527 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.527 2.527 0 0 1-2.522 2.52h-2.522v-2.52zM17.688 8.834a2.527 2.527 0 0 1-2.523 2.52 2.527 2.527 0 0 1-2.52-2.52V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1-2.523 2.522A2.528 2.528 0 0 1 10.12 18.956a2.527 2.527 0 0 1 2.522-2.52h2.523v2.52zM15.165 17.688a2.527 2.527 0 0 1-2.523-2.523 2.526 2.526 0 0 1 2.523-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875em",
                  letterSpacing: "0.1em",
                  color: "var(--text-dim)",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "1.5em",
                }}
              >
                {category}<span style={{ color: "var(--accent)" }}>/</span>
              </span>
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
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") && !(link as any).isEmail ? "_blank" : undefined}
                      rel={link.href.startsWith("http") && !(link as any).isEmail ? "noopener noreferrer" : undefined}
                      onClick={(e) => {
                        if ((link as any).isEmail) {
                          e.preventDefault();
                          const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                          if (isMobile) {
                            window.location.href = "mailto:ahamedshakeel2005@gmail.com";
                          } else {
                            window.open("https://mail.google.com/mail/?view=cm&fs=1&to=ahamedshakeel2005@gmail.com", "_blank");
                          }
                        }
                      }}
                      style={{
                        fontSize: "0.8125em",
                        color: "var(--text-muted)",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ScrollReveal>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid var(--border-default)",
            padding: "1.5em 0 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1em",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875em",
              color: "var(--text-dim)",
            }}
          >
            © 2026 Mohamed Shakeel. All rights reserved.
          </span>

        </div>
      </div>
    </footer>
  );
}
