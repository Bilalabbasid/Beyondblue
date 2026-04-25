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

  const filtered = COUNTRIES.filter(
    (c) => activeFilter === "all" || c.region === activeFilter
  );

  return (
    <>
      {/* Hero — 2×2 collage */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden pt-[80px] lg:pt-[100px]">
        <div className="grid grid-cols-2 grid-rows-2 h-full">
          {COUNTRIES.slice(0, 4).map((c) => (
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
    </>
  );
}
