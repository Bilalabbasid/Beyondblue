"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerContainer, staggerItem } from "@/lib/animations";
import SectionHeader from "@/components/shared/SectionHeader";

const APPROVAL_PHOTOS = [
  { src: "/sjdsjkjd.jpeg",                                              visa: "UK eVisa",               country: "United Kingdom", flagCode: "gb" },
  { src: "/WhatsApp%20Image%202026-05-04%20at%2018.55.25.jpeg",         visa: "UK eVisa",               country: "United Kingdom", flagCode: "gb" },
  { src: "/ahshsh.jpeg",                                                 visa: "USA B1/B2 Visa",         country: "United States",  flagCode: "us" },
  { src: "/WhatsApp%20Image%202026-05-04%20at%2018.55.26.jpeg",         visa: "USA B1/B2 Visa",         country: "United States",  flagCode: "us" },
  { src: "/WhatsApp%20Image%202026-05-0xcjjcxjc4%20at%2018.55.26.jpeg",visa: "USA B1/B2 Visa",         country: "United States",  flagCode: "us" },
  { src: "/WhatsApp%20Image%202026-05-04%20at%2018.55.23.jpeg",         visa: "Canada Visitor Visa",    country: "Canada",         flagCode: "ca" },
  { src: "/ashjsuajjas.jpeg",                                            visa: "Australia Subclass 858", country: "Australia",      flagCode: "au" },
  { src: "/WhatsApp%20Image%202026-05-04%20at%2018.55.27.jpeg",         visa: "Australia Subclass 858", country: "Australia",      flagCode: "au" },
  { src: "/sjsj.jpeg",                                                   visa: "Spain Schengen Visa",    country: "Spain",          flagCode: "es" },
  { src: "/WhatsApp%20Image%202026-05-04%20at%2018.55.24.jpeg",         visa: "Schengen Visa",          country: "Europe",         flagCode: "eu" },
];

export default function SuccessStories() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-20 bg-brand-bg-light overflow-hidden" ref={ref}>
      <div className="container-wide">
        <SectionHeader
          label="Success Stories"
          title="Every Approval Tells a Story"
          subtitle="A snapshot of genuine approvals — from USA to Australia, UK to Canada — secured by our clients."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {APPROVAL_PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 aspect-[3/4] bg-slate-100"
            >
              <Image
                src={photo.src}
                alt={`${photo.visa} - ${photo.country} visa approval`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/90 to-transparent pt-8 pb-3 px-3">
                <p className="text-white text-[11px] font-bold leading-tight truncate">{photo.visa}</p>
                <p className="text-white/60 text-[10px] truncate">{photo.country}</p>
              </div>
              {/* Approved badge */}
              <div className="absolute top-2 right-2 bg-emerald-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                ✓ Approved
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-xs text-slate-400 mt-4">
          Client details are watermarked for privacy. These are genuine approvals processed by Beyond Blue IELTS &amp; Consultancy.
        </p>

        <div className="text-center mt-8">
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2 text-sm px-6 py-3">
            Get Your Approval Too →
          </Link>
        </div>
      </div>
    </section>
  );
}
