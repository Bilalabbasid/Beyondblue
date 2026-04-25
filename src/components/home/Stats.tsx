"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import { TrendingUp } from "lucide-react";

export default function Stats() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="relative bg-white overflow-hidden py-16 md:py-20" ref={ref}>
      {/* Top & bottom border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center px-6 py-4 group"
            >
              {/* Trend icon */}
              <div className="flex items-center gap-1.5 text-brand-green text-xs font-bold mb-3 opacity-60">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Growing</span>
              </div>

              {/* Number */}
              <div className="relative mb-1">
                <span className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-brand leading-none tabular-nums">
                  {inView ? (
                    <CountUp start={0} end={stat.value} duration={2.5} useEasing />
                  ) : (
                    <span>0</span>
                  )}
                  <span>{stat.suffix}</span>
                </span>
                {/* Animated gold underline */}
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 1.5 + i * 0.1, duration: 0.7, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold to-amber-300 rounded-full"
                />
              </div>

              <p className="text-slate-500 text-sm md:text-base font-medium mt-4 leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

