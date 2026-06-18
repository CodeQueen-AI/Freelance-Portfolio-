"use client";

import Image from "next/image";
import { FaLaptopCode, FaRobot, FaBriefcase, FaGlobe } from "react-icons/fa";
import { Inter, Dancing_Script, Poppins } from "next/font/google";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const inter  = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const roleItems = [
  {
    icon: <FaLaptopCode />,
    category: "Development",
    title: "Full Stack Developer",
    accent: "#007979",
    active: true,
  },
  {
    icon: <FaRobot />,
    category: "Intelligence",
    title: "Agentic AI & Automation Developer",
    accent: "#0891b2",
    active: false,
  },
  {
    icon: <FaBriefcase />,
    category: "Availability",
    title: "Freelance · Remote Projects",
    accent: "#7c3aed",
    active: false,
  },
  {
    icon: <FaGlobe />,
    category: "Reach",
    title: "Working with Global Clients",
    accent: "#059669",
    active: false,
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY  = useTransform(scrollYProgress, [0, 1], [0, -55]);
  const bgY     = useTransform(scrollYProgress, [0, 1], [0,  60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="about"
      className={`relative min-h-screen overflow-hidden pt-16 md:pt-20 ${inter.className}`}
      style={{ background: "#ffffff" }}
    >

      {/* ══════════════════════════════════════════
          BACKGROUND — clean light system
      ══════════════════════════════════════════ */}

      {/* L1 — Soft directional wash: teal top-left, lavender bottom-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 75% 65% at 0% 0%,   rgba(0,121,121,0.055) 0%, transparent 65%),
            radial-gradient(ellipse 65% 55% at 100% 100%, rgba(124,58,237,0.04)  0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 50% 100%, rgba(0,121,121,0.025) 0%, transparent 60%)
          `,
        }}
        aria-hidden="true"
      />

      {/* L2 — Fine dot grid, parallax scroll */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,121,121,0.13) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 85% 80% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 85% 80% at 50% 50%, black 30%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* L3 — Subtle diagonal hatching strip, right side */}
      <div
        className="absolute inset-y-0 right-0 w-[38%] pointer-events-none hidden lg:block"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -55deg,
            rgba(0,121,121,0.04) 0px,
            rgba(0,121,121,0.04) 1px,
            transparent 1px,
            transparent 22px
          )`,
          maskImage: "linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* L4 — Thin SVG cross-hatch accent, bottom-left zone */}
      <div
        className="absolute bottom-0 left-0 w-[30%] h-[45%] pointer-events-none hidden lg:block"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(124,58,237,0.035) 0px,
            rgba(124,58,237,0.035) 1px,
            transparent 1px,
            transparent 24px
          )`,
          maskImage: "linear-gradient(to top right, rgba(0,0,0,0.5) 0%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to top right, rgba(0,0,0,0.5) 0%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* L5 — Very soft horizontal gradient band through the middle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(234,247,247,0.35) 45%, rgba(234,247,247,0.2) 65%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* L6 — Accent line below navbar */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="absolute top-20 left-0 right-0 pointer-events-none origin-left"
        aria-hidden="true"
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(0,121,121,0.35) 25%, rgba(0,121,121,0.2) 60%, transparent)",
        }}
      />

      {/* L7 — Accent line at bottom */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 pointer-events-none origin-right"
        aria-hidden="true"
        style={{
          height: "1px",
          background: "linear-gradient(to left, transparent, rgba(0,121,121,0.3) 30%, rgba(124,58,237,0.15) 65%, transparent)",
        }}
      />

      {/* L8 — Corner bracket, top-right */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-24 right-8 pointer-events-none hidden lg:block"
        width="48" height="48" viewBox="0 0 48 48" fill="none"
        aria-hidden="true"
      >
        <path d="M48 0H28M48 0V20" stroke="rgba(0,121,121,0.35)" strokeWidth="1.5" strokeLinecap="round" />
      </motion.svg>

      {/* L9 — Corner bracket, bottom-left */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-6 left-8 pointer-events-none hidden lg:block"
        width="48" height="48" viewBox="0 0 48 48" fill="none"
        aria-hidden="true"
      >
        <path d="M0 48H20M0 48V28" stroke="rgba(0,121,121,0.35)" strokeWidth="1.5" strokeLinecap="round" />
      </motion.svg>

      {/* L10 — Dot matrix cluster, top-left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 1.2 }}
        className="absolute top-28 left-10 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,121,121,0.22) 1.5px, transparent 1.5px)",
          backgroundSize: "13px 13px",
          width: "91px",
          height: "91px",
        }}
        aria-hidden="true"
      />

      {/* L11 — Dot matrix cluster, bottom-right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1.2 }}
        className="absolute bottom-14 right-10 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(124,58,237,0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "13px 13px",
          width: "78px",
          height: "78px",
        }}
        aria-hidden="true"
      />

      {/* L12 — Thin SVG geometric frame lines, top area */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1.4 }}
        className="absolute inset-0 pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
          {/* Thin vertical rule, left of center */}
          <line x1="200" y1="80" x2="200" y2="220" stroke="rgba(0,121,121,0.12)" strokeWidth="1" />
          {/* Thin vertical rule, right of center */}
          <line x1="1240" y1="680" x2="1240" y2="820" stroke="rgba(124,58,237,0.10)" strokeWidth="1" />
          {/* Horizontal rule, upper zone */}
          <line x1="80" y1="160" x2="320" y2="160" stroke="rgba(0,121,121,0.10)" strokeWidth="1" />
          {/* Horizontal rule, lower zone */}
          <line x1="1120" y1="740" x2="1360" y2="740" stroke="rgba(124,58,237,0.09)" strokeWidth="1" />
          {/* Small plus mark, top-right area */}
          <line x1="1310" y1="175" x2="1330" y2="175" stroke="rgba(0,121,121,0.18)" strokeWidth="1" />
          <line x1="1320" y1="165" x2="1320" y2="185" stroke="rgba(0,121,121,0.18)" strokeWidth="1" />
          {/* Small plus mark, bottom-left area */}
          <line x1="110"  y1="730" x2="130"  y2="730" stroke="rgba(124,58,237,0.16)" strokeWidth="1" />
          <line x1="120"  y1="720" x2="120"  y2="740" stroke="rgba(124,58,237,0.16)" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* L13 — Noise grain for paper-like texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
          opacity: 0.025,
        }}
        aria-hidden="true"
      />

      {/* ══════════════════════════════════════════
          CONTENT
      ══════════════════════════════════════════ */}
      <div
        className="relative z-10 h-full flex flex-col mx-auto max-w-7xl px-6 lg:px-10"
        style={{ paddingTop: "clamp(16px, 3vh, 40px)", paddingBottom: "clamp(12px, 2vh, 24px)" }}
      >

        {/* ── Name ── */}
        <motion.div style={{ opacity }} className="text-center shrink-0">
          <motion.h1
            initial={{ y: 110, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="leading-none tracking-tight flex justify-center gap-3 flex-wrap"
          >
            {["Sumbal", "Naz"].map((word, wi) => (
              <span
                key={wi}
                className={`${dancing.className} text-[42px] sm:text-[58px] md:text-[82px] lg:text-[96px]`}
              >
                <span className="text-[#007979]">{word[0]}</span>
                <span className="text-black">{word.slice(1)}</span>
              </span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className={`mt-1 flex justify-center ${poppins.className}`}
          >
            <span className="px-5 py-2 rounded-full border border-gray-200 text-gray-500 text-[10px] sm:text-xs md:text-sm tracking-[2px] sm:tracking-[3px] uppercase bg-white/80 shadow-sm hover:border-[#007979] hover:text-[#007979] transition-all duration-300 cursor-default">
              Full Stack &amp; Agentic AI Developer
            </span>
          </motion.div>

          {/* Mobile-only CTA — replaces the hidden lg left-column button */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className={`mt-5 flex justify-center lg:hidden ${poppins.className}`}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#007979] text-white text-sm font-medium tracking-wide hover:bg-[#005f5f] transition-colors duration-300"
            >
              Start a Collaboration
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>

      {/* ── Three-column grid — hidden side cols on mobile ── */}
        <div
          className="relative shrink-0 mt-3 grid lg:grid-cols-[1fr_1.6fr_1fr] items-center gap-6 lg:gap-8"
          style={{ minHeight: "clamp(260px, 48vh, 500px)" }}
        >

          {/* Left — bio + CTA — hidden on mobile, visible lg+ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 0.7 }}
            className="hidden lg:flex flex-col gap-6"
          >
            <motion.p
              variants={itemVariants}
              className="font-serif leading-[1.9] ext-[14.5px] font-light"
            >
              I help businesses grow through modern web development and AI-powered solutions. From idea to launch, I deliver high-quality products with speed, scalability, and performance in mind
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#007979] text-white font-medium tracking-wide overflow-hidden relative cursor-pointer w-fit ${poppins.className}`}
              >
                <span className="relative z-10">Start a Collaboration</span>
                <span className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Center — hero image: full width on mobile, centred */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center items-center relative col-span-1 lg:col-auto"
            style={{ y: imageY }}
          >
            {/* Soft teal glow under image */}
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.32, 0.18] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute rounded-full"
              style={{
                width: "clamp(300px, 46vh, 440px)",
                height: "clamp(300px, 46vh, 440px)",
                background: "radial-gradient(circle, rgba(0,121,121,0.12) 0%, transparent 72%)",
                filter: "blur(32px)",
              }}
            />
            <Image
              src="/Hero.png"
              alt="Sumbal Naz"
              width={800}
              height={800}
              priority
              className="relative w-auto object-contain drop-shadow-xl"
              style={{ height: "clamp(280px, 55vh, 520px)" }}
            />
          </motion.div>

          {/* Right — role cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 0.8 }}
            className="w-full max-w-xs mx-auto lg:max-w-none space-y-1"
          >
            {roleItems.map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 24 },
                  show:   { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="group flex items-center gap-3 py-2.5 px-1 cursor-default"
              >
                {/* Icon */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 relative"
                  style={{
                    background: `${item.accent}10`,
                    color: item.accent,
                    fontSize: "14px",
                    border: `1px solid ${item.accent}18`,
                  }}
                >
                  {item.icon}
                  {item.active && (
                    <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2" aria-label="Available">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50"
                        style={{ background: "#22c55e" }} />
                      <span className="relative inline-flex rounded-full h-2 w-2"
                        style={{ background: "#22c55e" }} />
                    </span>
                  )}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`${poppins.className} text-[9px] font-semibold tracking-[2px] uppercase mb-0.5`}
                    style={{ color: `${item.accent}80` }}
                  >
                    {item.category}
                  </p>
                  <h3 className={`${poppins.className} text-[13px] font-medium text-gray-800 leading-tight truncate`}>
                    {item.title}
                  </h3>
                </div>

                {/* Hover dot */}
                <span
                  className="w-1 h-1 rounded-full shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: item.accent }}
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          style={{ opacity }}
          className="flex justify-center pt-2 shrink-0"
        >
          <div className="flex flex-col items-center gap-2">
            <span className={`text-[10px] tracking-[4px] uppercase text-gray-400 ${poppins.className}`}>
              Scroll
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-gray-200 flex justify-center pt-1.5">
              <motion.div
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="w-[3px] h-[6px] rounded-full bg-[#007979]"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
