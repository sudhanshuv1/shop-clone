import type { Metadata } from "next";
import LegalDocument, { LegalSection } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the eBay marketplace.",
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    body: [
      "By accessing or using this marketplace, you agree to these Terms of Service. If you do not agree, please do not use the site. We may update these terms from time to time, and continued use means you accept the changes.",
    ],
  },
  {
    heading: "Your Account",
    body: [
      "You are responsible for keeping your account credentials secure and for all activity that happens under your account. Please notify us right away if you believe your account has been used without your permission.",
    ],
  },
  {
    heading: "Orders and Payment",
    body: [
      "When you place an order, you agree to pay the listed price plus any applicable taxes and shipping fees. We may cancel or refuse an order if a product is out of stock, mispriced, or if we suspect fraud.",
      "Prices and availability can change at any time before your order is confirmed.",
    ],
  },
  {
    heading: "Returns and Refunds",
    body: [
      "Most items can be returned within 30 days of delivery in their original condition. Refunds are issued to your original payment method once we receive and inspect the returned item. Some products may have different return rules noted on their page.",
    ],
  },
  {
    heading: "Acceptable Use",
    body: [
      "You agree not to misuse the site, including attempting to access other users' accounts, interfering with the service, posting unlawful content, or using the marketplace for any fraudulent purpose.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "The marketplace is provided on an “as is” basis. To the fullest extent permitted by law, we are not liable for indirect or incidental damages arising from your use of the site. This is a demonstration store, and the terms here are a sample for illustration.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms of Service"
      lastUpdated="July 11, 2026"
      intro="These terms set out the rules for using our marketplace, placing orders, and returning items. Please read them carefully. This is a demonstration store, so the details below are provided as a sample."
      sections={SECTIONS}
    />
  );
}
