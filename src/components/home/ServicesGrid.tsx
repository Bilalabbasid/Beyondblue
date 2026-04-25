"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Plane, GraduationCap, Briefcase, Search, BookOpen, Heart, ArrowRight
} from "lucide-react";
import { staggerContainer, staggerItem, cinematicReveal } from "@/lib/animations";
import { SERVICES, BLUR_PLACEHOLDER } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import Flag from "@/components/shared/Flag";

const ICONS: Record<string, React.ElementType> = {
  Plane,
  GraduationCap,
  Briefcase,
  Search,
  BookOpen,
  Heart,
};

const COUNTRY_NAMES: Record<string, string> = {
  ca: "Canada", gb: "UK", au: "Australia", us: "USA",
  it: "Italy", es: "Spain", fr: "France", de: "Germany",
  se: "Sweden", hu: "Hungary", nl: "Netherlands", nz: "New Zealand",
};

function ServiceCard({ service }: { service: typeof SERVICES[number] }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const Icon = ICONS[service.icon] ?? Plane;

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-brand/10 transition-all duration-300 hover:-translate-y-2.5 border border-slate-100"
    >
      {/* Blue left border that grows on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 rounded-full" />

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <motion.div
          variants={cinematicReveal}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="absolute inset-0"
        >
          <Image
            src={service.image}
            alt={`${service.title} — visa services at Beyond Blue IELTS & Consultancy`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
        </motion.div>

        {/* Icon overlay */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-brand/90 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:rotate-12 group-hover:bg-brand-gold">
          <Icon className="w-5 h-5 text-white" />
        </div>

        {/* IELTS badge */}
        {service.id === "ielts-preparation" && (
          <div className="absolute bottom-3 left-3 bg-brand-gold text-brand-navy text-xs font-bold px-2.5 py-1 rounded-full">
            Band 7+ Guaranteed
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-xl text-brand-navy mb-2 group-hover:text-brand transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Country pills */}
        {service.countryFlags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {service.countryFlags.slice(0, 5).map((code, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 bg-brand-bg-light text-brand text-xs font-medium px-2 py-1 rounded-full"
              >
                <Flag code={code} name={COUNTRY_NAMES[code] ?? code} size={14} />
                {COUNTRY_NAMES[code] ?? code}
              </span>
            ))}
          </div>
        )}

        {/* Learn more link */}
        <Link
          href={`/services#${service.slug}`}
          className="inline-flex items-center gap-1.5 text-brand text-sm font-semibold hover:gap-3 transition-all duration-200 group/link"
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesGrid() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="bg-brand-bg-light section-padding">
      <div className="container-wide">
        <SectionHeader
          label="What We Do"
          title="Everything You Need to Get There"
          subtitle="From visit visas to permanent residency — we handle every step of your global journey."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-gold inline-block">
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
