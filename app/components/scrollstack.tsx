"use client";

import React from "react";
import { motion } from "framer-motion";
import { Poppins, Playfair_Display, Space_Grotesk } from "next/font/google";
import {
  SiNextdotjs, SiReact, SiTypescript,
  SiNodedotjs, SiPython, SiPostgresql, SiOpenai,
} from "react-icons/si";
import {
  FaRocket, FaShieldAlt, FaBrain, FaHandshake,
  FaCheckCircle, FaBolt, FaCode, FaServer,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const poppins  = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["800"], style: ["italic"] });
const grotesk  = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

/* ─── Shared viewport config — fire once, generous margin ── */
const VP = { once: true, margin: "-15%" } as const;

/* ─── Shared fade-up variant ─────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  whileInView:{ opacity: 1, y: 0  },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  viewport:   VP,
});

/* ═══════════════════════════════════════════════════════════
   PANEL 1 — Speed
═══════════════════════════════════════════════════════════ */
function Panel1() {
  const metrics = [
    { label: "Avg. project delivery", value: "2–4 wks", bar: 0.85 },
    { label: "On-time delivery rate", value: "100%",    bar: 1.0  },
    { label: "Revision rounds needed", value: "1–2",    bar: 0.3  },
  ];

  return (
    <div
      className="sticky top-0 h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f0fafa 0%, #ffffff 60%, #edfdf9 100%)", zIndex: 11 }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,121,121,0.09) 1px, transparent 1px)", backgroundSize: "38px 38px" }}
        aria-hidden="true" />
      {/* Ambient glow */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: "rgba(0,121,121,0.07)" }} aria-hidden="true" />

      {/* Panel enter — single fade from below, fires once */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={VP}
        className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: stat + bars */}
          <div>
            {/* Eyebrow */}
            <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(0,121,121,0.12)", color: "#007979", border: "1.5px solid rgba(0,121,121,0.25)" }}>
                <FaRocket size={15} />
              </div>
              <span className={`${poppins.className} text-[11px] tracking-[4px] uppercase font-semibold text-[#007979]`}>
                01 / Speed & Delivery
              </span>
            </motion.div>

            {/* Giant outlined number */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={VP}
              className="mb-1"
            >
              <span
                className={`${grotesk.className} font-bold leading-none select-none block`}
                style={{
                  fontSize: "clamp(6rem, 18vw, 16rem)",
                  color: "transparent",
                  WebkitTextStroke: "2px rgba(0,121,121,0.16)",
                  lineHeight: 0.85,
                }}
                aria-hidden="true"
              >
                2–4
              </span>
              <span className={`${poppins.className} text-gray-400 text-[13px] font-light tracking-widest uppercase ml-1`}>
                weeks to launch
              </span>
            </motion.div>

            {/* Metric bars — staggered but short delays */}
            <div className="space-y-4 mt-8">
              {metrics.map((m, i) => (
                <motion.div key={m.label} {...fadeUp(0.15 + i * 0.08)}>
                  <div className="flex justify-between mb-1.5">
                    <span className={`${poppins.className} text-[12px] text-gray-500 font-medium`}>{m.label}</span>
                    <span className={`${grotesk.className} text-[12px] font-bold text-[#007979]`}>{m.value}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.bar * 100}%` }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                      viewport={VP}
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, #007979, #00c4c4)" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: copy */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={VP}
              className={`${playfair.className} text-gray-900 leading-[1.15] mb-5`}
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", fontStyle: "italic" }}
            >
              Your idea, live<br />
              <span style={{ color: "#007979" }}>in weeks — not months.</span>
            </motion.h2>

            <motion.p {...fadeUp(0.2)}
              className={`${poppins.className} text-gray-500 text-[15px] leading-[1.9] font-light max-w-md mb-8`}
            >
              I move fast without cutting corners. From kickoff call to deployed product,
              my clients consistently launch in 2–4 weeks — on time, every time.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3">
              {["Kickoff → Launch", "Daily Updates", "No Surprises", "100% On-Time"].map((badge) => (
                <span key={badge}
                  className={`${poppins.className} inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold`}
                  style={{ background: "rgba(0,121,121,0.08)", color: "#007979", border: "1px solid rgba(0,121,121,0.2)" }}
                >
                  <FaCheckCircle size={9} />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <PanelDots active={0} accent="#007979" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PANEL 2 — Quality
═══════════════════════════════════════════════════════════ */
function Panel2() {
  const qualities = [
    { icon: FaCode,      label: "TypeScript-first",     sub: "Fully typed, zero surprises"      },
    { icon: FaShieldAlt, label: "Secure by default",    sub: "Auth, CORS, validation built in"  },
    { icon: FaBolt,      label: "Performance-tuned",    sub: "90+ Lighthouse scores"            },
    { icon: FaServer,    label: "Scalable architecture", sub: "Grows with your business"        },
  ];

  return (
    <div
      className="sticky top-0 h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #faf5ff 0%, #ffffff 50%, #f0f9ff 100%)", zIndex: 12 }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(124,58,237,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        aria-hidden="true" />
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(124,58,237,0.06)" }} aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={VP}
        className="relative z-10 w-full max-w-6xl mx-auto px-8 lg:px-16"
      >
        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-3 mb-8">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(124,58,237,0.1)", color: "#7c3aed", border: "1.5px solid rgba(124,58,237,0.2)" }}>
            <FaShieldAlt size={15} />
          </div>
          <span className={`${poppins.className} text-[11px] tracking-[4px] uppercase font-semibold`} style={{ color: "#7c3aed" }}>
            02 / Code Quality
          </span>
        </motion.div>

        {/* Statement */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={VP}
            className={`${playfair.className} leading-[1.1]`}
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontStyle: "italic" }}
          >
            <span style={{ color: "#111" }}>Code that won&apos;t </span>
            <span style={{ color: "#7c3aed" }}>haunt you at 3am.</span>
          </motion.h2>

          <motion.p {...fadeUp(0.2)}
            className={`${poppins.className} text-gray-400 text-[14px] font-light mt-5 max-w-md mx-auto leading-relaxed`}
          >
            Clean, documented, maintainable code that your future self — and future team — will thank you for.
          </motion.p>
        </div>

        {/* Quality cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {qualities.map((q, qi) => {
            const QIcon = q.icon;
            return (
              <motion.div
                key={q.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + qi * 0.07, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                viewport={VP}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-5 cursor-default"
                style={{ border: "1.5px solid rgba(124,58,237,0.12)", boxShadow: "0 2px 16px rgba(124,58,237,0.06)" }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(124,58,237,0.1)", color: "#7c3aed" }}>
                  <QIcon size={15} />
                </div>
                <p className={`${grotesk.className} text-gray-900 text-[13px] font-bold leading-snug mb-1`}>{q.label}</p>
                <p className={`${poppins.className} text-gray-400 text-[11px] font-light leading-snug`}>{q.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <PanelDots active={1} accent="#7c3aed" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PANEL 3 — AI-Native
═══════════════════════════════════════════════════════════ */
function Panel3() {
  const aiStack = [
    { Icon: SiOpenai,   label: "OpenAI GPT-4",  color: "#10a37f" },
    { Icon: FaBrain,    label: "LangChain",     color: "#c026d3" },
    { Icon: FaBrain,    label: "Gemini 1.5",    color: "#4285f4" },
    { Icon: FaBolt,     label: "n8n Workflows", color: "#d97706" },
    { Icon: FaBrain,    label: "RAG Systems",   color: "#059669" },
    { Icon: HiSparkles, label: "AI Agents",     color: "#007979" },
  ];

  const webStack = [
    { Icon: SiNextdotjs,  label: "Next.js",    color: "#000"     },
    { Icon: SiReact,      label: "React",      color: "#61dafb"  },
    { Icon: SiTypescript, label: "TypeScript", color: "#3178c6"  },
    { Icon: SiNodedotjs,  label: "Node.js",    color: "#339933"  },
    { Icon: SiPython,     label: "Python",     color: "#3776ab"  },
    { Icon: SiPostgresql, label: "PostgreSQL", color: "#336791"  },
  ];

  return (
    <div className="sticky top-0 h-screen flex items-center overflow-hidden" style={{ zIndex: 13 }}>
      {/* Split background — purely CSS, no animation */}
      <div className="absolute inset-0 flex pointer-events-none" aria-hidden="true">
        <div className="w-1/2 h-full" style={{ background: "#0a0f14" }} />
        <div className="w-1/2 h-full" style={{ background: "#f5f9ff" }} />
      </div>

      {/* Static glow on dark side — no pulsing loop */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(192,38,211,0.25), rgba(0,121,121,0.15))" }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT: dark copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={VP}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(192,38,211,0.2)", color: "#e879f9", border: "1.5px solid rgba(192,38,211,0.35)" }}>
                <FaBrain size={15} />
              </div>
              <span className={`${poppins.className} text-[11px] tracking-[4px] uppercase font-semibold`} style={{ color: "#e879f9" }}>
                03 / AI-Native
              </span>
            </div>

            <h2
              className={`${playfair.className} leading-[1.15] mb-6`}
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontStyle: "italic", color: "white" }}
            >
              I don&apos;t just{" "}
              <em style={{ color: "#e879f9", fontStyle: "normal" }}>use</em> AI.
              <br />
              I build{" "}
              <em style={{ color: "#e879f9", fontStyle: "normal" }}>with</em> it.
            </h2>

            <p className={`${poppins.className} text-[14px] leading-[1.9] font-light mb-7`}
              style={{ color: "rgba(255,255,255,0.55)" }}>
              From LLM-powered chatbots to autonomous agents and workflow automation
              — AI isn&apos;t a feature I bolt on. It&apos;s built into the architecture from day one.
            </p>

            {/* AI pills — simple stagger, no scale bounce */}
            <div className="flex flex-wrap gap-2">
              {aiStack.map((tech, ti) => {
                const TIcon = tech.Icon;
                return (
                  <motion.span
                    key={tech.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 + ti * 0.06, duration: 0.5 }}
                    viewport={VP}
                    className={`${poppins.className} inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold cursor-default`}
                    style={{ background: `${tech.color}18`, color: tech.color, border: `1px solid ${tech.color}30` }}
                  >
                    <TIcon size={10} />
                    {tech.label}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT: light stack grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={VP}
          >
            <p className={`${grotesk.className} text-[11px] font-bold tracking-[3px] uppercase mb-5`} style={{ color: "#007979" }}>
              Full Delivery Stack
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {webStack.map((tech, ti) => {
                const TIcon = tech.Icon;
                return (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + ti * 0.07, duration: 0.6 }}
                    viewport={VP}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 cursor-default"
                    style={{ border: `1.5px solid ${tech.color}22`, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${tech.color}14` }}>
                      <TIcon size={14} style={{ color: tech.color }} />
                    </div>
                    <span className={`${poppins.className} text-[12.5px] font-semibold text-gray-700`}>{tech.label}</span>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              viewport={VP}
              className="mt-4 rounded-xl p-4 flex items-center gap-3"
              style={{ background: "rgba(0,121,121,0.07)", border: "1px solid rgba(0,121,121,0.18)" }}
            >
              <HiSparkles size={16} style={{ color: "#007979", flexShrink: 0 }} />
              <p className={`${poppins.className} text-[12.5px] text-gray-600 font-medium leading-snug`}>
                Frontend + Backend + AI — all from one developer who owns the full stack.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <PanelDots active={2} accent="#c026d3" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PANEL 4 — Partnership
═══════════════════════════════════════════════════════════ */
function Panel4() {
  const steps = [
    { num: "01", label: "Discovery Call",   desc: "We align on goals, budget and timeline — no fluff, just clarity.",       color: "#007979" },
    { num: "02", label: "Build & Iterate",  desc: "Daily updates, weekly demos. You see progress from day one.",            color: "#0891b2" },
    { num: "03", label: "Launch & Support", desc: "Deployed, tested and handed over — with docs and post-launch support.",  color: "#059669" },
  ];

  const stats = [
    { value: "30+",  label: "Projects shipped" },
    { value: "5★",   label: "Client rating"    },
    { value: "2+",   label: "Years experience" },
    { value: "100%", label: "Ownership given"  },
  ];

  return (
    <div
      className="sticky top-0 h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f0fafa 0%, #ffffff 55%, #fffbf0 100%)", zIndex: 14 }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,121,121,0.08) 1px, transparent 1px)", backgroundSize: "38px 38px" }}
        aria-hidden="true" />
      <div className="absolute top-16 right-16 pointer-events-none opacity-[0.06]" aria-hidden="true">
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none">
          <circle cx="120" cy="120" r="110" stroke="#007979" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="120" cy="120" r="75"  stroke="#007979" strokeWidth="0.75" />
          <circle cx="120" cy="120" r="40"  stroke="#007979" strokeWidth="0.5" strokeDasharray="3 8" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={VP}
        className="relative z-10 w-full max-w-6xl mx-auto px-8 lg:px-16"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-3 mb-7">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(217,119,6,0.12)", color: "#d97706", border: "1.5px solid rgba(217,119,6,0.25)" }}>
              <FaHandshake size={15} />
            </div>
            <span className={`${poppins.className} text-[11px] tracking-[4px] uppercase font-semibold`} style={{ color: "#d97706" }}>
              04 / Partnership
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={VP}
            className={`${playfair.className} leading-[1.1]`}
            style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)", fontStyle: "italic" }}
          >
            <span style={{ color: "#111" }}>One developer. </span>
            <span style={{ color: "#d97706" }}>Full ownership.</span>
          </motion.h2>

          <motion.p {...fadeUp(0.2)}
            className={`${poppins.className} text-gray-400 text-[14px] font-light mt-5 max-w-lg mx-auto leading-relaxed`}
          >
            No agencies, no handoffs, no communication gaps. You work directly with me — one accountable developer
            who cares about your outcome as much as you do.
          </motion.p>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {steps.map((step, si) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + si * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              viewport={VP}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="relative bg-white rounded-2xl p-5 overflow-hidden cursor-default"
              style={{ border: `1.5px solid ${step.color}18`, boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${step.color}, ${step.color}40, transparent)` }}
                aria-hidden="true" />
              <div className="flex items-center gap-3 mb-3">
                <span className={`${grotesk.className} text-[11px] font-bold tracking-[2.5px]`}
                  style={{ color: `${step.color}80` }}>
                  {step.num}
                </span>
                <span className="flex-1 h-px" style={{ background: `${step.color}18` }} aria-hidden="true" />
              </div>
              <p className={`${grotesk.className} text-gray-900 font-bold text-[14px] mb-1.5`}>{step.label}</p>
              <p className={`${poppins.className} text-gray-400 text-[12px] font-light leading-relaxed`}>{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stat strip + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          viewport={VP}
          className="rounded-2xl px-6 py-4 flex flex-wrap items-center justify-around gap-4"
          style={{ background: "linear-gradient(135deg, #f0fafa, #ffffff)", border: "1.5px solid rgba(0,121,121,0.13)", boxShadow: "0 2px 20px rgba(0,121,121,0.07)" }}
        >
          {stats.map((stat, si) => (
            <div key={si} className="flex items-center gap-3">
              {si > 0 && <div className="w-px h-8 bg-gray-200 hidden sm:block" aria-hidden="true" />}
              <div className="text-center">
                <span className={`${grotesk.className} text-2xl font-bold text-[#007979] block leading-none`}>{stat.value}</span>
                <span className={`${poppins.className} text-[10.5px] text-gray-400 font-light`}>{stat.label}</span>
              </div>
            </div>
          ))}
          <a
            href="#contact"
            className={`${poppins.className} inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-[13px] font-semibold text-white cursor-pointer transition-transform duration-200 hover:scale-[1.03] hover:-translate-y-0.5`}
            style={{ background: "linear-gradient(135deg, #007979, #009999)", boxShadow: "0 4px 20px rgba(0,121,121,0.3)" }}
          >
            Let&apos;s Work Together →
          </a>
        </motion.div>
      </motion.div>

      <PanelDots active={3} accent="#d97706" />
    </div>
  );
}

/* ─── Dot indicator ──────────────────────────────────────── */
function PanelDots({ active, accent }: { active: number; accent: string }) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="rounded-full"
          style={{
            width:      i === active ? 24 : 6,
            height:     6,
            background: i === active ? accent : "rgba(0,0,0,0.12)",
            opacity:    i === active ? 1 : 0.35,
            transition: "all 0.3s ease",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────── */
export default function ScrollStack() {
  return (
    <section id="expertise" aria-label="Why work with me">
      <Panel1 />
      <Panel2 />
      <Panel3 />
      <Panel4 />
    </section>
  );
}
