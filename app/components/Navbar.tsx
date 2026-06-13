"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiBriefcase, FiZap, FiGrid, FiLayers,
  FiMail, FiFileText,
} from "react-icons/fi";

/* ─── Nav items ─────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Work",     href: "#work"     },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact",  href: "#contact"  },
];

const BOTTOM_NAV = [
  { label: "Work",     href: "#work",     Icon: FiBriefcase },
  { label: "Skills",   href: "#skills",   Icon: FiZap       },
  { label: "Projects", href: "#projects", Icon: FiGrid      },
  { label: "Services", href: "#services", Icon: FiLayers    },
  { label: "Contact",  href: "#contact",  Icon: FiMail      },
  { label: "Resume",   href: "/resume.pdf.pdf", Icon: FiFileText, external: true },
];

/* ─── Desktop nav link ───────────────────────────────── */
function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="font-mono group relative inline-block text-[15px] font-medium transition-colors duration-300 hover:text-[#007979]"
    >
      {label}
      <span
        aria-hidden="true"
        className="absolute left-0 -bottom-[6px] flex w-full flex-col gap-[3px] pointer-events-none"
      >
        <span className="block h-[1.5px] bg-[#007979] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
        <span className="block h-[1.5px] bg-[#007979] scale-x-0 origin-left transition-transform duration-500 delay-75 group-hover:scale-x-100" />
      </span>
    </Link>
  );
}

/* ─── Main component ─────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Track active section for bottom nav indicator */
  const updateActive = useCallback(() => {
    const sectionIds = ["work", "skills", "projects", "services", "contact"];
    let current = "";
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.45) current = `#${id}`;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
    return () => window.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  return (
    <>
      {/* ══════════════════════════════════════════
          TOP NAVBAR — visible on md+ only
      ══════════════════════════════════════════ */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,121,121,0.08)] border-b border-gray-100"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10"
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: -4 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/" aria-label="Home" className="shrink-0">
              <Image
                src="/Logo Img.png"
                alt="Logo"
                width={90}
                height={90}
                priority
                className="object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
              >
                <NavLink label={link.label} href={link.href} />
              </motion.li>
            ))}
          </ul>

          {/* Resume button — desktop */}
          <motion.a
            href="/resume.pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-flex items-center justify-center px-6 py-3 rounded-full font-serif bg-white text-[#007979] border-2 border-[#007979] text-[14px] transition-all duration-300 hover:bg-[#007979] hover:text-white hover:shadow-[0_8px_25px_rgba(0,121,121,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007979] focus-visible:ring-offset-2"
          >
            RESUME
          </motion.a>
        </nav>
      </motion.header>

      {/* ══════════════════════════════════════════
          BOTTOM NAV — mobile only (< md)
      ══════════════════════════════════════════ */}
      <motion.nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Mobile Navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50"
        style={{
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(0,121,121,0.1)",
          boxShadow: "0 -4px 24px rgba(0,0,0,0.08)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <ul className="flex items-stretch justify-around px-2 h-[64px]">
          {BOTTOM_NAV.map((item, i) => {
            const Icon = item.Icon;
            const isActive = activeSection === item.href;
            const isResume = item.label === "Resume";

            return (
              <li key={item.href} className="flex-1">
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center justify-center gap-[3px] w-full h-full relative"
                  aria-label={item.label}
                >
                  {/* Active pill indicator */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="bottom-nav-pill"
                        initial={{ opacity: 0, scaleX: 0.5 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0.5 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-[6px] w-5 h-[3px] rounded-full"
                        style={{ background: "#007979" }}
                        aria-hidden="true"
                      />
                    )}
                  </AnimatePresence>

                  {/* Icon */}
                  <motion.span
                    animate={{
                      color: isActive ? "#007979" : isResume ? "#007979" : "#9ca3af",
                      scale: isActive ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center"
                    style={{ width: 22, height: 22 }}
                  >
                    <Icon size={isActive ? 20 : 19} strokeWidth={isActive ? 2.2 : 1.8} />
                  </motion.span>

                  {/* Label */}
                  <motion.span
                    animate={{
                      color: isActive ? "#007979" : isResume ? "#007979" : "#9ca3af",
                      fontWeight: isActive ? 700 : 500,
                    }}
                    transition={{ duration: 0.2 }}
                    className="text-[9.5px] leading-none tracking-wide"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </>
  );
}
