"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Server, Shield, BrainCircuit, Terminal, Sparkles } from "lucide-react";
import { skills, Skill } from "@/data/portfolioData";
import Card from "@/components/ui/Card";
import Transition from "@/components/ui/Transition";
import styles from "./skills.module.css";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const categories = [
    {
      name: "Frontend",
      
      icon: Code,
      color: "purple"
    },
    {
      name: "Backend",
      icon: Server,
      color: "cyan"
    },
    {
      name: "Tools & DevOps",
      icon: Shield,
      color: "emerald"
    },
    {
      name: "AI & Data Science",
      icon: BrainCircuit,
      color: "pink"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <Transition>
      <div className={styles.root}>
        {/* Background radial spotlights */}
        <div className={`${styles.backgroundSpot} ${styles.backgroundSpotLeft}`} />
        <div className={`${styles.backgroundSpot} ${styles.backgroundSpotRight}`} />

        <div className={styles.container}>
          {/* HEADER */}
          <div className={styles.header}>
         
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.heading}
          >
            Skills & Expertise
          </motion.h1>
         
        </div>

        {/* CATEGORIES GRID */}
        <div className={styles.categories}>
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category.name);
            const CategoryIcon = category.icon;
            const glowColor = category.color as "purple" | "cyan" | "emerald" | "pink";

            const progressClass =
              glowColor === "purple"
                ? styles.progressFillPurple
                : glowColor === "cyan"
                ? styles.progressFillCyan
                : glowColor === "emerald"
                ? styles.progressFillEmerald
                : styles.progressFillPink;

            return (
              <div key={category.name} className={styles.categoryGroup}>
                {/* Category Header */}
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryInfo}>
                    <div className={styles.categoryIcon}>
                      <CategoryIcon className={styles.iconSmall} />
                    </div>
                    <div>
                      <h2 className={styles.categoryTitle}>{category.name}</h2>
                    </div>
                  </div>
                </div>

                {/* Skills progress grid */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className={styles.skillGrid}
                >
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={styles.skillCardWrapper}
                    >
                      <Card
                        enableGlow={true}
                        glowColor={glowColor}
                        className={styles.skillCard}
                      >
                        {/* Name and level percent */}
                        <div className={styles.skillRow}>
                          <span className={styles.skillName}>{skill.name}</span>
                          <span className={styles.skillLevel}>{skill.level}%</span>
                        </div>

                        {/* Custom visual progress bar */}
                        <div className={styles.progressBar}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={`${styles.progressFill} ${progressClass}`}
                          />
                        </div>

                        {/* Interactive floating parameters */}
                        <div className={styles.progressMeta}>
                          <span className={styles.skillFooterText}>{skill.category}</span>
                          <span className={styles.skillFooterHover}>Confidence High</span>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </Transition>
  );
}
