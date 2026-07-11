import type { Metadata } from "next";
import LegalDocument, { LegalSection } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How eBay collects, uses, and protects your information.",
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Information We Collect",
    body: [
      "We collect information you provide directly, such as your name, email address, shipping address, and payment details when you create an account, place an order, or contact support.",
      "We also collect information automatically as you use the site, including your device type, browser, pages viewed, and the products you browse, so we can improve your experience.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "We use your information to process orders, provide customer support, personalize product recommendations, prevent fraud, and send you updates about your purchases.",
      "With your consent, we may also send marketing messages about deals and new arrivals. You can opt out of these at any time from your account settings.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "We use cookies and similar technologies to keep you signed in, remember items in your cart, and understand how the site is used. You can control cookies through your browser settings, though some features may not work without them.",
    ],
  },
  {
    heading: "Sharing Your Information",
    body: [
      "We share information with service providers who help us run the marketplace, such as payment processors and delivery partners, only to the extent needed to provide their service.",
      "We do not sell your personal information. We may disclose information when required by law or to protect the rights and safety of our users.",
    ],
  },
  {
    heading: "Your Rights",
    body: [
      "You can access, update, or delete your personal information from your account settings. You may also request a copy of your data or ask us to restrict how we use it by contacting our support team.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "We use encryption, access controls, and regular reviews to protect your information. No system is perfectly secure, so we encourage you to use a strong, unique password and to keep your account details private.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      lastUpdated="July 11, 2026"
      intro="Your privacy matters to us. This policy explains what information we collect, how we use it, and the choices you have. This is a demonstration store, so the details below are provided as a sample policy."
      sections={SECTIONS}
    />
  );
}
