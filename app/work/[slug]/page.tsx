import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { Reveal, Magnetic } from "@/components/motion";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Shivangi Pandita`,
    description: cs.blurb,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <main className="relative">
      <Nav />

      {/* header band */}
      <header className="relative overflow-hidden border-b border-edge bg-surface">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-[-8%] h-[460px] w-[460px] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(222,77,38,0.15), transparent 65%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 pb-14 pt-32 sm:px-8 sm:pt-36">
          <Reveal>
            <Link
              href="/#work"
              className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-ink-faint transition-colors hover:text-ink"
            >
              <ArrowLeft
                size={15}
                className="transition-transform group-hover:-translate-x-1"
              />
              All case studies
            </Link>

            <span className="inline-block rounded-full border border-accent-soft bg-accent-wash px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-accent-deep">
              {cs.tag}
            </span>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,1.6rem+3.4vw,4rem)] font-light leading-[1.02] tracking-tight text-ink">
              {cs.title}
            </h1>
            <p className="mt-5 text-base text-ink-dim">{cs.subtitle}</p>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-edge bg-edge sm:grid-cols-4">
              {cs.metrics.map((m) => (
                <div key={m.label} className="bg-paper px-4 py-5">
                  <dd className="font-display text-2xl font-light tracking-tight text-ink tnum sm:text-3xl">
                    {m.value}
                  </dd>
                  <dt className="mt-1 text-[0.74rem] leading-snug text-ink-faint">
                    {m.label}
                  </dt>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap gap-2">
              {cs.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-edge-strong px-3 py-1 text-[0.78rem] text-ink-dim"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 pb-24 pt-16 sm:px-8">
        <Reveal>
          <div
            className="prose-light"
            dangerouslySetInnerHTML={{ __html: cs.content }}
          />
        </Reveal>

        {/* next case study */}
        <Reveal>
          <Link
            href={`/work/${next.slug}`}
            className="group mt-20 flex items-center justify-between gap-6 rounded-2xl border border-edge bg-card p-7 transition-colors hover:border-accent-soft"
          >
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                Next case study
              </p>
              <p className="mt-2 font-display text-2xl text-ink">
                {next.title}
              </p>
              <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-accent-deep">
                {next.tag}
              </p>
            </div>
            <ArrowRight
              size={26}
              className="shrink-0 text-ink-faint transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-accent"
            />
          </Link>
        </Reveal>

        {/* contact CTA */}
        <Reveal>
          <div className="mt-16 border-t border-edge pt-12">
            <h2 className="max-w-md font-display text-3xl font-light leading-tight text-ink">
              Want to walk through this one together?
            </h2>
            <p className="mt-3 max-w-md leading-relaxed text-ink-dim">
              I&apos;m happy to talk through my thinking, the trade-offs, and
              what I&apos;d do differently with more time.
            </p>
            <Magnetic>
              <a
                href="mailto:shivangiihere@gmail.com"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
              >
                Get in touch
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </article>

      <Footer />
    </main>
  );
}
