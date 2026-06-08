"use client";

import {
  FaLaptopCode,
  FaRobot,
  FaCloud,
  FaBolt,
  FaRocket,
  FaBullseye,
} from "react-icons/fa";

const items = [
  {
    icon: FaLaptopCode,
    title: "Full Stack Development",
  },
  {
    icon: FaRobot,
    title: "Agentic AI Systems",
  },
  {
    icon: FaCloud,
    title: "Cloud Development",
  },
  {
    icon: FaBolt,
    title: "AI Automation",
  },
  {
    icon: FaRocket,
    title: "Scalable Solutions",
  },
  {
    icon: FaBullseye,
    title: "Problem Solving",
    desc: "Turning complex ideas into products.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-[#f7f7f7] py-28 px-6 lg:px-16">
      <div className="grid lg:grid-cols-2 gap-20 mb-24">
        {/* Left */}
        <div>
          <p className="uppercase tracking-wider text-gray-500 text-sm">
            MY EXPERTISE & VALUES
          </p>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-2xl font-bold leading-tight text-black">
            I build intelligent digital experiences,
            combining full-stack engineering,
            Agentic AI systems and cloud technologies
            <span className="text-gray-300 block">
              that create real-world impact.
            </span>
          </h2>
        </div>
      </div>

      {/* Icons */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group relative flex flex-col items-center"
            >
              {/* Tooltip */}
            
              <div className="absolute left-1/2 -translate-x-1/2 -top-12 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2">
  <h3 className="whitespace-nowrap text-sm font-semibold font-serif text-center">
    {item.title}
  </h3>
</div>

              {/* Icon */}
              <div className="h-24 w-24 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-[#007979]">
                <Icon
                  size={42}
                  className="text-gray-300 transition-all duration-500 group-hover:text-[#007979]"
                />
              </div>

              {/* Line Animation */}
              <div className="mt-4 h-[2px] w-0 bg-[#007979] transition-all duration-500 group-hover:w-16"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}