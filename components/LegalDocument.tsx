import Link from "next/link";

export interface LegalSection {
  heading: string;
  body: string[];
}

interface LegalDocumentProps {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export default function LegalDocument({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalDocumentProps) {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-0">
      <header className="pt-16 sm:pt-24 pb-10">
        <h1 className="font-heading font-display text-[2.75rem] sm:text-[3.5rem] text-stone-900 tracking-[-0.01em] leading-[1.1]">
          {title}
        </h1>
        <p className="mt-4 text-xs font-medium text-stone-400 uppercase tracking-wider">
          Last updated: {lastUpdated}
        </p>
        <p className="mt-6 text-base text-stone-500 leading-relaxed max-w-xl">
          {intro}
        </p>
      </header>

      <div className="pb-24 space-y-10">
        {sections.map((section, i) => (
          <section key={section.heading}>
            <h2 className="font-heading text-lg font-semibold text-stone-900 mb-3 flex items-baseline">
              <span className="text-stone-300 tabular-nums mr-3 text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              {section.heading}
            </h2>
            <div className="space-y-3 sm:pl-9">
              {section.body.map((paragraph, j) => (
                <p key={j} className="text-sm text-stone-500 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        <p className="text-sm text-stone-400 pt-6 border-t border-stone-100">
          Questions about this document?{" "}
          <Link
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors"
          >
            Contact us
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
