"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : styles.transparent}`}>
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink}>
            
            <span className={styles.logoText}>Portfolio</span>
          </Link>

          {/* Desktop Links */}
          <div className={styles.links}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={link.name === "Projects" ? handleProjectsClick : undefined}
                  className={`${styles.link} ${isActive ? styles.activeLink : ""}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className={styles.activeNavIndicator}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={styles.hamburgerButton}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className={styles.iconSize} /> : <Menu className={styles.iconSize} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={styles.mobilePanel}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.name === "Projects") {
                      handleProjectsClick(e);
                    }
                    setIsOpen(false);
                  }}
                  className={`${styles.mobileLink} ${isActive ? styles.activeMobileLink : ""}`}
                >
                  <span>{link.name}</span>
                  {isActive && <div className={styles.activeDot} />}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
