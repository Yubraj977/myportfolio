"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";

type CyberHeadProps = {
  src: string;
  size?: number;        // avatar diameter in px
  flipX?: boolean;      // mirror horizontally
  rotate?: number;      // base rotation (deg)
  // tune these to match your eye positions within the circle (0..1 from left/top)
  leftEye?: { x: number; y: number };
  rightEye?: { x: number; y: number };
  pupilRange?: number;  // max pupil offset in px
};

export default function CyberHead({
  src,
  size = 240,
  flipX = true,
  rotate = -9,
  leftEye = { x: 0.38, y: 0.44 },
  rightEye = { x: 0.62, y: 0.42 },
  pupilRange = 8,
}: CyberHeadProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  // raw cursor offsets
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // smooth spring
  const sx = useSpring(mx, { stiffness: 120, damping: 15 });
  const sy = useSpring(my, { stiffness: 120, damping: 15 });

  // tilt the card based on pointer
  const rotY = useTransform(sx, [-0.5, 0.5], [10, -10]); // left/right
  const rotX = useTransform(sy, [-0.5, 0.5], [-8, 8]);   // up/down

  // pupil movement (smaller range)
  const px = useTransform(sx, [-0.5, 0.5], [-pupilRange, pupilRange]);
  const py = useTransform(sy, [-0.5, 0.5], [-pupilRange, pupilRange]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    // normalize to [-0.5, 0.5]
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    mx.set(Math.max(-0.5, Math.min(0.5, nx)));
    my.set(Math.max(-0.5, Math.min(0.5, ny)));
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  // utility to position eyes
  const eyeStyle = (eye: { x: number; y: number }) => ({
    left: `${eye.x * 100}%`,
    top: `${eye.y * 100}%`,
    transform: "translate(-50%, -50%)",
  } as React.CSSProperties);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: rotX,
        rotateY: rotY,
        transformStyle: "preserve-3d",
      }}
      className="relative select-none"
    >
      <div
        className="relative rounded-full overflow-hidden border-2 border-slate-900 shadow-xl"
        style={{
          width: size,
          height: size,
          perspective: 800,
          transform: `rotate(${rotate}deg) ${flipX ? "scaleX(-1)" : ""}`,
        }}
      >
        {/* base image */}
        <Image
          src={src}
          alt="Cyber head"
          width={size}
          height={size}
          className="h-full w-full object-cover"
          priority
        />

        {/* subtle glossy highlight for depth */}
        <motion.div
          aria-hidden
          style={{ x: px, y: py }}
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -top-8 -left-8 w-[70%] h-[70%] rounded-full bg-white/10 blur-2xl" />
        </motion.div>

        {/* pupils overlay (two small circles). 
            Tune leftEye/rightEye above to match your image. */}
        <motion.span
          aria-hidden
          style={{ x: px, y: py, ...eyeStyle(leftEye) }}
          className="absolute w-3 h-3 rounded-full bg-black/80 shadow-[0_0_6px_rgba(0,0,0,0.6)]"
        />
        <motion.span
          aria-hidden
          style={{ x: px, y: py, ...eyeStyle(rightEye) }}
          className="absolute w-3 h-3 rounded-full bg-black/80 shadow-[0_0_6px_rgba(0,0,0,0.6)]"
        />
      </div>
    </motion.div>
  );
}