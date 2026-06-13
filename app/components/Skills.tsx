"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Space_Grotesk, Poppins, Playfair_Display } from "next/font/google";
import {
  SiReact, SiNextdotjs, SiHtml5, SiCss, SiJavascript, SiTypescript,
  SiTailwindcss, SiVite, SiRedux, SiAxios, SiZod, SiFramer,
  SiJest, SiTestinglibrary, SiNodedotjs, SiExpress, SiPython,
  SiFastapi, SiMongodb, SiPostgresql, SiFirebase, SiOpenai,
  SiGit, SiGithub, SiVercel, SiNetlify, SiStreamlit,
  SiPandas, SiNumpy, SiPostman, SiGsap, SiClaude, SiGooglegemini,
} from "react-icons/si";
import {
  FaBrain, FaRobot, FaDatabase, FaRoute, FaCogs,
  FaLock, FaChartBar, FaFlask, FaCheck,
  FaComments, FaMicrophone, FaSyncAlt,
  FaLayerGroup, FaCode,
} from "react-icons/fa";
import { TbApi, TbWebhook, TbBrandReactNative, TbChartBar } from "react-icons/tb";
import { MdOutlineQueryStats, MdCloud } from "react-icons/md";
import { RiReactjsLine } from "react-icons/ri";
import { GiProcessor } from "react-icons/gi";
import { HiSparkles } from "react-icons/hi2";

const grotesk  = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const poppins  = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"], style: ["italic"] });

