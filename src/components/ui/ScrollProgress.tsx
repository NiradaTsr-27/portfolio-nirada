"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  // Smooth spring response for scroll tracking
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-pink-500 to-cyan-400 origin-left z-50 shadow-[0_2px_10px_rgba(139,92,246,0.3)]"
    />
  );
}
