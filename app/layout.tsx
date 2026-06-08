import "./globals.css";
import type { Metadata, Viewport } from "next";

const title = "qpilot — AI that runs your test cases";
const description =
  "Paste a manual test case. An AI agent opens Chrome and executes each step — live pass / fail / warn. No code, no config, no Selenium.";

export const metadata: Metadata = {
  metadataBase: new URL("https://brox.sh"),
  title,
  description,
  applicationName: "qpilot",
  authors: [{ name: "brox", url: "https://github.com/broxhq" }],
  creator: "brox",
  keywords: [
    "qpilot",
    "manual testing",
    "test automation",
    "QA",
    "AI agent",
    "browser automation",
    "Playwright",
    "Claude",
    "LLM",
    "test cases",
    "regression testing",
    "no-code testing",
    "Selenium alternative",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title,
    description,
    url: "https://brox.sh",
    siteName: "qpilot",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "qpilot — run manual test cases with an AI agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
