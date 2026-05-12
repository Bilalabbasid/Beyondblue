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
import Lightbox from "@/components/shared/Lightbox";

const APPROVAL_PROOFS = [
  { src: "/ahshsh.jpeg", label: "USA B1/B2 Visa", country: "United States" },
  { src: "/ashjsuajjas.jpeg", label: "Australia Subclass 858", country: "Australia" },
  { src: "/sjdsjkjd.jpeg", label: "UK eVisa", country: "United Kingdom" },
  { src: "/sjsj.jpeg", label: "Spain Schengen Visa", country: "Spain" },
  { src: "/WhatsApp%20Image%202026-05-04%20at%2018.55.23.jpeg", label: "Canada Visitor Visa", country: "Canada" },
  { src: "/WhatsApp%20Image%202026-05-04%20at%2018.55.24.jpeg", label: "Greece Schengen Visa", country: "Greece" },
  { src: "/WhatsApp%20Image%202026-05-04%20at%2018.55.25.jpeg", label: "UK eVisa", country: "United Kingdom" },
  { src: "/WhatsApp%20Image%202026-05-04%20at%2018.55.26.jpeg", label: "USA B1/B2 Visa", country: "United States" },
  { src: "/WhatsApp%20Image%202026-05-04%20at%2018.55.27.jpeg", label: "Australia Subclass 858", country: "Australia" },
  { src: "/WhatsApp%20Image%202026-05-0xcjjcxjc4%20at%2018.55.26.jpeg", label: "USA B1/B2 Visa", country: "United States" },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000 })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
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
    <section className="relative bg-brand-navy section-padding overflow-hidden" ref={ref}>
      {/* dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      {/* colour blobs */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-80 h-80 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
      <Lightbox
        images={APPROVAL_PROOFS}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />
      <div className="relative z-10 container-wide">
        <SectionHeader
          label="Client Stories"
          title="Real Stories, Real Approvals"
          subtitle="Don't take our word for it — hear directly from the people whose lives we've changed."
          light
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
                          className="rounded-full object-cover object-top ring-2 ring-brand/20"
                          sizes="44px"
                          unoptimized={t.photo.startsWith("/")}
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
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === selectedIndex ? "bg-brand-sky w-6" : "bg-white/20"
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
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Visa Approvals Gallery */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="label-small text-brand-sky uppercase tracking-widest mb-3 block">Real Approvals</span>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
              Visa Approvals That Speak for Themselves
            </h3>
            <p className="text-white/50 mt-3 max-w-xl mx-auto text-sm">
              A snapshot of genuine approvals — from USA to Australia, UK to Canada — secured by our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {APPROVAL_PROOFS.map((proof, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
                whileHover={{ scale: 1.06, rotate: 0, zIndex: 10 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, type: "spring", stiffness: 220, damping: 20 }}
                className="relative rounded-xl overflow-hidden border-4 border-white shadow-lg bg-slate-100 aspect-[3/4] cursor-zoom-in"
                style={{ boxShadow: "0 6px 32px rgba(21,101,192,0.12), 0 2px 6px rgba(0,0,0,0.06)" }}
                onClick={() => setLightboxIndex(i)}
              >
                <Image
                  src={proof.src}
                  alt={`${proof.label} approved — ${proof.country} — Beyond Blue client`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/40 to-transparent px-2 py-2.5">
                  <p className="text-white text-[10px] font-bold leading-tight text-center">{proof.label}</p>
                  <p className="text-white/70 text-[9px] text-center">{proof.country}</p>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="bg-brand-green text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">✓</span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-5">
            Client details are watermarked for privacy. These are genuine approvals processed by Beyond Blue IELTS & Consultancy.
          </p>
        </div>
      </div>
    </section>
  );
}
