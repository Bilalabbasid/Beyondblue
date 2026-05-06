"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Plane, GraduationCap, Briefcase, Search, BookOpen, Heart,
  CheckCircle, FileText, Clock, TrendingUp, ArrowRight, ArrowLeft,
} from "lucide-react";
import { sectionReveal, cinematicReveal } from "@/lib/animations";
import { SERVICES, BLUR_PLACEHOLDER } from "@/lib/constants";
import type { ServiceData } from "@/lib/constants";
import PageHero from "@/components/shared/PageHero";
import Flag from "@/components/shared/Flag";

const COUNTRY_NAMES: Record<string, string> = {
  ca: "Canada", gb: "UK", au: "Australia", us: "USA",
  it: "Italy", es: "Spain", fr: "France", de: "Germany",
  se: "Sweden", hu: "Hungary", nl: "Netherlands", nz: "New Zealand",
  at: "Austria", no: "Norway", sa: "Saudi Arabia",
};

const ICONS: Record<string, React.ElementType> = {
  Plane, GraduationCap, Briefcase, Search, BookOpen, Heart,
};

interface Props {
  service: ServiceData;
}

export default function ServiceDetailClient({ service }: Props) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const Icon = ICONS[service.icon] ?? Plane;

  // Related services (exclude current)
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.description}
        image={service.pageImage}
        imageAlt={`${service.title} — Beyond Blue`}
        label={service.title}
      />

      {/* Main content */}
      <section className="section-padding bg-white" ref={ref}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <motion.div
                variants={cinematicReveal}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="absolute inset-0"
              >
                <Image
                  src={service.pageImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/20 to-transparent" />
              </motion.div>
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
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-sky rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sky">
                  {service.title}
                </span>
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
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    Our Success Rate
                  </span>
                  <span className="font-bold text-emerald-600">{service.successRate}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={inView ? { width: `${service.successRate}%` } : { width: "0%" }}
                    transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-emerald-500 rounded-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Requirements */}
                <div>
                  <h4 className="font-semibold text-brand-navy mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-sky" />
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
                        <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                        {req}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Documents */}
                <div>
                  <h4 className="font-semibold text-brand-navy mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-brand-sky" />
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
                        <FileText className="w-3.5 h-3.5 text-brand-sky mt-0.5 flex-shrink-0" />
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
                    <span key={code} className="flex items-center gap-1.5 bg-brand-bg-light border border-slate-200 text-brand-navy text-sm font-medium px-3 py-1.5 rounded-full">
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

      {/* Related services */}
      <section className="section-padding bg-brand-bg-light">
        <div className="container-wide">
          <h3 className="font-display font-bold text-2xl text-brand-navy mb-8">Other Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((s) => {
              const RelIcon = ICONS[s.icon] ?? Plane;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 bg-brand-sky/10 rounded-xl flex items-center justify-center">
                    <RelIcon className="w-5 h-5 text-brand-sky" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-brand-navy">{s.title}</h4>
                    <p className="text-slate-500 text-sm mt-1 line-clamp-2">{s.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-brand-sky text-sm font-semibold group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="mt-8">
            <Link href="/services" className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
