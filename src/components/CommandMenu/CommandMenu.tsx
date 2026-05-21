"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Monitor, Moon, Sun, Mail, FileText, ChevronRight, CornerDownLeft } from "lucide-react";
import confetti from "canvas-confetti";
import styles from "./CommandMenu.module.css";

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const menuItems = [
    {
      title: "Navigation",
      items: [
        { name: "Go to Home Page", route: "/", desc: "Return to landing center" },
        { name: "Go to About Page", route: "/about", desc: "Read biography and history" },
        { name: "Go to Projects Grid", route: "/projects", desc: "Browse full-stack work" },
        { name: "Go to Skills Showcase", route: "/skills", desc: "Check language proficiency" },
        { name: "Go to Contact", route: "/contact", desc: "Shoot over a message" },
      ]
    },
    {
      title: "Actions",
      items: [
        {
          name: "Copy Developer Email",
          action: () => {
            navigator.clipboard.writeText("alex.thorne.dev@gmail.com");
            setCopied(true);
            
            // Satisfying confetti explosion
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
              colors: ["#A855F7", "#06B6D4", "#EC4899"]
            });

            setTimeout(() => setCopied(false), 2000);
          },
          desc: "Copied straight to clipboard",
          icon: Mail,
          statusText: copied ? "Copied! 🎉" : "Press Enter"
        },
        {
          name: "Download Resume",
          action: () => {
            window.open("#", "_blank");
          },
          desc: "PDF format, optimized for ATS",
          icon: FileText
        },
        {
          name: "Toggle Dark Mode",
          action: () => {
            const html = document.documentElement;
            if (html.classList.contains("light")) {
              html.classList.remove("light");
              html.classList.add("dark");
            } else {
              html.classList.remove("dark");
              html.classList.add("light");
            }
          },
          desc: "Swap between light & dark backgrounds",
          icon: Moon
        }
      ]
    }
  ];

  // Filter items
  const filtered = menuItems.map(section => {
    const items = section.items.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase()) || 
      item.desc.toLowerCase().includes(search.toLowerCase())
    );
    return { ...section, items };
  }).filter(section => section.items.length > 0);

  const handleSelect = (item: any) => {
    if (item.route) {
      router.push(item.route);
      setIsOpen(false);
    } else if (item.action) {
      item.action();
    }
    setSearch("");
  };

  return (
    <>
      {/* Visual shortcut reminder in bottom corner */}
      <div className={styles.triggerWrapper}>
        <button
          onClick={() => setIsOpen(true)}
          className={styles.trigger}
        >
          <span>Command Center</span>
          <kbd className={styles.kbd}>
            Ctrl K
          </kbd>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className={styles.dialogWrapper}>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className={styles.backdrop}
            />

            {/* Dialog Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ type: "spring", duration: 0.3 }}
              className={styles.panel}
            >
              {/* Search Bar */}
              <div className={styles.searchBar}>
                <Search className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={styles.searchInput}
                  autoFocus
                />
                <button 
                  onClick={() => setIsOpen(false)}
                  className={styles.escapeButton}
                >
                  ESC
                </button>
              </div>

              {/* Suggestions List */}
              <div className={styles.suggestions}>
                {filtered.length === 0 ? (
                  <div className={styles.emptyState}>
                    No commands matched your query.
                  </div>
                ) : (
                  filtered.map((section, idx) => (
                    <div key={idx} className={styles.sectionGroup}>
                      <h4 className={styles.sectionTitle}>
                        {section.title}
                      </h4>
                      {section.items.map((item: any, key) => (
                        <div
                          key={key}
                          onClick={() => handleSelect(item)}
                          className={styles.commandItem}
                        >
                          <div className={styles.itemLeft}>
                            <div className={styles.iconWrapper}>
                              {item.icon ? (
                                <item.icon className="w-4 h-4" />
                              ) : (
                                <ChevronRight className="w-4 h-4" />
                              )}
                            </div>
                            <div>
                              <p className={styles.itemTitle}>
                                {item.name}
                              </p>
                              <p className={styles.itemDesc}>
                                {item.desc}
                              </p>
                            </div>
                          </div>

                          <div className={styles.status}>
                            {item.statusText ? (
                              <span className={styles.statusBadge}>
                                {item.statusText}
                              </span>
                            ) : (
                              <>
                                <CornerDownLeft className="w-3.5 h-3.5 opacity-0" />
                                <span className="text-[10px] font-mono">Go</span>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
