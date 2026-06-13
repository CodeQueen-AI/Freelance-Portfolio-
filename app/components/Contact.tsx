"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { Space_Grotesk, Poppins } from "next/font/google";
import {
  FiSend,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiTag,
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { SiUpwork, SiFiverr } from "react-icons/si";

const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

/* ─── Socials data ─────────────────────────────────────── */
const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Sumbal-Naz23",
    icon: FiGithub,
    color: "#333",
    bg: "#f5f5f5",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sumbal-naz/",
    icon: FiLinkedin,
    color: "#0A66C2",
    bg: "#e8f0fb",
  },
  {
    label: "Twitter",
    href: "https://x.com/sumbal_dev23",
    icon: FiTwitter,
    color: "#1DA1F2",
    bg: "#e8f5fd",
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/sellers/sumbalnaz_23",
    icon: SiFiverr,
    color: "#1dbf73",
    bg: "#e8f8f0",
  },
];

/* ─── Info cards ───────────────────────────────────────── */
const INFO = [
  {
    icon: FiMail,
    label: "Email",
    value: "sumbal.devstudio@gmail.com",
    href: "mailto:codeq209@gmail.com",
  },
  {
    icon: FiMessageSquare,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
  {
    icon: FiTag,
    label: "Availability",
    value: "Open to freelance",
    href: null,
  },
];

/* ─── Social icon — no hover animation ────────────────── */
function SocialIcon({
  social,
  index,
}: {
  social: (typeof SOCIALS)[number];
  index: number;
}) {
  const Icon = social.icon;

  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      initial={{ opacity: 0, scale: 0, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.1 + index * 0.08,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col items-center gap-2"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100"
        style={{ backgroundColor: social.bg }}
      >
        <span style={{ color: social.color }}>
          <Icon size={22} />
        </span>
      </div>
      <span className="text-[10px] font-semibold text-gray-400 tracking-wide uppercase">
        {social.label}
      </span>
    </motion.a>
  );
}

/* ─── Input field ──────────────────────────────────────── */
type FieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  error: string;
  icon: React.ElementType;
  textarea?: boolean;
  onChange: (v: string) => void;
  onBlur: () => void;
};

function Field({
  id,
  label,
  type = "text",
  placeholder,
  value,
  error,
  icon: Icon,
  textarea,
  onChange,
  onBlur,
}: FieldProps) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  /*
   * Fix: the floating label was positioned with `top-3.5` and used a
   * negative translateY (-26px) to float above — but the input's own
   * padding didn't reserve room, so the label overlapped the border and
   * appeared cut off. Solution: use a static label above the input
   * (standard pattern) with enough top padding on the input to create
   * the visual "floating" effect without overflow.
   */
  return (
    <div className="flex flex-col gap-1.5">
      {/* Label — static, above the field */}
      <label
        htmlFor={id}
        className="text-[12px] font-semibold uppercase tracking-[2px] transition-colors duration-200"
        style={{ color: focused ? "#007979" : "#9ca3af" }}
      >
        {label}
      </label>

      {/* Input wrapper */}
      <div className="relative">
        {/* Left icon */}
        <div
          className={`absolute left-4 pointer-events-none transition-colors duration-200 ${
            textarea ? "top-3.5" : "top-1/2 -translate-y-1/2"
          }`}
          style={{ color: focused ? "#007979" : "#9ca3af" }}
        >
          <Icon size={16} />
        </div>

        {textarea ? (
          <textarea
            id={id}
            value={value}
            rows={5}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => {
              setFocused(false);
              onBlur();
            }}
            className={`w-full pt-3.5 pb-3.5 pl-12 pr-4 rounded-xl bg-gray-50 border-2 text-sm text-gray-800 resize-none outline-none transition-all duration-200 placeholder:text-gray-300 leading-relaxed ${
              error
                ? "border-red-300 bg-red-50/30"
                : focused
                ? "border-[#007979] bg-white shadow-[0_0_0_4px_rgba(0,121,121,0.08)]"
                : "border-gray-100 hover:border-gray-200"
            }`}
          />
        ) : (
          <input
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => {
              setFocused(false);
              onBlur();
            }}
            className={`w-full py-3.5 pl-12 pr-4 rounded-xl bg-gray-50 border-2 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-300 ${
              error
                ? "border-red-300 bg-red-50/30"
                : focused
                ? "border-[#007979] bg-white shadow-[0_0_0_4px_rgba(0,121,121,0.08)]"
                : "border-gray-100 hover:border-gray-200"
            }`}
          />
        )}
      </div>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-red-500 pl-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main Contact section ─────────────────────────────── */
