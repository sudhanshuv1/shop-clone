// Validation for the public contact form, kept dependency-free so it can be
// unit-tested and reused by the API route.

export interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactValidation =
  | { ok: true; value: ContactInput }
  | { ok: false; error: string };

export const CONTACT_LIMITS = { name: 120, subject: 200, message: 5000 };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactInput(raw: unknown): ContactValidation {
  if (typeof raw !== "object" || raw === null) {
    return { ok: false, error: "Invalid request body" };
  }

  const body = raw as Record<string, unknown>;
  const asString = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const name = asString(body.name);
  const email = asString(body.email);
  const subject = asString(body.subject);
  const message = asString(body.message);

  if (!name) return { ok: false, error: "Name is required" };
  if (name.length > CONTACT_LIMITS.name) {
    return { ok: false, error: "Name is too long" };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "A valid email is required" };
  }
  if (!subject) return { ok: false, error: "Subject is required" };
  if (subject.length > CONTACT_LIMITS.subject) {
    return { ok: false, error: "Subject is too long" };
  }
  if (!message) return { ok: false, error: "Message is required" };
  if (message.length > CONTACT_LIMITS.message) {
    return { ok: false, error: "Message is too long" };
  }

  return { ok: true, value: { name, email, subject, message } };
}
