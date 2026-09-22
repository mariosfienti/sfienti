"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "./LanguageProvider";
import { SITE } from "@/lib/content";
import {
  ExternalLink,
  Send,
  CheckCircle2,
  ArrowUp,
  Sparkles
} from "lucide-react";

type Status = "idle" | "success";

export default function Contact() {
  const { t, lang } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never fill this hidden field.
    if (data.get("company")) {
      setStatus("success");
      return;
    }

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = lang === "it" ? `Contatto dal sito da ${name}` : `Website contact from ${name}`;
    const body =
      (lang === "it" ? `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n` : `Name: ${name}\nEmail: ${email}\n\nMessage:\n`) +
      message;

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("success");
    form.reset();
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0F111A] text-white">
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-violet/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-[1200px] flex-col justify-between gap-12 px-5 py-16 md:flex-row md:items-center md:gap-16 md:px-8 md:py-24">
        {/* Left Side: Contact Pitch */}
        <div className="flex flex-1 flex-col gap-5 max-w-[520px]">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-3.5 py-1 text-xs font-bold text-blue">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t.contactTitle}</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-tight">
            {lang === "it"
              ? "Diamo forma al prossimo prodotto insieme"
              : "Let's shape the next product together"}
          </h2>
          <p className="text-[16.5px] leading-relaxed text-slate-300 md:text-[17.5px]">
            {t.contactBody}
          </p>
        </div>

        {/* Right Side: High Converting Contact Form */}
        <div className="w-full flex-1 md:max-w-[480px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-3xl border border-white/15 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-md md:p-8"
          >
            {/* Honeypot field */}
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {t.form.thanksTitle}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-slate-300">
                    {t.form.thanksBody}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    {t.form.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder={t.form.namePlaceholder}
                    className="min-h-[48px] rounded-xl border border-white/15 bg-white/5 px-4 font-body text-[15px] text-white placeholder:text-slate-500 focus:border-blue focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue/30"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    {t.form.emailLabel}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder={t.form.emailPlaceholder}
                    className="min-h-[48px] rounded-xl border border-white/15 bg-white/5 px-4 font-body text-[15px] text-white placeholder:text-slate-500 focus:border-blue focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue/30"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    {t.form.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder={t.form.messagePlaceholder}
                    className="resize-y rounded-xl border border-white/15 bg-white/5 p-4 font-body text-[15px] text-white placeholder:text-slate-500 focus:border-blue focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue/30"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue to-violet font-display text-[15px] font-bold text-white shadow-lg transition-all duration-200 hover:opacity-95 hover:shadow-glow active:scale-95 cursor-pointer"
                >
                  <span>{t.form.submitLabel}</span>
                  <Send className="h-4 w-4" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Footer bar with centered copyright and LinkedIn link */}
      <footer className="border-t border-white/10 px-5 py-8 md:px-8">
        <div className="relative mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs font-medium text-slate-400">
            <span>
              {lang === "it"
                ? "Realizzato con cura a Torino. © 2026 Mario Alessandro Sfienti."
                : "Designed with care in Turin. © 2026 Mario Alessandro Sfienti."}
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-blue hover:text-white transition-colors underline-offset-2 hover:underline font-semibold"
            >
              <span>LinkedIn</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Floating Back to top on larger screens */}
          <button
            onClick={scrollToTop}
            className="mt-2 sm:mt-0 sm:absolute sm:right-0 flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300 transition-colors hover:border-white/30 hover:text-white cursor-pointer"
          >
            <span>{lang === "it" ? "Torna su" : "Back to top"}</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </footer>
    </section>
  );
}
