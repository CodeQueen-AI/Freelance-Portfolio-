"use client";
import { motion } from "motion/react";
import {
  FaCode,
  FaRobot,
  FaCloud,
  FaCogs,
} from "react-icons/fa";

const sections = [
  {
    title: "CREATIVE DEVELOPER",
    bg: "#F5F5F5",
    text: "#111111",
    icon: FaCode,
  },
  {
    title: "AGENTIC AI DEVELOPER",
    bg: "#007979",
    text: "#FFFFFF",
    icon: FaRobot,
  },
  {
    title: "CLOUD DEVELOPMENT",
    bg: "#0F172A",
    text: "#38BDF8",
    icon: FaCloud,
  },
  {
    title: "AI AUTOMATION",
    bg: "#111827",
    text: "#00E5A8",
    icon: FaCogs,
  },
];

export default function ScrollStack() {
  return (
    <section className="relative">
      {sections.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
            style={{
              backgroundColor: item.bg,
              zIndex: index + 1,
            }}
          >
            {/* Floating Icons */}
            <motion.div
              animate={{
                y: [-15, 15, -15],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute top-24 left-20 opacity-20"
            >
              <Icon
                size={120}
                color={item.text}
              />
            </motion.div>

            <motion.div
              animate={{
                y: [15, -15, 15],
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
              }}
              className="absolute bottom-24 right-20 opacity-20"
            >
              <Icon
                size={140}
                color={item.text}
              />
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: false }}
              className="relative z-10 text-center"
            >
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="flex justify-center mb-8"
              >
                <Icon
                  size={90}
                  color={item.text}
                />
              </motion.div>

              <h2
                className="
                font-black
                uppercase
                tracking-tighter
                leading-none
                text-[3rem]
                md:text-[5rem]
                lg:text-[8rem]
                xl:text-[10rem]
              "
                style={{ color: item.text }}
              >
                {item.title}
              </h2>
            </motion.div>

            {/* Animated Background Blur */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
              style={{
                backgroundColor: item.text,
              }}
            />
          </div>
        );
      })}
    </section>
  );
}