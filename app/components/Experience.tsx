"use client";

import { Poppins, Playfair_Display, Space_Grotesk } from "next/font/google";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const poppins  = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"], style: ["italic"] });
const grotesk  = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

/* ─── Experience data ───────────────────────────────── */
const experiences = [
  {
    index: "01",
    period: "July 2025 — Dec 2025",
    duration: "6 months",
    role: "Full Stack Dveeloper",
    company: "Quick Logic",
    type: "Internship",
    status: "Completed",
    statusColor: "#059669",
    description:
      "Completed a Full Stack Developer Internship focused on building responsive web apps, backend APIs, and integrating AI-powered features. Gained hands-on experience in modern UI development, performance optimization, and AI/LLM integrations for real-world, scalable applications",
    highlights: [
      { value: "80%", label: "Performance gain" },
      { value: "20+", label: "Components built" },
      { value: "5",   label: "Projects shipped" },
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    accentColor: "#007979",
  },
  {
    index: "02",
    period: "Jan 2026 — Present",
    duration: "Ongoing",
    role: "Freelance Developer",
    company: "Independent — Global Clients",
    type: "Freelance",
    status: "Active",
    statusColor: "#007979",
    description:
    "Designing and developing intelligent multi-agent systems and AI-powered automation workflows that transform complex business processes into seamless, autonomous operations Focused on building scalable AI solutions, business workflow automation and decision-driven systems that enhance efficiency, reduce manual effort and deliver real-time intelligence for modern digital products",
    highlights: [
      { value: "10+", label: "Client projects" },
      { value: "100%", label: "On-time delivery" },
      { value: "3★",  label: "Client rating" },
    ],
    skills: ["Open AI SDK", "Python", "Javascript", "Qdrant", "Fast API", "Node.Js"],
    accentColor: "#007979",
  },
];

/* ─── Left-panel data ───────────────────────────────── */
const processSteps = [
  {
    num: "01",
    label: "Discovery",
    desc: "Goals, scope & technical requirements",
    detail: "Deep-dive into your business goals, define the tech scope, agree on timelines.",
    color: "#007979",
    bg: "rgba(0,121,121,0.08)",
  },
  {
    num: "02",
    label: "Design & Build",
    desc: "Iterative delivery with daily updates",
    detail: "Rapid UI prototyping, clean code, and daily progress so you're always in the loop.",
    color: "#0891b2",
    bg: "rgba(8,145,178,0.08)",
  },
  {
    num: "03",
    label: "Ship & Support",
    desc: "Tested, optimised & deployed on time",
    detail: "End-to-end testing, performance tuning, deployment, and post-launch support.",
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
  },
];

const valuePillars = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Fast Delivery",
    proof: "On-time, every time",
    desc: "Production-ready code shipped on schedule — no delays, no excuses.",
    accent: "#007979",
    accentBg: "rgba(0,121,121,0.07)",
    accentBorder: "rgba(0,121,121,0.18)",
    tag: "100% on-time",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Client-First",
    proof: "Clear communication",
    desc: "Transparent updates, responsive to feedback, focused on your goals.",
    accent: "#0891b2",
    accentBg: "rgba(8,145,178,0.07)",
    accentBorder: "rgba(8,145,178,0.18)",
    tag: "5★ rated",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "AI-Augmented",
    proof: "Future-ready builds",
    desc: "LLMs and intelligent automation embedded directly into your product.",
    accent: "#7c3aed",
    accentBg: "rgba(124,58,237,0.07)",
    accentBorder: "rgba(124,58,237,0.18)",
    tag: "LLM · Agents · RAG",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Quality Code",
    proof: "Typed & maintainable",
    desc: "TypeScript-first, documented, tested — built to scale with your business.",
    accent: "#059669",
    accentBg: "rgba(5,150,105,0.07)",
    accentBorder: "rgba(5,150,105,0.18)",
    tag: "TypeScript · Tests",
  },
];

const expertiseTags = [
  { label: "Next.js & React",   color: "#007979" },
  { label: "AI / LLM Systems",  color: "#7c3aed" },
  { label: "TS & JS",        color: "#35bddf" },
  { label: "Node.js & APIs",    color: "#49de1c" },
  { label: "Webhooks & Automation",      color: "#bd2793" },
  { label: "Python & FastAPI",  color: "#8b63da" },
];

