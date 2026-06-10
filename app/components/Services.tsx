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
} from "react-icons/si";
import {
  FaBrain,
  FaRocket,
  FaCubes,
  FaPaintBrush,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";
import { TbApi } from "react-icons/tb";

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

/* ─── Service data ──────────────────────────────────────── */
const services = [
  {
    id: "01",
    title: "Full Stack Development",
    tagline: "Ship fast. Scale confidently.",
    description:
      "End-to-end web applications built with Next.js, React, Node.js and TypeScript. From polished frontends to robust APIs — delivered clean, fast and production-ready.",
    Icon: FaRocket,
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
    span: "md:col-span-1",
  },
  {
    id: "02",
    title: "AI & Automation",
    tagline: "Intelligence that works for you.",
    description:
      "Custom AI agents, intelligent workflows and business automations powered by OpenAI, Gemini and LangChain — turning complex processes into smart, hands-free systems.",
    Icon: FaBrain,
    techs: [
      { Icon: SiOpenai, label: "OpenAI" },
      { Icon: FaBrain, label: "LangChain" },
      { Icon: TbApi, label: "Agents" },
      { Icon: FaBrain, label: "RAG" },
    ],
    accent: "#0891b2",
    lightBg: "#f0f9ff",
    borderColor: "rgba(8,145,178,0.14)",
    accentGradient: "linear-gradient(90deg, #0891b2, #38bdf8 60%, transparent)",
    span: "md:col-span-1",
  },
  {
    id: "03",
    title: "UI/UX Design",
    tagline: "Design that converts.",
    description:
      "Premium interfaces crafted in Figma — user-first thinking, clean aesthetics and pixel-perfect execution that turns visitors into customers.",
    Icon: FaPaintBrush,
    techs: [
      { Icon: SiFigma, label: "Figma" },
      { Icon: FaPaintBrush, label: "Prototyping" },
      { Icon: FaCubes, label: "Systems" },
    ],
    accent: "#7c3aed",
    lightBg: "#f5f3ff",
    borderColor: "rgba(124,58,237,0.14)",
    accentGradient: "linear-gradient(90deg, #7c3aed, #a78bfa 60%, transparent)",
    span: "md:col-span-1",
  },
  {
    id: "04",
    title: "SaaS Products",
    tagline: "From idea to live product.",
    description:
      "Complete SaaS solutions — dashboards, auth, APIs and analytics. I handle the full lifecycle from MVP to enterprise-ready, so you can focus on your business.",
    Icon: FaChartLine,
    techs: [
      { Icon: FaChartLine, label: "Analytics" },
      { Icon: TbApi, label: "APIs" },
      { Icon: FaCubes, label: "Dashboard" },
    ],
    accent: "#059669",
    lightBg: "#f0fdf8",
    borderColor: "rgba(5,150,105,0.14)",
    accentGradient: "linear-gradient(90deg, #059669, #34d399 60%, transparent)",
    span: "md:col-span-1",
  },
];

/* ─── Card ──────────────────────────────────────────────── */
function ServiceCard({
  service,
  index,
  inView,
}: {
  service: (typeof services)[number];
  index: number;
  inView: boolean;
}) {
  const ServiceIcon = service.Icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.1 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.28, ease: "easeOut" } }}
      className="group relative bg-white rounded-2xl overflow-hidden flex flex-col cursor-default"
      style={{
        border: `1.5px solid ${service.borderColor}`,
        boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
      }}
    >
      {/* Top accent bar — animates in */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{
          duration: 0.9,
          delay: 0.25 + index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute top-0 left-0 right-0 h-[3px] origin-left"
        style={{ background: service.accentGradient }}
        aria-hidden="true"
      />

      {/* Hover: soft corner glow */}
      <div
        className="absolute -top-20 -right-20 w-52 h-52 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `${service.accent}10` }}
        aria-hidden="true"
      />

      {/* Watermark icon */}
      <div
        className="absolute -bottom-4 -right-4 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
        aria-hidden="true"
      >
        <ServiceIcon
          size={96}
          style={{ color: service.accent, opacity: 0.045 }}
        />
      </div>

      <div className="relative z-10 flex flex-col flex-1 p-7">
        {/* Header: number + icon */}
        <div className="flex items-start justify-between mb-5">
          <span
            className={`${grotesk.className} w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold shrink-0`}
            style={{
              background: `${service.accent}12`,
              color: service.accent,
              border: `1.5px solid ${service.accent}25`,
            }}
          >
            {service.id}
          </span>

          {/* Icon pill */}
          <motion.div
            whileHover={{ scale: 1.12, rotate: -6 }}
            transition={{ duration: 0.25 }}
            className="w-11 h-11 rounded-xl flex items-center justify-center transition-shadow duration-300 group-hover:shadow-md"
            style={{
              background: service.lightBg,
              border: `1.5px solid ${service.accent}30`,
              color: service.accent,
            }}
          >
            <ServiceIcon size={20} />
          </motion.div>
        </div>

        {/* Title */}
        <h3
          className={`${grotesk.className} font-bold text-gray-900 mb-1 leading-tight`}
          style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)" }}
        >
          {service.title}
        </h3>

        {/* Tagline */}
        <p
          className={`${poppins.className} text-[11px] font-semibold tracking-widest uppercase mb-4`}
          style={{ color: service.accent }}
        >
          {service.tagline}
        </p>

        {/* Divider */}
        <div
          className="h-px mb-4"
          style={{
            background: `linear-gradient(90deg, ${service.accent}25, transparent)`,
          }}
          aria-hidden="true"
        />

        {/* Description */}
        <p
          className={`${poppins.className} text-[13.5px] leading-[1.85] text-gray-500 flex-1 font-light`}
        >
          {service.description}
        </p>

        {/* Tech pills + arrow */}
        <div className="mt-6 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex flex-wrap gap-1.5">
            {service.techs.map((tech) => {
              const TechIcon = tech.Icon;
              return (
                <span
                  key={tech.label}
                  className={`${poppins.className} inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide`}
                  style={{
                    background: service.lightBg,
                    color: service.accent,
                    border: `1px solid ${service.accent}28`,
                  }}
                >
                  <TechIcon size={10} />
                  {tech.label}
                </span>
              );
            })}
          </div>

          {/* Arrow button */}
          <motion.div
            initial={{ opacity: 0.5 }}
            whileHover={{ x: 3, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
            style={{
              background: service.lightBg,
              color: service.accent,
              border: `1.5px solid ${service.accent}30`,
            }}
            aria-hidden="true"
          >
            <FaArrowRight size={11} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main section ──────────────────────────────────────── */
export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      id="services"
      className={`${poppins.className} relative overflow-hidden`}
      style={{
        background:
          "linear-gradient(160deg, #f0fafa 0%, #ffffff 50%, #f8f8ff 100%)",
      }}
    >
      {/* ── Background decoration ── */}
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,121,121,0.09) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          opacity: 0.5,
        }}
        aria-hidden="true"
      />
      {/* Top-right teal orb */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(0,121,121,0.07)" }}
        aria-hidden="true"
      />
      {/* Bottom-left subtle orb */}
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(124,58,237,0.04)" }}
        aria-hidden="true"
      />
      {/* Geometric ring — top left */}
      <div
        className="absolute top-20 left-10 pointer-events-none opacity-[0.05]"
        aria-hidden="true"
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="#007979" strokeWidth="1" strokeDasharray="5 7" />
          <circle cx="100" cy="100" r="60" stroke="#007979" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="30" stroke="#007979" strokeWidth="0.5" strokeDasharray="3 6" />
        </svg>
      </div>
      {/* Geometric ring — bottom right */}
      <div
        className="absolute bottom-16 right-10 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
      >
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
              <span
                className={`${poppins.className} text-[11px] tracking-[5px] uppercase font-semibold text-[#007979]`}
              >
                What I Offer
              </span>
            </motion.div>

            {/* Heading */}
            <div className="overflow-visible pb-3">
              <motion.h2
                initial={{ y: 60, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                }}
                className={`${playfair.className} text-gray-900 leading-[1.1]`}
                style={{
                  fontSize: "clamp(3rem, 7vw, 5.5rem)",
                  fontStyle: "italic",
                }}
              >
                My{" "}
                <span className="relative inline-block" style={{ color: "#007979" }}>
                  Services
                  {/* Underline bar */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-0 -bottom-1 w-full h-[4px] rounded-full origin-left"
                    style={{
                      background: "linear-gradient(90deg, #007979, #00c4c4)",
                    }}
                    aria-hidden="true"
                  />
                </span>
              </motion.h2>
            </div>

            {/* Service category pills */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.42, duration: 0.55 }}
              className="flex flex-wrap gap-2 mt-2"
            >
              {services.map((s) => {
                const SIcon = s.Icon;
                return (
                  <span
                    key={s.id}
                    className={`${poppins.className} inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold`}
                    style={{
                      background: s.lightBg,
                      color: s.accent,
                      border: `1px solid ${s.accent}25`,
                    }}
                  >
                    <SIcon size={11} />
                    {s.title.split(" ")[0]}
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
            <p
              className={`${poppins.className} text-gray-500 text-[14px] leading-relaxed font-light`}
            >
              From concept to deployment — I build digital products that are fast, beautiful and built to last.
            </p>
            <div className="flex items-center gap-2">
              <span
                className={`${grotesk.className} text-3xl font-bold text-[#007979]`}
              >
                4
              </span>
              <span
                className={`${poppins.className} text-gray-400 text-[12px] font-light leading-tight`}
              >
                core services<br />end-to-end delivery
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── Card grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* ── CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{
            background:
              "linear-gradient(135deg, #f0fafa 0%, #ffffff 100%)",
            border: "1.5px solid rgba(0,121,121,0.12)",
            boxShadow: "0 2px 20px rgba(0,121,121,0.06)",
          }}
        >
          <div>
            <p
              className={`${grotesk.className} text-gray-900 font-bold text-[1.1rem] leading-snug`}
            >
              Ready to build something great?
            </p>
            <p
              className={`${poppins.className} text-gray-400 text-[13px] mt-1 font-light`}
            >
              Let&apos;s talk about your project — no commitment, just a conversation.
            </p>
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
            {/* Hover sweep */}
            <span className="absolute inset-0 bg-black/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 rounded-full" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
