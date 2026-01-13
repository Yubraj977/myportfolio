"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function ScrollReveal({
  children,
  animation = "slide-up",
  delay = 0,
  className = ""
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const animationClass = {
    "fade-in": "animate-fade-in",
    "slide-up": "animate-slide-up",
    "slide-left": "animate-slide-in-left",
    "slide-right": "animate-slide-in-right",
  }[animation] || "animate-slide-up";

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : "opacity-0"}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
}
