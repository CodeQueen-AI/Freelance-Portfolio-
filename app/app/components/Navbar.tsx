"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Link href="/" aria-label="Home" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={90}
              height={90}
              priority
              className="object-contain"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
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

        {/* Resume Button */}
        <motion.a
          href="/resume.pdf"
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block h-[2px] w-6 bg-black origin-center transition-all"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-[2px] w-6 bg-black"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block h-[2px] w-6 bg-black origin-center transition-all"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-base font-medium hover:text-[#007979] transition"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
