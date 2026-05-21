"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import {
  developerProfile,
  featuredProjects,
  skills,
} from "@/data/portfolioData";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Transition from "@/components/ui/Transition";
import styles from "./page.module.css";

export default function Home() {

  const floatIcons = [
    { name: "React", x: "12%", y: "25%", delay: 0 },
    { name: "Next.js", x: "85%", y: "30%", delay: 1.5 },
    { name: "TypeScript", x: "78%", y: "75%", delay: 0.8 },
    { name: "C++", x: "58%", y: "1%", delay: 0.8 },
    { name: "Python", x: "15%", y: "70%", delay: 2.2 },
    { name: "JavaScript", x: "25%", y: "8%", delay: 2.5 },
    { name: "SQL", x: "50%", y: "90%", delay: 2.8 },
  ];

  return (
    <Transition>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        {/* Dynamic ambient backgrounds */}
        <div className={styles.bgLeft} />
        <div className={styles.bgRight} />

        {/* Floating tech nodes in background */}
        {floatIcons.map((icon, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.15, 0.45, 0.15],
              y: ["0px", "-18px", "0px"],
            }}
            transition={{
              opacity: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: icon.delay,
              },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: icon.delay,
              },
            }}
            className={styles.floatingBadge}
            style={{ left: icon.x, top: icon.y }}
          >
            <span>{icon.name}</span>
          </motion.div>
        ))}

        <div className={styles.heroContent}>
          {/* <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.statusBadge}
          >
            <span className={styles.badgeDot} />
            <span></span>
          </motion.div> */}

          <div className={styles.heroCopy}>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={styles.heroTitle}
            >
              Hi, I&apos;m{" "}
              <span className={styles.highlight}>{developerProfile.name}</span>
            </motion.h1>

            {/* {typedText && (
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className={styles.role}
              >
                {typedText}
              </motion.h2>
            )} */}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.tagline}
          >
            {developerProfile.tagline}
          </motion.p>

          {/* Socials & CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.ctaGroup}
          >
            <Link href="/projects">
              <Button
                variant="primary"
                size="md"
                className={styles.buttonIconGap}
              >
                <span>View Projects</span>
                {/* <ArrowRight size={16} /> */}
              </Button>
            </Link>

            <a href="#" download>
              <Button
                variant="secondary"
                size="md"
                className={styles.buttonIconGap}
              >
                <FileText size={16} />
                <span>Resume</span>
              </Button>
            </a>

            <div className={styles.socialGroup}>
              {/* GitHub custom inline SVG */}
              <a
                href={developerProfile.socials.github}
                target="_blank"
                rel="noreferrer"
                className={styles.socialButton}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.socialIcon}
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECH STACK MINI */}
      <section className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Technologies</h2>
        </div>

        <div className={styles.gridCols}>
          {skills.slice(0, 8).map((skill, key) => (
            <Card
              key={skill.name}
              enableGlow={true}
              glowColor={key % 2 === 0 ? "purple" : "cyan"}
              className={styles.skillCard}
            >
              <div className={styles.skillCardHeader}>
                {/* <div className={styles.skillIcon}>
                  <Code className={styles.actionIcon} />
                </div> */}
                <div className={styles.skillContent}>
                  <h4 className={styles.skillName}>{skill.name}</h4>
                  <span className={styles.skillCategory}>{skill.category}</span>
                </div>
              </div>

              <div className={styles.skillMeta}>
                <span className={styles.skillLevelLabel}>
                  {skill.level}% proficiency
                </span>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillBarFill}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className={styles.sectionBlock}>
        <div className={styles.sectionHeaderSplit}>
          <div>
            <h2 className={styles.sectionTitle}>Featured Work</h2>
          </div>
          {/* <Link href="/projects" className={styles.sectionLink}>
            <span>View all projects</span>
            <ArrowRight className={styles.actionIcon} />
          </Link> */}
        </div>

        <div className={styles.projectGrid}>
          {featuredProjects.map((project, idx) => (
            <Card
              key={project.id}
              enableTilt={true}
              glowColor={idx === 0 ? "purple" : "cyan"}
              className={styles.projectCard}
            >
              {/*  Image */}
              <div className={styles.projectPreview}>
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className={styles.projectPreviewImage}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 48vw, 480px"
                  priority={idx < 2}
                />
                <div className={styles.projectPreviewOverlay} />
                <span className={styles.projectPreviewContent}>
                  {/* <Layers className={styles.actionIcon} /> */}
                  <span>{project.title} Preview</span>
                </span>
              </div>

              {/* Title & Desc */}
              <div>
                <span className={styles.projectBadge}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.shortDesc}</p>
              </div>

              {/* Tech Tags */}
              <div className={styles.tagGroup}>
                {project.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className={styles.tagPill}>
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className={`${styles.tagPill} ${styles.moreTag}`}>
                    +{project.techStack.length - 4} more
                  </span>
                )}
              </div>

              {/* Action Links */}
              <div className={styles.projectActions}>
                {/* Custom Inline SVG for GitHub */}
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.projectActionLink}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.projectActionIcon}
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>Repository</span>
                </a>
                <span className={styles.projectDivider}>|</span>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.projectActionLink}
                >
                  <ExternalLink className={styles.projectActionIcon} />
                  <span>Launch Project</span>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className={styles.sectionBlock}>
        <div className={styles.aboutPreview}>
          {/* Narrative */}
          <div className={styles.aboutNarrative}>
            <div>
              <h2 className={styles.aboutHeading}>About Me</h2>
            </div>
            <p className={styles.aboutText}>
              {developerProfile.bio.substring(0, 260)}... I operate at the
              intersection of AI modeling and robust full-stack engineering,
              crafting clean UI solutions that enhance user interfaces and
              perform beautifully.
            </p>
            <div className={styles.aboutAction}>
              <Link href="/about">
                <Button variant="outline" size="sm">
                  <span>Learn more journey</span>
                  <ArrowRight className={styles.actionIcon} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Transition>
  );
}
