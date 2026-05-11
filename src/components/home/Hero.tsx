"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-brand-navy">
      {/* Local video — no overlay blur, just a light dark tint */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/0511.mp4" type="video/mp4" />
      </video>

      {/* Thin dark tint only — keeps video crisp */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Beyond Blue logo — top left */}
      <div className="absolute top-24 left-6 sm:left-10 z-20 flex items-center gap-3">
        <Image src="/logo.svg" alt="Beyond Blue" width={40} height={40} className="drop-shadow-lg" />
        <div className="leading-tight">
          <p className="text-white font-display font-black text-xl sm:text-2xl tracking-tight uppercase drop-shadow-lg">
            Beyond <span className="text-brand-sky italic">Blue</span>
          </p>
          <p className="text-white/60 text-[10px] sm:text-xs tracking-widest uppercase">IELTS &amp; Consultancy</p>
        </div>
      </div>

      {/* CTA buttons — bottom centre */}
      <div className="absolute bottom-16 left-0 right-0 z-20 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/contact" className="btn-gold text-base px-10 py-4">Free Assessment</Link>
          <Link href="/services" className="btn-outline-white text-base px-10 py-4">Our Services</Link>
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
