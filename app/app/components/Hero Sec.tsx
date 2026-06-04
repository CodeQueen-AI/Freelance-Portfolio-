"use client";

import Image from "next/image";
// import { Inter, Dancing_Script } from "next/font/google";
import { FaLaptopCode, FaRobot, FaBriefcase, FaGlobe } from "react-icons/fa";
import { Inter, Dancing_Script, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Hero() {
  return (
    <section className={`relative min-h-screen overflow-hidden ${inter.className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00797925,transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Name Top Center*/}
        <div className="text-center pt-10 -mt-6">
          <h1 className="leading-none tracking-tight flex justify-center gap-4">
            <span className={`${dancing.className} text-[70px] md:text-[120px] lg:text-[160px]`}>
              <span className="text-[#007979]">S</span>
              <span className="text-black">umbal</span>
            </span>
            <span className={`${dancing.className} text-[70px] md:text-[120px] lg:text-[160px]`}>
              <span className="text-[#007979]">N</span>
              <span className="text-black">az</span>
            </span>
          </h1>
           <div className={`mt-4 flex justify-center ${poppins.className}`}>
        <span className="px-6 py-2 rounded-full border border-black text-black text-xs md:text-sm tracking-[3px] uppercase bg-white shadow-sm hover:shadow-md hover:border-[#007979] hover:text-[#007979] transition">
            Freelance Full Stack & AI Developer
        </span>
            </div>
        </div>

        <div className="relative mt-12 grid lg:grid-cols-3 items-center gap-10">
          <div className="space-y-6">
            <p className="leading-relaxed italic font-serif">
              I am a Freelance Full Stack & AI Developer focused on building modern, scalable and user-friendly 
              321 products I create fast and clean web applications with AI-powered features that deliver real value and help businesses grow globally with better digital experiences
            </p>
            <button className={`group flex items-center gap-3 px-7 py-3 rounded-full bg-[#007979] text-white font-medium tracking-wide overflow-hidden relative cursor-pointer ${poppins.className}`}>
            <span className="relative z-10">
                Start a Collaboration
            </span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition duration-500"></span>
            </button>
          </div>

          {/* Center Image */}
          <div className="flex justify-center relative">
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#007979]/20 blur-3xl 
            rounded-full" />
            <Image
              src="/Hero.png"
              alt="Sumbal Naz"
              width={900}
              height={900}
              className="relative scale-125 md:scale-150"/>
            </div>
            <div className="w-full max-w-md">
        {[
            { icon: <FaLaptopCode />, title: "Frontend & Full Stack Developer" },
            { icon: <FaRobot />, title: "AI & Automation Engineer" },
            { icon: <FaBriefcase />, title: "Freelance Developer (Remote Projects)" },
            { icon: <FaGlobe />, title: "Working with Global Clients" },
        ].map((item, i) => (
            <div key={i}
            className="flex items-center gap-4 py-2 border-b border-gray-200 cursor-pointer group transition">

            {/* Icon */}
            <span className="text-lg group-hover:translate-x-1 transition duration-300 shrink-0">
                {item.icon}
            </span>

            {/* Text */}
            <h3 className="text-base md:text-lg font-medium text-gray-800 group-hover:text-[#007979] transition 
            duration-300 italic font-serif leading-snug">
                {item.title}
            </h3>
            </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}