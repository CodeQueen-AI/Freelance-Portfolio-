// "use client";

// const techStacks = [
//   "GEMINI",
//   "OPENAI",
//   "LANGCHAIN",
//   "PINECONE",
//   "PYTHON",
//   "NEXT.JS",
//   "REACT",
//   "TAILWIND",
//   "TYPESCRIPT",
//   "NODE.JS",
//   "MONGODB",
//   "SUPABASE",
//   "POSTGRESQL",
//   "FRAMER",
//   "AI AGENTS",
// ];

// export default function Home() {
//   return (
//     <>
//       <style>{`
//         @keyframes marquee {
//           0% { transform: translateX(0%); }
//           100% { transform: translateX(-50%); }
//         }

//         .marquee {
//           animation: marquee 25s linear infinite;
//         }

//         /* SIMPLE CLEAN OUTLINE */
//         .outline-text {
//           color: transparent;
//           -webkit-text-stroke: 1px white;
//         }

//         /* VERY SUBTLE SHINE (NOT FLASHY) */
//         .shine {
//           background: linear-gradient(
//             90deg,
//             rgba(255,255,255,0.2),
//             rgba(255,255,255,0.9),
//             rgba(255,255,255,0.2)
//           );
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: shine 6s linear infinite;
//         }

//         @keyframes shine {
//           0% { background-position: 0% center; }
//           100% { background-position: 200% center; }
//         }
//       `}</style>

//       <section className="bg-[#007979] py-12 overflow-hidden border-y border-white/20">

//         <div className="flex w-max marquee">

//           {[...techStacks, ...techStacks].map((item, index) => (
//             <span
//               key={index}
//               className="
//                 mx-10
//                 text-4xl md:text-6xl
//                 font-black
//                 uppercase
//                 whitespace-nowrap
//                 tracking-widest
//                 outline-text
//                 shine
//               "
//             >
//               {item}
//             </span>
//           ))}

//           {/* separators */}
//           {[...Array(10)].map((_, i) => (
//             <span
//               key={i}
//               className="mx-6 text-white text-4xl md:text-6xl font-bold opacity-60"
//             >
//               •
//             </span>
//           ))}

//         </div>

//       </section>
//     </>
//   );
// }




"use client";

const techStacks = [
  "GEMINI",
  "OPENAI",
  "LANGCHAIN",
  "PINECONE",
  "PYTHON",
  "NEXT.JS",
  "REACT",
  "TAILWIND",
  "TYPESCRIPT",
  "NODE.JS",
  "MONGODB",
  "SUPABASE",
  "POSTGRESQL",
  "FRAMER",
  "AI AGENTS",
];

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee {
          animation: marquee 28s linear infinite;
        }

        /* CLEAN OUTLINE + DEPTH */
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1.2px rgba(255,255,255,0.85);
        }

        /* SOFT SHINE (VERY SUBTLE) */
        .shine {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.2),
            rgba(255,255,255,1),
            rgba(255,255,255,0.2)
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 7s linear infinite;
        }

        @keyframes shine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

      {/* BACKGROUND LAYER (IMPORTANT UPGRADE) */}
      <section className="relative overflow-hidden py-12 border-y border-white/20">

        {/* Teal gradient base */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#007979] via-[#006b6b] to-[#007979]" />

        {/* subtle overlay for depth */}
        <div className="absolute inset-0 bg-black/10" />

        {/* MARQUEE */}
        <div className="relative flex w-max marquee">

          {[...techStacks, ...techStacks].map((item, index) => (
            <span
              key={index}
              className="
                mx-12
                text-4xl md:text-6xl
                font-black
                uppercase
                whitespace-nowrap
                tracking-widest
                outline-text
                shine
              "
            >
              {item}
            </span>
          ))}

          {/* separators */}
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="mx-6 text-white text-5xl font-black opacity-60"
            >
              •
            </span>
          ))}

        </div>

      </section>
    </>
  );
}