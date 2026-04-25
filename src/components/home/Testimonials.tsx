"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import { sectionReveal } from "@/lib/animations";
import Flag from "@/components/shared/Flag";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000 })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  return (
    <section className="bg-white section-padding overflow-hidden" ref={ref}>
      <div className="container-wide">
        <SectionHeader
          label="Client Stories"
          title="Real Stories, Real Approvals"
          subtitle="Don't take our word for it — hear directly from the people whose lives we've changed."
        />

        <motion.div
          variants={sectionReveal}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={t.id}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-300"
                  style={{
                    opacity: Math.abs(i - selectedIndex) <= 1 ? 1 : 0.5,
                    transform: i === selectedIndex ? "scale(1.02)" : "scale(0.97)",
                  }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-brand h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-slate-600 text-sm leading-relaxed italic flex-1 mb-5">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    {/* Client info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Image
                          src={t.photo}
                          alt={`${t.name} — Beyond Blue client, ${t.visa} approved`}
                          width={44}
                          height={44}
                          className="rounded-full object-cover ring-2 ring-brand/20"
                          sizes="44px"
                        />
                        <div>
                          <div className="font-semibold text-brand-navy text-sm">{t.name}</div>
                          <div className="text-slate-400 text-xs">{t.visa}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Flag code={t.flagCode} name={t.country} size={22} />
                        <span className="inline-flex items-center gap-1 bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-bold px-2 py-0.5 rounded-full">
                          ✓ APPROVED
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-brand/30 flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === selectedIndex ? "bg-brand w-6" : "bg-slate-200"
                  }`}
                  onClick={() => {
                    emblaApi?.scrollTo(i);
                    setSelectedIndex(i);
                  }}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-brand/30 flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
