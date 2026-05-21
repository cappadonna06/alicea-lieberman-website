"use client";

import { FormEvent, useState } from "react";

type Status =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "loading" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(), // honeypot
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to send message right now.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: data.message ?? "Thanks for your message. I will follow up soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send message right now.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 rounded-sm border p-8" style={{ borderColor: "#E5E7EB", backgroundColor: "#F9FAFB" }}>
      <div className="mb-6">
        <h2
          className="text-2xl font-semibold mb-2"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#003B5C" }}
        >
          Send a Message
        </h2>
        <p className="text-sm" style={{ color: "#6B7280" }}>
          Please share your inquiry below.
        </p>
      </div>

      <div className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" autoComplete="off" tabIndex={-1} />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          placeholder="Name"
          className="w-full px-3 py-2 rounded-sm border text-sm"
          style={{ borderColor: "#D1D5DB", color: "#111827", backgroundColor: "#FFFFFF" }}
        />
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={120}
          placeholder="Email"
          className="w-full px-3 py-2 rounded-sm border text-sm"
          style={{ borderColor: "#D1D5DB", color: "#111827", backgroundColor: "#FFFFFF" }}
        />
      </div>

      <input
        id="subject"
        name="subject"
        type="text"
        required
        maxLength={140}
        placeholder="Subject"
        className="w-full mt-4 px-3 py-2 rounded-sm border text-sm"
        style={{ borderColor: "#D1D5DB", color: "#111827", backgroundColor: "#FFFFFF" }}
      />

      <textarea
        id="message"
        name="message"
        required
        minLength={10}
        maxLength={5000}
        placeholder="Message"
        className="w-full mt-4 px-3 py-2 rounded-sm border text-sm min-h-44"
        style={{ borderColor: "#D1D5DB", color: "#111827", backgroundColor: "#FFFFFF" }}
      />

      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="text-sm" style={{ color: status.type === "error" ? "#B91C1C" : "#6B7280" }}>
          {status.type === "error" && status.message}
          {status.type === "success" && status.message}
          {(status.type === "idle" || status.type === "loading") && ""}
        </p>
        <button
          type="submit"
          disabled={status.type === "loading"}
          className="btn-navy px-5 py-2 text-sm font-medium rounded-sm disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status.type === "loading" ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
