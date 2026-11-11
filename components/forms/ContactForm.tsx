"use client";

import { useState, FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  propertyId?: string;
  propertyTitle?: string;
  className?: string;
  compact?: boolean;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm({
  propertyId,
  propertyTitle,
  className,
  compact = false,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      message: String(data.get("message") || "").trim(),
      propertyId: propertyId || "",
      propertyTitle: propertyTitle || "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error || "Unable to send your message.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try WhatsApp or call us directly.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-sm border border-emerald-200 bg-emerald-50 p-6 text-center",
          className
        )}
      >
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
        <p className="mt-3 font-serif text-lg font-medium text-charcoal">
          Thank you
        </p>
        <p className="mt-2 text-sm text-charcoal/70">
          Your enquiry has been received. An advisor will be in touch shortly.
          For an immediate response, message us on WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-copper hover:text-copper-600"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-sm border border-sand-300 bg-sand-50 px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 transition-colors focus:border-copper focus:bg-white focus:outline-none focus:ring-1 focus:ring-copper";

  return (
    <form onSubmit={onSubmit} className={cn("space-y-5", className)} noValidate>
      {propertyTitle && (
        <p className="rounded-sm bg-sand-100 px-3 py-2 text-xs text-charcoal/70">
          Enquiry about: <span className="font-medium text-charcoal">{propertyTitle}</span>
        </p>
      )}

      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-charcoal/50">
          Full Name *
        </label>
        <input type="text" id="name" name="name" required autoComplete="name" className={inputClass} placeholder="Your name" />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-charcoal/50">
          Email *
        </label>
        <input type="email" id="email" name="email" required autoComplete="email" className={inputClass} placeholder="you@example.com" />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-charcoal/50">
          Phone / WhatsApp
        </label>
        <input type="tel" id="phone" name="phone" autoComplete="tel" className={inputClass} placeholder="+268 ..." />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-charcoal/50">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          required
          className={cn(inputClass, "resize-none")}
          placeholder={
            propertyTitle
              ? "I would like to arrange a viewing / receive more information..."
              : "Tell us about your requirements..."
          }
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-sm border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-copper px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-copper-600 focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2 disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send Enquiry"
        )}
      </button>

      <p className="text-center text-xs text-charcoal/50">
        Prefer WhatsApp?{" "}
        <a
          href="https://wa.me/26876780729"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-copper hover:text-copper-600"
        >
          Message us directly
        </a>
      </p>
    </form>
  );
}
