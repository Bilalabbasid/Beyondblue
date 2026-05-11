"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Visit Visa",
    href: "/services#visit-visa",
    sub: [
      { label: "Canada Visit Visa", href: "/countries/canada" },
      { label: "Australia Visit Visa", href: "/countries/australia" },
      { label: "USA Visit Visa", href: "/countries/usa" },
      { label: "Schengen Tourist Visa", href: "/countries/italy" },
    ],
  },
  {
    label: "Immigration",
    href: "/services#skilled-immigration",
    sub: [
      { label: "USA EB2 NIW", href: "/countries/usa" },
      { label: "Canada Immigration", href: "/countries/canada" },
      { label: "Australia Immigration", href: "/countries/australia" },
      { label: "UK Immigration", href: "/countries/uk" },
    ],
  },
  {
    label: "Jobseeker",
    href: "/services#jobseeker-visa",
    sub: [
      { label: "Sweden Talent Visa", href: "/countries/sweden" },
      { label: "Germany Jobseeker", href: "/countries/germany" },
    ],
  },
  {
    label: "Study Abroad",
    href: "/services#study-abroad",
    sub: [
      { label: "Canada Study Visa", href: "/countries/canada" },
      { label: "Australia Study Visa", href: "/countries/australia" },
      { label: "UK Study Visa", href: "/countries/uk" },
      { label: "Italy Study Visa", href: "/countries/italy" },
      { label: "Hungary Study Visa", href: "/countries/hungary" },
    ],
  },
  { label: "Career", href: "/career" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const drawerVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 300, damping: 30 } },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.25, ease: "easeIn" as const } },
};

const drawerLinkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => { setScrolled(latest > 60); });
  useEffect(() => { setMobileOpen(false); setMobileExpanded(null); }, [pathname]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              initial={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-brand-navy/90 text-white/70 text-xs overflow-hidden hidden xl:block border-b border-white/5"
            >
              <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <a href={`tel:${BRAND.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <Phone className="w-3 h-3" />{BRAND.phone}
                  </a>
                  <a href={`mailto:${BRAND.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <Mail className="w-3 h-3" />{BRAND.email}
                  </a>
                </div>
                <div className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /><span>Bahria Ph 7, Rawalpindi</span></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={cn("transition-all duration-300", scrolled ? "bg-brand-navy/95 backdrop-blur-xl shadow-lg shadow-black/20" : "bg-brand-navy/85 backdrop-blur-sm")}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex-shrink-0 mr-6">
                <Image src="/logo.svg" alt="Beyond Blue IELTS & Consultancy" width={150} height={46} className="h-9 w-auto" priority />
              </Link>

              <nav className="hidden xl:flex items-center gap-0.5 flex-1">
                {NAV_LINKS.map((link) =>
                  link.sub ? (
                    <div key={link.href} className="relative" onMouseEnter={() => setOpenDropdown(link.label)} onMouseLeave={() => setOpenDropdown(null)}>
                      <button className={cn("flex items-center gap-0.5 px-2.5 py-2 rounded-md text-sm font-medium text-white/85 hover:text-white transition-colors whitespace-nowrap", pathname.startsWith(link.href.split("#")[0]) && pathname !== "/" && "text-brand-gold")}>
                        {link.label}
                        <ChevronDown className={cn("w-3 h-3 transition-transform duration-200", openDropdown === link.label && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-1 w-52 bg-brand-navy border border-white/10 rounded-xl shadow-2xl shadow-black/40 overflow-hidden z-50">
                            {link.sub.map((sub) => (
                              <Link key={sub.href} href={sub.href} className="block px-4 py-2.5 text-sm text-white/75 hover:text-white hover:bg-white/10 transition-colors">{sub.label}</Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link key={link.href} href={link.href} className={cn("px-2.5 py-2 rounded-md text-sm font-medium text-white/85 hover:text-white transition-colors whitespace-nowrap", pathname === link.href && "text-brand-gold")}>
                      {link.label}
                    </Link>
                  )
                )}
              </nav>

              <div className="flex items-center gap-3 ml-4">
                <Link href="/contact" className="hidden xl:inline-flex items-center btn-gold text-sm px-5 py-2 whitespace-nowrap">Free Assessment</Link>
                <button onClick={() => setMobileOpen(true)} className="xl:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors" aria-label="Open menu">
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div variants={drawerVariants} initial="hidden" animate="visible" exit="exit" className="fixed right-0 top-0 bottom-0 z-50 w-80 max-w-[90vw] bg-brand-navy flex flex-col shadow-2xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <Image src="/logo.svg" alt="Beyond Blue" width={130} height={40} className="h-8 w-auto" />
                <button onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white p-1 transition-colors"><X className="w-5 h-5" /></button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.div key={link.href} custom={i} variants={drawerLinkVariants} initial="hidden" animate="visible">
                    {link.sub ? (
                      <div className="border-b border-white/10">
                        <button onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                          className="w-full flex items-center justify-between py-3 text-base font-medium text-white/80 hover:text-white transition-colors">
                          {link.label}
                          <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", mobileExpanded === link.label && "rotate-180")} />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === link.label && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden pl-3 pb-2">
                              {link.sub.map((sub) => (
                                <Link key={sub.href} href={sub.href} className="block py-2 text-sm text-white/60 hover:text-brand-sky transition-colors">{sub.label}</Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link href={link.href} className={cn("block py-3 text-base font-medium border-b border-white/10 transition-colors", pathname === link.href ? "text-brand-gold" : "text-white/80 hover:text-white")}>
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="px-4 py-5 border-t border-white/10 space-y-3">
                <Link href="/contact" className="btn-gold w-full text-center block text-sm py-3">Free Assessment</Link>
                <a href={BRAND.social.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-500 text-white rounded-full text-sm font-semibold transition-colors">
                  Chat on WhatsApp
                </a>
                <a href={`tel:${BRAND.phone}`} className="flex items-center justify-center gap-2 text-white/50 hover:text-white text-xs transition-colors pt-1">
                  <Phone className="w-3.5 h-3.5" />{BRAND.phone}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
