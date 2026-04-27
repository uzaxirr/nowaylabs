import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://nowaylabs-production.up.railway.app"
  ),
  title: "No Way Labs — Research. Prototype. Ship.",
  description:
    "An R&D studio at the intersection of agentic AI and web3. We build the infrastructure, tools, and protocols that others will build on.",
  openGraph: {
    title: "No Way Labs — Research. Prototype. Ship.",
    description:
      "An R&D studio at the intersection of agentic AI and web3.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "No Way Labs",
    description:
      "An R&D studio at the intersection of agentic AI and web3.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${caveat.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
