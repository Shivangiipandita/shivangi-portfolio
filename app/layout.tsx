import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/motion";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shivangipandita.com"),
  title: "Shivangi Pandita — Product Manager",
  description:
    "Product Manager with 3.5+ years turning messy, real-world problems into products people actually use. 0→1 product building, GTM strategy, and deep-dive case studies from startup to NYC government scale.",
  openGraph: {
    title: "Shivangi Pandita — Product Manager",
    description:
      "PM portfolio: 0→1 product building, GTM strategy, and real-world case studies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivangi Pandita — Product Manager",
    description:
      "PM portfolio: 0→1 product building, GTM strategy, and real-world case studies.",
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
      className={`${hanken.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-paper text-ink">
        <ScrollProgress />
        {children}
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
