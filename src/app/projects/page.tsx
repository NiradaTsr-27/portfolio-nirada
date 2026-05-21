"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Layers,
  ExternalLink,
  X,
  Cpu,
  CheckCircle,
} from "lucide-react";
import { projects, Project } from "@/data/portfolioData";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import Transition from "@/components/ui/Transition";
import styles from "./projects.module.css";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Web", "AI", "Mobile", "Game Dev"];

  // Filter and search logic
  const filtered = projects.filter((project) => {
    const matchesFilter = filter === "All" || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesFilter && matchesSearch;
  });

  return (
    <Transition>
      <div className={styles.root}>
        {/* Glow backgrounds */}
        <div className={styles.spotlightLeft} />
        <div className={styles.spotlightRight} />

        <div className={styles.container}>
          {/* HEADER */}
          <div className={styles.header}>
           
            <motion.div className={styles.headerContent}>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Projects
              </motion.h1>
             
            </motion.div>
          </div>

          <section className={styles.controlsSection}>
            <div className={styles.controlsWrapper}>
              <div className={styles.searchBar}>
                <Search className={styles.iconSmall} />
                <input
                  type="text"
                  placeholder=""
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className={styles.clearButton}
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className={styles.filters}>
                {categories.map((category) => {
                  const isActive = filter === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setFilter(category)}
                      className={`${styles.filterBtn} ${isActive ? styles.activeFilter : ""}`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeCategoryIndicator"
                          className={styles.activeCategoryIndicator}
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 28,
                          }}
                        />
                      )}
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* PROJECTS GRID SECTION */}
          <motion.div layout className={styles.projectGrid}>
            <AnimatePresence mode="popLayout">
              {filtered.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={styles.emptyState}
                >
                  <div className={styles.emptyIconWrapper}>
                    <X className={styles.iconLarge} />
                  </div>
                  <h3>No projects found</h3>
                  <p>
                    No matches found for &quot;{searchQuery}&quot;. Try modifying your
                    search keywords or resetting categories.
                  </p>
                  <div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setFilter("All");
                        setSearchQuery("");
                      }}
                      className={styles.resetBtn}
                    >
                      Reset Explorer
                    </Button>
                  </div>
                </motion.div>
              ) : (
                filtered.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ type: "spring", duration: 0.4 }}
                    onClick={() => setSelectedProject(project)}
                    className={styles.projectCardWrapper}
                  >
                    <Card
                      enableTilt={true}
                      glowColor={project.category === "AI" ? "cyan" : "purple"}
                      className={styles.projectCard}
                    >
                      {/* Visual Placeholders */}
                      <div className={styles.imagePlaceholder}>
                        <div className={styles.imageGradient} />
                        <span className={styles.imageLabel}>
                          <Layers className={styles.iconSmall} />
                          <span>{project.title} Preview</span>
                        </span>
                      </div>

                      {/* Metadata Header */}
                      <div className={styles.cardContent}>
                        <div className={styles.cardMetaRow}>
                          <span className={styles.categoryBadge}>
                            {project.category}
                          </span>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.shortDesc}</p>
                      </div>

                      {/* Tech Badges */}
                      <div className={styles.techList}>
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span key={tech} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className={styles.moreTechTag}>
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Launch Indicators */}
                      <div className={styles.launchRow}>
                        <span>Explore details</span>
                        <ExternalLink className={styles.iconSmall} />
                      </div>
                    </Card>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>

          {/* MODAL PROJECT DETAILS */}
          <Modal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            title={selectedProject?.title}
          >
            {selectedProject && (
              <div className={styles.modalContent}>
                {/* Virtual Large Photo Area */}
                <div className={styles.modalImage}>
                  <div className={styles.imageGradient} />
                  <span className={styles.modalImageLabel}>
                    <Layers className={styles.iconMedium} />
                    <span>{selectedProject.title} Details</span>
                  </span>
                </div>

                {/* Tag and Links */}
                <div className={styles.modalTagRow}>
                  <span className={styles.modalCategory}>
                    {selectedProject.category}
                  </span>

                  <div className={styles.modalLinks}>
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.modalLink}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={styles.iconSmall}
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      <span>View Repository</span>
                    </a>
                    <span className={styles.modalSeparator}>|</span>
                    <a
                      href={selectedProject.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.modalLink}
                    >
                      <ExternalLink className={styles.iconSmall} />
                      <span>Launch Demo</span>
                    </a>
                  </div>
                </div>

                {/* Technical Description */}
                <div className={styles.sectionBlock}>
                  <h4 className={styles.modalSectionTitle}>Description</h4>
                  <p className={styles.modalText}>{selectedProject.fullDesc}</p>
                </div>

                {/* Features bullets */}
                <div className={styles.sectionBlock}>
                  <h4 className={styles.modalSectionTitle}>Key Features</h4>
                  <ul className={styles.featureList}>
                    {selectedProject.features.map((feature, key) => (
                      <li key={key} className={styles.featureItem}>
                        <CheckCircle className={styles.featureIcon} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Engineering Challenges block */}
                <div className={styles.challengeBlock}>
                  <h4 className={styles.challengeTitle}>
                    <Layers className={styles.iconSmall} />
                    <span>Engineering Challenges & Solutions</span>
                  </h4>
                  <p className={styles.challengeText}>
                    {selectedProject.challenges}
                  </p>
                </div>

                {/* Technical stack list */}
                <div className={styles.sectionBlock}>
                  <h4 className={styles.modalSectionTitle}>
                    Technologies Applied
                  </h4>
                  <div className={styles.techStackList}>
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className={styles.techTagModal}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </Transition>
  );
}
