"use client";

import { useState } from "react";

export default function Page() {
  const [active, setActive] = useState<number | null>(null);

  const services = [
    {
      title: "Full Stack Development",
      description:
        "Building scalable web applications with Next.js, React, Node.js, TypeScript and modern cloud technologies.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
      badges: ["Next.js", "React", "TypeScript", "Node.js"],
    },
    {
      title: "AI Automation",
      description:
        "Custom AI agents, workflow automation, business integrations and intelligent systems.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
      badges: ["OpenAI", "Agents", "Automation", "Workflows"],
    },
    {
      title: "UI/UX Design",
      description:
        "Designing premium digital experiences with user-first interfaces and modern aesthetics.",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200",
      badges: ["Figma", "Wireframes", "UX Research", "Prototyping"],
    },
    {
      title: "SaaS Products",
      description:
        "Complete SaaS solutions from idea to deployment with dashboards and APIs.",
      image:
        "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200",
      badges: ["Dashboard", "API", "Cloud", "Analytics"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f5f3] py-16">
      <div className="max-w-[1600px] mx-auto px-6">

        <p className="uppercase text-zinc-500 tracking-[0.3em] text-sm mb-8">
          Our Services
        </p>

        {/* MAIN CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className={`
                relative
                h-[460px]
                overflow-hidden
                cursor-pointer
                transition-all duration-700
                group

                ${
                  active === index
                    ? "scale-[1.04] z-20"
                    : active !== null
                    ? "scale-[0.97] opacity-70"
                    : ""
                }
              `}
            >

              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="
                  absolute inset-0 h-full w-full object-cover
                  transition-all duration-700
                  group-hover:scale-110
                  group-hover:brightness-75
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-all duration-700" />

              {/* Top */}
              <div className="absolute top-6 left-6 right-6 z-20 flex justify-between text-white">
                <h2 className="text-3xl font-light max-w-[200px]">
                  {service.title}
                </h2>
              </div>

              {/* Hover content */}
              <div className="absolute bottom-6 left-6 right-6 z-20 opacity-0 translate-y-8 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0">

                <p className="text-white text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}