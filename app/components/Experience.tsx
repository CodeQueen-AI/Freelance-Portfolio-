"use client";

import { Poppins, Playfair_Display, Space_Grotesk } from "next/font/google";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const poppins  = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"], style: ["italic"] });
const grotesk  = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

/* ─── Experience data ───────────────────────────────── */
const experiences = [
  {
    index: "01",
    period: "Nov 2025 — Dec 2025",
    duration: "2 months",
    role: "Frontend Developer",
    company: "Tech Studio",
    type: "Contract",
    status: "Completed",
    statusColor: "#059669",
    description:
      "Built responsive, high-performance web interfaces using modern frontend technologies. Delivered pixel-perfect UI components, improved Lighthouse scores by 40%, and established a reusable component library adopted across three projects.",
    highlights: [
      { value: "40%", label: "Performance gain" },
      { value: "12+", label: "Components built" },
      { value: "3",   label: "Projects shipped" },
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
      "Building modern web applications and AI-powered products for global clients. Managing the full project lifecycle — from scoping and design to development and deployment — with clear communication and on-time delivery.",
    highlights: [
      { value: "10+", label: "Client projects" },
      { value: "100%", label: "On-time delivery" },
      { value: "5★",  label: "Client rating" },
    ],
    skills: ["Next.js", "React", "Node.js", "AI / LLM", "Python", "Tailwind CSS"],
    accentColor: "#007979",
  },
];

/* ─── Left-panel data ───────────────────────────────── */
const processSteps = [
  { num: "01", label: "Discovery",  desc: "Goals, scope & technical requirements" },
  { num: "02", label: "Build",      desc: "Iterative delivery with daily updates" },
  { num: "03", label: "Ship",       desc: "Tested, optimised & deployed on time"  },
];

const valuePillars = [
  { icon: "⚡", title: "Fast Delivery",   desc: "Production-ready code, shipped on schedule" },
  { icon: "🎯", title: "Client-First",    desc: "Transparent communication throughout" },
  { icon: "🧠", title: "AI-Augmented",   desc: "LLMs & automation built into every product" },
  { icon: "🔒", title: "Quality Code",   desc: "Typed, maintainable & built to last" },
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-36">

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
              <span className={`${poppins.className} text-gray-400 text-[13px] font-light max-w-[260px] leading-relaxed hidden lg:block`}>
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
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>→</motion.span>
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
                background: "linear-gradient(135deg, #007979 0%, #005f5f 100%)",
                boxShadow: "0 16px 56px rgba(0,121,121,0.28)",
              }}
            >
              {/* Mesh lines inside the card */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
                aria-hidden="true"
              />
              {/* Corner circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-white/10" aria-hidden="true" />
              <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full border border-white/10" aria-hidden="true" />

              <div className="relative z-10 p-7">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p className={`${poppins.className} text-white/60 text-[11px] tracking-[3px] uppercase mb-1`}>
                      Developer Profile
                    </p>
                    <h3 className={`${grotesk.className} text-white text-xl font-bold leading-tight`}>
                      Sumbal Naz
                    </h3>
                    <p className={`${poppins.className} text-[#a7e8e8] text-[13px] mt-0.5`}>
                      Full Stack &amp; AI Developer
                    </p>
                  </div>
                  {/* Orbit SVG decoration */}
                  <motion.div
                    style={{ y: orbitY }}
                    className="shrink-0 opacity-80"
                    aria-hidden="true"
                  >
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                      <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 5" />
                      <circle cx="32" cy="32" r="18" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                      <circle cx="32" cy="32" r="7"  fill="rgba(255,255,255,0.25)" />
                      {/* orbital dot */}
                      <circle cx="32" cy="4"  r="3" fill="rgba(167,232,232,0.9)" />
                    </svg>
                  </motion.div>
                </div>

                {/* Mini stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "2+",  label: "Years" },
                    { value: "10+", label: "Projects" },
                    { value: "33+", label: "Technologies" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl py-3 text-center"
                      style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.12)" }}
                    >
                      <p className={`${grotesk.className} text-white text-lg font-bold leading-none`}>{s.value}</p>
                      <p className={`${poppins.className} text-white/55 text-[10px] mt-1 tracking-wide`}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── 2. Value pillars grid ── */}
            <div className="grid grid-cols-2 gap-4 flex-shrink-0">
              {valuePillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={leftInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, boxShadow: "0 12px 36px rgba(0,121,121,0.10)" }}
                  className="bg-white rounded-2xl p-4 border border-gray-100 cursor-default transition-all duration-250"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                >
                  <span className="text-2xl block mb-2.5" aria-hidden="true">{pillar.icon}</span>
                  <p className={`${grotesk.className} text-gray-900 text-[13px] font-bold leading-tight mb-1`}>
                    {pillar.title}
                  </p>
                  <p className={`${poppins.className} text-gray-400 text-[11px] leading-snug font-light`}>
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ── 3. Process steps ── */}
            <div
              className="rounded-2xl overflow-hidden flex-shrink-0"
              style={{ background: "#f8fffe", border: "1px solid #e0f5f5" }}
            >
              <div className="px-6 py-4 border-b border-[#e0f5f5] flex items-center justify-between">
                <p className={`${grotesk.className} text-gray-800 text-[13px] font-bold`}>How I Work</p>
                <span
                  className={`${poppins.className} text-[9px] font-bold uppercase tracking-[2px] px-2.5 py-1 rounded-full`}
                  style={{ background: "#007979", color: "white" }}
                >
                  Process
                </span>
              </div>
              <div className="p-5 space-y-0 divide-y divide-[#edf8f8]">
                {processSteps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -16 }}
                    animate={leftInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.35 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-4 py-3.5 group cursor-default"
                  >
                    <span
                      className={`${grotesk.className} w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold shrink-0`}
                      style={{ background: "#007979", color: "white" }}
                    >
                      {step.num}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className={`${grotesk.className} text-gray-800 text-[13px] font-semibold leading-none`}>{step.label}</p>
                      <p className={`${poppins.className} text-gray-400 text-[11px] mt-0.5 font-light truncate`}>{step.desc}</p>
                    </div>
                    <span className="text-gray-200 group-hover:text-[#007979] transition-colors text-sm" aria-hidden="true">→</span>
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
                I don&apos;t just write code. I solve problems, communicate
                clearly, and deliver results that move businesses forward.
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0" style={{ background: "#007979" }}>
                  S
                </div>
                <p className={`${poppins.className} text-gray-500 text-[11px] font-medium`}>Sumbal Naz, Freelance Developer</p>
              </div>
            </motion.div>

            {/* ── 5. Availability badge ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.52, duration: 0.55 }}
              className="flex items-center gap-4 px-5 py-4 rounded-2xl flex-shrink-0"
              style={{ background: "rgba(5,150,105,0.05)", border: "1px solid rgba(5,150,105,0.2)" }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" aria-hidden="true" />
              <div>
                <p className={`${grotesk.className} text-emerald-700 text-[13px] font-bold leading-none`}>
                  Available for new projects
                </p>
                <p className={`${poppins.className} text-emerald-600/60 text-[11px] mt-0.5 font-light`}>
                  Open to freelance &amp; full-time roles worldwide
                </p>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`${poppins.className} ml-auto shrink-0 px-4 py-2 rounded-full text-[11px] font-bold text-white`}
                style={{ background: "#059669" }}
              >
                Let&apos;s Talk
              </motion.a>
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
                <p className={`${poppins.className} text-gray-400 text-[12px] font-light`}>
                  Taking on new client projects — let&apos;s build something great together.
                </p>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className={`${poppins.className} shrink-0 px-4 py-2 rounded-full text-[12px] font-semibold text-[#007979]`}
                style={{ background: "rgba(0,121,121,0.10)", border: "1px solid rgba(0,121,121,0.25)" }}
              >
                Contact →
              </motion.a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
