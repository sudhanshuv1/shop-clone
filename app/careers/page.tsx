import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles and life at our marketplace.",
};

const PERKS = [
  { title: "Remote-friendly", body: "Work from where you do your best thinking." },
  { title: "Health & wellness", body: "Medical, dental, and a monthly wellness stipend." },
  { title: "Learning budget", body: "Annual budget for courses, books, and conferences." },
  { title: "Meaningful equity", body: "Every employee shares in what we build." },
  { title: "Generous time off", body: "Flexible PTO and company-wide recharge days." },
  { title: "Team retreats", body: "We gather in person a few times a year." },
];

const ROLES = [
  { title: "Senior Frontend Engineer", team: "Engineering", location: "Remote (US)" },
  { title: "Product Designer", team: "Design", location: "San Jose, CA" },
  { title: "Trust & Safety Analyst", team: "Operations", location: "Remote" },
  { title: "Data Scientist", team: "Data", location: "Remote (EU)" },
];

export default function CareersPage() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-0">
      <header className="pt-16 sm:pt-24 pb-12">
        <p className="text-[11px] font-medium text-stone-400 uppercase tracking-[0.2em]">
          Careers
        </p>
        <h1 className="mt-4 font-heading font-display text-[2.75rem] sm:text-[3.5rem] text-stone-900 tracking-[-0.01em] leading-[1.1]">
          Build the future of commerce.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-stone-400 leading-relaxed max-w-lg text-balance">
          We&apos;re a team of makers, tinkerers, and problem-solvers building a
          marketplace millions rely on. Come help us make it better.
        </p>
      </header>

      <section className="pb-16">
        <h2 className="font-heading text-xl font-semibold text-stone-900 mb-6">
          Why you&apos;ll love it here
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PERKS.map((perk) => (
            <div
              key={perk.title}
              className="rounded-2xl border border-stone-200 p-5"
            >
              <h3 className="font-heading text-sm font-semibold text-stone-900">
                {perk.title}
              </h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                {perk.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <h2 className="font-heading text-xl font-semibold text-stone-900 mb-6">
          Open roles
        </h2>
        <div className="divide-y divide-stone-200 border-y border-stone-200">
          {ROLES.map((role) => (
            <div
              key={role.title}
              className="flex flex-wrap items-center justify-between gap-4 py-5"
            >
              <div>
                <h3 className="font-heading text-sm font-medium text-stone-900">
                  {role.title}
                </h3>
                <p className="mt-1 text-xs text-stone-400">
                  {role.team} &middot; {role.location}
                </p>
              </div>
              <Link
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors"
              >
                Apply
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="rounded-2xl border border-dashed border-stone-300 p-8 text-center">
          <h2 className="font-heading text-lg font-semibold text-stone-900">
            Don&apos;t see your role?
          </h2>
          <p className="mt-2 text-sm text-stone-500 max-w-md mx-auto">
            We&apos;re always meeting great people. Tell us what you do and how
            you&apos;d like to help.
          </p>
          <Link
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary inline-flex items-center gap-2 font-medium text-sm px-6 py-3 rounded-full mt-6"
          >
            Introduce yourself
          </Link>
        </div>
      </section>
    </div>
  );
}
