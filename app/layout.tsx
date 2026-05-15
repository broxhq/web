import "./globals.css";
import type { Metadata, Viewport } from "next";

const title = "brox — the package manager for AI agent skills";
const description =
  "Install, share, and publish skills for Claude, Cursor, Cline, and other AI agents. One command — your agent gets new capabilities.";

export const metadata: Metadata = {
  metadataBase: new URL("https://brox.sh"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://brox.sh",
    siteName: "brox",
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
