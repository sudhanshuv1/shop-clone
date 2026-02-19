"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useApp } from "@/context/AppContext";
import Toast from "@/components/Toast";

const TABS = ["contact", "faq", "returns", "shipping"] as const;
type Tab = (typeof TABS)[number];

const TAB_LABELS: Record<Tab, string> = {
  contact: "Contact Us",
  faq: "FAQ",
  returns: "Returns & Refunds",
  shipping: "Shipping Info",
};

export default function HelpPage() {
  const searchParams = useSearchParams();
  const initialTab = TABS.includes(searchParams.get("tab") as Tab)
    ? (searchParams.get("tab") as Tab)
    : "contact";
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Customer Service</h1>
      <p className="text-sm text-gray-600 mb-8">
        How can we help you? Browse our help topics or get in touch with our team.
      </p>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <Link
          href="/orders"
          className="border border-gray-200 rounded-lg p-4 text-center hover:border-gray-400 hover:shadow-sm transition-all"
        >
          <OrdersIcon />
          <span className="block text-sm font-medium text-gray-900 mt-2">Track Order</span>
        </Link>
        <button
          onClick={() => setActiveTab("returns")}
          className="border border-gray-200 rounded-lg p-4 text-center hover:border-gray-400 hover:shadow-sm transition-all"
        >
          <ReturnsIcon />
          <span className="block text-sm font-medium text-gray-900 mt-2">Start a Return</span>
        </button>
        <button
          onClick={() => setActiveTab("contact")}
          className="border border-gray-200 rounded-lg p-4 text-center hover:border-gray-400 hover:shadow-sm transition-all"
        >
          <ContactIcon />
          <span className="block text-sm font-medium text-gray-900 mt-2">Contact Us</span>
        </button>
        <button
          onClick={() => setActiveTab("faq")}
          className="border border-gray-200 rounded-lg p-4 text-center hover:border-gray-400 hover:shadow-sm transition-all"
        >
          <FaqIcon />
          <span className="block text-sm font-medium text-gray-900 mt-2">Browse FAQ</span>
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex gap-0 -mb-px overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-yellow-500 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {TAB_LABELS[tab]}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "contact" && <ContactSection />}
      {activeTab === "faq" && <FaqSection />}
      {activeTab === "returns" && <ReturnsSection />}
      {activeTab === "shipping" && <ShippingSection />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact Us                                                        */
/* ------------------------------------------------------------------ */

const CONTACT_CATEGORIES = [
  "Order issue",
  "Return or refund",
  "Shipping question",
  "Product question",
  "Account issue",
  "Payment problem",
  "Other",
];

function ContactSection() {
  const { user } = useAuth();
  const { orders } = useApp();

  const [category, setCategory] = useState("");
  const [orderId, setOrderId] = useState("");
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const [toastVisible, setToastVisible] = useState(false);

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!category) next.category = "Please select a category";
    if (!name.trim()) next.name = "Name is required";
    if (!email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address";
    }
    if (!message.trim()) {
      next.message = "Please describe your issue";
    } else if (message.trim().length < 10) {
      next.message = "Please provide more detail (at least 10 characters)";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setToastVisible(true);
  }

  if (submitted) {
    return (
      <div className="border border-gray-200 rounded-lg p-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Request Submitted</h2>
        <p className="text-sm text-gray-600 mb-4">
          We&apos;ve received your support request and will get back to you at <strong>{email}</strong> within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setCategory("");
            setOrderId("");
            setMessage("");
          }}
          className="text-sm text-blue-600 hover:underline font-medium"
        >
          Submit another request
        </button>
        <Toast message="Support request submitted" visible={toastVisible} onClose={() => setToastVisible(false)} />
      </div>
    );
  }

  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Get in Touch</h2>
      <p className="text-sm text-gray-600 mb-6">
        Fill out the form below and our support team will respond within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-900 mb-1">
            What do you need help with?
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              if (errors.category) setErrors((prev) => ({ ...prev, category: "" }));
            }}
            className={`w-full border rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.category ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select a category</option>
            {CONTACT_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && (
            <p className="text-xs text-red-600 mt-1">{errors.category}</p>
          )}
        </div>

        {/* Order ID (optional, shown if user has orders) */}
        {orders.length > 0 && (
          <div>
            <label htmlFor="orderId" className="block text-sm font-medium text-gray-900 mb-1">
              Related order <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <select
              id="orderId"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">None</option>
              {orders.map((order) => (
                <option key={order.id} value={order.id}>
                  {order.id} &mdash; ${order.total.toFixed(2)} ({new Date(order.date).toLocaleDateString()})
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Name & Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-gray-900 mb-1">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
              }}
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-xs text-red-600 mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-gray-900 mb-1">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
              }}
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
            How can we help?
          </label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
            }}
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Describe your issue in detail..."
          />
          {errors.message && (
            <p className="text-xs text-red-600 mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 active:scale-[0.98] text-gray-900 font-semibold px-6 py-2.5 rounded-lg transition-all text-sm"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "How do I track my order?",
    a: "Go to Your Orders from the navigation bar or your account page. Each order shows its current status: pending, processing, shipped, or delivered.",
  },
  {
    q: "How long does shipping take?",
    a: "Standard shipping takes 5-7 business days. Express shipping delivers in 2-3 business days. Same-day delivery is available in select metro areas for orders placed before noon.",
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 30 days of delivery for most items. Items must be unused and in original packaging. Electronics have a 15-day return window. See our Returns & Refunds tab for full details.",
  },
  {
    q: "How do I cancel an order?",
    a: 'Orders can be cancelled while in "pending" status. Go to Your Orders, find the order, and contact support with your order ID. Once an order is processing or shipped, it cannot be cancelled but can be returned after delivery.',
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay.",
  },
  {
    q: "How do I change my shipping address?",
    a: "You can update your default address in Account Settings. For an existing order, contact support with your order ID before it ships.",
  },
  {
    q: "What if I received a damaged or wrong item?",
    a: "Contact us immediately through the form on this page. Select your order from the dropdown and describe the issue. We'll arrange a free replacement or full refund.",
  },
  {
    q: "How do I reset my password?",
    a: "Go to Account Settings from the navigation bar. Under the Change Password section, enter your current password and choose a new one.",
  },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-lg">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left"
          >
            <span className="text-sm font-medium text-gray-900 pr-4">{item.q}</span>
            <svg
              className={`h-4 w-4 text-gray-500 flex-shrink-0 transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4">
              <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Returns & Refunds                                                 */
/* ------------------------------------------------------------------ */

function ReturnsSection() {
  return (
    <div className="space-y-6">
      {/* Policy overview */}
      <div className="border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Return Policy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <span className="block text-2xl font-bold text-gray-900">30</span>
            <span className="text-sm text-gray-600">Day return window</span>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <span className="block text-2xl font-bold text-gray-900">Free</span>
            <span className="text-sm text-gray-600">Return shipping</span>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <span className="block text-2xl font-bold text-gray-900">3-5</span>
            <span className="text-sm text-gray-600">Days for refund</span>
          </div>
        </div>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            Most items purchased from ShopClone can be returned within 30 days of delivery for a full refund. Items must be in unused condition with original packaging and tags.
          </p>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Category-Specific Policies</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li><strong>Electronics:</strong> 15-day return window. Must include all accessories and original packaging.</li>
              <li><strong>Clothing:</strong> 30-day return window. Items must be unworn with tags attached.</li>
              <li><strong>Books:</strong> 30-day return window. Must be in original condition.</li>
              <li><strong>Home:</strong> 30-day return window. Assembled furniture cannot be returned.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* How to return */}
      <div className="border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">How to Start a Return</h2>
        <ol className="space-y-4">
          {[
            { title: "Find your order", desc: "Go to Your Orders and locate the item you want to return." },
            { title: "Contact support", desc: "Use the Contact Us form on this page. Select \"Return or refund\" as the category and choose the related order." },
            { title: "Ship the item", desc: "We'll email you a prepaid return label within 24 hours. Pack the item securely and drop it off at any carrier location." },
            { title: "Receive your refund", desc: "Once we receive and inspect the item, your refund will be processed within 3-5 business days to your original payment method." },
          ].map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-900">
                {i + 1}
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900">{step.title}</p>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Refund info */}
      <div className="border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Refund Information</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Credit / Debit Card</span>
            <span className="font-medium">3-5 business days</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">PayPal</span>
            <span className="font-medium">1-2 business days</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Store Credit</span>
            <span className="font-medium">Instant</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Gift Card</span>
            <span className="font-medium">Instant</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Shipping Info                                                     */
/* ------------------------------------------------------------------ */

function ShippingSection() {
  return (
    <div className="space-y-6">
      {/* Shipping options */}
      <div className="border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipping Options</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold text-gray-900">Method</th>
                <th className="text-left py-3 pr-4 font-semibold text-gray-900">Delivery Time</th>
                <th className="text-left py-3 font-semibold text-gray-900">Cost</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-gray-900">Standard</td>
                <td className="py-3 pr-4">5-7 business days</td>
                <td className="py-3">Free over $35 / $4.99</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-gray-900">Express</td>
                <td className="py-3 pr-4">2-3 business days</td>
                <td className="py-3">$9.99</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-gray-900">Next Day</td>
                <td className="py-3 pr-4">1 business day</td>
                <td className="py-3">$14.99</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-gray-900">Same Day</td>
                <td className="py-3 pr-4">Same day (order by noon)</td>
                <td className="py-3">$19.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Tracking */}
      <div className="border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Tracking</h2>
        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <p>
            All orders include tracking. Once your order ships, you can track it from the <Link href="/orders" className="text-blue-600 hover:underline font-medium">Your Orders</Link> page. Orders go through the following statuses:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded mt-0.5">Pending</span>
              <span className="text-sm text-gray-600">Order received and awaiting processing.</span>
            </div>
            <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded mt-0.5">Processing</span>
              <span className="text-sm text-gray-600">Order is being packed and prepared.</span>
            </div>
            <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-0.5 rounded mt-0.5">Shipped</span>
              <span className="text-sm text-gray-600">Order is on its way to you.</span>
            </div>
            <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded mt-0.5">Delivered</span>
              <span className="text-sm text-gray-600">Order has been delivered successfully.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping policies */}
      <div className="border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipping Policies</h2>
        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Free Shipping</h3>
            <p className="text-gray-600">Orders over $35 qualify for free standard shipping. This applies to all domestic orders.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Processing Time</h3>
            <p className="text-gray-600">Orders placed before 2:00 PM are processed the same business day. Orders placed after 2:00 PM or on weekends are processed the next business day.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Delivery Area</h3>
            <p className="text-gray-600">We currently ship to all 50 US states. Same-day delivery is available in select metropolitan areas including New York, Los Angeles, Chicago, and San Francisco.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">P.O. Boxes</h3>
            <p className="text-gray-600">Standard shipping is available to P.O. boxes. Express, Next Day, and Same Day options require a street address.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Icons                                                             */
/* ------------------------------------------------------------------ */

function OrdersIcon() {
  return (
    <svg className="h-6 w-6 mx-auto text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  );
}

function ReturnsIcon() {
  return (
    <svg className="h-6 w-6 mx-auto text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg className="h-6 w-6 mx-auto text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function FaqIcon() {
  return (
    <svg className="h-6 w-6 mx-auto text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
