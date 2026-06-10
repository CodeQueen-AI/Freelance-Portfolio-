"use client";

import React from "react";
import { motion } from "framer-motion";
import { Poppins, Playfair_Display, Space_Grotesk } from "next/font/google";
import { SiNextdotjs, SiOpenai } from "react-icons/si";
import {
  FaRocket, FaShieldAlt, FaBrain, FaHandshake,
  FaCheckCircle, FaBolt, FaCode, FaServer,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const poppins  = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["800"], style: ["italic"] });
const grotesk  = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const VP   = { once: true, margin: "-10%" } as const;
const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0  },
  transition:  { duration: 0.65, delay, ease },
  viewport:    VP,
});

/* ════════════════════════════════════════════════════════════
   PANEL 1 — Speed & Delivery  (world-class product roadmap)
════════════════════════════════════════════════════════════ */
function Panel1() {
  const phases = [
    {
      num: "01", label: "Discovery", timing: "Day 1", color: "#007979",
      sub: "Goals, scope & stack aligned",
      tasks: ["Stakeholder alignment", "Tech stack decision", "Project brief locked"],
      status: "complete",
    },
    {
      num: "02", label: "Design", timing: "Week 1", color: "#0891b2",
      sub: "Architecture & wireframes locked",
      tasks: ["System architecture", "UI wireframes", "Component library"],
      status: "complete",
    },
    {
      num: "03", label: "Build", timing: "Wk 2–3", color: "#059669",
      sub: "Daily updates, iterative delivery",
      tasks: ["Feature development", "Daily standups", "Iterative QA"],
      status: "active",
    },
    {
      num: "04", label: "Launch", timing: "Week 4", color: "#7c3aed",
      sub: "QA, deploy & docs handover",
      tasks: ["Final QA pass", "Production deploy", "Docs & handover"],
      status: "upcoming",
    },
  ];

  return (
    <div
      className="sticky top-0 h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f0fafa 0%, #ffffff 55%, #f5f0ff 100%)", zIndex: 11, marginBottom: "-1px" }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,121,121,0.065) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse 78% 72% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 78% 72% at 50% 50%, black 20%, transparent 100%)",
        }} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 lg:px-12">

        {/* ── Top bar: eyebrow + headline + badge in one row ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            viewport={VP}
          >
            <div className="inline-flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(0,121,121,0.1)", color: "#007979", border: "1.5px solid rgba(0,121,121,0.18)" }}>
                <FaRocket size={11} />
              </div>
              <span className={`${poppins.className} text-[10.5px] tracking-[4px] uppercase font-semibold text-[#007979]`}>
                01 / Speed & Delivery
              </span>
            </div>
            <h2
              className={`${playfair.className} leading-[1.1]`}
              style={{ fontSize: "clamp(1.9rem, 3.8vw, 3.4rem)", fontStyle: "italic" }}
            >
              Your idea, live{" "}
              <span style={{ color: "#007979" }}>in weeks —</span>{" "}not months.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            viewport={VP}
            className="flex items-center gap-3 shrink-0"
          >
            {/* Live indicator */}
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ background: "#059669" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#059669" }} />
              </span>
              <span className={`${poppins.className} text-[11px] text-gray-500 font-medium`}>Active project</span>
            </span>
            <span className="w-px h-4 bg-gray-200" aria-hidden="true" />
            <span
              className={`${poppins.className} inline-flex items-center gap-1.5 text-[11px] font-semibold`}
              style={{ color: "#007979" }}
            >
              <FaCheckCircle size={10} />
              100% On-Time
            </span>
          </motion.div>
        </div>

        {/* ── Roadmap board: 4 phase columns ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {phases.map((p, pi) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + pi * 0.1, duration: 0.7, ease }}
              viewport={VP}
              className="relative flex flex-col rounded-2xl overflow-hidden"
              style={{
                background: "#fff",
                border: `1.5px solid ${p.color}1a`,
                boxShadow: p.status === "active"
                  ? `0 4px 28px ${p.color}18, 0 2px 8px rgba(0,0,0,0.04)`
                  : "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              {/* Coloured header band */}
              <div
                className="px-4 pt-4 pb-3"
                style={{ background: `linear-gradient(135deg, ${p.color}0d 0%, ${p.color}06 100%)` }}
              >
                {/* Phase number + timing */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`${grotesk.className} text-[10px] font-bold tracking-[2px] uppercase`}
                    style={{ color: `${p.color}90` }}
                  >{p.num}</span>
                  <span
                    className={`${poppins.className} text-[9.5px] font-semibold px-2 py-0.5 rounded-md`}
                    style={{ background: `${p.color}12`, color: p.color }}
                  >{p.timing}</span>
                </div>

                {/* Phase title */}
                <p className={`${grotesk.className} font-bold text-gray-900 text-[15px] leading-tight mb-1`}>
                  {p.label}
                </p>
                <p className={`${poppins.className} text-gray-400 text-[11px] font-light leading-snug`}>
                  {p.sub}
                </p>
              </div>

              {/* Thin top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: `linear-gradient(90deg, ${p.color} 0%, ${p.color}40 100%)` }}
                aria-hidden="true"
              />

              {/* Task list */}
              <div className="px-4 py-3 flex flex-col gap-2 flex-1">
                {p.tasks.map((task, ti) => (
                  <div key={ti} className="flex items-center gap-2.5">
                    <div
                      className="w-[18px] h-[18px] rounded-md flex items-center justify-center shrink-0"
                      style={{
                        background: p.status === "upcoming" ? "rgba(0,0,0,0.04)" : `${p.color}12`,
                      }}
                    >
                      {p.status === "complete" && (
                        <FaCheckCircle size={9} style={{ color: p.color }} />
                      )}
                      {p.status === "active" && ti === 0 && (
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: p.color }} />
                      )}
                      {p.status === "upcoming" && (
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                      )}
                      {p.status === "active" && ti > 0 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                      )}
                    </div>
                    <span
                      className={`${poppins.className} text-[11.5px] font-${p.status === "complete" ? "medium" : "light"} leading-snug`}
                      style={{ color: p.status === "upcoming" ? "#bbb" : p.status === "complete" ? "#555" : "#333" }}
                    >{task}</span>
                  </div>
                ))}
              </div>

              {/* Status footer */}
              <div
                className="px-4 py-2.5 flex items-center gap-2"
                style={{ borderTop: `1px solid ${p.color}10` }}
              >
                {p.status === "complete" && (
                  <>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#059669" }} />
                    <span className={`${poppins.className} text-[10px] font-semibold`} style={{ color: "#059669" }}>Completed</span>
                  </>
                )}
                {p.status === "active" && (
                  <>
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: p.color }} />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: p.color }} />
                    </span>
                    <span className={`${poppins.className} text-[10px] font-semibold`} style={{ color: p.color }}>In Progress</span>
                  </>
                )}
                {p.status === "upcoming" && (
                  <>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                    <span className={`${poppins.className} text-[10px] font-semibold text-gray-400`}>Upcoming</span>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom timeline bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6, ease }}
          viewport={VP}
          className="mt-4 rounded-xl px-5 py-3 flex items-center gap-3 overflow-hidden relative"
          style={{ background: "rgba(0,121,121,0.04)", border: "1px solid rgba(0,121,121,0.1)" }}
        >
          {/* Progress fill */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 1.2, ease }}
            viewport={VP}
            className="absolute left-0 top-0 bottom-0 origin-left"
            style={{ width: "60%", background: "linear-gradient(90deg, rgba(0,121,121,0.1), rgba(0,121,121,0.04))" }}
            aria-hidden="true"
          />
          <span className={`${poppins.className} text-[11px] text-gray-500 font-medium relative z-10`}>
            Total delivery window
          </span>
          <div className="flex-1 flex items-center gap-1 relative z-10">
            {["Day 1", "Week 1", "Wk 2–3", "Week 4"].map((t, i) => (
              <React.Fragment key={t}>
                <span className={`${poppins.className} text-[10px] font-semibold`}
                  style={{ color: phases[i].color }}>{t}</span>
                {i < 3 && <span className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${phases[i].color}40, ${phases[i+1].color}40)` }} />}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   PANEL 2 — Code Quality  (no changes — perfect as-is)
════════════════════════════════════════════════════════════ */
function Panel2() {
  const pillars = [
    { icon: FaCode,      label: "TypeScript-first",     sub: "Fully typed — zero runtime surprises" },
    { icon: FaShieldAlt, label: "Secure by default",    sub: "Auth, CORS & validation baked in"     },
    { icon: FaBolt,      label: "Performance-obsessed", sub: "90+ Lighthouse, sub-second loads"     },
    { icon: FaServer,    label: "Scales with you",      sub: "Architecture that grows, not breaks"  },
  ];

  return (
    <div
      className="sticky top-0 h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #faf5ff 0%, #ffffff 50%, #f0f9ff 100%)", zIndex: 12, marginBottom: "-1px" }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(124,58,237,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 72% at 50% 50%, black 15%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 72% at 50% 50%, black 15%, transparent 100%)",
        }} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 lg:px-16">

        <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(124,58,237,0.1)", color: "#7c3aed", border: "1.5px solid rgba(124,58,237,0.2)" }}>
            <FaShieldAlt size={13} />
          </div>
          <span className={`${poppins.className} text-[11px] tracking-[4px] uppercase font-semibold`} style={{ color: "#7c3aed" }}>
            02 / Code Quality
          </span>
        </motion.div>

        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease }}
            viewport={VP}
            className={`${playfair.className} leading-[1.1]`}
            style={{ fontSize: "clamp(2.2rem, 5vw, 4.4rem)", fontStyle: "italic" }}
          >
            <span style={{ color: "#111" }}>Built to last.</span>
            <br />
            <span style={{ color: "#7c3aed" }}>Not just to ship.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.16)}
            className={`${poppins.className} text-gray-500 text-[14px] font-light mt-4 max-w-lg mx-auto leading-[1.85]`}
          >
            Anyone can push code. I deliver clean, documented, production-grade software
            your team can maintain and scale — six months from now and beyond.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {pillars.map((q, qi) => {
            const QIcon = q.icon;
            return (
              <motion.div
                key={q.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + qi * 0.09, duration: 0.6, ease }}
                viewport={VP}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
                className="bg-white rounded-2xl p-5 cursor-default text-center"
                style={{ border: "1.5px solid rgba(124,58,237,0.11)", boxShadow: "0 2px 18px rgba(124,58,237,0.06)" }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: "rgba(124,58,237,0.09)", color: "#7c3aed" }}>
                  <QIcon size={14} />
                </div>
                <p className={`${grotesk.className} text-gray-900 text-[13px] font-bold leading-snug mb-1.5`}>{q.label}</p>
                <p className={`${poppins.className} text-gray-400 text-[11.5px] font-light leading-snug`}>{q.sub}</p>
              </motion.div>
            );
          })}
        </div>

      </div>

      <PanelDots active={1} accent="#7c3aed" />
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   PANEL 3 — AI-Native  (right side redesigned, left unchanged)
════════════════════════════════════════════════════════════ */
function Panel3() {
  const aiStack = [
    { Icon: SiOpenai,   label: "OpenAI GPT-4",  color: "#10a37f" },
    { Icon: FaBrain,    label: "LangChain",     color: "#c026d3" },
    { Icon: FaBrain,    label: "Gemini 1.5",    color: "#4285f4" },
    { Icon: FaBolt,     label: "n8n Workflows", color: "#d97706" },
    { Icon: FaBrain,    label: "RAG Systems",   color: "#059669" },
    { Icon: HiSparkles, label: "AI Agents",     color: "#007979" },
  ];

  const delivers = [
    {
      num: "01", icon: SiNextdotjs, color: "#007979",
      title: "Full-Stack Web Apps",
      desc:  "Next.js, React & Node — from fast landing pages to complex SaaS platforms, built to perform.",
      tag:   "SaaS · Dashboards · eCommerce",
    },
    {
      num: "02", icon: FaBrain, color: "#c026d3",
      title: "AI-Powered Products",
      desc:  "LLM integrations, RAG pipelines & autonomous agents woven into your product from day one.",
      tag:   "Chatbots · Agents · GPT APIs",
    },
    {
      num: "03", icon: FaBolt, color: "#d97706",
      title: "Workflow Automation",
      desc:  "n8n & custom pipelines that eliminate manual work and unlock scale across your operations.",
      tag:   "n8n · Zapier · Webhooks",
    },
    {
      num: "04", icon: FaServer, color: "#0891b2",
      title: "APIs & Integrations",
      desc:  "Reliable REST/GraphQL backends and third-party integrations built for speed and longevity.",
      tag:   "REST · GraphQL · OAuth",
    },
  ];

  return (
    <div className="sticky top-0 h-screen flex items-center overflow-hidden" style={{ zIndex: 13, marginBottom: "-1px" }}>
      {/* Split background */}
      <div className="absolute inset-0 flex pointer-events-none" aria-hidden="true">
        <div className="w-1/2 h-full" style={{ background: "#0a0f14" }} />
        <div className="w-1/2 h-full" style={{ background: "#f9fafb" }} />
      </div>
      {/* Dark-side glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full blur-[90px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(192,38,211,0.18), rgba(0,121,121,0.09))" }}
        aria-hidden="true" />
      {/* Light-side hatch */}
      <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: "repeating-linear-gradient(-55deg, rgba(0,121,121,0.03) 0px, rgba(0,121,121,0.03) 1px, transparent 1px, transparent 26px)",
          maskImage: "linear-gradient(to left, rgba(0,0,0,0.3) 0%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.3) 0%, transparent 60%)",
        }} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT — dark side (unchanged) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease }}
            viewport={VP}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(192,38,211,0.2)", color: "#e879f9", border: "1.5px solid rgba(192,38,211,0.35)" }}>
                <FaBrain size={14} />
              </div>
              <span className={`${poppins.className} text-[11px] tracking-[4px] uppercase font-semibold`} style={{ color: "#e879f9" }}>
                03 / AI-Native
              </span>
            </div>

            <h2 className={`${playfair.className} leading-[1.15] mb-5`}
              style={{ fontSize: "clamp(1.9rem, 3.8vw, 3.4rem)", fontStyle: "italic", color: "white" }}>
              I don&apos;t just{" "}
              <em style={{ color: "#e879f9", fontStyle: "normal" }}>use</em> AI.
              <br />
              I build{" "}
              <em style={{ color: "#e879f9", fontStyle: "normal" }}>with</em> it.
            </h2>

            <p className={`${poppins.className} text-[13.5px] leading-[1.9] font-light mb-6`}
              style={{ color: "rgba(255,255,255,0.5)" }}>
              From LLM-powered chatbots to autonomous agents and workflow automation —
              AI isn&apos;t a feature I bolt on. It&apos;s baked into the architecture from day one.
            </p>

            <div className="flex flex-wrap gap-2">
              {aiStack.map((tech, ti) => {
                const TIcon = tech.Icon;
                return (
                  <motion.span key={tech.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 + ti * 0.06, duration: 0.5 }}
                    viewport={VP}
                    className={`${poppins.className} inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold cursor-default`}
                    style={{ background: `${tech.color}18`, color: tech.color, border: `1px solid ${tech.color}30` }}>
                    <TIcon size={10} />{tech.label}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT — "What I Deliver" premium redesign */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            viewport={VP}
          >
            <p className={`${grotesk.className} text-[10.5px] font-bold tracking-[3px] uppercase mb-5`} style={{ color: "#007979" }}>
              What I Deliver
            </p>

            <div className="space-y-2">
              {delivers.map((item, di) => {
                const DIcon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + di * 0.09, duration: 0.6, ease }}
                    viewport={VP}
                    whileHover={{ x: 4, transition: { duration: 0.15 } }}
                    className="group relative bg-white rounded-2xl overflow-hidden cursor-default"
                    style={{
                      border: `1.5px solid ${item.color}18`,
                      boxShadow: "0 2px 16px rgba(0,0,0,0.045)",
                    }}
                  >
                    {/* Left colour accent bar */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
                      style={{ background: `linear-gradient(to bottom, ${item.color}, ${item.color}50)` }}
                      aria-hidden="true"
                    />

                    <div className="flex items-center gap-4 px-5 py-3.5 pl-6">
                      {/* Icon */}
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${item.color}0e` }}
                      >
                        <DIcon size={14} style={{ color: item.color }} />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 mb-0.5">
                          <p className={`${grotesk.className} text-gray-900 font-bold text-[13.5px] leading-tight`}>{item.title}</p>
                          <span
                            className={`${grotesk.className} text-[9px] font-bold tracking-[1.5px] shrink-0`}
                            style={{ color: `${item.color}60` }}
                          >{item.num}</span>
                        </div>
                        <p className={`${poppins.className} text-gray-400 text-[11px] font-light leading-relaxed`}>{item.desc}</p>
                      </div>

                      {/* Tag */}
                      <span
                        className={`${poppins.className} text-[9.5px] font-semibold px-2.5 py-1 rounded-lg whitespace-nowrap shrink-0`}
                        style={{ background: `${item.color}0c`, color: item.color, border: `1px solid ${item.color}18` }}
                      >{item.tag}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>

      <PanelDots active={2} accent="#c026d3" />
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   PANEL 4 — Partnership  (full content restored, centred, no clipping)
════════════════════════════════════════════════════════════ */
function Panel4() {
  const chips = [
    { label: "Direct communication",       color: "#007979" },
    { label: "Full IP ownership transfer", color: "#0891b2" },
    { label: "Transparent pricing",        color: "#059669" },
    { label: "Post-launch support",        color: "#7c3aed" },
    { label: "No agencies or middlemen",   color: "#d97706" },
    { label: "Weekly milestone demos",     color: "#007979" },
  ];

  return (
    <div
      className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(155deg, #f0fafa 0%, #ffffff 55%, #fffbf0 100%)", zIndex: 14 }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,121,121,0.07) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 85% 80% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 80% at 50% 50%, black 20%, transparent 100%)",
        }} aria-hidden="true" />

      {/* Corner brackets */}
      <div className="absolute top-10 left-10 pointer-events-none opacity-[0.07] hidden lg:block" aria-hidden="true">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M56 0H32M56 0V24" stroke="#007979" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 pointer-events-none opacity-[0.07] hidden lg:block" aria-hidden="true">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M0 56H24M0 56V32" stroke="#007979" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* All content — centred, py prevents viewport clipping */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-8 text-center py-8">

        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 mb-6">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(217,119,6,0.12)", color: "#d97706", border: "1.5px solid rgba(217,119,6,0.25)" }}>
            <FaHandshake size={13} />
          </div>
          <span className={`${poppins.className} text-[11px] tracking-[4px] uppercase font-semibold`} style={{ color: "#d97706" }}>
            04 / Partnership
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease }}
          viewport={VP}
          className={`${playfair.className} leading-[1.1] mb-4`}
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.6rem)", fontStyle: "italic" }}
        >
          One developer.{" "}
          <span style={{ color: "#d97706" }}>Full ownership.</span>
        </motion.h2>

        {/* Supporting copy */}
        <motion.p {...fadeUp(0.16)}
          className={`${poppins.className} text-gray-500 text-[14px] font-light leading-[1.85] mb-7 max-w-lg mx-auto`}
        >
          No agencies, no handoffs, no communication gaps. You work directly with me —
          one developer who cares about your outcome as much as you do.
        </motion.p>

        {/* Commitment chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.6, ease }}
          viewport={VP}
          className="flex flex-wrap justify-center gap-2 mb-7"
        >
          {chips.map((c, ci) => (
            <motion.span
              key={ci}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.28 + ci * 0.05, duration: 0.4, ease }}
              viewport={VP}
              className={`${poppins.className} inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-medium`}
              style={{ background: `${c.color}0c`, color: c.color, border: `1px solid ${c.color}20` }}
            >
              <FaCheckCircle size={9} />{c.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Quote — new text, no attribution, no button */}
        <motion.blockquote
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.46, duration: 0.65, ease }}
          viewport={VP}
          className={`${playfair.className} max-w-lg mx-auto`}
          style={{ fontSize: "clamp(1rem, 1.9vw, 1.18rem)", fontStyle: "italic", color: "#555", lineHeight: 1.8 }}
        >
          &ldquo;Your success defines my reputation. Every project I take on is treated
          like my own business, with full responsibility and care.&rdquo;
        </motion.blockquote>

      </div>

      <PanelDots active={3} accent="#d97706" />
    </div>
  );
}

/* ─── Panel dots — NO bottom line/border ────────────────── */
function PanelDots({ active, accent }: { active: number; accent: string }) {
  return (
    <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="rounded-full transition-all duration-300"
          style={{
            width:      i === active ? 22 : 6,
            height:     6,
            background: i === active ? accent : "rgba(0,0,0,0.12)",
            opacity:    i === active ? 1 : 0.35,
          }} />
      ))}
    </div>
  );
}

/* ─── Section wrapper — no border/divider ───────────────── */
export default function ScrollStack() {
  return (
    <section id="expertise" aria-label="Why work with me" style={{ borderTop: "none", borderBottom: "none" }}>
      <Panel1 />
      <Panel2 />
      <Panel3 />
      <Panel4 />
    </section>
  );
}
