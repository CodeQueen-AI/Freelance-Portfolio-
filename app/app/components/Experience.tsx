"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function Home() {
  const experiences = [
{
  period: "NOV 2025 — DEC 2025",
  role: "FRONTEND DEVELOPER",
  description:
    "Developed responsive and high-performance web interfaces using modern frontend technologies Focused on clean UI implementation, performance optimization and seamless user experiences",
  skills: ["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND CSS"],
},
{
  period: "JAN 2026 — PRESENT",
  role: "FREELANCE DEVELOPER",
  description:
    "Working with clients to build modern websites and web applications Delivering responsive, scalable and user-focused solutions while managing projects from concept to deployment",
  skills: ["NEXT.JS", "REACT", "TAILWIND CSS", "CLIENT PROJECTS"],
},
  ];

  return (
    <main className={`${poppins.className} min-h-screen bg-[#eaf7f7] overflow-hidden`}>
      
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 mb-24">
          
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-14 h-[2px] bg-[#007979]" />
              <span className="tracking-[6px] text-lg md:text-sm font-semibold text-[#007979] uppercase font-serif">
                Professional Journey
              </span>
            </div>

            <h1 className="uppercase font-black leading-[0.9] font-serif">
              <span className="block text-[14vw] lg:text-[9vw] text-black">
                Technical
              </span>

              <span className="block text-[14vw] lg:text-[9vw] text-[#007979]">
                Experience.
              </span>
            </h1>
          </div>
        </div>

        {/* EXPERIENCE LIST */}
        <div className="space-y-20">

          {experiences.map((item, index) => (
            <div
              key={index}
              className="relative border-t border-[#d8f4f4] pt-10 md:pt-14"
            >
              
              {/* BACKGROUND TEXT */}
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none overflow-hidden">
                <span className="text-[10rem] mfont-black text-black/[0.04] uppercase leading-none">
                  Freelance
                </span>
              </div>

              <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24">

                {/* LEFT SIDE */}
                <div>
                  <p className="tracking-[5px] text-[#007979] font-semibold text-xs md:text-sm mb-6 uppercase">
                    {item.period}
                  </p>

                  <h2 className="text-black uppercase font-black font-serif leading-[0.9] text-[50px] ">
                    {item.role}
                  </h2>
                </div>

                {/* RIGHT SIDE */}
                <div>
                  <p className=" text-lg leading-relaxed max-w-4xl">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-5 py-2 rounded-full border border-[#cfe7e7] bg-white/60 text-xs md:text-sm font-semibold tracking-[2px] text-[#007979]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}