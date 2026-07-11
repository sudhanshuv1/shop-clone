import { describe, it, expect } from "vitest";
import { validateContactInput } from "./contact";

describe("validateContactInput", () => {
  const valid = {
    name: "Ada Lovelace",
    email: "ada@example.com",
    subject: "Order question",
    message: "Where is my order?",
  };

  it("accepts valid input and returns trimmed values", () => {
    const result = validateContactInput({
      name: "  Ada Lovelace  ",
      email: " ada@example.com ",
      subject: " Order question ",
      message: "  Where is my order?  ",
    });
    expect(result).toEqual({
      ok: true,
      value: {
        name: "Ada Lovelace",
        email: "ada@example.com",
        subject: "Order question",
        message: "Where is my order?",
      },
    });
  });

  it("rejects non-object input", () => {
    expect(validateContactInput(null)).toEqual({
      ok: false,
      error: "Invalid request body",
    });
  });

  it("rejects a blank name", () => {
    expect(validateContactInput({ ...valid, name: "   " })).toEqual({
      ok: false,
      error: "Name is required",
    });
  });

  it("rejects a name longer than 120 characters", () => {
    expect(validateContactInput({ ...valid, name: "a".repeat(121) })).toEqual({
      ok: false,
      error: "Name is too long",
    });
  });

  it("rejects an invalid email", () => {
    expect(validateContactInput({ ...valid, email: "not-an-email" })).toEqual({
      ok: false,
      error: "A valid email is required",
    });
  });

  it("rejects a missing subject", () => {
    expect(validateContactInput({ ...valid, subject: "" })).toEqual({
      ok: false,
      error: "Subject is required",
    });
  });

  it("rejects a subject longer than 200 characters", () => {
    expect(
      validateContactInput({ ...valid, subject: "a".repeat(201) })
    ).toEqual({ ok: false, error: "Subject is too long" });
  });

  it("rejects a missing message", () => {
    expect(validateContactInput({ ...valid, message: "" })).toEqual({
      ok: false,
      error: "Message is required",
    });
  });

  it("rejects a message longer than 5000 characters", () => {
    expect(
      validateContactInput({ ...valid, message: "a".repeat(5001) })
    ).toEqual({ ok: false, error: "Message is too long" });
  });
});
