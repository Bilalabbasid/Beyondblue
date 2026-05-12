"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-brand-navy">
      {/* Desktop: full viewport hero | Mobile: video at natural 16:9 + buttons below */}
      <section className="relative sm:h-[100svh] sm:min-h-[500px] overflow-hidden">
        {/* Video — natural aspect on mobile, cover on desktop */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full sm:absolute sm:inset-0 sm:h-full sm:object-cover sm:object-center"
        >
          <source src="/0511.mp4" type="video/mp4" />
        </video>

        {/* Subtle overlay for text readability on desktop */}
        <div className="hidden sm:block absolute inset-0 bg-black/15" />

        {/* Logo — hidden on mobile, visible sm+ */}
        <div className="hidden sm:flex absolute top-28 left-10 z-20 items-center gap-3">
          <Image src="/logo.svg" alt="Beyond Blue" width={40} height={40} className="drop-shadow-lg" />
          <div className="leading-tight">
            <p className="text-white font-display font-black text-xl md:text-2xl tracking-tight uppercase drop-shadow-lg">
              Beyond <span className="text-brand-sky italic">Blue</span>
            </p>
            <p className="text-white/60 text-[11px] tracking-widest uppercase">IELTS &amp; Consultancy</p>
          </div>
        </div>

        {/* CTA buttons — below video on mobile, overlaid on desktop */}
        <div className="bg-brand-navy px-4 py-5 sm:absolute sm:bottom-16 sm:left-0 sm:right-0 sm:bg-transparent sm:py-0 z-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none sm:w-auto"
          >
            <Link href="/contact" className="btn-gold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 text-center">Free Assessment</Link>
            <Link href="/services" className="btn-outline-white text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 text-center">Our Services</Link>
          </motion.div>
        </div>

        <motion.div
          className="hidden sm:block absolute bottom-5 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-7 h-7 text-white/40" />
        </motion.div>
      </section>
    </div>
  );
}
