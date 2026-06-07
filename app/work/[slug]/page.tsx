import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections";
import { Reveal } from "@/components/motion";

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

  return (
    <main>
      <Nav />
      <article className="px-6 pb-24 pt-36">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Link
              href="/#work"
              className="mb-12 inline-flex items-center gap-2 text-sm text-ink-faint transition-colors hover:text-ink"
            >
              <ArrowLeft size={14} /> All case studies
            </Link>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
              {cs.tag}
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.12] tracking-tight text-ink sm:text-5xl">
              {cs.title}
            </h1>
            <p className="mt-4 text-sm text-ink-faint">{cs.subtitle}</p>

            <dl className="mt-10 grid grid-cols-2 gap-y-6 border-y border-edge py-7 sm:grid-cols-4">
              {cs.metrics.map((m) => (
                <div key={m.label}>
                  <dd className="text-xl font-semibold tracking-tight text-ink">
                    {m.value}
                  </dd>
                  <dt className="mt-0.5 text-xs text-ink-faint">{m.label}</dt>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-sm leading-relaxed text-ink-faint">
              {cs.skills.join("  ·  ")}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div
              className="prose-light mt-8"
              dangerouslySetInnerHTML={{ __html: cs.content }}
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-20 border-t border-edge pt-10">
              <h2 className="font-serif text-2xl text-ink">
                Want to discuss this case study?
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-dim">
                I&apos;m happy to walk through my thinking, the trade-offs, and
                what I&apos;d do differently.
              </p>
              <a
                href="mailto:panditashivangi2000@gmail.com"
                className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
              >
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>
      </article>
      <Footer />
    </main>
  );
}
