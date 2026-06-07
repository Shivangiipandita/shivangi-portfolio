import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { caseStudies } from "@/lib/case-studies";

function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <Reveal className="mb-12">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-4 max-w-lg text-ink-dim">{desc}</p>}
    </Reveal>
  );
}

/* ───────────────── About ───────────────── */

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="About" title="From business analysis to product" />
        <Reveal>
          <div className="space-y-5 leading-relaxed text-ink-dim">
            <p>
              My career started in business analysis — understanding complex
              government workflows, sitting with stakeholders, and turning
              messy real-world problems into clean digital solutions on
              Salesforce. Somewhere along the way, I realized what truly
              excites me isn&apos;t just gathering requirements — it&apos;s
              deciding{" "}
              <strong className="font-semibold text-ink">
                what to build, for whom, and why.
              </strong>
            </p>
            <p>
              Today I&apos;m putting that thinking into practice as founder
              of{" "}
              <strong className="font-semibold text-ink">Focus Tribe</strong>,
              a habit-tracking platform where users stay accountable through
              collaborative groups. I lead every product decision — who our
              users are, what problems we&apos;re solving, which features
              matter most, and what can wait.
            </p>
            <p>
              My superpower is thinking from the{" "}
              <strong className="font-semibold text-ink">
                user&apos;s perspective first
              </strong>
              . Whether it&apos;s a county employee stuck in a paper-heavy
              loan process or a student building study habits — I start with
              the person, not the technology.
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
    <section id="work" className="border-t border-edge bg-surface px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Case Studies"
          title="Four problems, worked end to end"
          desc="Each one follows the same discipline — understand users, prioritize problems, design solutions, measure impact."
        />
        <Stagger className="divide-y divide-edge border-y border-edge">
          {caseStudies.map((cs, i) => (
            <StaggerItem key={cs.slug}>
              <Link
                href={`/work/${cs.slug}`}
                className="group flex flex-col gap-4 py-9 transition-colors sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="shrink-0 font-serif text-sm italic text-ink-faint sm:w-10">
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-2xl tracking-tight text-ink decoration-edge-strong underline-offset-4 group-hover:underline">
                      {cs.title}
                    </h3>
                    <ArrowRight
                      size={16}
                      className="text-ink-faint transition-transform group-hover:translate-x-1"
                    />
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
                    {cs.tag}
                  </p>
                  <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-ink-dim">
                    {cs.blurb}
                  </p>
                  <p className="mt-4 text-sm text-ink">
                    {cs.metrics
                      .slice(0, 3)
                      .map((m) => `${m.value} ${m.label.toLowerCase()}`)
                      .join("  ·  ")}
                  </p>
                </div>
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
      "Product Strategy · Roadmapping · User Research · Competitive Analysis · RICE / MoSCoW · Jobs-to-be-Done · Product Discovery · GTM Strategy · Feature Prioritization · Wireframing · Agile / Scrum · Stakeholder Management",
  },
  {
    title: "Tools",
    items:
      "Figma · Jira · Notion · Miro · Salesforce · Tableau · Postman · Lucidchart · Confluence · Trello",
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
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Expertise" title="What I work with" />
        <div className="space-y-10">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="grid gap-2 sm:grid-cols-[140px_1fr] sm:gap-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-faint">
                  {g.title}
                </h3>
                <p className="text-[0.95rem] leading-loose text-ink-dim">
                  {g.items}
                </p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.16}>
            <div className="grid gap-2 sm:grid-cols-[140px_1fr] sm:gap-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-faint">
                Certifications
              </h3>
              <ul className="space-y-1.5">
                {certs.map((c) => (
                  <li key={c} className="text-[0.95rem] leading-relaxed text-ink-dim">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Experience ───────────────── */

const roles = [
  {
    period: "Jan 2026 — Present",
    title: "Founder & Product Lead",
    org: "Focus Tribe",
    href: "http://focustribe.in",
    bullets: [
      "Founded a web-based productivity platform helping users build habits through collaborative “tribes”",
      "Validated the core problem through 20+ user interviews; identified the accountability gap as the primary churn driver in habit apps",
      "Led all product decisions — prioritization, user flows, and roadmap across 3 delivery phases; shipped 14 features",
    ],
  },
  {
    period: "Jan 2023 — Present",
    title: "Business Analyst",
    org: "Unique Comp, Inc.",
    bullets: [
      "Delivered Salesforce solutions across 15+ NYC government projects impacting 500K+ residents — case processing time down 40%",
      "Led discovery through 200+ stakeholder interviews; converted ambiguous policy requirements into prioritized backlogs, cutting requirement-to-delivery cycle by 30%",
      "Ran client demos and feedback loops that reduced UAT defects by 25%; owned backlog and sprint execution in Jira",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-t border-edge bg-surface px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <div className="space-y-12">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="grid gap-3 sm:grid-cols-[180px_1fr] sm:gap-8">
                <p className="text-sm text-ink-faint">{r.period}</p>
                <div>
                  <h3 className="font-semibold text-ink">{r.title}</h3>
                  {r.href ? (
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-ink-dim underline decoration-edge-strong underline-offset-4 hover:decoration-ink"
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
                        className="text-[0.95rem] leading-relaxed text-ink-dim"
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
            <div className="grid gap-3 border-t border-edge pt-10 sm:grid-cols-[180px_1fr] sm:gap-8">
              <p className="text-sm text-ink-faint">2019 — 2023</p>
              <div>
                <h3 className="font-semibold text-ink">
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
    <section id="contact" className="px-6 py-28">
      <Reveal className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
          Contact
        </p>
        <h2 className="max-w-xl font-serif text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl">
          Looking for a PM who starts with the user? <em>Let&apos;s talk.</em>
        </h2>
        <p className="mt-6 max-w-md text-ink-dim">
          I&apos;m actively looking for Product Manager roles — Delhi NCR,
          Mumbai, Pune, Bangalore, Hyderabad, or remote.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="mailto:panditashivangi2000@gmail.com"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            panditashivangi2000@gmail.com
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
        </div>
      </Reveal>
    </section>
  );
}

/* ───────────────── Footer ───────────────── */

export function Footer() {
  return (
    <footer className="border-t border-edge px-6 py-8">
      <div className="mx-auto flex max-w-3xl flex-col justify-between gap-2 text-xs text-ink-faint sm:flex-row">
        <span>© 2026 Shivangi Pandita</span>
        <span>Designed with intention</span>
      </div>
    </footer>
  );
}
