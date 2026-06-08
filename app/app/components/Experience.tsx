"use client";

import { Poppins } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const experiences = [
  {
    period: "NOV 2025 — DEC 2025",
    role: "FRONTEND DEVELOPER",
    description:
      "Developed responsive and high-performance web interfaces using modern frontend technologies. Focused on clean UI implementation, performance optimization and seamless user experiences.",
    skills: ["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND CSS"],
    index: "01",
  },
  {
    period: "JAN 2026 — PRESENT",
    role: "FREELANCE DEVELOPER",
    description:
      "Working with clients to build modern websites and web applications. Delivering responsive, scalable and user-focused solutions while managing projects from concept to deployment.",
    skills: ["NEXT.JS", "REACT", "TAILWIND CSS", "CLIENT PROJECTS"],
    index: "02",
  },
];

function ExperienceCard({ item, i }: { item: typeof experiences[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
      className="relative border-t border-[#d8f4f4] pt-10 md:pt-14 group"
    >
      {/* Hover line reveal */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-[#007979]"
        initial={{ width: 0 }}
        animate={inView ? { width: "100%" } : {}}
        transition={{ duration: 1, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Background watermark */}
      <div className="absolute inset-0 flex justify-end items-center pointer-events-none overflow-hidden">
        <span className="text-[12rem] font-black text-black/[0.025] uppercase leading-none select-none">
          {item.index}
        </span>
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24">
        {/* LEFT */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
            className="tracking-[5px] text-[#007979] font-semibold text-xs md:text-sm mb-6 uppercase"
          >
            {item.period}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-black uppercase font-black font-serif leading-[0.9] text-[40px] md:text-[50px] group-hover:text-[#007979] transition-colors duration-500"
          >
            {item.role}
          </motion.h2>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-lg leading-relaxed text-gray-600">{item.description}</p>

          <div className="flex flex-wrap gap-3 mt-8">
            {item.skills.map((skill, si) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.1 + si * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.08, backgroundColor: "#007979", color: "#fff" }}
                className="px-5 py-2 rounded-full border border-[#cfe7e7] bg-white/60 text-xs md:text-sm font-semibold tracking-[2px] text-[#007979] cursor-default transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <main className={`${poppins.className} min-h-screen bg-[#eaf7f7] overflow-hidden`}>
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">

        {/* HEADER */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={headerInView ? { width: 56 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-[2px] bg-[#007979] block"
              />
              <span className="tracking-[6px] text-sm font-semibold text-[#007979] uppercase font-serif">
                Professional Journey
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={headerInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="uppercase font-black leading-[0.9] font-serif"
              >
                <span className="block text-[14vw] lg:text-[9vw] text-black">Technical</span>
                <span className="block text-[14vw] lg:text-[9vw] text-[#007979]">Experience.</span>
              </motion.h1>
            </div>
          </div>
        </div>

        {/* LIST */}
        <div className="space-y-20">
          {experiences.map((item, i) => (
            <ExperienceCard key={i} item={item} i={i} />
          ))}
        </div>

      </section>
    </main>
  );
}
