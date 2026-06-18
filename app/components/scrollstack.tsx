"use client";

import { motion } from "framer-motion";
import { Poppins, Playfair_Display, Space_Grotesk } from "next/font/google";
import { SiNextdotjs, SiOpenai } from "react-icons/si";
import {
  FaRocket, FaBrain, FaHandshake,
  FaCheckCircle, FaBolt, FaServer,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const poppins  = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["800"], style: ["italic"] });
const grotesk  = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const VP   = { once: true, margin: "-8%" } as const;
const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0  },
  transition:  { duration: 0.65, delay, ease },
  viewport:    VP,
});

/* ════════════════════════════════════════════════════════════
   PANEL 1 — Build & Delivery Process
════════════════════════════════════════════════════════════ */
function Panel1() {
  const steps = [
    {
      num: "01", phase: "Discovery",       label: "Problem → Strategy",
      desc: "Define scope, stack, and success metrics before a single line of code.",
      tags: ["Requirements", "Roadmap"],   color: "#007979", bg: "rgba(0,121,121,0.07)",
    },
    {
      num: "02", phase: "Architecture",    label: "System Design → UI",
      desc: "Data models, API contracts, and architecture locked. Then pixel-perfect UI.",
      tags: ["API Contracts", "Figma"],    color: "#0891b2", bg: "rgba(8,145,178,0.07)",
    },
    {
      num: "03", phase: "AI Integration",  label: "Intelligence → Core",
      desc: "LLM pipelines, RAG systems, and agents embedded into the architecture.",
      tags: ["OpenAI", "RAG", "Agents"],   color: "#c026d3", bg: "rgba(192,38,211,0.07)",
    },
    {
      num: "04", phase: "Full-Stack Build",label: "Frontend + Backend",
      desc: "UI, APIs, and AI layers built in parallel. TypeScript-first, test-covered.",
      tags: ["Next.js", "Node.js"],        color: "#6366f1", bg: "rgba(99,102,241,0.07)",
    },
    {
      num: "05", phase: "Launch & Scale",  label: "Deploy → Ownership",
      desc: "CI/CD, cloud deploy, performance tuning. Full handover with docs & support.",
      tags: ["Vercel", "CI/CD"],           color: "#059669", bg: "rgba(5,150,105,0.07)",
    },
  ];

  return (
    <div
      className="md:sticky md:top-0 md:h-screen flex items-center overflow-x-hidden"
      style={{
        background: "linear-gradient(135deg, #f0fafa 0%, #ffffff 55%, #f5f0ff 100%)",
        zIndex: 11, marginBottom: "-1px",
      }}
    >
      {/* Dot grid — hidden on mobile for performance */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,121,121,0.065) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse 78% 72% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 78% 72% at 50% 50%, black 20%, transparent 100%)",
        }} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-0">

        {/* Header */}
        <div className="mb-6 md:mb-8">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "rgba(0,121,121,0.1)", color: "#007979" }}>
              <FaRocket size={10} />
            </div>
            <span className={`${poppins.className} text-[10px] tracking-[3px] uppercase font-semibold text-[#007979]`}>
              Build & Delivery Process
            </span>
          </motion.div>
          <motion.h2 {...fadeUp(0.07)}
            className={`${playfair.className} leading-[1.1]`}
            style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)", fontStyle: "italic" }}
          >
            From <span style={{ color: "#007979" }}>problem</span> to production —{" "}
            <span style={{ color: "#007979" }}>startup-grade</span> delivery.
          </motion.h2>
        </div>

        {/* Step cards — 1 col mobile, 2 col sm, 5 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {steps.map((s, si) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + si * 0.07, duration: 0.55, ease }}
              viewport={VP}
              className="relative flex flex-col rounded-xl overflow-hidden bg-white"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
            >
              <div className="h-[3px]"
                style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}40, transparent)` }} />
              <div className="flex flex-col flex-1 p-3.5">
                <div className="flex items-center justify-between mb-2">
                  <span className={`${grotesk.className} text-[9px] font-bold tracking-[2px] uppercase`}
                    style={{ color: `${s.color}80` }}>{s.num}</span>
                  <span className={`${poppins.className} text-[8.5px] font-bold uppercase tracking-[1px] px-1.5 py-0.5 rounded-full`}
                    style={{ background: s.bg, color: s.color }}>{s.phase}</span>
                </div>
                <p className={`${grotesk.className} font-bold text-gray-900 text-[12px] leading-snug mb-1.5`}>{s.label}</p>
                <p className={`${poppins.className} text-gray-400 text-[10.5px] font-light leading-relaxed flex-1 mb-2`}>{s.desc}</p>
                <div className="flex flex-wrap gap-1 mt-auto">
                  {s.tags.map(tag => (
                    <span key={tag} className={`${poppins.className} text-[8.5px] font-semibold px-1.5 py-0.5 rounded-full`}
                      style={{ background: s.bg, color: s.color }}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer strip */}
        <motion.div {...fadeUp(0.5)}
          className="mt-3 rounded-xl px-4 py-2.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
          style={{ background: "rgba(0,121,121,0.04)", border: "1px solid rgba(0,121,121,0.1)" }}
        >
          <p className={`${poppins.className} text-[11px] text-gray-500 font-light`}>
            End-to-end — frontend, backend, and AI — owned by one developer.
          </p>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ background: "#059669" }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#059669" }} />
            </span>
            <span className={`${poppins.className} text-[10.5px] font-semibold`} style={{ color: "#007979" }}>
              100% On-Time
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}


