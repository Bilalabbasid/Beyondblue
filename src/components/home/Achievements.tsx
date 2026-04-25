"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Globe2, GraduationCap, UserCheck, FileCheck, Star, type LucideIcon } from "lucide-react";
import { ACHIEVEMENTS } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Users, Globe2, GraduationCap, UserCheck, FileCheck, Star,
};

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="relative overflow-hidden bg-brand-navy py-24 md:py-32">
      {/* Radial glow top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-brand/20 blur-3xl rounded-full pointer-events-none" />
      {/* Diagonal stripe texture */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-white/15 text-brand-sky text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 bg-white/5"
          >
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse" />
            Our Milestones
          </motion.span>
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-5"
          >
            Numbers That Tell
            <br />
            <span className="text-brand-gold italic">Our Story</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg"
          >
            Real milestones earned through relentless dedication and trust.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = ICON_MAP[item.icon] ?? Star;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl p-7 border border-white/8 bg-white/5 hover:bg-white/10 hover:border-brand-sky/40 transition-all duration-400 overflow-hidden cursor-default backdrop-blur-sm">
                  {/* Glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${item.color}18 0%, transparent 70%)` }}
                  />

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
                  />

                  {/* Icon circle */}
                  <div className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10"
                    style={{ backgroundColor: `${item.color}22` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.8} />
                  </div>

                  {/* Value */}
                  <div className="font-display font-bold text-4xl md:text-5xl mb-2 leading-none"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </div>

                  {/* Label */}
                  <div className="text-white/60 text-sm font-medium tracking-wide">
                    {item.label}
                  </div>

                  {/* Number underline */}
                  <div className="mt-4 h-px w-10 rounded-full group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: `${item.color}50` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

