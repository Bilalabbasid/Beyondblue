import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import BackToTop from "@/components/layout/BackToTop";
import PageTransitionProvider from "@/components/layout/PageTransitionProvider";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Beyond Blue IELTS & Consultancy | Pakistan's Trusted Visa Experts",
  description:
    "Beyond Blue IELTS & Consultancy — helping Pakistanis reach the UK, USA, Canada, Europe and beyond. Visit visas, study abroad, skilled immigration, IELTS coaching. 700+ approved cases.",
  keywords:
    "visa consultancy Pakistan, IELTS coaching Rawalpindi, Canada immigration, UK visa, study abroad Pakistan, immigration consultant",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Beyond Blue IELTS & Consultancy",
    description: "Trust us to get you there. Pakistan's #1 visa & IELTS consultancy.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, playfair.variable)}>
      <body className={cn("antialiased font-sans bg-white text-brand-navy")}>
        <Navbar />
        <main>
          <PageTransitionProvider>{children}</PageTransitionProvider>
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
