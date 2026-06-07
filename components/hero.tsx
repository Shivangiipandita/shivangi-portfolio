"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="px-6 pt-44 pb-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="mb-6 text-sm text-ink-faint">
            Product Manager
          </p>
          <h1 className="font-serif text-5xl leading-[1.12] tracking-tight text-ink sm:text-6xl">
            I turn messy, real-world problems into products people{" "}
            <em>actually</em> use.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-ink-dim"
        >
          3+ years delivering digital solutions for NYC government agencies as
          a Business Analyst — now leading product as founder of{" "}
          <a
            href="http://focustribe.in"
            target="_blank"
            rel="noreferrer"
            className="text-ink underline decoration-edge-strong underline-offset-4 transition-colors hover:decoration-ink"
          >
            Focus Tribe
          </a>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <a
            href="#work"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            Read my case studies
          </a>
          <a
            href="https://linkedin.com/in/shivangipandita"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-dim transition-colors hover:text-ink"
          >
            LinkedIn
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-y-8 border-t border-edge pt-8 sm:grid-cols-4"
        >
          {[
            ["3.5+", "Years in product & BA"],
            ["15+", "Government Projects delivered"],
            ["500K+", "Residents impacted"],
            ["4", "Deep-dive case studies"],
          ].map(([v, l]) => (
            <div key={l}>
              <dt className="sr-only">{l}</dt>
              <dd className="text-2xl font-semibold tracking-tight text-ink">
                {v}
              </dd>
              <dd className="mt-1 text-xs text-ink-faint">{l}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
