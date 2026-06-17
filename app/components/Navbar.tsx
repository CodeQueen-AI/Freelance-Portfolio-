"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMenu, FiExternalLink } from "react-icons/fi";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const navLinks = [
  { label: "Work",     href: "#work"     },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact",  href: "#contact"  },
];

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

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll while mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── Top navbar ─────────────────────────────────── */}
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
          className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-5 lg:px-10"
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: -4 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/" aria-label="Home" className="shrink-0" onClick={closeMenu}>
              <Image
                src="/Logo Img.png"
                alt="Logo"
                width={80}
                height={80}
                priority
                className="object-contain w-[68px] md:w-[80px] h-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
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

          {/* Desktop resume button */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            type="application/pdf"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-flex items-center justify-center px-6 py-3 rounded-full font-serif bg-white text-[#007979] border-2 border-[#007979] text-[14px] transition-all duration-300 hover:bg-[#007979] hover:text-white hover:shadow-[0_8px_25px_rgba(0,121,121,0.35)]"
          >
            RESUME
          </motion.a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-gray-700 hover:text-[#007979] transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{   rotate:  90,  opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90,  opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{   rotate: -90,  opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>
      {/* ── Full-screen mobile menu ─────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 flex flex-col"
            style={{ background: "#ffffff", zIndex: 9999 }}
          >
            {/* Top bar — logo + close */}
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ borderBottom: "1px solid rgba(0,121,121,0.1)" }}
            >
              <Link href="/" onClick={closeMenu}>
                <Image
                  src="/Logo Img.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </Link>
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="flex items-center justify-center w-10 h-10 rounded-xl"
                style={{ background: "rgba(0,121,121,0.08)", color: "#007979" }}
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-2 px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`${poppins.className} w-full max-w-sm flex items-center justify-between px-6 py-4 rounded-2xl text-[18px] font-semibold`}
                  style={{ color: "#111111", background: "transparent" }}
                >
                  {link.label}
                  <span style={{ color: "#007979", fontSize: "20px" }}>→</span>
                </Link>
              ))}

              <div
                className="w-full max-w-sm h-px my-2"
                style={{ background: "rgba(0,121,121,0.15)" }}
              />

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className={`${poppins.className} w-full max-w-sm flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-[16px] font-semibold text-white`}
                style={{ background: "linear-gradient(135deg, #007979, #009a9a)" }}
              >
                <FiExternalLink size={15} />
                View Resume
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
