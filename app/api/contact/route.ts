import { NextRequest, NextResponse } from "next/server";
import { sendTransactionalEmail } from "@/lib/brevo";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const AUTO_REPLY = {
  it: {
    subject: "Ho ricevuto il tuo messaggio — Mario Alessandro Sfienti",
    body: (name: string) => `
      <p>Ciao ${escapeHtml(name)},</p>
      <p>grazie per avermi scritto: ho ricevuto il tuo messaggio e ti risponderò al più presto.</p>
      <p>A presto,<br>Mario</p>
    `
  },
  en: {
    subject: "I've received your message — Mario Alessandro Sfienti",
    body: (name: string) => `
      <p>Hi ${escapeHtml(name)},</p>
      <p>thanks for reaching out — I've received your message and will get back to you soon.</p>
      <p>Best,<br>Mario</p>
    `
  }
} as const;

export async function POST(req: NextRequest) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { name, email, message, lang } = (payload ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const trimmedName = name.trim().slice(0, 200);
  const trimmedEmail = email.trim().slice(0, 320);
  const trimmedMessage = message.trim().slice(0, 5000);
  const safeLang: "it" | "en" = lang === "en" ? "en" : "it";

  if (!trimmedName || !trimmedMessage || !EMAIL_RE.test(trimmedEmail)) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "mario@sfienti.it";
  const toName = process.env.CONTACT_TO_NAME || "Mario Alessandro Sfienti";

  try {
    // 1) Notification to Mario, with reply-to set to the visitor so he can answer directly.
    await sendTransactionalEmail({
      to: [{ email: toEmail, name: toName }],
      subject: `Nuovo messaggio dal sito — ${trimmedName}`,
      replyTo: { email: trimmedEmail, name: trimmedName },
      htmlContent: `
        <p><strong>Nome:</strong> ${escapeHtml(trimmedName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
        <p><strong>Lingua del form:</strong> ${safeLang}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${escapeHtml(trimmedMessage).replace(/\n/g, "<br>")}</p>
      `
    });

    // 2) Auto-reply to the visitor, in the language they used on the site.
    const reply = AUTO_REPLY[safeLang];
    await sendTransactionalEmail({
      to: [{ email: trimmedEmail, name: trimmedName }],
      subject: reply.subject,
      htmlContent: reply.body(trimmedName)
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/contact] Brevo send failed:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }
}
