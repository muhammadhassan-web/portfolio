import type { Metadata } from "next";
import Script from "next/script";
import {
  IBM_Plex_Sans,
  IBM_Plex_Sans_Condensed,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { Background } from "@/components/Background";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexCondensed = IBM_Plex_Sans_Condensed({
  variable: "--font-plex-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const url = "https://portfolio-muhammadhassan.vercel.app";
const description =
  "Full-stack MERN developer in Islamabad shipping AI-powered SaaS products with TypeScript, React, Next.js, Node and MongoDB. Oracle APEX developer at Invenzra. Open to remote freelance work.";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: "Muhammad Hassan — Full-stack developer",
    template: "%s · Muhammad Hassan",
  },
  description,
  keywords: [
    "full-stack developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "MERN stack developer",
    "Oracle APEX",
    "PL/SQL",
    "AI SaaS",
    "Islamabad",
    "remote developer",
  ],
  authors: [{ name: "Muhammad Hassan", url }],
  creator: "Muhammad Hassan",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url,
    siteName: "Muhammad Hassan",
    title: "Muhammad Hassan — Full-stack developer",
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Hassan — full-stack developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hassan — Full-stack developer",
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('portfolio-theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plexSans.variable} ${plexCondensed.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full text-text" suppressHydrationWarning>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <Background />
        <Cursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
