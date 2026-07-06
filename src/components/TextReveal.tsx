"use client";

import { useEffect, useRef, ReactNode, Fragment } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: ReactNode;
  /** Split mode: 'words' splits by word, 'lines' wraps each line */
  splitBy?: "words" | "chars";
  /** Delay before animation starts */
  delay?: number;
  /** Duration per element */
  duration?: number;
  /** Stagger between elements */
  stagger?: number;
  /** HTML element to render as */
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
  /** ScrollTrigger start position */
  start?: string;
  /** Whether to color the last word with the accent color */
  accentLastWord?: boolean;
}

export default function TextReveal({
  children,
  splitBy = "words",
  delay = 0,
  duration = 0.8,
  stagger = 0.04,
  as: Tag = "div",
  className,
  style,
  start = "top 88%",
  accentLastWord = false,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get all the split elements (words or chars)
    const elements = container.querySelectorAll(".text-reveal-unit");
    if (elements.length === 0) return;

    gsap.set(elements, {
      y: "110%",
      opacity: 0,
    });

    const tween = gsap.to(elements, {
      y: "0%",
      opacity: 1,
      duration,
      stagger,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: "play reverse play reverse",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, duration, stagger, start]);

  // Split the text content into words or characters
  const renderSplitText = () => {
    const text = typeof children === "string" ? children : "";
    if (!text) {
      // If children is JSX (like with <br/> or <span>), render as-is with a wrapper
      return children;
    }

    if (splitBy === "chars") {
      return text.split("").map((char, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <span
            className="text-reveal-unit"
            style={{
              display: "inline-block",
              willChange: "transform",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ));
    }

    // Split by words
    const words = text.split(" ");
    return words.map((word, i) => {
      const isLastWord = accentLastWord && i === words.length - 1;
      
      const wordSpan = (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
          }}
        >
          <span
            className="text-reveal-unit"
            style={{
              display: "inline-block",
              willChange: "transform",
              paddingRight: "0.3em",
              color: isLastWord ? "var(--accent)" : undefined,
            }}
          >
            {word}
          </span>
        </span>
      );

      if (isLastWord) {
        return (
          <Fragment key={i}>
            <br />
            {wordSpan}
          </Fragment>
        );
      }
      return wordSpan;
    });
  };

  return (
    <Tag
      ref={containerRef as any}
      className={className}
      style={style}
    >
      {renderSplitText()}
    </Tag>
  );
}
