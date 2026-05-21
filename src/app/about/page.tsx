"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, FileText, Star, Cpu } from "lucide-react";
import { developerProfile, experiences, educations, timelineEvents } from "@/data/portfolioData";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Transition from "@/components/ui/Transition";
import styles from "./about.module.css";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <Transition>
      <div className={styles.root}>
        {/* Glow backgrounds */}
        <div className={styles.glowTop} />
        <div className={styles.glowBottom} />

        <div className={styles.section}>
          {/* HEADER */}
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                About Me
              </motion.h1>
            </div>
          </div>

        {/* INTRO BIO */}
        <div className={styles.introContent}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={styles.profileCardWrapper}
          >
            <Card
              enableTilt={true}
              glowColor="purple"
              className={styles.profileCard}
            >
              <div className={styles.profileImageWrapper}>
                <Image
                  src="/Nirada_pic-2.jpg"
                  alt="Profile picture"
                  fill
                  className={styles.profileImage}
                  sizes="(max-width: 768px) 80vw, 260px"
                />
                <div className={styles.profileOverlay} />
              </div>

              <div className={styles.profileInner}>
                <h4 className={styles.profileName}>Nirada Thongudomsiri</h4>
                <p className={styles.profileMeta}>Based in Thailand</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={styles.bioSection}
          >
            <h2 className={styles.sectionTitle}>
              Hello! I&apos;m {developerProfile.name}
            </h2>
            <div className={styles.bioText}>
              <p>{developerProfile.bio}</p>
              
            </div>

            <div className={styles.ctaRow}>
              <a href="resume-nirada.pdf" download>
                <Button variant="primary" size="sm" className={styles.buttonGap}>
                  <FileText className={styles.socialIcon} />
                  <span>Download Full Resume</span>
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* WORK EXPERIENCE */}
        <section className={styles.experienceSection}>
          <div className={styles.sectionHeader}>
            <h2>WORK EXPERIENCE</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={styles.experienceListWrapper}
          >
            {experiences.map((exp) => (
              <motion.div key={exp.id} variants={itemVariants}>
                <Card
                  enableGlow={true}
                  enableTilt={false}
                  glowColor="cyan"
                  className={styles.experienceCard}
                >
                  <div className={styles.experienceMeta}>
                    <div className={styles.experienceTitleRow}>
                      <h3 className={styles.experienceTitle}>{exp.role}</h3>
                      <span className={styles.experienceCompany}>@ {exp.company}</span>
                    </div>
                    <div className={styles.experienceDetail}>
                      <Calendar className={styles.iconSmall} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div>
                    <ul className={styles.experienceList}>
                      {exp.description.map((bullet, k) => (
                        <li key={k}>{bullet}</li>
                      ))}
                    </ul>

                    <div className={styles.skillTags}>
                      {exp.skills.map((skill) => (
                        <span key={skill} className={styles.skillTag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

       

        {/* ACADEMICS */}
        <section className={styles.educationSection}>
          <div className={styles.sectionHeader}>
            <h2>Educations</h2>
          </div>

          <div className={styles.educationGrid}>
            {educations.map((edu) => (
              <Card
                key={edu.id}
                enableGlow={true}
                glowColor="purple"
                className={styles.educationCard}
              >
                <div className={styles.educationMeta}>
                  <div className={styles.educationIcon}>
                    <GraduationCap className={styles.iconSmall} />
                  </div>
                  <div>
                    <h3 className={styles.educationTitle}>{edu.degree}</h3>
                    <p className={styles.educationSchool}>{edu.school}</p>
                    <p className={styles.educationYear}>{edu.period}</p>
                  </div>
                </div>
                <p className={styles.educationDetails}>{edu.details}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
      </div>
    </Transition>
  );
}
