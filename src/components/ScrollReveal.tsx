"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  /** Direction the element animates FROM */
  direction?: "up" | "down" | "left" | "right";
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Duration of the animation (seconds) */
  duration?: number;
  /** Distance to travel (pixels) */
  distance?: number;
  /** Stagger children elements (seconds between each) */
  stagger?: number;
  /** Whether to stagger direct children instead of animating as one block */
  staggerChildren?: boolean;
  /** ScrollTrigger start position */
  start?: string;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
  /** HTML tag to render as */
  as?: keyof React.JSX.IntrinsicElements;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  distance = 60,
  stagger = 0.12,
  staggerChildren = false,
  start = "top 88%",
  className,
  style,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const directionMap = {
      up: { y: distance, x: 0 },
      down: { y: -distance, x: 0 },
      left: { x: distance, y: 0 },
      right: { x: -distance, y: 0 },
    };

    const { x, y } = directionMap[direction];
    const targets = staggerChildren ? el.children : el;

    gsap.set(targets, {
      opacity: 0,
      x,
      y,
    });

    const tween = gsap.to(targets, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      stagger: staggerChildren ? stagger : 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play reverse play reverse",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [direction, delay, duration, distance, stagger, staggerChildren, start]);

  // We render a plain div and use ref forwarding
  // The Tag usage is for semantic HTML
  const Component = Tag as React.ElementType;

  return (
    <Component ref={ref} className={className} style={style}>
      {children}
    </Component>
  );
}
