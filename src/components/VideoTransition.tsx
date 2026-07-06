"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface VideoTransitionProps {
  /** Label text shown above the transition */
  label?: string;
  /** Tip text shown below the video */
  tipText?: string;
}

export default function VideoTransition({
  label = "Scroll to explore",
  tipText = "tip: scroll to dive",
}: VideoTransitionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const tipRef = useRef<HTMLParagraphElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const videoContainer = videoContainerRef.current;
    const tip = tipRef.current;
    const canvas = canvasRef.current;
    if (!section || !videoContainer || !tip || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Animated gradient background on the canvas
    let animFrame: number;
    let hue = 210; // Start with blue hue matching accent color

    const drawFrame = () => {
      if (!ctx) return;
      hue = (hue + 0.15) % 360;

      // Dark cinematic gradient with subtle color shift
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.7
      );
      gradient.addColorStop(0, `hsl(${hue}, 70%, 12%)`);
      gradient.addColorStop(0.3, `hsl(${hue + 20}, 60%, 6%)`);
      gradient.addColorStop(0.7, `hsl(${hue + 40}, 50%, 3%)`);
      gradient.addColorStop(1, "#010101");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Floating particles
      const time = Date.now() * 0.001;
      for (let i = 0; i < 40; i++) {
        const x =
          (Math.sin(time * 0.3 + i * 1.7) * 0.4 + 0.5) * canvas.width;
        const y =
          (Math.cos(time * 0.2 + i * 2.3) * 0.4 + 0.5) * canvas.height;
        const radius = Math.sin(time + i) * 1.5 + 2;
        const alpha = Math.sin(time * 0.5 + i * 0.8) * 0.15 + 0.2;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue + i * 3}, 80%, 60%, ${alpha})`;
        ctx.fill();
      }

      // Subtle grid lines
      ctx.strokeStyle = `hsla(${hue}, 60%, 30%, 0.04)`;
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      animFrame = requestAnimationFrame(drawFrame);
    };

    drawFrame();

    // GSAP ScrollTrigger — Pin + Scale animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    // Animate: small rounded → full viewport
    tl.fromTo(
      videoContainer,
      {
        scale: 0.65,
        borderRadius: "1.5em",
        opacity: 0.7,
      },
      {
        scale: 1,
        borderRadius: "0em",
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      }
    );

    // Fade out the tip text as we scroll
    tl.to(
      tip,
      {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
      },
      0
    );

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      cancelAnimationFrame(animFrame);
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="video-transition-section"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-surface)",
        overflow: "hidden",
        zIndex: 10,
      }}
    >
      {/* Label */}
      <div
        style={{
          position: "absolute",
          top: "2em",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.6875em",
          letterSpacing: "0.15em",
          color: "var(--text-dim)",
          textTransform: "uppercase",
          zIndex: 5,
        }}
      >
        {label}
      </div>

      {/* Cinematic video/canvas container */}
      <div
        ref={videoContainerRef}
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          willChange: "transform, border-radius",
        }}
      >
        {/* Animated canvas background instead of video */}
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Center text overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75em",
              letterSpacing: "0.2em",
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: "0.75em",
            }}
          >
            [ transition ]
          </span>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 3rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              textAlign: "center",
              opacity: 0.9,
            }}
          >
            Beyond The Code
          </h2>
          <p
            style={{
              fontSize: "0.875em",
              color: "var(--text-muted)",
              marginTop: "0.75em",
              textAlign: "center",
              maxWidth: "24em",
              lineHeight: 1.5,
            }}
          >
            Where engineering meets experience
          </p>
        </div>
      </div>

      {/* Tip text */}
      <p
        ref={tipRef}
        style={{
          position: "absolute",
          bottom: "2em",
          fontFamily: "var(--font-mono)",
          fontSize: "0.6875em",
          letterSpacing: "0.1em",
          color: "var(--text-dim)",
          textTransform: "uppercase",
          zIndex: 5,
        }}
      >
        <strong style={{ color: "var(--accent)" }}>tip:</strong> {tipText.replace("tip: ", "")}
      </p>
    </section>
  );
}