/* ════════════════════════════════════════════════════════════
   PANEL 2 — AI-Native
════════════════════════════════════════════════════════════ */
function Panel2() {
  const aiStack = [
    { Icon: SiOpenai,   label: "OpenAI",      color: "#10a37f" },
    { Icon: FaBrain,    label: "LangChain",   color: "#c026d3" },
    { Icon: FaBrain,    label: "Gemini",      color: "#4285f4" },
    { Icon: FaBolt,     label: "n8n",         color: "#d97706" },
    { Icon: FaBrain,    label: "RAG",         color: "#059669" },
    { Icon: HiSparkles, label: "AI Agents",   color: "#007979" },
  ];

  const delivers = [
    { num: "01", icon: SiNextdotjs, color: "#007979",
      title: "Full-Stack Web Apps",
      desc: "Next.js, React & Node — from landing pages to complex SaaS, built to perform.",
      tag: "SaaS · Dashboards" },
    { num: "02", icon: FaBrain, color: "#c026d3",
      title: "AI-Powered Products",
      desc: "LLM integrations, RAG pipelines & agents woven into your product from day one.",
      tag: "Chatbots · GPT APIs" },
    { num: "03", icon: FaBolt, color: "#d97706",
      title: "Workflow Automation",
      desc: "n8n & custom pipelines that eliminate manual work and unlock scale.",
      tag: "n8n · Zapier" },
    { num: "04", icon: FaServer, color: "#0891b2",
      title: "APIs & Integrations",
      desc: "Reliable REST/GraphQL backends built for speed and longevity.",
      tag: "REST · GraphQL" },
  ];

  return (
    <div
      className="md:sticky md:top-0 md:h-screen flex items-center overflow-x-hidden"
      style={{ zIndex: 13, marginBottom: "-1px" }}
    >
      {/* Background — full dark on mobile, split on desktop */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: "#0a0f14" }} />
      <div className="absolute inset-0 hidden lg:flex pointer-events-none" aria-hidden="true">
        <div className="w-1/2 h-full" style={{ background: "#0a0f14" }} />
        <div className="w-1/2 h-full" style={{ background: "#f9fafb" }} />
      </div>

      {/* Dark-side glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(192,38,211,0.18), rgba(0,121,121,0.09))" }} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 md:py-0">

        {/* On mobile: stacked; on lg: side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* LEFT — dark (always dark bg, even on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            viewport={VP}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(192,38,211,0.2)", color: "#e879f9", border: "1.5px solid rgba(192,38,211,0.35)" }}>
                <FaBrain size={13} />
              </div>
              <span className={`${poppins.className} text-[10.5px] tracking-[3px] uppercase font-semibold`} style={{ color: "#e879f9" }}>
                02 / AI-Native
              </span>
            </div>

            <h2 className={`${playfair.className} leading-[1.15] mb-4`}
              style={{ fontSize: "clamp(1.7rem, 4vw, 3.4rem)", fontStyle: "italic", color: "white" }}>
              I don&apos;t just <em style={{ color: "#e879f9", fontStyle: "normal" }}>use</em> AI.
              <br />I build <em style={{ color: "#e879f9", fontStyle: "normal" }}>with</em> it.
            </h2>

            <p className={`${poppins.className} text-[13px] leading-[1.9] font-light mb-5`}
              style={{ color: "rgba(255,255,255,0.55)" }}>
              AI isn&apos;t a feature I bolt on. It&apos;s baked into the architecture from day one.
            </p>

            <div className="flex flex-wrap gap-1.5">
              {aiStack.map((tech, ti) => {
                const TIcon = tech.Icon;
                return (
                  <motion.span key={tech.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 + ti * 0.06, duration: 0.5 }}
                    viewport={VP}
                    className={`${poppins.className} inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-semibold cursor-default`}
                    style={{ background: `${tech.color}18`, color: tech.color, border: `1px solid ${tech.color}30` }}>
                    <TIcon size={9} />{tech.label}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT — light background on lg, dark on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            viewport={VP}
            className="lg:pl-4"
          >
            <p className={`${grotesk.className} text-[10px] font-bold tracking-[3px] uppercase mb-4`}
              style={{ color: "#007979" }}>
              What I Deliver
            </p>

            <div className="space-y-2">
              {delivers.map((item, di) => {
                const DIcon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.14 + di * 0.08, duration: 0.5, ease }}
                    viewport={VP}
                    className="group relative rounded-xl overflow-hidden cursor-default"
                    style={{ background: "white", border: `1.5px solid ${item.color}18`, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[3px]"
                      style={{ background: `linear-gradient(to bottom, ${item.color}, ${item.color}50)` }} aria-hidden="true" />
                    <div className="flex items-center gap-3 px-4 py-3 pl-5">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: `${item.color}0e` }}>
                        <DIcon size={13} style={{ color: item.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`${grotesk.className} text-gray-900 font-bold text-[12.5px] leading-tight`}>{item.title}</p>
                        <p className={`${poppins.className} text-gray-400 text-[10.5px] font-light leading-snug`}>{item.desc}</p>
                      </div>
                      <span className={`${poppins.className} text-[9px] font-semibold px-2 py-0.5 rounded-md shrink-0 hidden sm:inline-flex`}
                        style={{ background: `${item.color}0c`, color: item.color }}>{item.tag}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   PANEL 3 — Partnership
════════════════════════════════════════════════════════════ */
function Panel3() {
  const chips = [
    { label: "Direct communication",       color: "#007979" },
    { label: "Full IP ownership",          color: "#0891b2" },
    { label: "Transparent pricing",        color: "#059669" },
    { label: "Post-launch support",        color: "#7c3aed" },
    { label: "No agencies",               color: "#d97706" },
    { label: "Weekly demos",              color: "#007979" },
  ];

  return (
    <div
      className="md:sticky md:top-0 md:h-screen flex items-center justify-center overflow-x-hidden"
      style={{ background: "linear-gradient(155deg, #f0fafa 0%, #ffffff 55%, #fffbf0 100%)", zIndex: 14 }}
    >
      <div className="absolute inset-0 pointer-events-none hidden sm:block"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,121,121,0.07) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 85% 80% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 80% at 50% 50%, black 20%, transparent 100%)",
        }} aria-hidden="true" />

      {/* Corner brackets — desktop only */}
      <div className="absolute top-8 left-8 pointer-events-none opacity-[0.07] hidden lg:block" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 56 56" fill="none">
          <path d="M56 0H32M56 0V24" stroke="#007979" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 pointer-events-none opacity-[0.07] hidden lg:block" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 56 56" fill="none">
          <path d="M0 56H24M0 56V32" stroke="#007979" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Content — scrollable on mobile with safe padding */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-5 sm:px-8 text-center py-12 md:py-8">

        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-5">
          <div className="w-7 h-7 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(217,119,6,0.12)", color: "#d97706", border: "1.5px solid rgba(217,119,6,0.25)" }}>
            <FaHandshake size={12} />
          </div>
          <span className={`${poppins.className} text-[10.5px] tracking-[3px] uppercase font-semibold`} style={{ color: "#d97706" }}>
            03 / Partnership
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease }}
          viewport={VP}
          className={`${playfair.className} leading-[1.1] mb-4`}
          style={{ fontSize: "clamp(1.9rem, 5vw, 4.6rem)", fontStyle: "italic" }}
        >
          One developer.{" "}
          <span style={{ color: "#d97706" }}>Full ownership.</span>
        </motion.h2>

        <motion.p {...fadeUp(0.16)}
          className={`${poppins.className} text-gray-500 text-[13px] sm:text-[14px] font-light leading-[1.85] mb-6 max-w-lg mx-auto`}
        >
          No agencies, no handoffs, no gaps. One developer who cares about
          your outcome as much as you do.
        </motion.p>

        {/* Chips — wrap tightly on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.6, ease }}
          viewport={VP}
          className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6"
        >
          {chips.map((c, ci) => (
            <motion.span
              key={ci}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 + ci * 0.04, duration: 0.35, ease }}
              viewport={VP}
              className={`${poppins.className} inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10.5px] sm:text-[11px] font-medium`}
              style={{ background: `${c.color}0c`, color: c.color, border: `1px solid ${c.color}20` }}
            >
              <FaCheckCircle size={8} />{c.label}
            </motion.span>
          ))}
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.44, duration: 0.65, ease }}
          viewport={VP}
          className={`${playfair.className} max-w-md mx-auto`}
          style={{ fontSize: "clamp(0.92rem, 1.8vw, 1.15rem)", fontStyle: "italic", color: "#555", lineHeight: 1.8 }}
        >
          &ldquo;Your success defines my reputation. Every project I take on is treated
          like my own business, with full responsibility and care.&rdquo;
        </motion.blockquote>

      </div>
    </div>
  );
}

/* ─── Section wrapper ────────────────────────────────── */
export default function ScrollStack() {
  return (
    <section id="expertise" className="hidden sm:block overflow-x-hidden">
      <Panel1 />
      <Panel2 />
      <Panel3 />
    </section>
  );
}