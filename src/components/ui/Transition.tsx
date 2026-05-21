"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Transition.module.css";

interface TransitionProps {
  children: React.ReactNode;
}

export default function Transition({ children }: TransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        mass: 0.2
      }}
      className={styles.wrapper}
    >
      {children}
    </motion.div>
  );
}
