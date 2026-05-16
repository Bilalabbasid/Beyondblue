"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import { staggerContainer, staggerItem, cinematicReveal } from "@/lib/animations";
import { COUNTRIES, BLUR_PLACEHOLDER } from "@/lib/constants";
import type { CountryData } from "@/lib/constants";
import Flag from "@/components/shared/Flag";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Europe", value: "europe" },
  { label: "North America", value: "north-america" },
  { label: "Oceania", value: "oceania" },
];

// ─── Visit Visa Countries ─────────────────────────────────────────────────────
const VISIT_VISAS = [
  { country: "Malaysia", flag: "🇲🇾", flagCode: "my", options: ["E-Visa 1 Month", "E-Visa 6 Month Multiple"] },
  { country: "Thailand", flag: "🇹🇭", flagCode: "th", options: ["E-Visa With Documents", "E-Visa Done Base"] },
  { country: "Singapore", flag: "🇸🇬", flagCode: "sg", options: ["Done Base"] },
  { country: "Indonesia", flag: "🇮🇩", flagCode: "id", options: ["Done Base", "Sticker Visa"] },
  { country: "Bahrain", flag: "🇧🇭", flagCode: "bh", options: ["E-Visa Done Base"] },
  { country: "Azerbaijan", flag: "🇦🇿", flagCode: "az", options: ["E-Visa Normal", "E-Visa Urgent"] },
  { country: "Cambodia", flag: "🇰🇭", flagCode: "kh", options: ["E-Visa Urgent"] },
  { country: "Nepal", flag: "🇳🇵", flagCode: "np", options: ["Visa 14 Days", "Visa 28 Days"] },
  { country: "China", flag: "🇨🇳", flagCode: "cn", options: ["Sticker Visa Done Base"] },
  { country: "Uzbekistan", flag: "🇺🇿", flagCode: "uz", options: ["Sticker Visa"] },
  { country: "Tajikistan", flag: "🇹🇯", flagCode: "tj", options: ["Sticker Visa"] },
];

function CountryCard({ country }: { country: CountryData }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div ref={ref} variants={staggerItem} layout>
      <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable glareMaxOpacity={0.1}>
        <Link href={`/countries/${country.slug}`}>
          <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <motion.div
              variants={cinematicReveal}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="absolute inset-0"
            >
              <Image
                src={country.image}
                alt={`${country.name} landmark — ${country.name} visa & immigration services from Pakistan`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.09]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />

            {/* Processing badge */}
            <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
              {country.processingTime}
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Flag code={country.flagCode} name={country.name} size={26} />
                <h3 className="font-display font-bold text-white text-xl">{country.name}</h3>
              </div>

              {/* Visa pills — always visible */}
              <div className="flex flex-wrap gap-1.5">
                {country.visaTypes.map((type) => (
                  <span
                    key={type}
                    className="text-xs font-semibold bg-white/20 backdrop-blur-sm border border-white/30 text-white px-2.5 py-0.5 rounded-full"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <span className="mt-2 text-brand-sky text-xs font-semibold block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore →
              </span>
            </div>
          </div>
        </Link>
      </Tilt>
    </motion.div>
  );
}

export default function CountriesPageClient() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  // Preferred display order: Australia, Canada, USA, UK first
  const PREFERRED_FIRST = ["australia", "canada", "usa", "uk"];
  const ORDERED_COUNTRIES = [
    ...PREFERRED_FIRST.map((slug) => COUNTRIES.find((c) => c.slug === slug)!).filter(Boolean),
    ...COUNTRIES.filter((c) => !PREFERRED_FIRST.includes(c.slug)),
  ];

  const filtered = ORDERED_COUNTRIES.filter(
    (c) => activeFilter === "all" || c.region === activeFilter
  );

  return (
    <>
      {/* Hero — 2×2 collage */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden pt-[80px] lg:pt-[100px]">
        <div className="grid grid-cols-2 grid-rows-2 h-full">
          {ORDERED_COUNTRIES.slice(0, 4).map((c) => (
            <div key={c.slug} className="relative overflow-hidden">
              <Image
                src={c.image}
                alt={c.name}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-brand-navy/70 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center px-4"
          >
            <span className="label-small text-brand-sky mb-4 block">Our Destinations</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4">
              40+ Countries.{" "}
              <span className="text-brand-sky italic">One Trusted</span>
              <br />Consultant.
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              From the UK to New Zealand, we handle every visa type for every destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="bg-white border-b border-slate-100 sticky top-20 z-30">
        <div className="container-wide py-4">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            {FILTERS.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeFilter === filter.value
                    ? "bg-brand text-white shadow-md shadow-brand/20"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Country cards grid */}
      <section className="section-padding bg-brand-bg-light" ref={ref}>
        <div className="container-wide">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              layout
            >
              {filtered.map((country) => (
                <CountryCard key={country.slug} country={country} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── Visit Visa Available ─────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="label-small text-brand-sky mb-3 block">Quick Processing</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-brand-navy mb-4">
              Visit Visa <span className="text-brand-sky italic">Available</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Fast-track visit visas for Asian destinations — E-Visa, Sticker Visa &amp; Done Base options.
            </p>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {VISIT_VISAS.map((item) => (
              <motion.div
                key={item.country}
                variants={staggerItem}
                className="bg-brand-bg-light rounded-2xl p-5 border border-slate-100 hover:border-brand/30 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Country name + flag */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-2xl flex-shrink-0">
                    {item.flag}
                  </div>
                  <h3 className="font-display font-bold text-brand-navy text-lg leading-tight group-hover:text-brand transition-colors">
                    {item.country}
                  </h3>
                </div>

                {/* Visa options */}
                <div className="flex flex-wrap gap-1.5">
                  {item.options.map((opt) => (
                    <span
                      key={opt}
                      className="text-xs font-semibold bg-brand/8 text-brand border border-brand/20 px-2.5 py-1 rounded-full"
                    >
                      {opt}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="/contact"
                  className="mt-4 text-xs font-semibold text-brand-sky flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  Apply Now →
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a
              href="/contact"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 text-base"
            >
              Book Your Free Visa Consultation →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
