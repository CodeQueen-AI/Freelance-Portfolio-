"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Poppins, Playfair_Display, Space_Grotesk } from "next/font/google";
import {
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiOpenai,
  SiFigma,
  SiPython,
  SiPostgresql,
} from "react-icons/si";
import {
  FaBrain,
  FaRocket,
  FaServer,
  FaPaintBrush,
  FaChartBar,
  FaRobot,
  FaBolt,
  FaCheckCircle,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["800"],
  style: ["italic"],
});
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* ─────────────────────────────────────────────────────────
   SERVICE CATEGORIES
   Organised as: what you build → how it looks → the engine
   → intelligent agents → process automation → data & reporting
───────────────────────────────────────────────────────── */
const categories = [
  /* ── 01 Full Stack Development ────────────────────────── */
  {
    id: "01",
    title: "Full Stack Development",
    tagline: "From idea to production.",
    description:
      "Complete web products built end-to-end — custom applications, scalable SaaS platforms, business websites and high-converting landing pages, all delivered production-ready.",
    Icon: FaRocket,
    services: [
      "Custom Web Applications",
      "SaaS Platforms",
      "Business Websites",
      "Landing Pages",
    ],
    techs: [
      { Icon: SiNextdotjs, label: "Next.js" },
      { Icon: SiReact, label: "React" },
      { Icon: SiTypescript, label: "TypeScript" },
      { Icon: SiNodedotjs, label: "Node.js" },
    ],
    accent: "#007979",
    lightBg: "#edfafa",
    borderColor: "rgba(0,121,121,0.14)",
    accentGradient: "linear-gradient(90deg, #007979, #00c4c4 60%, transparent)",
  },

  /* ── 02 Frontend & Design ──────────────────────────────── */
  {
    id: "02",
    title: "Frontend & Design",
    tagline: "Interfaces that impress.",
    description:
      "Pixel-perfect, responsive UI/UX design and fluid animations that create memorable experiences — built in Figma, implemented with precision in code.",
    Icon: FaPaintBrush,
    services: [
      "Responsive UI/UX Design",
      "Modern Animations & Motion",
      "Design Systems",
      "Figma Prototyping",
    ],
    techs: [
      { Icon: SiFigma, label: "Figma" },
      { Icon: SiReact, label: "React" },
      { Icon: SiTypescript, label: "Tailwind" },
      { Icon: FaPaintBrush, label: "Framer Motion" },
    ],
    accent: "#7c3aed",
    lightBg: "#f5f3ff",
    borderColor: "rgba(124,58,237,0.14)",
    accentGradient: "linear-gradient(90deg, #7c3aed, #a78bfa 60%, transparent)",
  },

  /* ── 03 Backend Development ────────────────────────────── */
  {
    id: "03",
    title: "Backend Development",
    tagline: "The engine behind the product.",
    description:
      "Scalable APIs, secure authentication, database architecture and cloud infrastructure — clean, performant backend systems that power everything your users see.",
    Icon: FaServer,
    services: [
      "REST & GraphQL APIs",
      "Database Architecture",
      "Authentication & Security",
      "Cloud Deployment",
    ],
    techs: [
      { Icon: SiNodedotjs, label: "Node.js" },
      { Icon: SiPython, label: "Python" },
      { Icon: SiPostgresql, label: "PostgreSQL" },
      { Icon: FaServer, label: "FastAPI" },
    ],
    accent: "#0891b2",
    lightBg: "#f0f9ff",
    borderColor: "rgba(8,145,178,0.14)",
    accentGradient: "linear-gradient(90deg, #0891b2, #38bdf8 60%, transparent)",
  },

  /* ── 04 AI Agent Development ───────────────────────────── */
  {
    id: "04",
    title: "AI Agent Development",
    tagline: "Intelligent systems that act.",
    description:
      "Custom AI agents that converse, reason and execute tasks — from smart chatbots and voice assistants to autonomous booking agents, powered by the latest LLMs.",
    Icon: FaRobot,
    services: [
      "AI Chatbots",
      "AI Voice Assistants",
      "Appointment Booking Agents",
      "Autonomous AI Agents",
    ],
    techs: [
      { Icon: SiOpenai, label: "OpenAI" },
      { Icon: FaBrain, label: "LangChain" },
      { Icon: FaRobot, label: "Agents" },
      { Icon: FaBrain, label: "RAG" },
    ],
    accent: "#c026d3",
    lightBg: "#fdf4ff",
    borderColor: "rgba(192,38,211,0.14)",
    accentGradient: "linear-gradient(90deg, #c026d3, #e879f9 60%, transparent)",
  },

  /* ── 05 AI Automation ──────────────────────────────────── */
  {
    id: "05",
    title: "AI Automation",
    tagline: "Less manual work. More results.",
    description:
      "End-to-end workflow automation, email pipelines and AI-powered process optimisation — so your team can focus on growth instead of repetitive tasks.",
    Icon: FaBolt,
    services: [
      "Workflow Automation",
      "Email Automation",
      "Business Process Automation",
      "AI-Powered Integrations",
    ],
    techs: [
      { Icon: SiOpenai, label: "OpenAI" },
      { Icon: SiPython, label: "Python" },
      { Icon: FaBolt, label: "n8n / Zapier" },
      { Icon: FaBrain, label: "LangChain" },
    ],
    accent: "#d97706",
    lightBg: "#fffbeb",
    borderColor: "rgba(217,119,6,0.14)",
    accentGradient: "linear-gradient(90deg, #d97706, #fbbf24 60%, transparent)",
  },

  /* ── 06 Dashboards & Analytics ─────────────────────────── */
  {
    id: "06",
    title: "Dashboards & Analytics",
    tagline: "Data that drives decisions.",
    description:
      "Beautiful admin panels, analytics dashboards and reporting systems that transform raw data into clear, actionable insights — built for speed and clarity.",
    Icon: FaChartBar,
    services: [
      "Analytics Dashboards",
      "Admin Panels",
      "Data Visualisation",
      "Reporting Systems",
    ],
    techs: [
      { Icon: SiReact, label: "React" },
      { Icon: SiTypescript, label: "TypeScript" },
      { Icon: SiPostgresql, label: "PostgreSQL" },
      { Icon: FaChartBar, label: "Recharts" },
    ],
    accent: "#059669",
    lightBg: "#f0fdf8",
    borderColor: "rgba(5,150,105,0.14)",
    accentGradient: "linear-gradient(90deg, #059669, #34d399 60%, transparent)",
  },
];

