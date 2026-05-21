"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, Copy, Check, Cpu, CheckCircle } from "lucide-react";
import { developerProfile } from "@/data/portfolioData";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Transition from "@/components/ui/Transition";
import styles from "./contact.module.css";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Fire celebratory confetti!
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#A855F7", "#06B6D4", "#EC4899"]
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(developerProfile.email);
    setCopied(true);

    confetti({
      particleCount: 50,
      spread: 60,
      colors: ["#A855F7", "#06B6D4"]
    });

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Transition>
      <div className={styles.root}>
        {/* Background radial overlays */}
        <div className={styles.radialTop} />
        <div className={styles.radialBottom} />

        <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.headerTitle}
          >
            Get In Touch
          </motion.h1>
          
        </div>

        {/* CORE SECTION LAYOUT */}
        <div className={styles.layoutGrid}>
          
          {/* LEFT INFO PANEL */}
          <div className={styles.contactInfo}>
            <Card enableGlow={true} glowColor="purple" className={styles.cardSpacing}>
              <div className={styles.infoBlock}>
                <h3 className={styles.sectionTitle}>
                  Let&apos;s Collaborate
                </h3>
                <p className={styles.sectionText}>
                  I&apos;m always excited to connect with fellow developers, potential collaborators, or anyone interested in chatting about tech, projects, or opportunities. Whether you have a question, want to discuss a project idea, or just want to say hi, feel free to reach out using the contact form. I look forward to hearing from you!
                </p>
              </div>

              {/* Quick details */}
              <div className={styles.dividerSection}>
                {/* Email Copy Pill */}
                <div className={styles.infoBlock}>
                  <span className={styles.detailLabel}>
                    Email Address
                  </span>
                  <div className={styles.emailRow}>
                    <span className={styles.emailText}>
                      {developerProfile.email}
                    </span>
                    <button
                      onClick={copyEmail}
                      className={styles.copyButton}
                      title="Copy email to clipboard"
                    >
                      {copied ? <Check className={styles.socialIcon} /> : <Copy className={styles.socialIcon} />}
                    </button>
                  </div>
                </div>

                <div className={styles.infoBlock}>
                  <span className={styles.detailLabel}>
                    Based In
                  </span>
                  <p className={styles.sectionText}>
                    Thailand - Available for remote work worldwide.
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className={styles.dividerSection}>
                <span className={styles.detailLabel}>
                  My Profile
                </span>
                <div className={styles.socialRow}>
                  {/* GitHub custom inline SVG */}
                  <a
                    href={developerProfile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialButton}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                  </a>
                 
                  
                </div>
              </div>
            </Card>

          </div>

          

        </div>
      </div>
      </div>
    </Transition>
  );
}
