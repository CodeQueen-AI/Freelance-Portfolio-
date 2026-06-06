import { Special_Elite } from "next/font/google";

const elite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`${elite.className} relative min-h-screen overflow-hidden bg-[#fafffe]`}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.06) 3px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.06) 3px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-9xl text-center">

          {/* FIRST ROW */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[30px] leading-[1.5] md:text-[55px] whitespace-nowrap">
            <span>I design & build</span>

            {/* Scribble */}
            <span className="relative -mt-2">
              <svg
                width="52"
                height="52"
                viewBox="0 0 100 100"
                fill="none"
                className="rotate-12"
              >
                <path
                  d="M50 10C20 0 15 40 45 35C70 30 80 60 50 60C20 60 30 90 60 80"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M52 78L48 95"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
{/* 
            <span>Modern Digital Products</span> */}
            <span className="relative px-3 py-1 text-white">
  <span className="absolute inset-0 bg-yellow-400/80 -skew-x-6 rounded-sm"></span>
  <span className="relative">
    Modern Digital Products
  </span>
</span>

            {/* Rays */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 40 40"
              fill="none"
              className="-mt-6"
            >
              <path
                d="M20 3V12M5 8L10 13M35 8L30 13"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* SECOND ROW */}
          <h2 className="mt-2 text-[30px] leading-[1.5] md:text-[58px] whitespace-nowrap">
            using Modern Web Technologies & AI
          </h2>

          {/* THIRD ROW */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-5 text-[30px] leading-[1.5] md:text-[58px] whitespace-nowrap">
            <span>I deliver Fast, Scalable Solutions</span>

           <span className="relative px-6 py-2 text-white">
  <span className="absolute inset-0 bg-red-600/80 -skew-x-6"></span>
  <span className="relative">
    for real-world Problems
  </span>
</span>
          </div>

        </div>
      </section>
    </main>
  );
}


