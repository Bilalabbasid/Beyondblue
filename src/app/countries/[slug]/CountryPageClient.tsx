"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Globe, ChevronDown } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { sectionReveal, wordStaggerContainer, wordStaggerChild } from "@/lib/animations";
import type { CountryData } from "@/lib/constants";
import { BLUR_PLACEHOLDER } from "@/lib/constants";
import Flag from "@/components/shared/Flag";

interface Props {
  country: CountryData;
}

const VISA_TAB_KEYS = ["visit", "study", "work", "pr"] as const;

export default function CountryPageClient({ country }: Props) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const availableTabs = VISA_TAB_KEYS.filter(
    (key) => country.requirements[key].length > 0
  );

  return (
    <>
      {/* Hero — full viewport with parallax */}
      <section className="relative h-screen max-h-[700px] overflow-hidden flex items-center">
        <motion.div className="absolute inset-0" style={{ y }}>
          <Image
            src={country.image.replace('?w=800&q=85', '?w=1920&q=90')}
            alt={`${country.name} — visa and immigration services from Pakistan`}
            fill
            className="object-cover scale-110"
            priority
            fetchPriority="high"
            sizes="100vw"
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/50 to-brand-navy/80" />
        </motion.div>

        <div className="relative z-10 container-wide w-full mx-auto">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-6 inline-block"
            >
              <Flag code={country.flagCode} name={country.name} size={80} className="rounded-lg shadow-2xl" />
            </motion.div>

            <motion.h1
              variants={wordStaggerContainer}
              initial="hidden"
              animate="visible"
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            >
              {country.name.split(" ").map((word, i) => (
                <motion.span key={i} variants={wordStaggerChild} className="inline-block mr-[0.2em]">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-white/80 text-xl mb-4"
            >
              {country.description}
            </motion.p>

            {/* Visa type pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {country.visaTypes.map((type) => (
                <span key={type} className="bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-medium px-4 py-1.5 rounded-full">
                  {type} Visa
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Apply for {country.name} Visa →
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll chevron */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* Processing timeline */}
      <section className="bg-brand py-8">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <div className="text-center">
              <div className="font-display font-bold text-3xl text-white">{country.processingTime}</div>
              <div className="text-white/60 text-sm">Processing Time</div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden lg:block" />
            <div className="text-center">
              <div className="flex gap-1 justify-center mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className={`w-3 h-3 rounded-full ${i < country.difficulty ? "bg-brand-gold" : "bg-white/20"}`} />
                ))}
              </div>
              <div className="text-white/60 text-sm">Difficulty Level</div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden lg:block" />
            <div className="text-center">
              <div className="font-display font-bold text-3xl text-white">{country.visaTypes.length}</div>
              <div className="text-white/60 text-sm">Visa Types</div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden lg:block" />
            <div className="text-center">
              <Link href="/contact" className="bg-brand-gold hover:bg-amber-400 text-brand-navy font-bold px-6 py-2.5 rounded-full transition-colors text-sm">
                Start Application →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visa types tabs */}
      <section className="section-padding bg-white" ref={ref}>
        <div className="container-wide">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-8">
              <Flag code={country.flagCode} name={country.name} size={20} />
              <span>{country.name} Visa Types</span>
            </h2>

            <Tabs defaultValue={availableTabs[0]}>
              <TabsList className="flex gap-2 bg-brand-bg-light rounded-xl p-1 mb-8 flex-wrap h-auto">
                {availableTabs.map((key) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="capitalize rounded-lg px-5 py-2 text-sm font-semibold data-[state=active]:bg-brand data-[state=active]:text-white data-[state=active]:shadow-sm"
                  >
                    {key === "pr" ? "PR / Immigration" : key}
                  </TabsTrigger>
                ))}
              </TabsList>

              {availableTabs.map((key) => (
                <TabsContent key={key} value={key}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-4 text-lg">Requirements</h4>
                      <ul className="space-y-3">
                        {country.requirements[key].map((req, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-2.5 text-slate-600"
                          >
                            <span className="text-brand-green font-bold mt-0.5">✓</span>
                            {req}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-4 text-lg">Documents Needed</h4>
                      <ul className="space-y-3">
                        {country.documents[key].map((doc, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-2.5 text-slate-600"
                          >
                            <span className="text-brand text-sm mt-0.5">📄</span>
                            {doc}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Embassy info */}
      <section className="bg-brand-bg-light py-16">
        <div className="container-wide">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 max-w-2xl">
            <h3 className="font-display font-bold text-2xl text-brand-navy mb-6">
              Embassy Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                <p className="text-slate-600 text-sm">{country.embassy.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand flex-shrink-0" />
                <a href={`tel:${country.embassy.phone}`} className="text-slate-600 text-sm hover:text-brand transition-colors">
                  {country.embassy.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-brand flex-shrink-0" />
                <a href={country.embassy.website} target="_blank" rel="noopener noreferrer" className="text-brand text-sm hover:underline">
                  Official Website →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="font-display font-bold text-3xl text-brand-navy mb-8">
            Frequently Asked Questions — {country.name}
          </h2>
          <Accordion className="space-y-3">
            {country.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-brand-bg-light rounded-xl border-none px-6">
                <AccordionTrigger className="font-semibold text-brand-navy text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-16">
        <div className="container-wide text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            Ready to Apply for {country.name}?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Book your free consultation and let our experts guide your {country.name} visa journey.
          </p>
          <Link href="/contact" className="btn-gold inline-block text-base px-8 py-4">
            Start Your {country.name} Application →
          </Link>
        </div>
      </section>
    </>
  );
}
