"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

// Animated Nav Link
function NavLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="font-mono group relative inline-block text-[15px] font-medium transition-colors duration-300 
      hover:text-[#007979]">
      {label}
      <span aria-hidden="true" className="absolute left-0 -bottom-[6px] flex w-full flex-col gap-[3px] 
      pointer-events-none">
        <span className="block h-[1.5px] bg-[#007979] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
        <span className="block h-[1.5px] bg-[#007979] scale-x-0 origin-left transition-transform duration-500 delay-75 group-hover:scale-x-100" />
      </span>
    </Link>
  );
}

// Navbar
export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10" aria-label="Main Navigation">
        {/* Logo */}
        <Link href="/" aria-label="Home" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={90}
            height={90}
            priority
            className="object-contain"/>
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                label={link.label}
                href={link.href}/>
            </li>
          ))}
        </ul>

        {/* Button */}
         <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex 
         items-center justify-center px-6 py-3 rounded-full font-serif bg-white text-[#007979] border-2
         border-[#007979] font-serifbold text-[14px] transition-all duration-300 ease-in-out
        hover:bg-[#007979] hover:text-white hover:border-white hover:-translate-y-1 
        hover:shadow-[0_8px_25px_rgba(0,121,121,0.35)] focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-[#007979] focus-visible:ring-offset-2">
            RESUME
        </a>
      </nav>
    </header>
  );
}