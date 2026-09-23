import type { Metadata } from "next";
import { Chakra_Petch, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/language-context";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Vetra Software Studio",
    default: "Vetra Software Studio — Software Built for Real Businesses",
  },
  description:
    "Simple, focused, high-performance software designed to solve everyday business problems. Available in flexible Monthly subscriptions and Lifetime ownership licenses.",
  keywords: [
    "software studio",
    "business software",
    "pos pro",
    "padelspace",
    "invoice generator",
    "lifetime license",
    "vetra software",
  ],
  authors: [{ name: "Vetra Software Studio" }],
  metadataBase: new URL("https://vetra.studio"),
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://vetra.studio",
    title: "Vetra Software Studio",
    description: "Focused, reliable software engineered for operational precision.",
    siteName: "Vetra Software Studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${chakraPetch.variable} ${robotoMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#F4F5F6] text-[#12141A] selection:bg-[#FF6B6B] selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