/* ─── Category card ──────────────────────────────────────── */
function CategoryCard({
  cat,
  index,
  inView,
}: {
  cat: (typeof categories)[number];
  index: number;
  inView: boolean;
}) {
  const CatIcon = cat.Icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group relative bg-white rounded-2xl overflow-hidden flex flex-col cursor-default"
      style={{
        border: `1.5px solid ${cat.borderColor}`,
        boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
      }}
    >
      {/* Animated top accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.25 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-[3px] origin-left"
        style={{ background: cat.accentGradient }}
        aria-hidden="true"
      />

      {/* Hover corner glow */}
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `${cat.accent}0e` }}
        aria-hidden="true"
      />

      {/* Watermark icon */}
      <div
        className="absolute -bottom-3 -right-3 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
        aria-hidden="true"
      >
        <CatIcon size={88} style={{ color: cat.accent, opacity: 0.04 }} />
      </div>

      <div className="relative z-10 flex flex-col flex-1 p-6 lg:p-7">

        {/* ── Header: number badge + icon ── */}
        <div className="flex items-start justify-between mb-5">
          <span
            className={`${grotesk.className} w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold shrink-0`}
            style={{
              background: `${cat.accent}12`,
              color: cat.accent,
              border: `1.5px solid ${cat.accent}25`,
            }}
          >
            {cat.id}
          </span>

          <motion.div
            whileHover={{ scale: 1.1, rotate: -6 }}
            transition={{ duration: 0.22 }}
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: cat.lightBg,
              border: `1.5px solid ${cat.accent}30`,
              color: cat.accent,
            }}
          >
            <CatIcon size={18} />
          </motion.div>
        </div>

        {/* ── Title ── */}
        <h3
          className={`${grotesk.className} font-bold text-gray-900 leading-tight mb-1`}
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}
        >
          {cat.title}
        </h3>

        {/* ── Tagline ── */}
        <p
          className={`${poppins.className} text-[10.5px] font-semibold tracking-widest uppercase mb-4`}
          style={{ color: cat.accent }}
        >
          {cat.tagline}
        </p>

        {/* ── Divider ── */}
        <div
          className="h-px mb-4"
          style={{ background: `linear-gradient(90deg, ${cat.accent}22, transparent)` }}
          aria-hidden="true"
        />

        {/* ── Description ── */}
        <p className={`${poppins.className} text-[13px] leading-[1.85] text-gray-500 font-light mb-5`}>
          {cat.description}
        </p>

        {/* ── Sub-services checklist ── */}
        <ul className="space-y-2 mb-6 flex-1">
          {cat.services.map((svc) => (
            <li key={svc} className="flex items-center gap-2.5">
              <FaCheckCircle
                size={11}
                style={{ color: cat.accent, opacity: 0.75, flexShrink: 0 }}
                aria-hidden="true"
              />
              <span
                className={`${poppins.className} text-[12.5px] text-gray-600 font-medium`}
              >
                {svc}
              </span>
            </li>
          ))}
        </ul>

        {/* ── Tech pills ── */}
        <div className="flex flex-wrap gap-1.5">
          {cat.techs.map((tech) => {
            const TIcon = tech.Icon;
            return (
              <span
                key={tech.label}
                className={`${poppins.className} inline-flex items-center gap-1.5 px-2.5 py-[5px] rounded-full text-[10px] font-semibold tracking-wide`}
                style={{
                  background: cat.lightBg,
                  color: cat.accent,
                  border: `1px solid ${cat.accent}28`,
                }}
              >
                <TIcon size={10} />
                {tech.label}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main section ───────────────────────────────────────── */
export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      id="services"
      className={`${poppins.className} relative overflow-hidden`}
      style={{ background: "linear-gradient(160deg, #f0fafa 0%, #ffffff 50%, #f8f8ff 100%)" }}
    >
      {/* ── Background decoration ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,121,121,0.09) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          opacity: 0.5,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(0,121,121,0.07)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(124,58,237,0.04)" }}
        aria-hidden="true"
      />
      {/* Geometric ring — top left */}
      <div className="absolute top-20 left-10 pointer-events-none opacity-[0.05]" aria-hidden="true">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="#007979" strokeWidth="1" strokeDasharray="5 7" />
          <circle cx="100" cy="100" r="60" stroke="#007979" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="30" stroke="#007979" strokeWidth="0.5" strokeDasharray="3 6" />
        </svg>
      </div>
      {/* Geometric ring — bottom right */}
      <div className="absolute bottom-16 right-10 pointer-events-none opacity-[0.04]" aria-hidden="true">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
          <circle cx="75" cy="75" r="68" stroke="#007979" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="75" cy="75" r="44" stroke="#007979" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 py-24">

        {/* ── Section header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">

          {/* Left */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={inView ? { width: 36 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-px bg-[#007979] block"
                aria-hidden="true"
              />
              <span className={`${poppins.className} text-[11px] tracking-[5px] uppercase font-semibold text-[#007979]`}>
                What I Offer
              </span>
            </motion.div>

            {/* Heading */}
            <div className="overflow-visible pb-3">
              <motion.h2
                initial={{ y: 60, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className={`${playfair.className} text-gray-900 leading-[1.1]`}
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontStyle: "italic" }}
              >
                My{" "}
                <span className="relative inline-block" style={{ color: "#007979" }}>
                  Services
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 -bottom-1 w-full h-[4px] rounded-full origin-left"
                    style={{ background: "linear-gradient(90deg, #007979, #00c4c4)" }}
                    aria-hidden="true"
                  />
                </span>
              </motion.h2>
            </div>

            {/* Category pills */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.42, duration: 0.55 }}
              className="flex flex-wrap gap-2 mt-2"
            >
              {categories.map((c) => {
                const CIcon = c.Icon;
                return (
                  <span
                    key={c.id}
                    className={`${poppins.className} inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10.5px] font-semibold`}
                    style={{
                      background: c.lightBg,
                      color: c.accent,
                      border: `1px solid ${c.accent}25`,
                    }}
                  >
                    <CIcon size={10} />
                    {c.title.split(" ")[0]}
                  </span>
                );
              })}
            </motion.div>
          </div>

          {/* Right — descriptor */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="lg:max-w-xs space-y-4"
          >
            <p className={`${poppins.className} text-gray-500 text-[14px] leading-relaxed font-light`}>
              From concept to deployment — I build digital products that are fast, beautiful and built to last.
            </p>
            <div className="flex items-center gap-3">
              <div className="text-center">
                <span className={`${grotesk.className} text-3xl font-bold text-[#007979] block`}>6</span>
                <span className={`${poppins.className} text-gray-400 text-[11px] font-light`}>services</span>
              </div>
              <div className="w-px h-10 bg-gray-200" aria-hidden="true" />
              <div className="text-center">
                <span className={`${grotesk.className} text-3xl font-bold text-[#007979] block`}>20+</span>
                <span className={`${poppins.className} text-gray-400 text-[11px] font-light`}>deliverables</span>
              </div>
              <div className="w-px h-10 bg-gray-200" aria-hidden="true" />
              <div className="text-center">
                <span className={`${grotesk.className} text-3xl font-bold text-[#007979] block`}>1</span>
                <span className={`${poppins.className} text-gray-400 text-[11px] font-light`}>developer</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── 3×2 card grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} inView={inView} />
          ))}
        </div>

        {/* ── CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{
            background: "linear-gradient(135deg, #f0fafa 0%, #ffffff 100%)",
            border: "1.5px solid rgba(0,121,121,0.12)",
            boxShadow: "0 2px 20px rgba(0,121,121,0.06)",
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(0,121,121,0.1)", color: "#007979" }}
              aria-hidden="true"
            >
              <HiSparkles size={18} />
            </div>
            <div>
              <p className={`${grotesk.className} text-gray-900 font-bold text-[1.05rem] leading-snug`}>
                Ready to build something great?
              </p>
              <p className={`${poppins.className} text-gray-400 text-[13px] mt-0.5 font-light`}>
                Let&apos;s talk about your project — no commitment, just a conversation.
              </p>
            </div>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className={`${poppins.className} group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[13px] font-semibold text-white shrink-0 relative overflow-hidden cursor-pointer`}
            style={{
              background: "linear-gradient(135deg, #007979 0%, #009999 100%)",
              boxShadow: "0 4px 20px rgba(0,121,121,0.30)",
            }}
          >
            <span className="relative z-10">Start a Project</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              →
            </motion.span>
            <span className="absolute inset-0 bg-black/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 rounded-full" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
