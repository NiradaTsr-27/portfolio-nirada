"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
 

  return (
    <footer className={styles.footer}>
      {/* Glow highlight */}
      <div className={styles.glow} />

      <div className={styles.container}>
        {/* Info Column */}
        <div className={styles.brand}>
          <div className={styles.brandHeader}>
           
            <span>Nirada Thongudomsiri</span>
          </div>
          
        </div>

        {/* Links Column */}
        <div className={styles.linksSection}>
          <h4>Quick Nav</h4>
          <div className={styles.links}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/projects" className={styles.link}>Projects</Link>
            <Link href="/skills" className={styles.link}>Skills</Link>
            <Link href="/contact" className={`${styles.link} ${styles.contactLink}`}>Contact</Link>
          </div>
        </div>

        {/* Connect & Scroll Column */}
        <div className={styles.linksSectionEnd}>
          <div>
            <h4>Social Links</h4>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/NiradaTsr-27"
                target="_blank"
                rel="noreferrer"
                className={styles.socialIconLink}
                aria-label="GitHub Profile"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
             
            </div>
          </div>

         
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p className={styles.bottomText}>© 2026 Nirada Thongudomsiri. All rights reserved.</p>
        
      </div>
    </footer>
  );
}
