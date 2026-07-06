"use client";

import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterMenu = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    if (!isLocked) setMenuOpen(true);
  };

  const handleMouseLeaveMenu = () => {
    if (!isLocked) {
      closeTimeoutRef.current = setTimeout(() => {
        setMenuOpen(false);
      }, 500); // 500ms safe travel time
    }
  };

  const handleMenuClick = () => {
    if (menuOpen && isLocked) {
      setMenuOpen(false);
      setIsLocked(false);
    } else {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      setMenuOpen(true);
      setIsLocked(true);
    }
  };

  useEffect(() => {
    // Slide in navbar after page load
    const timer = setTimeout(() => setVisible(true), 300);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`navbar fixed top-0 left-0 right-0 z-50 ${visible ? "visible" : ""}`}
      style={{
        pointerEvents: "none",
        paddingTop: "1.5rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div
          style={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "3.5rem",
            padding: "0 1.5rem",
            background: scrolled ? "rgba(20, 22, 26, 0.4)" : "transparent",
            backdropFilter: scrolled ? "blur(24px) saturate(150%)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(24px) saturate(150%)" : "none",
            border: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
            borderRadius: "100px",
            gap: "3em",
            transition: "all 0.4s ease",
            boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
          }}
        >
          {/* Left: Logo */}
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1em",
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "var(--text-primary)",
                textTransform: "uppercase",
              }}
            >
              SHAKEEL<span style={{ color: "var(--accent)" }}>.</span>
            </a>
          </div>

          {/* Center: Menu Button */}
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <button
              onMouseEnter={handleMouseEnterMenu}
              onMouseLeave={handleMouseLeaveMenu}
              onClick={handleMenuClick}
              className="menu-button"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--text-primary)",
                cursor: "pointer",
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase",
                fontSize: "0.8125em",
                letterSpacing: "0.1em",
                padding: "0.5em",
                position: "relative",
                transition: "color 0.3s ease",
              }}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>

          {/* Right: CTA Button */}
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <a
              href="#contact"
              onClick={(e) => {
                setMenuOpen(false);
                handleClick(e, "#contact");
              }}
              className="btn-primary"
              style={{
                fontSize: "0.8125em",
                padding: "0.5em 1em",
                borderRadius: "100px",
                whiteSpace: "nowrap",
              }}
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>

      </nav>

      {/* Full Screen Overlay Menu */}
      <div
        className="menu-overlay"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setMenuOpen(false);
            setIsLocked(false);
          }
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(14, 15, 18, 0.7)",
          backdropFilter: "blur(24px)",
          zIndex: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          onMouseEnter={handleMouseEnterMenu}
          onMouseLeave={handleMouseLeaveMenu}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2em",
            padding: "4em", // Large safe zone to prevent accidental closure
          }}
        >
          {navLinks.map((link, i) => (
          <div
            key={link.label}
            style={{
              overflow: "hidden",
            }}
          >
            <a
              href={link.href}
              onClick={(e) => {
                setMenuOpen(false);
                handleClick(e, link.href);
              }}
              className="overlay-link"
              style={{
                display: "block",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 600,
                color: "var(--text-muted)",
                textDecoration: "none",
                transform: menuOpen ? "translateY(0)" : "translateY(100%)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05 + 0.1}s`,
                position: "relative",
              }}
            >
              {link.label}
            </a>
          </div>
        ))}
        </div>
      </div>

      <style jsx>{`
        /* Pill Menu Button Hover */
        .menu-button::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--text-primary);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .menu-button:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        /* Overlay Link Hover */
        .overlay-link::after {
          content: "";
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--text-primary);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .overlay-link:hover {
          color: var(--text-primary) !important;
        }
        .overlay-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        /* Mute other links when one is hovered */
        .menu-overlay:hover .overlay-link:not(:hover) {
          opacity: 0.3;
        }
      `}</style>
    </>
  );
}
