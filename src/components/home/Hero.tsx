"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_SLIDES = [
  { image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=90&auto=format&fit=crop", alt: "Passport and visa stamps" },
  { image: "/ahshsh.jpeg", alt: "Real visa approval stamp", local: true },
  { image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=1920&q=90&auto=format&fit=crop", alt: "Passport with visa stamps" },
  { image: "/sjdsjkjd.jpeg", alt: "Real passport stamp approval", local: true },
  { image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1920&q=90&auto=format&fit=crop", alt: "Travel documents and passport" },
  { image: "/sjsj.jpeg", alt: "Approved visa document", local: true },
  { image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=90&auto=format&fit=crop", alt: "Immigration passport stamps" },
  { image: "/WhatsApp%20Image%202026-05-04%20at%2018.55.25.jpeg", alt: "Real client visa approval", local: true },
  { image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=90&auto=format&fit=crop", alt: "Airplane wing over clouds" },
  { image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&q=90&auto=format&fit=crop", alt: "New York City skyline" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % HERO_SLIDES.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center bg-brand-navy">
      {/* Ken Burns animated image slideshow */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1.12 }}
          exit={{ opacity: 0, scale: 1.0 }}
          transition={{
            opacity: { duration: 0.4, ease: "easeOut" },
            scale: { duration: 5, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_SLIDES[index].image}
            alt={HERO_SLIDES[index].alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
            unoptimized={!!HERO_SLIDES[index].local}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-brand-navy/60" />

      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="font-display font-black text-white leading-[0.88] tracking-tight mb-6 uppercase"
            style={{ fontSize: "clamp(4.5rem, 15vw, 15rem)" }}
          >
            BEYOND<br />
            <span className="text-brand-sky italic">BLUE</span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-white/80 text-base sm:text-xl md:text-2xl font-medium tracking-widest uppercase mb-10"
        >
          Pakistan&apos;s Trusted Visa &amp; IELTS Consultancy
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/contact" className="btn-gold text-base px-10 py-4">Free Assessment</Link>
          <Link href="/services" className="btn-outline-white text-base px-10 py-4">Our Services</Link>
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-brand-gold" : "w-2 bg-white/40"}`}
          />
        ))}
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );
}