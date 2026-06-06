"use client";

import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function HireMeSection() {
  return (
    <section className={`${poppins.className} bg-[#f6fffe] py-24 px-6`}>
      <div className="max-w-6xl mx-auto">

        <div className="relative overflow-hidden rounded-[40px] bg-[#007979] px-8 py-20 md:px-16 text-center">

          {/* Background Shape */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-[-10%] top-[35%] h-52 w-52 rounded-full bg-white blur-3xl" />
            <div className="absolute right-[-10%] bottom-[15%] h-64 w-64 rounded-full bg-white blur-3xl" />
          </div>

          {/* Badge */}
          <div className="relative inline-flex items-center rounded-full bg-white/20 px-5 py-2 text-[10px] font-bold uppercase tracking-[3px] text-white">
            The Next Chapter
          </div>

          {/* Heading */}
          <h2 className="relative mt-6 font-black uppercase leading-[0.9]">
            <span className="block text-white text-5xl md:text-7xl">
              Ready To Hire
            </span>

            <span className="block text-white text-5xl md:text-7xl">
              An
            </span>

            <span className="block text-[#eafffb] text-5xl md:text-7xl">
              AI Developer?
            </span>
          </h2>

          {/* Text */}
          <p className="relative mx-auto mt-8 max-w-2xl text-white/80 text-lg">
            Let&apos;s turn your vision into an intelligent digital
            product. From AI automation and agents to full-stack
            applications, I build systems that help businesses
            scale faster.
          </p>

          {/* Button */}
          <div className="relative mt-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-sm font-bold uppercase tracking-wide text-[#007979] transition-all duration-300 hover:scale-105"
            >
              Let&apos;s Start A Project
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}