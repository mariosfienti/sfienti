"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "./LanguageProvider";
import { SITE } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const { t, lang } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never fill this hidden field.
    if (data.get("company")) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          lang
        })
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-ink text-white">
      <div className="mx-auto flex max-w-[1180px] flex-col flex-wrap justify-between gap-10 px-6 py-16 md:flex-row md:gap-16 md:px-16 md:py-24">
        <div className="flex flex-1 flex-col gap-7" style={{ minWidth: 280 }}>
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[28px] font-bold md:text-[38px]">{t.contactTitle}</h2>
            <p className="max-w-[420px] text-[17px] leading-relaxed text-[#B7B9CC]">{t.contactBody}</p>
          </div>
          <div className="flex flex-col gap-4">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-white transition-opacity hover:opacity-70">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="text-xs text-[#9799AE]">{t.contactEmailLabel}</span>
                <span className="text-[14.5px] font-semibold">{SITE.email}</span>
              </span>
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 text-white transition-opacity hover:opacity-70"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="text-xs text-[#9799AE]">{t.contactLinkedinLabel}</span>
                <span className="text-[14.5px] font-semibold">{SITE.linkedinLabel}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="w-full flex-1 md:max-w-[420px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-[20px] border border-white/15 bg-white/5 p-6 md:p-8"
          >
            {/* Honeypot field — hidden from real visitors, catches basic bots */}
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            {status === "success" ? (
              <div className="flex flex-col gap-2">
                <span className="font-display text-xl font-bold text-white">{t.form.thanksTitle}</span>
                <span className="text-[15px] leading-relaxed text-[#B7B9CC]">{t.form.thanksBody}</span>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-[13px] font-semibold text-[#B7B9CC]">
                    {t.form.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder={t.form.namePlaceholder}
                    className="min-h-11 rounded-[10px] border border-white/20 bg-white/5 px-3.5 font-body text-[15px] text-white placeholder:text-white/40 focus:border-violet focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-[13px] font-semibold text-[#B7B9CC]">
                    {t.form.emailLabel}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder={t.form.emailPlaceholder}
                    className="min-h-11 rounded-[10px] border border-white/20 bg-white/5 px-3.5 font-body text-[15px] text-white placeholder:text-white/40 focus:border-violet focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="text-[13px] font-semibold text-[#B7B9CC]">
                    {t.form.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder={t.form.messagePlaceholder}
                    className="resize-y rounded-[10px] border border-white/20 bg-white/5 px-3.5 py-3 font-body text-[15px] text-white placeholder:text-white/40 focus:border-violet focus:outline-none"
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm text-red-300">{t.form.errorBody}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="min-h-[46px] rounded-[10px] bg-gradient-to-r from-blue to-violet font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {status === "submitting" ? t.form.submittingLabel : t.form.submitLabel}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-[13px] text-[#8688A0] md:px-16">
        {t.footerNote}
      </div>
    </section>
  );
}