/* ─── Data ────────────────────────────────────────────────── */
const GROUPS = [
  {
    id: "frontend",
    label: "Frontend",
    Icon: SiReact,
    accent: "#007979",
    lightBg: "#edfafa",
    skills: [
      { name: "React",               Icon: SiReact            },
      { name: "Next.js",             Icon: SiNextdotjs        },
      { name: "HTML5",               Icon: SiHtml5            },
      { name: "CSS3",                Icon: SiCss              },
      { name: "JS",                  Icon: SiJavascript       },
      { name: "TS",                  Icon: SiTypescript       },
      { name: "Tailwind CSS",        Icon: SiTailwindcss      },
      { name: "Vite",                Icon: SiVite             },
      { name: "React Router",        Icon: FaRoute            },
      { name: "Redux Toolkit",       Icon: SiRedux            },
      { name: "Context API",         Icon: TbBrandReactNative },
      { name: "Axios",               Icon: SiAxios            },
      { name: "TanStack Query",      Icon: MdOutlineQueryStats},
      { name: "SWR",                 Icon: FaSyncAlt          },
      { name: "React Hook Form",     Icon: RiReactjsLine      },
      { name: "Zod",                 Icon: SiZod              },
      { name: "Shadcn/UI",           Icon: FaCogs             },
      { name: "Framer Motion",       Icon: SiFramer           },
      { name: "GSAP",                Icon: SiGsap             },
      { name: "Responsive Design",   Icon: FaLayerGroup       },
      { name: "REST API Integration",Icon: TbApi              },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    Icon: SiNodedotjs,
    accent: "#6366f1",
    lightBg: "#f3f3ff",
    skills: [
      { name: "Node.js",             Icon: SiNodedotjs   },
      { name: "Express.js",          Icon: SiExpress     },
      { name: "Python",              Icon: SiPython      },
      { name: "FastAPI",             Icon: SiFastapi     },
      { name: "MongoDB",             Icon: SiMongodb     },
      { name: "PostgreSQL",          Icon: SiPostgresql  },
      { name: "Firebase",            Icon: SiFirebase    },
      { name: "JWT Auth",            Icon: FaLock        },
      { name: "REST APIs",           Icon: TbApi         },
      { name: "WebHooks",            Icon: TbWebhook     },
      { name: "SSR",                 Icon: MdCloud       },
      { name: "Qdrant (Vector DB)",  Icon: FaDatabase    },
    ],
  },
  {
    id: "ai",
    label: "AI & Automation",
    Icon: FaBrain,
    accent: "#c026d3",
    lightBg: "#fdf4ff",
    skills: [
      { name: "SpecKit Plus",        Icon: HiSparkles    },
      { name: "OpenAI SDK",          Icon: SiOpenai      },
      { name: "Agentic AI",          Icon: FaRobot       },
      { name: "AI Agents",           Icon: FaBrain       },
      { name: "Multi-Agent Systems", Icon: FaCogs        },
      { name: "RAG System",          Icon: FaDatabase    },
      { name: "Chainlit",            Icon: TbApi         },
      { name: "Prompt Engineering",  Icon: FaCode        },
      { name: "AI Chatbot",          Icon: FaComments    },
      { name: "AI Voice Agents",     Icon: FaMicrophone  },
      { name: "Workflow Automation", Icon: FaSyncAlt     },
      { name: "Business Automation", Icon: FaCogs        },
      { name: "Claude Code",         Icon: SiClaude      },
      { name: "Gemini CLI",          Icon: SiGooglegemini},
    ],
  },
  {
    id: "data",
    label: "Data & Analytics",
    Icon: FaChartBar,
    accent: "#0891b2",
    lightBg: "#f0f9ff",
    skills: [
      { name: "NumPy",               Icon: SiNumpy             },
      { name: "Pandas",              Icon: SiPandas            },
      { name: "Matplotlib",          Icon: TbChartBar          },
      { name: "Seaborn",             Icon: FaChartBar          },
      { name: "EDA",                 Icon: GiProcessor         },
      { name: "Data Processing",     Icon: GiProcessor         },
      { name: "Reporting Systems",   Icon: MdOutlineQueryStats },
      { name: "Analytics Dashboard", Icon: FaDatabase          },
    ],
  },
  {
    id: "testing",
    label: "Testing",
    Icon: SiJest,
    accent: "#d97706",
    lightBg: "#fffbeb",
    skills: [
      { name: "Jest",                  Icon: SiJest           },
      { name: "React Testing Library", Icon: SiTestinglibrary },
      { name: "Unit Testing",          Icon: FaFlask          },
      { name: "Component Testing",     Icon: FaCheck          },
    ],
  },
  {
    id: "tools",
    label: "Tools & Deploy",
    Icon: SiVercel,
    accent: "#059669",
    lightBg: "#f0fdf8",
    skills: [
      { name: "Git",       Icon: SiGit       },
      { name: "GitHub",    Icon: SiGithub    },
      { name: "Vercel",    Icon: SiVercel    },
      { name: "Netlify",   Icon: SiNetlify   },
      { name: "Postman",   Icon: SiPostman   },
      { name: "Streamlit", Icon: SiStreamlit },
    ],
  },
];

const TOTAL_SKILLS = GROUPS.reduce((sum, g) => sum + g.skills.length, 0);
const ALL_SKILLS   = GROUPS.flatMap((g) => g.skills.map((s) => ({ ...s, accent: g.accent })));

/* ─── Skill pill ──────────────────────────────────────────── */
function SkillPill({
  name, Icon, accent, lightBg, delay, inView,
}: {
  name: string; Icon: React.ElementType; accent: string;
  lightBg: string; delay: number; inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.88, y: 6 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center gap-2 px-3.5 py-[9px] rounded-full cursor-default select-none"
      style={{
        background: hovered ? `${accent}16` : lightBg,
        transition: "background 0.2s, transform 0.2s",
        transform: hovered ? "translateY(-2px)" : "none",
      }}
    >
      <span
        className="w-[17px] h-[17px] flex items-center justify-center rounded-full shrink-0"
        style={{ background: `${accent}${hovered ? "28" : "20"}` }}
      >
        <Icon size={9} style={{ color: accent }} />
      </span>
      <span
        className={`${grotesk.className} text-[12px] font-semibold whitespace-nowrap leading-none`}
        style={{
          color: hovered ? accent : "#374151",
          letterSpacing: "-0.01em",
          transition: "color 0.2s",
        }}
      >
        {name}
      </span>
    </motion.span>
  );
}

/* ─── Category row ────────────────────────────────────────── */
function CategoryRow({ group, index }: { group: (typeof GROUPS)[number]; index: number }) {
  const ref     = useRef<HTMLDivElement>(null);
  const inView  = useInView(ref, { once: true, margin: "-6%" });
  const CatIcon = group.Icon;
  const isLast  = index === GROUPS.length - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-5 lg:gap-12 items-start py-9">

        {/* Label column */}
        <div className="flex lg:flex-col gap-2 lg:gap-0 lg:pt-1">
          <div className="flex items-center gap-3 lg:mb-2">
            <span
              className="w-2 h-2 rounded-full shrink-0 hidden lg:block"
              style={{ background: group.accent }}
              aria-hidden="true"
            />
            <p
              className={`${playfair.className} leading-none`}
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
                color: "#111",
                fontStyle: "italic",
                letterSpacing: "-0.01em",
              }}
            >
              {group.label}
            </p>
          </div>
          <p
            className={`${poppins.className} hidden lg:block text-[11px] font-light tracking-wide`}
            style={{ color: `${group.accent}80`, paddingLeft: "20px" }}
          >
            {group.skills.length} skills
          </p>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block h-px w-16 mt-4 origin-left"
            style={{ background: `linear-gradient(90deg, ${group.accent}60, transparent)`, marginLeft: "20px" }}
            aria-hidden="true"
          />
        </div>

        {/* Pills */}
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, si) => (
            <SkillPill
              key={skill.name}
              name={skill.name}
              Icon={skill.Icon}
              accent={group.accent}
              lightBg={group.lightBg}
              delay={0.07 + Math.min(si * 0.016, 0.28)}
              inView={inView}
            />
          ))}
        </div>
      </div>

      {/* Separator */}
      {!isLast && (
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.0, delay: 0.3 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="h-px origin-left"
          style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.04) 60%, transparent)" }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
}

