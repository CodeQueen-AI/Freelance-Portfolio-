"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Poppins, Playfair_Display } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["800"],
  style: ["italic"],
});

const services = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Building scalable web applications with Next.js, React, Node.js, TypeScript and modern cloud technologies. From MVP to production-ready systems.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    badges: ["Next.js", "React", "TypeScript", "Node.js"],
    accent: "#007979",
  },
  {
    number: "02",
    title: "AI Automation",
    description:
      "Custom AI agents, workflow automation, business integrations and intelligent systems powered by OpenAI, Gemini and LangChain.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    badges: ["OpenAI", "Agents", "Automation", "Workflows"],
    accent: "#005f5f",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Designing premium digital experiences with user-first interfaces, clean aesthetics and modern design systems that convert.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200",
    badges: ["Figma", "Wireframes", "UX Research", "Prototyping"],
    accent: "#007979",
  },
  {
    number: "04",
    title: "SaaS Products",
    description:
      "Complete SaaS solutions from idea to deployment — dashboards, APIs, authentication and analytics built to scale.",
    image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200",
    badges: ["Dashboard", "API", "Cloud", "Analytics"],
    accent: "#005f5f",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className={`${poppins.className} min-h-screen bg-[#f5f5f3] py-24 px-6`}>
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="uppercase text-[#007979] tracking-[4px] text-xs font-semibold mb-4"
            >
              What I Do
            </motion.p>
            <div className="overflow-visible pb-3">
              <motion.h2
                initial={{ y: 60, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className={`${playfair.className} text-black`}
                style={{
                  fontSize: "clamp(3.5rem, 10vw, 7rem)",
                  fontStyle: "italic",
                  lineHeight: 1.15,
                }}
              >
                Services
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-500 max-w-xs text-sm leading-relaxed"
          >
            End-to-end digital solutions built with precision, creativity and modern technology.
          </motion.p>
        </div>

        {/* Services list — accordion style */}
        <div className="space-y-0 divide-y divide-gray-200">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className="group cursor-pointer py-6"
            >
              <div className="flex items-center justify-between gap-6">
                {/* Left — number + title */}
                <div className="flex items-center gap-6 flex-1 min-w-0">
                  <span className="text-xs font-mono text-gray-300 shrink-0 w-8">{service.number}</span>

                  <motion.h3
                    animate={{ x: active === index ? 12 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`text-2xl md:text-4xl font-black uppercase transition-colors duration-300 truncate ${
                      active === index ? "text-[#007979]" : "text-black"
                    }`}
                  >
                    {service.title}
                  </motion.h3>
                </div>

                {/* Right — badges + arrow */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="hidden md:flex gap-2">
                    <AnimatePresence>
                      {active === index &&
                        service.badges.map((badge, bi) => (
                          <motion.span
                            key={badge}
                            initial={{ opacity: 0, scale: 0.7, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.7, y: 10 }}
                            transition={{ delay: bi * 0.05, duration: 0.25 }}
                            className="px-3 py-1 rounded-full bg-[#007979]/10 text-[#007979] text-xs font-semibold border border-[#007979]/20"
                          >
                            {badge}
                          </motion.span>
                        ))}
                    </AnimatePresence>
                  </div>

                  <motion.div
                    animate={{ rotate: active === index ? 45 : 0, scale: active === index ? 1.2 : 1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg transition-colors duration-300 ${
                      active === index
                        ? "border-[#007979] text-[#007979] bg-[#007979]/5"
                        : "border-gray-200 text-gray-400"
                    }`}
                  >
                    →
                  </motion.div>
                </div>
              </div>

              {/* Expanded description */}
              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex gap-8 pt-4 pb-2 pl-14">
                      <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                        {service.description}
                      </p>
                      <div className="hidden lg:block ml-auto">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={160}
                          height={96}
                          className="w-40 h-24 object-cover rounded-xl opacity-80"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
