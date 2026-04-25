"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Plane } from "lucide-react";
import {
  wordStaggerContainer,
  wordStaggerChild,
  floatingCard,
} from "@/lib/animations";
import { BRAND, IMAGES, BLUR_PLACEHOLDER } from "@/lib/constants";

const FLOATING_CARDS = [
  { flagCode: "ca", country: "Canada PR",          type: "Permanent Residency",  delay: 0 },
  { flagCode: "gb", country: "UK Study Visa",       type: "Tier 4 Student",       delay: 0.8 },
  { flagCode: "de", country: "Germany Jobseeker",   type: "Work Authorization",   delay: 1.6 },
];

const TRUST_ITEMS = [
  "700+ Approved",
  "7 Years",
  "Free Consultation",
  "40+ Countries",
];

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const headline = ["Trust Us To", "Get You", "There."];

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src={IMAGES.hero.src}
          alt={IMAGES.hero.alt}
          fill
          className="object-cover scale-110"
          priority
          fetchPriority="high"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,71,161,0.92) 30%, rgba(21,101,192,0.7) 60%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left column — 60% */}
          <div className="lg:col-span-3">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6"
            >
              <Plane className="w-3.5 h-3.5 text-brand-sky" />
              <span>Pakistan&apos;s Trusted Visa &amp; IELTS Experts</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={wordStaggerContainer}
              initial="hidden"
              animate="visible"
              className="font-display font-bold leading-[1.05] mb-6"
            >
              {headline.map((line, lineIdx) => (
                <div key={lineIdx} className="overflow-hidden">
                  <motion.span
                    variants={wordStaggerChild}
                    className={`block text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${
                      lineIdx === 2
                        ? "text-brand-sky italic"
                        : "text-white"
                    }`}
                    custom={lineIdx}
                  >
                    {line}
                  </motion.span>
                </div>
              ))}
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-white/80 text-lg md:text-xl max-w-xl leading-relaxed mb-8"
            >
              Beyond Blue IELTS &amp; Consultancy — helping Pakistanis reach the UK, USA, Canada,
              Europe and beyond. Visit visas, study abroad, skilled immigration, IELTS coaching.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link href="/contact" className="btn-gold text-base px-8 py-4 flex items-center gap-2">
                Get Free Assessment
                <span>→</span>
              </Link>
              <Link href="/services" className="btn-outline-white text-base px-8 py-4">
                View Our Services
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {TRUST_ITEMS.map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-white/70 text-sm">
                  <span className="text-brand-green font-bold">✓</span>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right column — floating approved cards */}
          <div className="hidden lg:flex lg:col-span-2 flex-col items-end gap-4 pr-4">
            {FLOATING_CARDS.map((card, i) => (
              <motion.div
                key={card.country}
                variants={floatingCard(card.delay)}
                initial="initial"
                animate="animate"
                className="glass rounded-2xl p-4 w-64 shadow-xl shadow-black/30"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="rounded overflow-hidden shadow-md flex-shrink-0" style={{ width: 44, height: 30 }}>
                    <Image
                      src={`https://flagcdn.com/w80/${card.flagCode}.png`}
                      alt={card.country}
                      width={44}
                      height={30}
                      className="object-cover w-full h-full"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{card.country}</div>
                    <div className="text-white/60 text-xs">{card.type}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 bg-brand-green/20 border border-brand-green/30 text-brand-green text-xs font-bold px-2.5 py-1 rounded-full">
                    ✓ APPROVED
                  </span>
                  <span className="text-white/40 text-xs">by Beyond Blue</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll chevron */}
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
