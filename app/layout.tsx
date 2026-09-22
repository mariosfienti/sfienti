import type { Metadata } from "next";

// Self-hosted fonts (no request to Google Fonts at runtime): pulled in as
// static files via the @fontsource packages instead of next/font/google.
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/800.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "./globals.css";
import { CONTENT } from "@/lib/content";

export const metadata: Metadata = {
  title: CONTENT.it.meta.title,
  description: CONTENT.it.meta.description
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="font-body">{children}</body>
    </html>
  );
}
