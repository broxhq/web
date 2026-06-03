import "./globals.css";
import type { Metadata, Viewport } from "next";

const title = "qpilot — AI that runs your test cases";
const description =
  "Paste a manual test case. An AI agent opens Chrome and executes each step — live pass / fail / warn. No code, no config, no Selenium.";

export const metadata: Metadata = {
  metadataBase: new URL("https://brox.sh"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://brox.sh",
    siteName: "qpilot",
    type: "website",
    images: ["/og.png"],
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