/* ─── Marquee ──────────────────────────────────────────────── */
function MarqueeStrip() {
  const doubled = [...ALL_SKILLS, ...ALL_SKILLS];
  return (
    <div
      className="relative overflow-hidden py-7"
      style={{ background: "linear-gradient(180deg, rgba(0,121,121,0.025) 0%, rgba(0,121,121,0.018) 100%)" }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, rgba(240,250,250,0.95), transparent)" }} aria-hidden="true" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, rgba(248,255,254,0.95), transparent)" }} aria-hidden="true" />
      <div className="flex w-max marquee-track gap-10">
        {doubled.map((s, i) => {
          const Icon = s.Icon;
          return (
            <div key={i} className="flex items-center gap-2.5 shrink-0 cursor-default group px-1">
              <Icon size={15} style={{ color: s.accent, opacity: 0.6 }}
                className="group-hover:opacity-100 transition-opacity duration-200" />
              <span className={`${grotesk.className} text-[14px] font-semibold whitespace-nowrap tracking-tight`}
                style={{ color: "#374151" }}>
                {s.name}
              </span>
              <span className="text-gray-300 text-[12px] ml-3 select-none" aria-hidden="true">·</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Main section ─────────────────────────────────────────── */
export default function SkillsSection() {
  const headerRef    = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <section
      id="skills"
      className={`${poppins.className} relative overflow-hidden`}
      style={{ background: "linear-gradient(160deg, #f0fafa 0%, #ffffff 50%, #f8f8ff 100%)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,121,121,0.08) 1px, transparent 1px)",
          backgroundSize: "38px 38px", opacity: 0.5,
        }} aria-hidden="true" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(0,121,121,0.06)" }} aria-hidden="true" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(99,102,241,0.045)" }} aria-hidden="true" />
      <div className="absolute top-20 left-10 pointer-events-none opacity-[0.05]" aria-hidden="true">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="#007979" strokeWidth="1" strokeDasharray="5 7" />
          <circle cx="100" cy="100" r="60" stroke="#007979" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="30" stroke="#007979" strokeWidth="0.5" strokeDasharray="3 6" />
        </svg>
      </div>

      {/* Header */}
      <div ref={headerRef} className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 pt-14 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={headerInView ? { width: 36 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-px bg-[#007979] block" aria-hidden="true"
              />
              <span className={`${poppins.className} text-[11px] tracking-[5px] uppercase font-semibold text-[#007979]`}>
                My Expertise
              </span>
            </motion.div>

            <div className="overflow-visible pb-4">
              <motion.h2
                initial={{ y: 64, opacity: 0 }}
                animate={headerInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className={`${playfair.className} text-gray-900`}
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontStyle: "italic", lineHeight: 1.12 }}
              >
                Tech{" "}
                <span className="relative inline-block" style={{ color: "#007979" }}>
                  Stack
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={headerInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 -bottom-1 w-full h-[4px] rounded-full origin-left"
                    style={{ background: "linear-gradient(90deg, #007979, #00c4c4)" }}
                    aria-hidden="true"
                  />
                </span>
              </motion.h2>
            </div>

            {/* Category pills */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.42, duration: 0.55 }}
              className="flex flex-wrap gap-2 mt-1"
            >
              {GROUPS.map((g) => (
                <span
                  key={g.id}
                  className={`${poppins.className} inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[11px] font-semibold tracking-wide`}
                  style={{ background: g.lightBg, color: g.accent }}
                >
                  <g.Icon size={10} />
                  {g.label}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="lg:max-w-xs space-y-3"
          >
            <p className={`${poppins.className} text-gray-500 text-[14px] leading-relaxed font-light`}>
              A full-spectrum toolkit covering frontend, backend, AI, data and testing
              — every skill applied in real shipped products.
            </p>
            <div className="flex items-baseline gap-2">
              <span className={`${grotesk.className} text-[2rem] font-bold text-[#007979] leading-none`}>
                {TOTAL_SKILLS}+
              </span>
              <span className={`${poppins.className} text-gray-400 text-[12px] font-light`}>
                technologies · {GROUPS.length} domains
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <MarqueeStrip />

      {/* Category rows */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 py-10">
        <div className="px-0 lg:px-4">
          {GROUPS.map((group, i) => (
            <CategoryRow key={group.id} group={group} index={i} />
          ))}
        </div>

        {/* Proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-10 sm:gap-16"
        >
          {[
            { value: `${TOTAL_SKILLS}+`, label: "Technologies",   accent: "#007979" },
            { value: `${GROUPS.length}`, label: "Domains",        accent: "#6366f1" },
            { value: "100%",             label: "Production-used", accent: "#c026d3" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ delay: 0.08 + i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-baseline gap-3"
            >
              <span
                className={`${playfair.className} leading-none`}
                style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", color: item.accent, fontStyle: "italic" }}
              >
                {item.value}
              </span>
              <span
                className={`${poppins.className} text-[13px] font-light text-gray-400 leading-tight`}
                style={{ maxWidth: "80px" }}
              >
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
