"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Three.Js",
  "Daisy UI",
  "Shadcn",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "Qdrant",
  "Speckit Plus",
  "OpenAI Agents SDK",
  "Claude Code",
  "Gemini CLI",
  "Chainlit",
  "Numpy",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "EDA",
  "Streamlit",
  "Agentic AI",
  "RAG",
  "Git",
  "GitHub",
  "Netlify",
  "Vercel"
];

// clean gradient edge style (no blur shadow/glow)
const styles = [
  "bg-pink-50 text-pink-700 border-pink-200",
  "bg-rose-50 text-rose-700 border-rose-200",
  "bg-red-50 text-red-700 border-red-200",
  "bg-orange-50 text-orange-700 border-orange-200",
  "bg-amber-50 text-amber-700 border-amber-200",
  "bg-yellow-50 text-yellow-700 border-yellow-200",
  "bg-lime-50 text-lime-700 border-lime-200",
  "bg-green-50 text-green-700 border-green-200",
  "bg-emerald-50 text-emerald-700 border-emerald-200",
  "bg-teal-50 text-teal-700 border-teal-200",
  "bg-cyan-50 text-cyan-700 border-cyan-200",
  "bg-sky-50 text-sky-700 border-sky-200",
  "bg-blue-50 text-blue-700 border-blue-200",
  "bg-indigo-50 text-indigo-700 border-indigo-200",
  "bg-violet-50 text-violet-700 border-violet-200",
  "bg-purple-50 text-purple-700 border-purple-200",
  "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
  "bg-pink-100 text-pink-800 border-pink-300",
  "bg-red-100 text-red-800 border-red-300",
  "bg-orange-100 text-orange-800 border-orange-300",
  "bg-yellow-100 text-yellow-800 border-yellow-300",
  "bg-green-100 text-green-800 border-green-300",
  "bg-teal-100 text-teal-800 border-teal-300",
  "bg-cyan-100 text-cyan-800 border-cyan-300",
  "bg-blue-100 text-blue-800 border-blue-300",
  "bg-indigo-100 text-indigo-800 border-indigo-300",
  "bg-purple-100 text-purple-800 border-purple-300",
  "bg-gray-50 text-gray-700 border-gray-200",
  "bg-slate-50 text-slate-700 border-slate-200",
  "bg-zinc-50 text-zinc-700 border-zinc-200",
  "bg-neutral-50 text-neutral-700 border-neutral-200",
  "bg-stone-50 text-stone-700 border-stone-200",
  "bg-slate-100 text-slate-800 border-slate-300",
  "bg-gray-100 text-gray-800 border-gray-300",
  "bg-neutral-100 text-neutral-800 border-neutral-300",
];

export default function SkillsSection() {
  return (
    <section
      className={`min-h-screen bg-white flex items-center justify-center px-6 py-20 ${poppins.className}`}
    >
      <div className="max-w-6xl mx-auto text-center">

        <p className="uppercase tracking-[5px] text-[#007979] text-sm font-medium mb-4">
          My Expertise
        </p>

        <h2 className="text-6xl md:text-8xl font-bold text-black mb-16">
          TECH STACK
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          {skills.map((skill, index) => {
            const style = styles[index % styles.length];

            return (
              <div
                key={index}
                className={`
                  group
                  px-6 py-3
                  rounded-full
                  border
                  transition-all duration-300
                  hover:scale-[1.06]
                  hover:border-[#007979]
                  ${style}
                `}
              >
                <span className="flex items-center gap-3 font-medium tracking-wide">
                  {skill}
                  <span className="w-2 h-2 rounded-full bg-[#007979] opacity-70 group-hover:opacity-100 transition" />
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}