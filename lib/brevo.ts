interface BrevoRecipient {
  email: string;
  name?: string;
}

interface SendEmailParams {
  to: BrevoRecipient[];
  subject: string;
  htmlContent: string;
  replyTo?: BrevoRecipient;
}

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

/**
 * Sends a transactional email through Brevo (formerly Sendinblue).
 * Requires BREVO_API_KEY, CONTACT_SENDER_EMAIL and CONTACT_SENDER_NAME env vars.
 * The sender address/domain must be verified in the Brevo account first,
 * otherwise Brevo rejects the request.
 */
export async function sendTransactionalEmail({ to, subject, htmlContent, replyTo }: SendEmailParams) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.CONTACT_SENDER_EMAIL;
  const senderName = process.env.CONTACT_SENDER_NAME || "Mario Alessandro Sfienti";

  if (!apiKey || !senderEmail) {
    throw new Error("Missing BREVO_API_KEY or CONTACT_SENDER_EMAIL environment variable");
  }

  const res = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key": apiKey
    },
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail },
      to,
      subject,
      htmlContent,
      ...(replyTo ? { replyTo } : {})
    })
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Brevo API error (${res.status}): ${body}`);
  }

  return res.json();
}
