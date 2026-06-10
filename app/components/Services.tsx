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
  FaArrowRight,
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

/* ─── Data ───────────────────────────────────────────────── */
const categories = [
  {
    id: "01",
    title: "Full Stack Development",
    tagline: "From idea to production.",
    description:
      "End-to-end web products built with Next.js, React, Node.js and TypeScript — from polished frontends to robust APIs, delivered production-ready.",
    Icon: FaRocket,
    services: ["Custom Web Applications", "SaaS Platforms", "Business Websites", "Landing Pages"],
    techs: [
      { Icon: SiNextdotjs, label: "Next.js" },
      { Icon: SiReact, label: "React" },
      { Icon: SiTypescript, label: "TypeScript" },
      { Icon: SiNodedotjs, label: "Node.js" },
    ],
    accent: "#007979",
    accentDark: "#005f5f",
    lightBg: "#edfafa",
    headerBg: "linear-gradient(135deg, #edfafa 0%, #d0f5f5 100%)",
  },
  {
    id: "02",
    title: "Frontend & Design",
    tagline: "Interfaces that impress.",
    description:
      "Pixel-perfect, responsive UI/UX design and fluid animations that create memorable experiences — built in Figma, implemented with precision.",
    Icon: FaPaintBrush,
    services: ["Responsive UI/UX Design", "Modern Animations & Motion", "Design Systems", "Figma Prototyping"],
    techs: [
      { Icon: SiFigma, label: "Figma" },
      { Icon: SiReact, label: "React" },
      { Icon: SiTypescript, label: "Tailwind" },
      { Icon: FaPaintBrush, label: "Framer Motion" },
    ],
    accent: "#7c3aed",
    accentDark: "#5b21b6",
    lightBg: "#f5f3ff",
    headerBg: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
  },
  {
    id: "03",
    title: "Backend Development",
    tagline: "The engine behind the product.",
    description:
      "Scalable APIs, secure auth, database architecture and cloud infrastructure — performant backend systems that power everything your users see.",
    Icon: FaServer,
    services: ["REST & GraphQL APIs", "Database Architecture", "Authentication & Security", "Cloud Deployment"],
    techs: [
      { Icon: SiNodedotjs, label: "Node.js" },
      { Icon: SiPython, label: "Python" },
      { Icon: SiPostgresql, label: "PostgreSQL" },
      { Icon: FaServer, label: "FastAPI" },
    ],
    accent: "#0891b2",
    accentDark: "#0e7490",
    lightBg: "#f0f9ff",
    headerBg: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
  },
  {
    id: "04",
    title: "AI Agent Development",
    tagline: "Intelligent systems that act.",
    description:
      "Custom AI agents that converse, reason and execute — from smart chatbots and voice assistants to autonomous booking agents, powered by the latest LLMs.",
    Icon: FaRobot,
    services: ["AI Chatbots", "AI Voice Assistants", "Appointment Booking Agents", "Autonomous AI Agents"],
    techs: [
      { Icon: SiOpenai, label: "OpenAI" },
      { Icon: FaBrain, label: "LangChain" },
      { Icon: FaRobot, label: "Agents" },
      { Icon: FaBrain, label: "RAG" },
    ],
    accent: "#c026d3",
    accentDark: "#a21caf",
    lightBg: "#fdf4ff",
    headerBg: "linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)",
  },
  {
    id: "05",
    title: "AI Automation",
    tagline: "Less manual work. More results.",
    description:
      "End-to-end workflow automation, email pipelines and AI-powered process optimisation — so your team focuses on growth, not repetitive tasks.",
    Icon: FaBolt,
    services: ["Workflow Automation", "Email Automation", "Business Process Automation", "AI-Powered Integrations"],
    techs: [
      { Icon: SiOpenai, label: "OpenAI" },
      { Icon: SiPython, label: "Python" },
      { Icon: FaBolt, label: "n8n / Zapier" },
      { Icon: FaBrain, label: "LangChain" },
    ],
    accent: "#d97706",
    accentDark: "#b45309",
    lightBg: "#fffbeb",
    headerBg: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
  },
  {
    id: "06",
    title: "Dashboards & Analytics",
    tagline: "Data that drives decisions.",
    description:
      "Beautiful admin panels, analytics dashboards and reporting systems that turn raw data into clear, actionable insights — built for speed and clarity.",
    Icon: FaChartBar,
    services: ["Analytics Dashboards", "Admin Panels", "Data Visualisation", "Reporting Systems"],
    techs: [
      { Icon: SiReact, label: "React" },
      { Icon: SiTypescript, label: "TypeScript" },
      { Icon: SiPostgresql, label: "PostgreSQL" },
      { Icon: FaChartBar, label: "Recharts" },
    ],
    accent: "#059669",
    accentDark: "#047857",
    lightBg: "#f0fdf8",
    headerBg: "linear-gradient(135deg, #f0fdf8 0%, #d1fae5 100%)",
  },
];

