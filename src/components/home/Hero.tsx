"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[580px] overflow-hidden bg-brand-navy">
      {/* Local video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src="/0511.mp4" type="video/mp4" />
      </video>

      {/* Overlay — much heavier on mobile to hide baked-in video text */}
      <div className="absolute inset-0 bg-black/70 sm:bg-black/55 md:bg-black/40 lg:bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-transparent to-brand-navy/70" />

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

      {/* Centered hero content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-16 sm:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-2xl w-full"
        >
          <p className="text-brand-sky text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4">
            Pakistan&apos;s Most Trusted Consultancy
          </p>
          <h1 className="font-display font-black text-[2.1rem] leading-[1.1] sm:text-5xl md:text-6xl text-white mb-4 sm:mb-5 uppercase drop-shadow-2xl">
            Your Gateway to<br />
            <span className="text-brand-gold italic">Global Opportunities</span>
          </h1>
          <p className="text-white/75 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
            Visit Visas &bull; Immigration &bull; Study Abroad &bull; Jobseeker Visas
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
            <Link href="/contact" className="btn-gold text-sm sm:text-base px-7 sm:px-10 py-3.5 sm:py-4 text-center">
              Free Assessment
            </Link>
            <Link href="/services" className="btn-outline-white text-sm sm:text-base px-7 sm:px-10 py-3.5 sm:py-4 text-center">
              Our Services
            </Link>
          </div>
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
