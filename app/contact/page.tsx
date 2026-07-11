import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the eBay support team.",
};

const SUPPORT = [
  {
    label: "Email",
    value: "support@ebay-demo.com",
    detail: "We reply within 1 business day.",
  },
  {
    label: "Phone",
    value: "+1 (800) 555-0199",
    detail: "Mon–Fri, 9am–6pm PT.",
  },
  {
    label: "Help Center",
    value: "Browse FAQs",
    detail: "Answers to common questions.",
    href: "/help",
  },
];

export default function ContactPage() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-0">
      <header className="pt-16 sm:pt-24 pb-12">
        <h1 className="font-heading font-display text-[2.75rem] sm:text-[3.5rem] text-stone-900 tracking-[-0.01em] leading-[1.1]">
          Contact Us
        </h1>
        <p className="mt-6 text-base sm:text-lg text-stone-400 leading-relaxed max-w-md text-balance">
          Questions about an order, a return, or anything else? Send us a note
          and our team will get back to you.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-3 mb-12">
        {SUPPORT.map((item) => {
          const body = (
            <>
              <p className="text-[11px] font-medium text-stone-400 uppercase tracking-wider">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-medium text-stone-900">
                {item.value}
              </p>
              <p className="mt-1 text-xs text-stone-400">{item.detail}</p>
            </>
          );
          return item.href ? (
            <Link
              key={item.label}
              href={item.href}
              className="block rounded-2xl border border-stone-200 p-5 transition-colors hover:border-stone-300"
            >
              {body}
            </Link>
          ) : (
            <div
              key={item.label}
              className="rounded-2xl border border-stone-200 p-5"
            >
              {body}
            </div>
          );
        })}
      </div>

      <div className="pb-24">
        <ContactForm />
      </div>
    </div>
  );
}
