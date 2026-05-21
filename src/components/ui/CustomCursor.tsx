"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Use springs to give that professional trailing smooth lag
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    // Add custom active cursor class to body to hide default pointer
    document.body.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Track hovers over interactive tags
    const handleHoverStart = () => setHovered(true);
    const handleHoverEnd = () => setHovered(false);

    const addHoverListeners = () => {
      const links = document.querySelectorAll("a, button, [role='button'], input, textarea, select");
      links.forEach((link) => {
        link.addEventListener("mouseenter", handleHoverStart);
        link.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    // Periodically update listeners to catch dynamically rendered elements
    addHoverListeners();
    const interval = setInterval(addHoverListeners, 1000);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      clearInterval(interval);
      
      const links = document.querySelectorAll("a, button, [role='button'], input, textarea, select");
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleHoverStart);
        link.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  // Render a dual cursor: a solid center dot, and a trailing responsive ring
  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        className={styles.outer}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: hovered ? 1.6 : clicked ? 0.8 : 1,
          backgroundColor: hovered ? "rgba(139, 92, 246, 0.2)" : "rgba(139, 92, 246, 0)",
          borderColor: hovered ? "rgba(6, 182, 212, 0.8)" : "rgba(139, 92, 246, 0.6)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      {/* Inner Dot */}
      <motion.div
        className={styles.inner}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
