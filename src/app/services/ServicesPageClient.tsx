"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Plane, GraduationCap, Briefcase, Search, BookOpen, Heart,
  CheckCircle, FileText, Clock, TrendingUp, ArrowRight
} from "lucide-react";
import { sectionReveal, cinematicReveal } from "@/lib/animations";
import { SERVICES, BRAND, BLUR_PLACEHOLDER } from "@/lib/constants";
import PageHero from "@/components/shared/PageHero";
import Flag from "@/components/shared/Flag";

// country name lookup from ISO code
const COUNTRY_NAMES: Record<string, string> = {
  ca: "Canada", gb: "UK", au: "Australia", us: "USA",
  it: "Italy", es: "Spain", fr: "France", de: "Germany",
  se: "Sweden", hu: "Hungary", nl: "Netherlands", nz: "New Zealand",
  at: "Austria", no: "Norway",
};

const ICONS: Record<string, React.ElementType> = {
  Plane, GraduationCap, Briefcase, Search, BookOpen, Heart,
};

function ServiceSection({ service, reverse }: { service: typeof SERVICES[number]; reverse: boolean }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const Icon = ICONS[service.icon] ?? Plane;

  return (
    <section
      id={service.slug}
      className="section-padding border-b border-slate-100 last:border-0 scroll-mt-24"
      ref={ref}
    >
      <div className="container-wide">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${reverse ? "lg:flex-row-reverse" : ""}`}>
          {/* Image */}
          <div className={`relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl ${reverse ? "lg:order-2" : ""}`}>
            <motion.div
              variants={cinematicReveal}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="absolute inset-0"
            >
              <Image
                src={service.pageImage}
                alt={`${service.title} — Beyond Blue ${service.title} visa consultancy service`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent" />
            </motion.div>

            {/* Processing time badge */}
            <div className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {service.processingTime}
            </div>
          </div>

          {/* Content */}
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={reverse ? "lg:order-1" : ""}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className="label-small text-brand">{service.title}</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-4 leading-tight">
              {service.title}
            </h2>
            <p className="text-slate-500 leading-relaxed mb-3">{service.description}</p>
            <p className="text-slate-500 leading-relaxed mb-6">{service.longDescription}</p>

            {/* Success rate */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium text-brand-navy flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-brand-green" />
                  Our Success Rate
                </span>
                <span className="font-bold text-brand-green">{service.successRate}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={inView ? { width: `${service.successRate}%` } : { width: "0%" }}
                  transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-brand-green rounded-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Requirements */}
              <div>
                <h4 className="font-semibold text-brand-navy mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand" />
                  Requirements
                </h4>
                <ul className="space-y-2">
                  {service.requirements.map((req, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: i * 0.08 + 0.3 }}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span className="text-brand-green mt-0.5 flex-shrink-0">✓</span>
                      {req}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Documents */}
              <div>
                <h4 className="font-semibold text-brand-navy mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand" />
                  Documents Needed
                </h4>
                <ul className="space-y-2">
                  {service.documents.map((doc, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                      transition={{ delay: i * 0.08 + 0.3 }}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <FileText className="w-3.5 h-3.5 text-brand mt-0.5 flex-shrink-0" />
                      {doc}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Country flags */}
            {service.countryFlags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {service.countryFlags.map((code) => (
                  <span key={code} className="flex items-center gap-1.5 bg-brand-bg-light border border-brand/10 text-brand-navy text-sm font-medium px-3 py-1.5 rounded-full">
                    <Flag code={code} name={COUNTRY_NAMES[code] ?? code} size={18} />
                    {COUNTRY_NAMES[code] ?? code}
                  </span>
                ))}
              </div>
            )}

            <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
              Start Your Application
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPageClient() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="From visit visas to permanent residency — comprehensive immigration solutions tailored to your goals."
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=85&auto=format&fit=crop"
        imageAlt="Passport and visa stamps"
        label="What We Offer"
      />

      {/* Sticky quick-nav */}
      <div className="sticky top-20 z-30 bg-white border-b border-slate-100 shadow-sm hidden lg:block">
        <div className="container-wide">
          <div className="flex items-center gap-6 overflow-x-auto py-3 scrollbar-hide">
            {SERVICES.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="text-sm font-medium text-slate-500 hover:text-brand whitespace-nowrap py-1 border-b-2 border-transparent hover:border-brand transition-all"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Service sections */}
      {SERVICES.map((service, i) => (
        <ServiceSection key={service.id} service={service} reverse={i % 2 !== 0} />
      ))}

      {/* Sticky sidebar quick enquiry (floating) */}
      <div className="fixed right-6 bottom-24 z-40 hidden xl:block">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 w-72">
          <h4 className="font-display font-bold text-lg text-brand-navy mb-1">Quick Enquiry</h4>
          <p className="text-slate-400 text-xs mb-4">We reply within 2 hours</p>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-brand"
            />
            <input
              type="tel"
              placeholder="WhatsApp Number"
              className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-brand"
            />
            <select className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-brand text-slate-500">
              <option value="">Select Visa Type</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>{s.title}</option>
              ))}
            </select>
          </div>
          <a
            href={`${BRAND.social.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold py-2.5 rounded-full transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