export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-8%" });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState("");

  function validate(field: string, value: string) {
    if (field === "name")    return value.trim().length < 2   ? "Name must be at least 2 characters." : "";
    if (field === "email")   return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Enter a valid email address." : "";
    if (field === "subject") return value.trim().length < 3   ? "Subject is required." : "";
    if (field === "message") return value.trim().length < 10  ? "Message must be at least 10 characters." : "";
    return "";
  }

  function blurField(field: keyof typeof form) {
    setErrors((prev) => ({ ...prev, [field]: validate(field, form[field]) }));
  }

  function setField(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: validate(field, value) }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors = {
      name:    validate("name",    form.name),
      email:   validate("email",   form.email),
      subject: validate("subject", form.subject),
      message: validate("message", form.message),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setStatus("sending");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  /* tilt on info card */
  function useTilt() {
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rx = useTransform(my, [-40, 40], [4, -4]);
    const ry = useTransform(mx, [-40, 40], [-4, 4]);
    const srx = useSpring(rx, { stiffness: 200, damping: 20 });
    const sry = useSpring(ry, { stiffness: 200, damping: 20 });
    return { mx, my, srx, sry };
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`${poppins.className} relative bg-white pt-20 pb-14 px-6 lg:px-10 overflow-hidden`}
    >
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#007979]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#007979]/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={inView ? { width: 48 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-[2px] bg-[#007979] block"
            />
            <span className="text-xs font-bold uppercase tracking-[5px] text-[#007979]">
              Get In Touch
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 80, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className={`${grotesk.className} text-[12vw] sm:text-[9vw] lg:text-[7vw] font-bold leading-none text-black uppercase tracking-tight`}
            >
              Let&apos;s Talk
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-5 text-gray-500 max-w-lg leading-relaxed"
          >
            Have a project in mind? Looking for a developer to bring your idea to life?
            I&apos;d love to hear from you. Fill out the form below or reach out directly.
          </motion.p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-5 gap-14 lg:gap-20">

          {/* LEFT — info + socials */}
          <div className="lg:col-span-2 space-y-10">

            {/* Info cards */}
            <div className="space-y-4">
              {INFO.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-[#007979]/30 hover:bg-[#007979]/4 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,121,121,0.1)]"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#007979] shrink-0 group-hover:bg-[#007979] group-hover:text-white group-hover:border-[#007979] transition-all duration-300 shadow-sm">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[3px] font-bold text-gray-400 mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-semibold text-gray-800 hover:text-[#007979] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-gray-800">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-px bg-gradient-to-r from-[#007979]/40 via-gray-200 to-transparent origin-left"
            />

            {/* Socials */}
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="text-xs font-bold uppercase tracking-[4px] text-gray-400 mb-6"
              >
                Find Me On
              </motion.p>
              <div className="flex flex-wrap gap-5">
                {SOCIALS.map((s, i) => (
                  <SocialIcon key={s.label} social={s} index={i} />
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#007979]/20 bg-[#007979]/5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#007979] animate-pulse" />
              <span className="text-sm font-semibold text-[#007979]">
                Available for new projects
              </span>
            </motion.div>
          </div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full min-h-[480px] flex flex-col items-center justify-center text-center gap-6 rounded-3xl bg-[#007979]/5 border-2 border-[#007979]/20 p-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 12 }}
                    className="w-20 h-20 rounded-full bg-[#007979] flex items-center justify-center text-white shadow-[0_0_40px_rgba(0,121,121,0.4)]"
                  >
                    <FiCheckCircle size={36} />
                  </motion.div>
                  <div>
                    <h3 className={`${grotesk.className} text-2xl font-bold text-black mb-2`}>
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 leading-relaxed max-w-sm">
                      Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  <motion.button
                    onClick={() => setStatus("idle")}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 rounded-full border-2 border-[#007979] text-[#007979] text-sm font-semibold hover:bg-[#007979] hover:text-white transition-colors duration-300"
                  >
                    Send Another
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                  noValidate
                >
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      id="name"
                      label="Your Name"
                      placeholder="e.g. John Doe"
                      value={form.name}
                      error={errors.name}
                      icon={FiUser}
                      onChange={(v) => setField("name", v)}
                      onBlur={() => blurField("name")}
                    />
                    <Field
                      id="email"
                      label="Email Address"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      error={errors.email}
                      icon={FiMail}
                      onChange={(v) => setField("email", v)}
                      onBlur={() => blurField("email")}
                    />
                  </div>

                  {/* Subject */}
                  <Field
                    id="subject"
                    label="Subject"
                    placeholder="e.g. Project Collaboration"
                    value={form.subject}
                    error={errors.subject}
                    icon={FiTag}
                    onChange={(v) => setField("subject", v)}
                    onBlur={() => blurField("subject")}
                  />

                  {/* Message */}
                  <Field
                    id="message"
                    label="Your Message"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    error={errors.message}
                    icon={FiMessageSquare}
                    textarea
                    onChange={(v) => setField("message", v)}
                    onBlur={() => blurField("message")}
                  />

                  {/* Server error */}
                  <AnimatePresence>
                    {status === "error" && serverError && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-sm text-red-500 text-center py-2 px-4 bg-red-50 rounded-lg border border-red-100"
                      >
                        {serverError}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={status !== "sending" ? { scale: 1.02, y: -2 } : {}}
                    whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                    className="group relative w-full py-4 rounded-xl bg-[#007979] text-white font-semibold text-sm tracking-wide overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_12px_40px_rgba(0,121,121,0.4)] transition-shadow duration-300"
                  >
                    <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {status === "sending" ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.6, repeat: Infinity }}
                          >
                            <FiSend size={16} />
                          </motion.span>
                        </>
                      )}
                    </span>
                  </motion.button>

                  <p className="text-center text-xs text-gray-400">
                    I typically respond within 24 hours. No spam, ever.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
