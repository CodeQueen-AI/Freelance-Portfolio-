"use client";

import { Poppins } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const skillGroups = [
  {
    label: "Frontend",
    color: "from-teal-50 to-cyan-50 border-teal-200 text-teal-700",
    dot: "bg-teal-500",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Three.Js", "Daisy UI", "Shadcn"],
  },
  {
    label: "Backend",
    color: "from-blue-50 to-indigo-50 border-blue-200 text-blue-700",
    dot: "bg-blue-500",
    skills: ["Node.js", "Express", "Python", "MongoDB", "Firebase", "Qdrant", "PostgreSQL"],
  },
  {
    label: "AI & ML",
    color: "from-violet-50 to-purple-50 border-violet-200 text-violet-700",
    dot: "bg-violet-500",
    skills: ["OpenAI Agents SDK", "Gemini CLI", "Claude Code", "Chainlit", "LangChain", "Agentic AI", "RAG", "Speckit Plus"],
  },
  {
    label: "Data & Tools",
    color: "from-orange-50 to-amber-50 border-orange-200 text-orange-700",
    dot: "bg-orange-500",
    skills: ["Numpy", "Pandas", "Matplotlib", "Seaborn", "EDA", "Streamlit", "Git", "GitHub", "Netlify", "Vercel"],
  },
];

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className={`bg-white px-6 py-24 ${poppins.className}`}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[5px] text-[#007979] text-sm font-medium mb-4"
          >
            My Expertise
          </motion.p>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 80, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold text-black"
            >
              TECH STACK
            </motion.h2>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 mx-auto w-24 h-1 bg-[#007979] rounded-full origin-left"
          />
        </div>

        {/* Grouped skills */}
        <div className="space-y-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + gi * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`w-2 h-2 rounded-full ${group.dot}`} />
                <span className="text-xs font-bold uppercase tracking-[4px] text-gray-400">
                  {group.label}
                </span>
                <span className="flex-1 h-px bg-gray-100" />
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.3 + gi * 0.1 + si * 0.04,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2 rounded-full border bg-gradient-to-br ${group.color} font-medium tracking-wide text-sm cursor-default transition-shadow hover:shadow-md`}
                  >
                    <span className="flex items-center gap-2">
                      {skill}
                      <span className={`w-1.5 h-1.5 rounded-full ${group.dot} opacity-60`} />
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