/* ─── Card ───────────────────────────────────────────────── */
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
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.08 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group relative bg-white rounded-2xl overflow-hidden flex flex-col cursor-default"
      style={{
        border: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.04)",
      }}
    >
      {/* ── Hover: elevate shadow ── */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          boxShadow: `0 20px 60px ${cat.accent}18, 0 4px 20px rgba(0,0,0,0.08)`,
        }}
        aria-hidden="true"
      />

      {/* ════════════════════════════════
          HEADER ZONE — colored top half
      ════════════════════════════════ */}
      <div
        className="relative overflow-hidden px-6 pt-6 pb-5"
        style={{ background: cat.headerBg }}
      >
        {/* Subtle diagonal stripe texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              ${cat.accent}08 0px,
              ${cat.accent}08 1px,
              transparent 1px,
              transparent 14px
            )`,
          }}
          aria-hidden="true"
        />

        {/* Large blurred icon — background depth */}
        <div
          className="absolute -right-4 -bottom-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-8deg] pointer-events-none"
          aria-hidden="true"
        >
          <CatIcon size={90} style={{ color: cat.accent, opacity: 0.1 }} />
        </div>

        <div className="relative z-10">
          {/* Number + icon row */}
          <div className="flex items-center justify-between mb-4">
            <span
              className={`${grotesk.className} text-[10px] font-bold tracking-[3px] uppercase`}
              style={{ color: `${cat.accent}90` }}
            >
              {cat.id}
            </span>

            {/* Icon pill — pops on hover */}
            <motion.div
              whileHover={{ scale: 1.12, rotate: -8 }}
              transition={{ duration: 0.22 }}
              className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-sm"
              style={{
                background: "white",
                color: cat.accent,
                boxShadow: `0 2px 12px ${cat.accent}25`,
              }}
            >
              <CatIcon size={20} />
            </motion.div>
          </div>

          {/* Title */}
          <h3
            className={`${grotesk.className} font-bold leading-tight mb-1.5 transition-colors duration-300`}
            style={{
              fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
              color: cat.accentDark,
            }}
          >
            {cat.title}
          </h3>

          {/* Tagline */}
          <p
            className={`${poppins.className} text-[11px] font-medium`}
            style={{ color: `${cat.accent}99` }}
          >
            {cat.tagline}
          </p>
        </div>
      </div>

      {/* ════════════════════════════════
          CONTENT ZONE — white bottom half
      ════════════════════════════════ */}
      <div className="relative z-10 flex flex-col flex-1 px-6 pt-5 pb-6">

        {/* Thin color divider at zone boundary */}
        <div
          className="h-px -mx-6 mb-5 opacity-60"
          style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}30, transparent)` }}
          aria-hidden="true"
        />

        {/* Description */}
        <p className={`${poppins.className} text-[13px] leading-[1.85] text-gray-500 font-light mb-5`}>
          {cat.description}
        </p>

        {/* Sub-services */}
        <ul className="space-y-2.5 mb-6 flex-1">
          {cat.services.map((svc, si) => (
            <motion.li
              key={svc}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.09 + si * 0.05, duration: 0.4 }}
              className="flex items-center gap-2.5 group/item"
            >
              <FaCheckCircle
                size={13}
                style={{ color: cat.accent, flexShrink: 0 }}
                aria-hidden="true"
              />
              <span
                className={`${poppins.className} text-[12.5px] text-gray-600 font-medium group-hover/item:text-gray-900 transition-colors duration-200`}
              >
                {svc}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Bottom: tech pills + arrow */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex flex-wrap gap-1.5">
            {cat.techs.map((tech) => {
              const TIcon = tech.Icon;
              return (
                <span
                  key={tech.label}
                  className={`${poppins.className} inline-flex items-center gap-1 px-2 py-[4px] rounded-md text-[10px] font-semibold`}
                  style={{
                    background: cat.lightBg,
                    color: cat.accent,
                    border: `1px solid ${cat.accent}22`,
                  }}
                >
                  <TIcon size={9} />
                  {tech.label}
                </span>
              );
            })}
          </div>

          {/* Arrow — slides right on hover */}
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: cat.lightBg, color: cat.accent }}
            aria-hidden="true"
          >
            <FaArrowRight size={10} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────── */
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
      {/* ── Background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,121,121,0.08) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          opacity: 0.55,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: "rgba(0,121,121,0.07)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-[110px] pointer-events-none"
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
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          <circle cx="80" cy="80" r="72" stroke="#007979" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="80" cy="80" r="48" stroke="#007979" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 py-24">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
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

            {/* Stat row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.42, duration: 0.55 }}
              className="flex items-center gap-6 mt-4"
            >
              {[
                { num: "6", label: "Service areas" },
                { num: "20+", label: "Deliverables" },
                { num: "100%", label: "End-to-end" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  {i > 0 && (
                    <span className="w-px h-7 bg-gray-200" aria-hidden="true" />
                  )}
                  <div>
                    <span className={`${grotesk.className} text-xl font-bold text-[#007979] block leading-none`}>
                      {stat.num}
                    </span>
                    <span className={`${poppins.className} text-[10.5px] text-gray-400 font-light`}>
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right descriptor */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="lg:max-w-sm"
          >
            <p className={`${poppins.className} text-gray-500 text-[14px] leading-relaxed font-light`}>
              From concept to deployment — I build digital products that are fast, beautiful and built to last. Every service is delivered end-to-end, by one developer who cares about the details.
            </p>
          </motion.div>
        </div>

        {/* ── 3 × 2 grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} inView={inView} />
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 rounded-2xl overflow-hidden"
          style={{
            border: "1.5px solid rgba(0,121,121,0.13)",
            boxShadow: "0 2px 24px rgba(0,121,121,0.07)",
          }}
        >
          {/* Tinted top strip */}
          <div
            className="px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ background: "linear-gradient(135deg, #f0fafa 0%, #ffffff 60%, #f5fff8 100%)" }}
          >
            <div className="flex items-center gap-5">
              {/* Animated sparkle icon */}
              <motion.div
                animate={{ rotate: [0, 15, -10, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(0,121,121,0.1)",
                  color: "#007979",
                  border: "1.5px solid rgba(0,121,121,0.18)",
                }}
                aria-hidden="true"
              >
                <HiSparkles size={19} />
              </motion.div>
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
                boxShadow: "0 4px 20px rgba(0,121,121,0.32)",
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
          </div>
        </motion.div>

      </div>
    </section>
  );
}
