"use client";

const techStacks = [
  "GEMINI", "OPENAI", "LANGCHAIN", "PINECONE", "PYTHON",
  "NEXT.JS", "REACT", "TAILWIND", "TYPESCRIPT", "NODE.JS",
  "MONGODB", "SUPABASE", "POSTGRESQL", "FRAMER", "AI AGENTS",
];

export default function Banner1() {
  const doubled = [...techStacks, ...techStacks];

  return (
    <section className="relative overflow-hidden py-10 border-y border-white/20 bg-[#007979]">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      <div className="relative flex w-max marquee-track">
        {doubled.map((item, index) => (
          <span
            key={index}
            className="mx-10 text-4xl md:text-6xl font-black uppercase whitespace-nowrap tracking-wider marquee-outline"
          >
            {item}
          </span>
        ))}
        {[...Array(8)].map((_, i) => (
          <span key={`dot-${i}`} className="mx-6 text-white/40 text-5xl font-black self-center">
            ✦
          </span>
        ))}
      </div>
    </section>
  );
}
