"use client";

import { motion } from "framer-motion";
import { wordStaggerContainer, wordStaggerChild, sectionReveal } from "@/lib/animations";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const words = title.split(" ");

  return (
    <motion.div
      ref={ref}
      variants={sectionReveal}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={cn(centered ? "text-center" : "text-left", className)}
    >
      {label && (
        <span
          className={cn(
            "label-small inline-block mb-3",
            light ? "text-brand-sky" : "text-brand"
          )}
        >
          {label}
        </span>
      )}

      <motion.h2
        variants={wordStaggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={cn(
          "font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4",
          light ? "text-white" : "text-brand-navy"
        )}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordStaggerChild}
            className="inline-block mr-[0.3em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>

      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg max-w-2xl leading-relaxed",
            centered && "mx-auto",
            light ? "text-white/70" : "text-slate-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
