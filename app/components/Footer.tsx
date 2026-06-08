"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Space_Grotesk, Poppins } from "next/font/google";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiArrowUpRight,
  FiHeart,
} from "react-icons/fi";

const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SERVICES_LINKS = [
  { label: "Full Stack Development", href: "#services" },
  { label: "AI Automation", href: "#services" },
  { label: "UI/UX Design", href: "#services" },
  { label: "SaaS Products", href: "#services" },
];

const SOCIAL_LINKS = [
  { icon: FiGithub, href: "https://github.com", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FiInstagram, href: "https://instagram.com", label: "Instagram" },
];

const year = new Date().getFullYear();

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <footer
      ref={ref}
      className={`${poppins.className} relative bg-black text-white overflow-hidden`}
    >
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#007979]/60 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-[#007979]/8 blur-[80px] rounded-full pointer-events-none" />

      {/* Big CTA row */}
      <div className="relative border-b border-white/[0.06] py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-[5px] text-[#007979] font-bold mb-4"
            >
              Open to Work
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 60, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className={`${grotesk.className} text-4xl md:text-5xl lg:text-6xl font-bold leading-tight`}
              >
                Have a project?
                <br />
                <span className="text-[#007979]">Let&apos;s build it.</span>
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#007979] text-white font-semibold text-sm tracking-wide hover:shadow-[0_12px_40px_rgba(0,121,121,0.5)] transition-shadow duration-300"
            >
              Start a Project
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
                <FiArrowUpRight size={16} />
              </motion.span>
            </motion.a>
            <motion.a
              href="mailto:sumbalnaz@email.com"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 font-semibold text-sm tracking-wide hover:border-[#007979] hover:text-[#007979] transition-colors duration-300"
            >
              Send an Email
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Sumbal Naz Logo"
                width={80}
                height={80}
                className="object-contain brightness-[10] opacity-90"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-[220px]">
              Full Stack &amp; AI Developer crafting modern digital products with clean code and creative design.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-7">
              {SOCIAL_LINKS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.07 }}
                    whileHover={{ y: -4, scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-[#007979] hover:border-[#007979]/40 hover:bg-[#007979]/10 transition-all duration-200"
                  >
                    <Icon size={15} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-[4px] font-bold text-white/30 mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    <motion.span
                      className="w-0 h-px bg-[#007979] group-hover:w-4 transition-all duration-300 block"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-[4px] font-bold text-white/30 mb-6">
              Services
            </p>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    <motion.span
                      className="w-0 h-px bg-[#007979] group-hover:w-4 transition-all duration-300 block"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-[4px] font-bold text-white/30 mb-6">
              Contact
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-[2px] text-white/25 mb-1">Email</p>
                <a
                  href="mailto:sumbalnaz@email.com"
                  className="text-sm text-white/60 hover:text-[#007979] transition-colors duration-200"
                >
                  sumbalnaz@email.com
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[2px] text-white/25 mb-1">Based In</p>
                <p className="text-sm text-white/60">Pakistan · Remote Worldwide</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[2px] text-white/25 mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#007979] animate-pulse" />
                  <p className="text-sm text-[#007979] font-medium">Available for work</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="border-t border-white/[0.06] px-6 lg:px-10 py-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {year} Sumbal Naz. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-white/25 text-xs">
            Designed &amp; built with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="text-[#007979]"
            >
              <FiHeart size={11} />
            </motion.span>
            by Sumbal Naz
          </p>
          <p className="text-white/20 text-xs font-mono">
            Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
