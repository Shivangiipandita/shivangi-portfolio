"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { CountUp, Magnetic, Marquee } from "./motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* headline that rises line-by-line, preserving inline styling */
function LineRise({ children, delay }: { children: ReactNode; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "108%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const stats = [
  { to: 3.5, decimals: 1, suffix: "+", label: "Years in product & BA" },
  { to: 15, suffix: "+", label: "Government projects" },
  { to: 500, suffix: "K+", label: "Residents impacted" },
  { to: 4, suffix: "", label: "Deep-dive case studies" },
];

const ticker = [
  "Product Strategy",
  "0 → 1 Building",
  "User Research",
  "GTM Strategy",
  "Roadmapping",
  "Jobs-to-be-Done",
  "Prioritization",
  "Competitive Analysis",
  "Stakeholder Management",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* warm radial atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(222,77,38,0.16), transparent 65%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-36 sm:px-8 sm:pt-44">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-ink-faint"
        >
          <span className="h-px w-8 bg-accent" />
          Product Manager
          <span className="text-edge-strong">·</span>
          India / Remote
        </motion.div>

        <h1 className="font-display text-[clamp(2.6rem,1.4rem+5.6vw,6rem)] font-light leading-[0.98] tracking-[-0.02em] text-ink">
          <LineRise delay={0.05}>I turn messy,</LineRise>
          <LineRise delay={0.12}>real-world problems</LineRise>
          <LineRise delay={0.19}>
            into products people{" "}
            <em className="ink-underline font-normal italic text-accent">
              actually
            </em>{" "}
            use.
          </LineRise>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          className="mt-9 max-w-xl text-lg leading-relaxed text-ink-dim"
        >
          3.5+ years delivering digital products for NYC government agencies as
          a Business Analyst — now leading product end-to-end as founder of{" "}
          <a
            href="http://focustribe.in"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
          >
            Focus Tribe
          </a>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.62, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
        >
          <Magnetic>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              Read the case studies
              <ArrowDown
                size={15}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </Magnetic>
          <a
            href="https://linkedin.com/in/shivangipandita"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-dim transition-colors hover:text-ink"
          >
            LinkedIn
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="mailto:shivangiihere@gmail.com"
            className="text-sm font-medium text-ink-dim transition-colors hover:text-ink"
          >
            Email
          </a>
        </motion.div>

        {/* impact figures */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-edge bg-edge sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-paper px-5 py-7">
              <dd className="font-display text-4xl font-light tracking-tight text-ink tnum sm:text-5xl">
                <CountUp
                  to={s.to}
                  decimals={s.decimals ?? 0}
                  suffix={s.suffix}
                />
              </dd>
              <dt className="mt-2 text-[0.78rem] leading-snug text-ink-faint">
                {s.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* full-bleed skills ticker */}
      <div className="relative z-10 border-y border-edge bg-card/40 py-5">
        <Marquee>
          {ticker.map((t) => (
            <span
              key={t}
              className="flex items-center gap-6 whitespace-nowrap pr-6 font-display text-xl italic text-ink-dim sm:text-2xl"
            >
              {t}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
