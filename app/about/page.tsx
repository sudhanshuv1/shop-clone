import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story, mission, and values behind our marketplace.",
};

const STATS = [
  { value: "180M+", label: "Active buyers" },
  { value: "1.9B", label: "Live listings" },
  { value: "190", label: "Markets worldwide" },
  { value: "1995", label: "Founded" },
];

const VALUES = [
  {
    title: "Buyer-first",
    body: "Every decision starts with the person clicking “buy.” Fair prices, honest listings, and support that actually helps.",
  },
  {
    title: "An open marketplace",
    body: "From small sellers to global brands, anyone can reach millions of buyers. Opportunity shouldn't depend on your size.",
  },
  {
    title: "Built on trust",
    body: "Buyer protection, secure payments, and clear policies keep every transaction safe for both sides.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-0">
      <header className="pt-16 sm:pt-24 pb-12">
        <p className="text-[11px] font-medium text-stone-400 uppercase tracking-[0.2em]">
          About Us
        </p>
        <h1 className="mt-4 font-heading font-display text-[2.75rem] sm:text-[3.5rem] text-stone-900 tracking-[-0.01em] leading-[1.1]">
          Commerce, connected.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-stone-400 leading-relaxed max-w-lg text-balance">
          We bring buyers and sellers together in one of the world&apos;s
          largest marketplaces — helping people find what they love and give
          products a second life.
        </p>
      </header>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-white p-6">
            <p className="font-heading font-display text-2xl sm:text-3xl text-stone-900">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-stone-400">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="py-16">
        <h2 className="font-heading text-xl font-semibold text-stone-900 mb-5">
          Our story
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-stone-500 leading-relaxed max-w-xl">
          <p>
            What began as a simple way to buy and sell online has grown into a
            global marketplace connecting millions of people every day. We
            believe commerce should be open, fair, and a little bit joyful.
          </p>
          <p>
            Today our platform spans nearly every category imaginable — from
            electronics and fashion to rare collectibles — and supports sellers
            of every size. We keep investing in tools that make buying and
            selling faster, safer, and more personal.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <h2 className="font-heading text-xl font-semibold text-stone-900 mb-6">
          What we value
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-stone-200 p-5"
            >
              <h3 className="font-heading text-sm font-semibold text-stone-900">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="rounded-2xl bg-stone-900 px-6 sm:px-10 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="font-heading font-display text-2xl text-white">
              Want to work with us?
            </h2>
            <p className="mt-2 text-sm text-stone-400">
              We&apos;re always looking for curious, kind people.
            </p>
          </div>
          <Link
            href="/careers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-100 shrink-0"
          >
            View open roles
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
