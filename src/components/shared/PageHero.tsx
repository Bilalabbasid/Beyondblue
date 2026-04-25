"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { sectionReveal, wordStaggerContainer, wordStaggerChild } from "@/lib/animations";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  label?: string;
  overlay?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  label,
  overlay = "linear-gradient(135deg, rgba(13,71,161,0.92) 30%, rgba(21,101,192,0.75) 70%, rgba(10,22,40,0.5) 100%)",
  children,
}: PageHeroProps) {
  const words = title.split(" ");

  return (
    <section className="relative h-[55vh] min-h-[420px] flex items-end pb-12 md:items-center md:pb-0 overflow-hidden pt-[80px] lg:pt-[100px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: overlay }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {label && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-brand-sky/20 border border-brand-sky/30 text-brand-sky text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5"
            >
              {label}
            </motion.span>
          )}

          <motion.h1
            variants={wordStaggerContainer}
            initial="hidden"
            animate="visible"
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-5"
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={wordStaggerChild} className="inline-block mr-[0.3em]">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-white/80 text-lg md:text-xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="mt-6"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
