"use client";

import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import styles from "./Button.module.css";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "ref"> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "minimal";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  
  const sizeClasses = {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
  };

  const variantClasses = {
    primary: styles.primary,
    secondary: styles.secondary,
    outline: styles.outline,
    minimal: styles.minimal,
  };

  return (
    <motion.button
      whileHover={{ scale: variant === "minimal" ? 1 : 1.02 }}
      whileTap={{ scale: variant === "minimal" ? 1 : 0.98 }}
      className={clsx(
        styles.button,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {/* Dynamic button gloss effect for primary */}
      {variant === "primary" && <span className={styles.gloss} />}
      {children}
    </motion.button>
  );
}
