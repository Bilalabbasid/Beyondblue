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
  title: "Beyond Blue Consultancy | Pakistan's Trusted Visa Experts",
  description:
    "Beyond Blue Consultancy — helping Pakistanis reach the UK, USA, Canada, Europe and beyond. Visit visas, study abroad, skilled immigration. 300+ approved cases.",
  keywords:
    "visa consultancy Pakistan, Canada immigration, UK visa, study abroad Pakistan, immigration consultant Rawalpindi",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Beyond Blue Consultancy",
    description: "Trust us to get you there. Pakistan's trusted visa & immigration consultancy.",
    type: "website",
    locale: "en_US",
  },
  verification: {
    google: "9P51oAznDiDgbUq7I1GlcRbur9qqu22I0Oc3zXshxUw",
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
