import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, La_Belle_Aurore } from "next/font/google";
import { Providers } from "@/shared/providers";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const laBelleAurore = La_Belle_Aurore({
  variable: "--font-handwriting",
  weight: ["400"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF9" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://stitch-smoky.vercel.app'),
  title: {
    default: "Lumière | Premium Design Subscription",
    template: "%s | Lumière"
  },
  description: "Elevate your brand with limitless design. A premium design subscription for forward-thinking brands. Expertly crafted in days, not weeks.",
  keywords: ["design subscription", "UI/UX design", "premium design", "branding", "unlimited design"],
  authors: [{ name: "Lumière Team" }],
  creator: "Lumière",
  publisher: "Lumière",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Lumière | Premium Design Subscription",
    description: "Elevate your brand with limitless design. A premium design subscription for forward-thinking brands.",
    url: "https://stitch-smoky.vercel.app",
    siteName: "Lumière",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumière | Premium Design Subscription",
    description: "Elevate your brand with limitless design. A premium design subscription for forward-thinking brands.",
    creator: "@lumiere_design",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${instrumentSerif.variable} ${inter.variable} ${laBelleAurore.variable} antialiased bg-background-light dark:bg-background-dark text-stone-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-primary/20 selection:text-primary`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
