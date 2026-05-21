"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { clsx } from "clsx";
import styles from "./Card.module.css";

interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "ref"> {
  children: React.ReactNode;
  className?: string;
  enableGlow?: boolean;
  enableTilt?: boolean;
  glowColor?: "purple" | "cyan" | "emerald" | "pink";
}

export default function Card({
  children,
  className,
  enableGlow = true,
  enableTilt = true,
  glowColor = "purple",
  ...props
}: CardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs to smooth out tilt effect
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { damping: 20, stiffness: 300 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { damping: 20, stiffness: 300 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setCoords({ x: mouseX, y: mouseY });

    if (enableTilt) {
      const relativeX = (mouseX / width) - 0.5;
      const relativeY = (mouseY / height) - 0.5;
      x.set(relativeX);
      y.set(relativeY);
    }
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }

  const glowColorMap = {
    purple: "rgba(139, 92, 246, 0.15)",
    cyan: "rgba(6, 182, 212, 0.15)",
    emerald: "rgba(16, 185, 129, 0.15)",
    pink: "rgba(236, 72, 153, 0.15)"
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: enableTilt ? rotateX : 0,
        rotateY: enableTilt ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={clsx(styles.card, className)}
      {...props}
    >
      {/* Spotlight cursor glow overlay */}
      {enableGlow && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColorMap[glowColor]}, transparent 70%)`
          }}
        />
      )}
      
      {/* Internal content wrapper to prevent visual tilt clipping */}
      <div style={{ transform: "translateZ(10px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
