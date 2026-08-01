import Link from "next/link";
import { ArrowUpRight, ArrowRight, Diamond } from "lucide-react";
import { Reveal, Stagger, StaggerItem, Magnetic } from "./motion";
import { ToolIcon, hasToolIcon } from "./tool-icons";
import { caseStudies } from "@/lib/case-studies";

const WRAP = "mx-auto max-w-6xl px-6 sm:px-8";

const NUMBER_WORDS = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];

function numberWord(n: number) {
  return NUMBER_WORDS[n] ?? n.toString();
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-ink-faint">
      <span className="h-px w-8 bg-accent" />
      {children}
    </p>
  );
}

/* ───────────────── About ───────────────── */

export function About() {
  return (
    <section id="about" className={`${WRAP} scroll-mt-24 py-28 sm:py-36`}>
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-light leading-[1.05] tracking-tight text-ink sm:text-4xl">
            From business analysis to product.
          </h2>
          <p className="mt-6 font-display text-xl italic leading-snug text-accent">
            “I start with the person, not the technology.”
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink-dim">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-light first-letter:leading-[0.75] first-letter:text-ink">
              My career started in business analysis — understanding complex
              government workflows, sitting with stakeholders, and turning
              messy real-world problems into clean digital solutions on
              Salesforce. Somewhere along the way I realized what truly excites
              me isn&apos;t just gathering requirements — it&apos;s deciding{" "}
              <strong className="font-semibold text-ink">
                what to build, for whom, and why.
              </strong>
            </p>
            <p>
              Today I&apos;m putting that thinking into practice as founder of{" "}
              <strong className="font-semibold text-ink">Focus Tribe</strong>,
              a habit-tracking platform where users stay accountable through
              collaborative groups. I lead every product decision — who our
              users are, what problems we&apos;re solving, which features matter
              most, and what can wait.
            </p>
            <p>
              My superpower is thinking from the{" "}
              <strong className="font-semibold text-ink">
                user&apos;s perspective first
              </strong>
              . Whether it&apos;s a county employee stuck in a paper-heavy loan
              process or a student building study habits — I begin with the
              person and work backwards to the product.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────── Case Studies ───────────────── */

export function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-20 border-y border-edge bg-surface py-28 sm:py-36"
    >
      <div className={WRAP}>
        <Reveal className="mb-14 flex items-end justify-between gap-6">
          <div>
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-light leading-[1.02] tracking-tight text-ink sm:text-5xl">
              {numberWord(caseStudies.length)} problems, worked end to end.
            </h2>
            <p className="mt-5 max-w-lg text-ink-dim">
              Each follows the same discipline — understand the user,
              prioritise the problem, design the solution, measure the impact.
            </p>
          </div>
          <span className="hidden shrink-0 font-display text-2xl italic text-ink-faint sm:block">
            ({caseStudies.length.toString().padStart(2, "0")})
          </span>
        </Reveal>

        <Stagger className="border-t border-edge-strong">
          {caseStudies.map((cs, i) => (
            <StaggerItem key={cs.slug}>
              <Link
                href={`/work/${cs.slug}`}
                className="group relative grid grid-cols-1 gap-5 border-b border-edge py-9 transition-all duration-300 hover:bg-card hover:shadow-[0_4px_24px_rgba(15,118,110,0.07)] sm:grid-cols-[3.5rem_1fr_auto] sm:items-start sm:gap-8 sm:px-4 sm:py-10 sm:rounded-lg"
              >
                {/* accent bar */}
                <span className="absolute left-0 top-0 hidden h-full w-[3px] origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100 sm:block" />

                <span className="font-display text-2xl italic text-ink-faint transition-colors group-hover:text-accent">
                  {(i + 1).toString().padStart(2, "0")}
                </span>

                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h3 className="font-display text-2xl font-normal tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-[1.75rem]">
                      {cs.title}
                    </h3>
                    <span className="rounded-full border border-accent-soft bg-accent-wash px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-accent-deep">
                      {cs.tag}
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl text-[0.97rem] leading-relaxed text-ink-dim">
                    {cs.blurb}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-7 gap-y-2">
                    {cs.metrics.slice(0, 3).map((m) => (
                      <span
                        key={m.label}
                        className="text-sm text-ink-faint"
                      >
                        <span className="font-display text-base font-medium text-accent-deep tnum">
                          {m.value}
                        </span>{" "}
                        {m.label.toLowerCase()}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="mt-1 inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-accent-deep transition-colors group-hover:text-accent sm:mt-0 sm:self-center">
                  Read case study
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ───────────────── Skills ───────────────── */

const skillGroups = [
  {
    title: "Product",
    items:
      "Product Strategy · Roadmapping · Product Discovery · User Research · Competitive Analysis · Prioritization (RICE / MoSCoW) · Jobs-to-be-Done · GTM Strategy · AI Product Metrics · Responsible AI · Human-in-the-Loop Design",
  },
  {
    title: "Business Analysis",
    items:
      "Requirements Gathering · Process Improvement · Stakeholder Management · UAT Testing · BRD / FRD / PRD · User Stories · Test Cases · Wireframing · Agile / Scrum · Sprint Planning",
  },
  {
    title: "Tools",
    items:
      "Figma · Jira · Notion · Miro · Salesforce · Tableau · Postman · Lucidchart · Confluence · Trello",
  },
  {
    title: "Technical",
    items:
      "Salesforce Service Cloud · Custom Objects · SOQL · SQL · Data Modeling · API Testing",
  },
];

const certs = [
  "IBM Product Manager Professional Certificate",
  "Professional Scrum Product Owner (PSPO I)",
  "Salesforce Certified Business Analyst",
  "Salesforce Certified Administrator",
  "Salesforce AI Specialist",
  "Salesforce AI Associate",
  "Career Essentials in Project Management — Microsoft",
  "Career Essentials in Business Analysis — Microsoft",
];

export function Skills() {
  return (
    <section id="skills" className={`${WRAP} scroll-mt-24 py-28 sm:py-36`}>
      <Reveal>
        <Eyebrow>Expertise</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-light tracking-tight text-ink sm:text-5xl">
          What I work with.
        </h2>
      </Reveal>

      <div className="mt-14 space-y-12">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.08}>
            <div className="grid gap-5 sm:grid-cols-[160px_1fr] sm:gap-10">
              <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ink-faint">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {g.items.split(" · ").map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-edge-strong bg-card px-4 py-2 text-sm text-ink-dim transition-all duration-200 hover:border-accent hover:bg-accent-wash hover:text-ink"
                  >
                    {hasToolIcon(item) && (
                      <ToolIcon name={item} className="h-4 w-4 shrink-0" />
                    )}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal delay={0.16}>
          <div className="grid gap-5 border-t border-edge pt-12 sm:grid-cols-[160px_1fr] sm:gap-10">
            <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Certifications
            </h3>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {certs.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 text-[0.95rem] leading-snug text-ink-dim"
                >
                  <Diamond
                    size={11}
                    className="mt-1 shrink-0 fill-accent text-accent"
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────── Experience ───────────────── */

const roles: {
  period: string;
  title: string;
  org: string;
  href?: string;
  bullets: string[];
}[] = [
  {
    period: "2026 — Present",
    title: "Founder & Product Lead",
    org: "Focus Tribe",
    href: "http://focustribe.in",
    bullets: [
      "Conceptualised and co-founded a web-based productivity platform that helps users build habits and stay accountable through collaborative “tribes”",
      "Validated the core accountability gap via 20+ user interviews — defining personas and prioritising features (streaks, focus timers, group accountability) with the Jobs-to-be-Done framework",
      "Owned every product decision — roadmap, user flows, and the onboarding-to-retention journey — acquiring 10+ beta users through iterative feedback loops",
    ],
  },
  {
    period: "Jan 2023 — Present",
    title: "Business Analyst",
    org: "Unique Comp, Inc.",
    bullets: [
      "Delivered end-to-end solutions across 15+ NYC government projects (Rockland County case management, Barnstable County loan systems) impacting 500K+ residents — case processing time down 40%",
      "Led discovery for high-stakes programs through 200+ stakeholder interviews; converted ambiguous policy requirements into prioritised backlogs, cutting requirement-to-delivery cycle by 30%",
      "Ran client demos and POCs that reduced UAT defects by 25% and increased stakeholder approval velocity",
      "Owned backlog and sprint execution; built Tableau dashboards for data-driven insights and partnered with developers, QA, and clients to ship on time",
    ],
  },
];

function Node() {
  return (
    <span className="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-paper" />
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-y border-edge bg-surface py-28 sm:py-36"
    >
      <div className={WRAP}>
        <Reveal>
          <Eyebrow>Experience</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-light tracking-tight text-ink sm:text-5xl">
            Where I&apos;ve worked.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-12">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="grid gap-3 sm:grid-cols-[200px_1fr] sm:gap-10">
                <p className="pt-1 text-sm font-medium uppercase tracking-[0.08em] text-ink-faint">
                  {r.period}
                </p>
                <div className="relative border-l border-edge-strong pl-7">
                  <Node />
                  <h3 className="font-display text-xl text-ink">{r.title}</h3>
                  {r.href ? (
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-accent-deep underline decoration-accent-soft underline-offset-4 hover:decoration-accent"
                    >
                      {r.org}
                    </a>
                  ) : (
                    <p className="text-sm text-ink-dim">{r.org}</p>
                  )}
                  <ul className="mt-4 space-y-2.5">
                    {r.bullets.map((b) => (
                      <li
                        key={b}
                        className="relative pl-5 text-[0.97rem] leading-relaxed text-ink-dim before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent-soft"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.16}>
            <div className="grid gap-3 sm:grid-cols-[200px_1fr] sm:gap-10">
              <p className="pt-1 text-sm font-medium uppercase tracking-[0.08em] text-ink-faint">
                2019 — 2023
              </p>
              <div className="relative border-l border-edge-strong pl-7">
                <Node />
                <h3 className="font-display text-xl text-ink">
                  B.Tech, Computer Engineering
                </h3>
                <p className="text-sm text-ink-dim">
                  Charotar University of Science and Technology · CGPA 8.72/10
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Contact ───────────────── */

export function Contact() {
  return (
    <section id="contact" className={`${WRAP} scroll-mt-24 py-32 sm:py-40`}>
      <Reveal>
        <Eyebrow>Contact</Eyebrow>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,1.4rem+4vw,4.5rem)] font-light leading-[1.02] tracking-tight text-ink">
          Great products start with the user.{" "}
          <em className="italic text-accent">Let&apos;s build yours.</em>
        </h2>
        <p className="mt-7 max-w-md text-lg text-ink-dim">
          Actively looking for Product Manager roles — Delhi NCR, Mumbai, Pune,
          Bangalore, Hyderabad, or remote.
        </p>

        <div className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-4">
          <Magnetic>
            <a
              href="mailto:shivangiihere@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-accent-deep px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
            >
              shivangiihere@gmail.com
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
        </div>
      </Reveal>
    </section>
  );
}

/* ───────────────── Footer ───────────────── */

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-edge">
      <div className={`${WRAP} pt-14 pb-10`}>
        <div className="flex flex-col justify-between gap-3 text-xs text-ink-faint sm:flex-row">
          <span>© 2026 — Product Manager</span>
          <span className="flex items-center gap-1.5">
            Designed &amp; built with intention
            <span className="text-accent">✦</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
