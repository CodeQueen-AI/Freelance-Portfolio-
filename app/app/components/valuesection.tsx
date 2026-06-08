"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Poppins } from "next/font/google";
import {
  FaLaptopCode,
  FaRobot,
  FaCloud,
  FaBolt,
  FaRocket,
  FaBullseye,
} from "react-icons/fa";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

const items = [
  { icon: FaLaptopCode, title: "Full Stack Development", desc: "End-to-end web solutions." },
  { icon: FaRobot, title: "Agentic AI Systems", desc: "Autonomous AI agents & pipelines." },
  { icon: FaCloud, title: "Cloud Development", desc: "Scalable cloud-native apps." },
  { icon: FaBolt, title: "AI Automation", desc: "Smart business process automation." },
  { icon: FaRocket, title: "Scalable Solutions", desc: "Architecture built for growth." },
  { icon: FaBullseye, title: "Problem Solving", desc: "Turning complexity into clarity." },
];

export default function ValuesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className={`${poppins.className} bg-white py-28 px-6 lg:px-16`}>
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="uppercase tracking-[5px] text-[#007979] text-xs font-semibold mb-4"
            >
              My Expertise &amp; Values
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 60, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="text-5xl md:text-6xl font-black text-black leading-none"
              >
                What I<br />
                <span className="text-[#007979]">Bring.</span>
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h3 className="text-xl md:text-2xl font-medium leading-relaxed text-gray-700">
              I build intelligent digital experiences, combining full-stack engineering,
              Agentic AI systems and cloud technologies{" "}
              <span className="text-gray-300">that create real-world impact.</span>
            </h3>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 h-px bg-gradient-to-r from-[#007979] to-transparent origin-left"
            />
          </motion.div>
        </div>

        {/* Icon grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group flex flex-col items-center gap-4 cursor-default"
              >
                {/* Circle icon */}
                <motion.div
                  whileHover={{ scale: 1.12, borderColor: "#007979" }}
                  className="h-20 w-20 rounded-full border-2 border-gray-100 flex items-center justify-center transition-all duration-400 group-hover:shadow-[0_0_30px_rgba(0,121,121,0.15)]"
                >
                  <motion.div
                    animate={{ rotate: [0, 0, 0] }}
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon
                      size={36}
                      className="text-gray-300 transition-all duration-400 group-hover:text-[#007979]"
                    />
                  </motion.div>
                </motion.div>

                {/* Label */}
                <div className="text-center">
                  <p className="text-xs font-semibold text-gray-700 group-hover:text-[#007979] transition-colors duration-300 leading-snug">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-1 leading-snug">{item.desc}</p>
                </div>

                {/* Expanding line */}
                <motion.div
                  className="h-[2px] bg-[#007979] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: inView ? 0 : 0 }}
                  whileHover={{ width: 40 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
