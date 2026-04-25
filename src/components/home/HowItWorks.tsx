"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MessageCircle, FileText, Send, CheckCircle } from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/constants";

const ICONS: Record<string, React.ElementType> = {
  MessageCircle, FileText, Send, CheckCircle,
};

const STEP_COLORS = [
  { bg: "bg-brand", border: "border-brand-sky/50", glow: "shadow-brand/40", text: "text-brand-sky" },
  { bg: "bg-brand", border: "border-brand-sky/50", glow: "shadow-brand/40", text: "text-brand-sky" },
  { bg: "bg-brand", border: "border-brand-sky/50", glow: "shadow-brand/40", text: "text-brand-sky" },
  { bg: "bg-brand-gold", border: "border-brand-gold/50", glow: "shadow-brand-gold/50", text: "text-brand-gold" },
];

export default function HowItWorks() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="relative bg-brand-navy overflow-hidden py-24 md:py-32" ref={ref}>
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-brand/10 blur-3xl rounded-full" />
      </div>
      {/* Dots grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
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
            <span className="w-1.5 h-1.5 bg-brand-sky rounded-full animate-pulse" />
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-5"
          >
            From Consultation
            <br />
            <span className="text-brand-gold italic">to Approval in 4 Steps</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg"
          >
            A clear, proven process that has delivered 700+ successful approvals.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-14 left-[calc(12.5%+40px)] right-[calc(12.5%+40px)]">
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-px bg-gradient-to-r from-brand-sky/60 via-brand-sky/30 to-brand-gold/60"
              style={{ backgroundSize: "200% 100%" }}
            />
            {/* Dashed overlay */}
            <div className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: "linear-gradient(90deg, #42A5F5 50%, transparent 50%)",
                backgroundSize: "16px 1px",
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
            {HOW_IT_WORKS.map((step, i) => {
              const Icon = ICONS[step.icon] ?? CheckCircle;
              const isLast = i === HOW_IT_WORKS.length - 1;
              const colors = STEP_COLORS[i];

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Mobile connector */}
                  {!isLast && (
                    <div className="lg:hidden absolute top-28 left-1/2 -translate-x-px w-px h-16 bg-gradient-to-b from-brand-sky/50 to-transparent" />
                  )}

                  {/* Icon circle */}
                  <motion.div
                    initial={{ scale: 0, rotate: -15 }}
                    animate={inView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 + i * 0.15 }}
                    className={`
                      relative z-10 flex items-center justify-center w-28 h-28 rounded-2xl mb-6 border-2
                      ${colors.bg} ${colors.border}
                      shadow-2xl ${colors.glow}
                      group-hover:scale-105 transition-transform duration-300
                    `}
                  >
                    <Icon className={`w-10 h-10 ${isLast ? "text-brand-navy" : "text-white"}`} strokeWidth={1.6} />

                    {/* Step number badge */}
                    <div className={`
                      absolute -top-3 -right-3 w-8 h-8 rounded-full border-2 border-brand-navy
                      flex items-center justify-center text-xs font-bold
                      ${isLast ? "bg-brand-gold text-brand-navy" : "bg-brand-navy text-brand-sky border-brand-sky/40"}
                    `}>
                      {step.step}
                    </div>
                  </motion.div>

                  <h3 className={`font-display font-bold text-xl mb-3 ${isLast ? "text-brand-gold" : "text-white"}`}>
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>

                  {/* Status chip */}
                  <div className={`mt-4 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                    isLast
                      ? "bg-brand-gold/15 text-brand-gold border-brand-gold/30"
                      : "bg-brand-sky/10 text-brand-sky border-brand-sky/20"
                  }`}>
                    {isLast ? "✓ Goal" : `Step ${step.step}`}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

