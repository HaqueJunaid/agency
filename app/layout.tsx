import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ideal Design",
  description: "Ideal Design is a creative experience studio that creates bold social campaigns, digital experiences, and websites that turn attention into meaningful growth.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: ["Ideal Design", "Creative Experience Studio", "Social Campaigns", "Digital Experiences", "Websites", "Attention", "Growth"],
  authors: [{ name: "Ideal Design" }],
  openGraph: {
    title: "Ideal Design",
    description: "Ideal Design is a creative experience studio that creates bold social campaigns, digital experiences, and websites that turn attention into meaningful growth.",
    type: "website",
    locale: "en_US",
    url: "https://www.idealdesign.vercel.app",
    siteName: "Ideal Design",
    images: [
      {
        url: "/main.png",
        width: 1200,
        height: 630,
        alt: "Ideal Design",
      },
    ],
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${inter.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
