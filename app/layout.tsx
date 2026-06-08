import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sumbal Naz — Full Stack & AI Developer",
  description:
    "Freelance Full Stack & AI Developer specializing in Next.js, React, TypeScript, and Agentic AI systems. Building modern, scalable digital products.",
  keywords: [
    "Full Stack Developer",
    "AI Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Freelance Developer",
    "Agentic AI",
  ],
  authors: [{ name: "Sumbal Naz" }],
  openGraph: {
    title: "Sumbal Naz — Full Stack & AI Developer",
    description:
      "Freelance Full Stack & AI Developer specializing in Next.js, React, TypeScript, and Agentic AI systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
