import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const BASE_URL = "https://bishal-portfolio-seven.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#6C63FF",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Bishal Kumar — Senior Frontend Developer",
    template: "%s | Bishal Kumar",
  },
  description:
    "Senior Frontend Developer specializing in React, Next.js, and TypeScript. 2+ years building production-grade web products, leading frontend teams, and shipping features at scale.",
  keywords: [
    "Bishal Kumar",
    "Frontend Developer",
    "React Developer",
    "Next.js Engineer",
    "TypeScript",
    "Senior Frontend Developer",
    "Gurugram",
    "India",
  ],
  authors: [{ name: "Bishal Kumar", url: BASE_URL }],
  creator: "Bishal Kumar",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Bishal Kumar",
    title: "Bishal Kumar — Senior Frontend Developer",
    description:
      "Building high-performance web products at the intersection of clean code and sharp design.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bishal Kumar — Senior Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bishal Kumar — Senior Frontend Developer",
    description:
      "Building high-performance web products at the intersection of clean code and sharp design.",
    creator: "@BishalK56217747",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bishal Kumar",
  jobTitle: "Senior Frontend Developer",
  url: BASE_URL,
  email: "elevatedsoul2225@gmail.com",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Galgotias University",
  },
  worksFor: {
    "@type": "Organization",
    name: "Josh Technology Group",
  },
  knowsAbout: ["React", "Next.js", "TypeScript", "Frontend Engineering", "Web Performance"],
  sameAs: [
    "https://github.com/Bishal976",
    "https://linkedin.com/in/bishal-kumar-054b30192",
    "https://twitter.com/BishalK56217747",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${syne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#6C63FF] focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
