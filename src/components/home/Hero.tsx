"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[580px] overflow-hidden bg-brand-navy">
      {/* Local video — natural width on mobile (no crop), full cover on desktop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-0 w-full top-1/2 -translate-y-1/2 sm:inset-0 sm:h-full sm:translate-y-0 sm:object-cover"
      >
        <source src="/0511.mp4" type="video/mp4" />
      </video>

      {/* Light tint only */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Beyond Blue logo — top left, below navbar */}
      <div className="absolute top-[72px] sm:top-20 left-4 sm:left-10 z-20 flex items-center gap-2 sm:gap-3">
        <Image src="/logo.svg" alt="Beyond Blue" width={32} height={32} className="drop-shadow-lg w-8 h-8 sm:w-10 sm:h-10" />
        <div className="leading-tight">
          <p className="text-white font-display font-black text-sm sm:text-xl md:text-2xl tracking-tight uppercase drop-shadow-lg">
            Beyond <span className="text-brand-sky italic">Blue</span>
          </p>
          <p className="text-white/60 text-[9px] sm:text-[11px] tracking-widest uppercase">IELTS &amp; Consultancy</p>
        </div>
      </div>

      {/* CTA buttons — bottom centre */}
      <div className="absolute bottom-14 sm:bottom-16 left-0 right-0 z-20 flex justify-center px-4">
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
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-7 h-7 text-white/40" />
      </motion.div>
    </section>
  );
}