/* ─── Animation variants ────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

/* ─── Experience card (right column) ───────────────── */
function ExperienceCard({ item, i }: { item: typeof experiences[0]; i: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
      className="relative group"
    >
      <div className="relative bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,121,121,0.12)] hover:border-[#007979]/20">

        {/* Animated top accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 + i * 0.1 }}
          className="absolute top-0 left-0 right-0 h-[2.5px] origin-left"
          style={{ background: `linear-gradient(90deg, ${item.accentColor}, ${item.accentColor}40, transparent)` }}
        />

        {/* Hover glow bleed */}
        <div
          className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{ background: `${item.accentColor}0d` }}
        />

        <div className="p-7 md:p-8">

          {/* ── Header row ── */}
          <div className="flex items-start justify-between mb-6 gap-4">
            <div className="flex items-center gap-3">
              <span
                className={`${grotesk.className} w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold shrink-0`}
                style={{ background: `${item.accentColor}12`, color: item.accentColor, border: `1.5px solid ${item.accentColor}25` }}
              >
                {item.index}
              </span>
              <div>
                <span className={`${poppins.className} text-[10px] font-semibold tracking-[2.5px] uppercase text-gray-400`}>
                  {item.type}
                </span>
                <p className={`${poppins.className} text-[11px] text-gray-400 mt-0.5`}>{item.period}</p>
              </div>
            </div>

            {/* Status badge */}
            <span
              className={`${poppins.className} shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[1.5px]`}
              style={{ background: `${item.statusColor}10`, color: item.statusColor, border: `1px solid ${item.statusColor}30` }}
            >
              <span
                className="w-[5px] h-[5px] rounded-full shrink-0"
                style={{
                  backgroundColor: item.statusColor,
                  boxShadow: item.status === "Active" ? `0 0 0 2px ${item.statusColor}30` : "none",
                }}
              />
              {item.status}
            </span>
          </div>

          {/* ── Role title ── */}
          <div className="mb-2 overflow-visible pb-1">
            <h3
              className={`${playfair.className} text-gray-900 leading-[1.1]`}
              style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontStyle: "italic" }}
            >
              {item.role}
            </h3>
          </div>
          <p
            className={`${poppins.className} text-sm font-semibold mb-5`}
            style={{ color: item.accentColor }}
          >
            {item.company}
          </p>

          {/* ── Description ── */}
          <p className={`${poppins.className} text-gray-500 text-[14px] leading-[1.9] mb-7 font-light`}>
            {item.description}
          </p>

          {/* ── Highlight stats ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-3 gap-3 mb-6"
          >
            {item.highlights.map((h) => (
              <motion.div
                key={h.label}
                variants={fadeUp}
                whileHover={{ y: -3, scale: 1.03 }}
                className="rounded-xl p-3.5 text-center cursor-default transition-all duration-200"
                style={{ background: `${item.accentColor}08`, border: `1px solid ${item.accentColor}18` }}
              >
                <p
                  className={`${grotesk.className} text-[1.15rem] font-bold leading-none mb-1.5`}
                  style={{ color: item.accentColor }}
                >
                  {h.value}
                </p>
                <p className={`${poppins.className} text-[10px] text-gray-400 leading-tight font-medium`}>{h.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Divider ── */}
          <div className="h-px bg-gray-100 mb-5" />

          {/* ── Skill tags ── */}
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, si) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + si * 0.06, duration: 0.35 }}
                whileHover={{ scale: 1.07, y: -2 }}
                className={`${poppins.className} px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wide cursor-default border bg-gray-50 text-gray-600 hover:bg-[#007979]/8 hover:text-[#007979] hover:border-[#007979]/30 transition-all duration-200`}
                style={{ borderColor: "#e5e7eb" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main section ──────────────────────────────────── */
export default function Experience() {
  const sectionRef   = useRef<HTMLElement>(null);
  const headerRef    = useRef<HTMLDivElement>(null);
  const leftRef      = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });
  const leftInView   = useInView(leftRef,   { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const orbitY  = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const blobY   = useTransform(scrollYProgress, [0, 1], ["0%",  "8%"]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className={`${poppins.className} relative overflow-hidden`}
      style={{ background: "linear-gradient(160deg, #f0fafa 0%, #ffffff 45%, #f5fffe 100%)" }}
    >
      {/* ═══ Background layer ═══════════════════════════ */}

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #007979 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.035,
        }}
        aria-hidden="true"
      />

      {/* Diagonal stripe accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: "repeating-linear-gradient(135deg, #007979 0px, #007979 1px, transparent 1px, transparent 40px)",
        }}
        aria-hidden="true"
      />

      {/* Parallax blurred teal orb — top right */}
      <motion.div
        style={{ y: blobY }}
        className="absolute -top-40 -right-40 w-[680px] h-[680px] rounded-full pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle at 40% 40%, rgba(0,121,121,0.09) 0%, transparent 68%)" }} />
      </motion.div>

      {/* Blurred teal orb — bottom left */}
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-[110px] pointer-events-none"
        style={{ background: "rgba(0,196,196,0.06)" }}
        aria-hidden="true"
      />

      {/* Geometric ring decoration — top-left corner */}
      <div className="absolute top-16 left-8 pointer-events-none opacity-[0.06]" aria-hidden="true">
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
          <circle cx="110" cy="110" r="100" stroke="#007979" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="110" cy="110" r="70"  stroke="#007979" strokeWidth="0.75" />
          <circle cx="110" cy="110" r="40"  stroke="#007979" strokeWidth="0.5" strokeDasharray="3 8" />
        </svg>
      </div>

      {/* Geometric ring — bottom-right corner */}
      <div className="absolute bottom-12 right-6 pointer-events-none opacity-[0.05]" aria-hidden="true">
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          <circle cx="80" cy="80" r="72" stroke="#007979" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="80" cy="80" r="48" stroke="#007979" strokeWidth="0.75" />
        </svg>
      </div>

      {/* ═══ Content ════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">

        {/* ── Section header ─────────────────────────── */}
        <div ref={headerRef} className="mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="flex items-center gap-3 mb-6"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={headerInView ? { width: 40 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-px bg-[#007979] block"
            />
            <span className={`${poppins.className} text-[11px] tracking-[5px] uppercase font-semibold text-[#007979]`}>
              Professional Journey
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="overflow-visible pb-2">
              <motion.h2
                initial={{ y: 64, opacity: 0 }}
                animate={headerInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                className={`${playfair.className} text-gray-900 leading-[1.1]`}
                style={{ fontSize: "clamp(2.8rem, 6.5vw, 5rem)", fontStyle: "italic" }}
              >
                Technical{" "}
                <span style={{ color: "#007979" }}>Experience</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="flex items-center gap-4 shrink-0"
            >
              <span className={`${poppins.className}  text-[13px] font-light max-w-[260px] leading-relaxed hidden lg:block`}>
                From first shipped interface to AI-powered global products
              </span>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`${poppins.className} inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold text-white shrink-0`}
                style={{
                  background: "linear-gradient(135deg, #007979 0%, #009999 100%)",
                  boxShadow: "0 4px 20px rgba(0,121,121,0.30)",
                }}
              >
                Hire Me
 
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* ── Two-column body ────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">

          {/* ══════════════════════════════════════════
              LEFT COLUMN — Editorial panel
          ══════════════════════════════════════════ */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -36 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >

            {/* ── 1. Hero identity card ── */}
            <div
              className="relative rounded-2xl overflow-hidden flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #f7fdfd 0%, #ffffff 60%, #f4fbfb 100%)",
                border: "1px solid rgba(0,121,121,0.09)",
                boxShadow: "0 2px 16px rgba(0,121,121,0.05), 0 1px 3px rgba(0,0,0,0.03)",
              }}
            >
              {/* Dot grid — reduced opacity so it doesn't block content */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(0,121,121,0.09) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                  opacity: 0.5,
                }}
                aria-hidden="true"
              />
              {/* Top-right soft teal glow — reduced */}
              <div
                className="absolute -top-16 -right-16 w-52 h-52 rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(0,121,121,0.04)" }}
                aria-hidden="true"
              />
              {/* Corner rings — lighter */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-[#007979]/[0.06]" aria-hidden="true" />
              <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full border border-[#007979]/[0.05]" aria-hidden="true" />

              <div className="relative z-10 p-7">
                {/* Top: name + orbit */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p className={`${poppins.className} text-[#007979] text-[10px] tracking-[3px] uppercase font-semibold mb-1.5`}>
                      Developer Profile
                    </p>
                    <h3 className={`${grotesk.className} text-gray-900 text-xl font-bold leading-tight`}>
                      Sumbal Naz
                    </h3>
                    <p className={`${poppins.className} text-[#007979] text-[13px] font-medium mt-0.5`}>
                      Full Stack &amp; Agentic AI Developer
                    </p>
                  </div>
                  {/* Orbit SVG — lighter strokes */}
                  <motion.div
                    style={{ y: orbitY }}
                    animate={{ rotate: 360 }}
                    transition={{ rotate: { duration: 18, repeat: Infinity, ease: "linear" } }}
                    className="shrink-0"
                    aria-hidden="true"
                  >
                    <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
                      <circle cx="32" cy="32" r="28" stroke="rgba(0,121,121,0.14)" strokeWidth="1" strokeDasharray="4 5" />
                      <circle cx="32" cy="32" r="18" stroke="rgba(0,121,121,0.09)" strokeWidth="1" />
                      <circle cx="32" cy="32" r="7"  fill="rgba(0,121,121,0.07)" />
                      <circle cx="32" cy="4"  r="3"  fill="rgba(0,121,121,0.5)" />
                    </svg>
                  </motion.div>
                </div>

                {/* Short professional bio */}
                <p className={`${poppins.className} text-gray-500 text-[13px] leading-[1.85] mb-5 font-light`}>
                  I build modern web apps and AI systems that solve real problems—automating tasks, improving decision-making and enhancing user experiences with fast, scalable and intelligent solutions
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2">
                  {expertiseTags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`${poppins.className} inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold`}
                      style={{
                        background: `${tag.color}0d`,
                        border: `1px solid ${tag.color}28`,
                        color: tag.color,
                      }}
                    >
                      <span
                        className="w-[5px] h-[5px] rounded-full shrink-0"
                        style={{ backgroundColor: tag.color, boxShadow: `0 0 5px ${tag.color}80` }}
                        aria-hidden="true"
                      />
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── 2. Value pillars ── */}
            <div className="grid grid-cols-2 gap-3 flex-shrink-0">
              {valuePillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 22 }}
                  animate={leftInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.14 + i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.18 } }}
                  className="group relative bg-white rounded-2xl p-4 cursor-default overflow-hidden"
                  style={{
                    border: `1px solid ${pillar.accentBorder}`,
                    boxShadow: `0 2px 14px rgba(0,0,0,0.04), inset 0 0 0 0 ${pillar.accent}`,
                  }}
                >
                  {/* Colored left-edge accent bar */}
                  <div
                    className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full transition-all duration-300 group-hover:top-0 group-hover:bottom-0 group-hover:rounded-none"
                    style={{ background: `linear-gradient(to bottom, ${pillar.accent}, ${pillar.accent}60)` }}
                    aria-hidden="true"
                  />

                  {/* Subtle bg tint that brightens on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    style={{ background: pillar.accentBg }}
                    aria-hidden="true"
                  />

                  <div className="relative z-10 pl-2">
                    {/* Icon pill */}
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110"
                      style={{ background: pillar.accentBg, color: pillar.accent, border: `1px solid ${pillar.accentBorder}` }}
                    >
                      {pillar.icon}
                    </div>

                    {/* Title */}
                    <p
                      className={`${grotesk.className} text-gray-900 text-[13px] font-bold leading-tight mb-0.5 group-hover:transition-colors duration-200`}
                      style={{ color: undefined }}
                    >
                      {pillar.title}
                    </p>

                    {/* Proof line */}
                    <p
                      className={`${poppins.className} text-[10px] font-semibold mb-2`}
                      style={{ color: pillar.accent }}
                    >
                      {pillar.proof}
                    </p>

                    {/* Description */}
                    <p className={`${poppins.className} text-[11px] leading-relaxed font-light mb-3`}>
                      {pillar.desc}
                    </p>

                    {/* Tag badge */}
                    <span
                      className={`${poppins.className} inline-flex items-center px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-[1.5px]`}
                      style={{ background: pillar.accentBg, color: pillar.accent, border: `1px solid ${pillar.accentBorder}` }}
                    >
                      {pillar.tag}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ── 3. Process steps ── */}
            <div
              className="rounded-2xl overflow-hidden flex-shrink-0"
              style={{ background: "white", border: "1px solid #e5f7f7", boxShadow: "0 2px 16px rgba(0,121,121,0.06)" }}
            >
              {/* Header */}
              <div className="px-6 py-4 flex items-center justify-between"
                style={{ background: "linear-gradient(90deg, #f0fafa 0%, #ffffff 100%)", borderBottom: "1px solid #e5f7f7" }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#007979]" aria-hidden="true" />
                  <p className={`${grotesk.className} text-gray-800 text-[13px] font-bold`}>How I Work</p>
                </div>
                <span
                  className={`${poppins.className} text-[9px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full`}
                  style={{ background: "rgba(0,121,121,0.1)", color: "#007979", border: "1px solid rgba(0,121,121,0.2)" }}
                >
                  My Process
                </span>
              </div>

              {/* Steps */}
              <div className="p-5">
                {processSteps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -18 }}
                    animate={leftInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.32 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    {/* Animated connector line between steps */}
                    {i < processSteps.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={leftInView ? { scaleY: 1 } : {}}
                        transition={{ delay: 0.45 + i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-[18px] top-[42px] w-px origin-top pointer-events-none"
                        style={{
                          height: "calc(100% - 8px)",
                          background: `linear-gradient(to bottom, ${step.color}50, transparent)`,
                        }}
                        aria-hidden="true"
                      />
                    )}
                    <div className="flex items-start gap-4 pb-4 group cursor-default">
                      {/* Numbered node */}
                      <div
                        className="w-9 h-9 flex items-center justify-center text-[11px] font-bold shrink-0 relative z-10 transition-transform duration-200 group-hover:scale-110"
                        style={{ background: step.bg, color: step.color, border: `1.5px solid ${step.color}35` }}
                      >
                        <span className={grotesk.className}>{step.num}</span>
                      </div>
                      <div className="flex-1 pt-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className={`${grotesk.className} text-gray-800 text-[13px] font-bold leading-none`}
                            style={{ color: step.color }}
                          >
                            {step.label}
                          </p>
                        </div>
                        <p className={`${poppins.className} text-[11px] leading-relaxed font-light`}>
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── 4. Philosophy quote ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="relative rounded-2xl p-6 flex-shrink-0"
              style={{ background: "white", border: "1px solid #e5e7eb", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
            >
              {/* Large quotemark */}
              <span
                className="absolute top-3 left-5 text-6xl leading-none font-serif select-none pointer-events-none"
                style={{ color: "#007979", opacity: 0.12 }}
                aria-hidden="true"
              >
                "
              </span>
              <p className={`${playfair.className} text-gray-700 text-[15px] leading-relaxed relative z-10 pl-2 pt-2`}
                style={{ fontStyle: "italic" }}
              >
                I don&apos;t just write code I solve problems, communicate
                clearly and deliver results that move businesses forward
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-gray-100" style={{ boxShadow: "0 2px 8px rgba(0,121,121,0.15)" }}>
                  <Image
                    src="/Logo Img.png"
                    alt="Sumbal Naz logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className={`${grotesk.className} text-gray-700 text-[12px] font-bold leading-none`}>Sumbal Naz</p>
                  <p className={`${poppins.className} text-[10px] mt-0.5 font-light`}>Full-Stack &amp; Agentic AI Developer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ══════════════════════════════════════════
              RIGHT COLUMN — Experience cards
          ══════════════════════════════════════════ */}
          <div className="flex flex-col gap-6">
            {experiences.map((item, i) => (
              <ExperienceCard key={i} item={item} i={i} />
            ))}

            {/* "Next chapter" teaser */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="flex items-center gap-5 rounded-2xl p-6 cursor-default"
              style={{ border: "1.5px dashed rgba(0,121,121,0.3)", background: "rgba(0,121,121,0.025)" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#007979] shrink-0"
                style={{ background: "rgba(0,121,121,0.1)", border: "1px solid rgba(0,121,121,0.25)" }}
                aria-hidden="true"
              >
                ✦
              </div>
              <div className="flex-1 min-w-0">
                <p className={`${grotesk.className} text-gray-700 text-[14px] font-semibold leading-none mb-1`}>
                  Next chapter loading…
                </p>
                <p className={`${poppins.className} text-[12px] font-light`}>
                  Taking on new client projects — let&apos;s build something great together
                </p>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className={`${poppins.className} shrink-0 px-4 py-2 rounded-full text-[12px] font-semibold text-[#007979]`}
                style={{ background: "rgba(0,121,121,0.10)", border: "1px solid rgba(0,121,121,0.25)" }}
              >
                Contact 
              </motion.a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}