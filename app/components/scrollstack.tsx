"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaRobot, FaCloud, FaCogs } from "react-icons/fa";

const sections = [
  {
    title: "CREATIVE DEVELOPER",
    bg: "#F5F5F5",
    text: "#111111",
    accent: "#007979",
    icon: FaCode,
    desc: "Turning ideas into pixel-perfect, high-performance interfaces.",
  },
  {
    title: "AGENTIC AI DEVELOPER",
    bg: "#007979",
    text: "#FFFFFF",
    accent: "#ffffff",
    icon: FaRobot,
    desc: "Building autonomous AI systems, agents and intelligent workflows.",
  },
  {
    title: "CLOUD DEVELOPMENT",
    bg: "#0F172A",
    text: "#38BDF8",
    accent: "#38BDF8",
    icon: FaCloud,
    desc: "Deploying scalable, resilient cloud-native applications globally.",
  },
  {
    title: "AI AUTOMATION",
    bg: "#111827",
    text: "#00E5A8",
    accent: "#00E5A8",
    icon: FaCogs,
    desc: "Automating business processes with precision and intelligence.",
  },
];

function StackCard({ item, index }: { item: typeof sections[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: item.bg, zIndex: index + 1 }}
    >
      {/* Large background icon */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <Icon
          size={600}
          style={{ color: item.text, opacity: 0.04 }}
        />
      </motion.div>

      {/* Floating corner icons */}
      <motion.div
        animate={{ y: [-15, 15, -15], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-20 left-16 opacity-15"
      >
        <Icon size={80} color={item.text} />
      </motion.div>
      <motion.div
        animate={{ y: [15, -15, 15], rotate: [0, -8, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-16 opacity-15"
      >
        <Icon size={100} color={item.text} />
      </motion.div>

      {/* Pulsing glow */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[700px] h-[700px] rounded-full blur-[140px]"
        style={{ backgroundColor: item.accent }}
      />

      {/* Card content */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: false, margin: "-20%" }}
        className="relative z-10 text-center px-8 max-w-4xl"
      >
        {/* Step indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: false }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border"
          style={{ borderColor: `${item.text}30`, color: item.text }}
        >
          <span className="text-xs font-mono opacity-60">0{index + 1}</span>
          <span className="w-px h-3 opacity-30" style={{ backgroundColor: item.text }} />
          <span className="text-xs font-mono opacity-60">SPECIALTY</span>
        </motion.div>

        {/* Icon */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="flex justify-center mb-8"
        >
          <Icon size={70} color={item.text} />
        </motion.div>

        {/* Title */}
        <h2
          className="font-black uppercase tracking-tighter leading-none text-[2.5rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem]"
          style={{ color: item.text }}
        >
          {item.title}
        </h2>

        {/* Desc */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: false }}
          className="mt-6 text-base md:text-lg max-w-md mx-auto leading-relaxed"
          style={{ color: item.text, opacity: 0.6 }}
        >
          {item.desc}
        </motion.p>
      </motion.div>
    </div>
  );
}

export default function ScrollStack() {
  return (
    <section className="relative">
      {sections.map((item, index) => (
        <StackCard key={index} item={item} index={index} />
      ))}
    </section>
  );
}
