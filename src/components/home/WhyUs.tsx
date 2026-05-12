"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award, Target, FolderCheck, MessageSquare, ShieldCheck, Globe2,
  type LucideIcon,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Award, Target, FolderCheck, MessageSquare, ShieldCheck, Globe2,
};

const CARD_GRADIENTS = [
  "from-brand/10 to-brand-sky/5",
  "from-brand-gold/10 to-amber-400/5",
  "from-brand-green/10 to-emerald-400/5",
  "from-purple-500/10 to-violet-400/5",
  "from-brand-dark/10 to-brand/5",
  "from-brand-sky/10 to-cyan-400/5",
];

const ICON_BG = [
  "bg-brand text-white",
  "bg-brand-gold text-brand-navy",
  "bg-brand-green text-white",
  "bg-purple-600 text-white",
  "bg-brand-dark text-white",
  "bg-brand-sky text-white",
];

export default function WhyUs() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="relative bg-white overflow-hidden py-24 md:py-32">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#1565C0 1px, transparent 1px), linear-gradient(90deg, #1565C0 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-sky/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand/8 text-brand border border-brand/20 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
            Why Beyond Blue
          </motion.span>
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-brand-navy leading-tight mb-5"
          >
            The Difference That
            <br />
            <span className="text-brand italic">Gets You Approved</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            300+ clients chose us — here&apos;s exactly why they kept coming back and referring their family.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICON_MAP[item.icon] ?? Award;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                {/* Card */}
                <div className={`
                  relative h-full rounded-2xl p-7 border border-slate-100
                  bg-gradient-to-br ${CARD_GRADIENTS[i]}
                  hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/8
                  transition-all duration-400 overflow-hidden cursor-default
                `}>
                  {/* Animated top border line */}
                  <div className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-brand to-brand-sky group-hover:w-full transition-all duration-500 ease-out rounded-t-2xl" />

                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                  </div>

                  {/* Icon */}
                  <div className={`
                    inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6
                    ${ICON_BG[i]} shadow-lg
                    group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300
                  `}>
                    <Icon className="w-7 h-7" strokeWidth={1.8} />
                  </div>

                  {/* Stat badge */}
                  <span className="inline-block bg-white/70 backdrop-blur-sm border border-white/80 text-brand-navy text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 shadow-sm">
                    {item.stat}
                  </span>

                  <h3 className="font-display font-bold text-xl text-brand-navy mb-3 leading-snug group-hover:text-brand transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bottom arrow indicator */}
                  <div className="mt-5 flex items-center gap-1 text-brand text-sm font-semibold opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                    <span>Learn more</span>
                    <span>→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 bg-brand-navy rounded-2xl px-8 py-6"
        >
          <div>
            <p className="text-white font-display font-bold text-xl">Ready to experience the difference?</p>
            <p className="text-white/50 text-sm mt-1">Join 300+ clients who trusted Beyond Blue with their journey.</p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 bg-brand-gold hover:bg-amber-400 text-brand-navy font-bold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/30 hover:-translate-y-0.5 whitespace-nowrap text-sm"
          >
            Get Free Assessment →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

