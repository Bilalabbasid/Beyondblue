"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function MDSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2" ref={ref}>
      {/* Left — large portrait photo */}
      <div className="relative min-h-[500px] lg:min-h-[640px] overflow-hidden bg-brand-bg-light">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/md-photo.jpeg"
            alt="Beyond Blue — Managing Director, immigration consultant Rawalpindi"
            fill
            className="object-cover object-[center_30%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10" />
        </motion.div>
      </div>

      {/* Right — company pitch */}
      <div className="bg-brand-bg-light flex items-center px-5 sm:px-10 lg:px-16 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-xl"
        >
          <p className="text-brand text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Beyond Blue IELTS &amp; Consultancy
          </p>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy uppercase mb-4 sm:mb-6 leading-tight">
            Managing Director
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4 text-sm md:text-base">
            At Beyond Blue IELTS and Consultancy, our mission is to bridge the gap between Pakistani talent and global opportunities through transparent, professional, and trustworthy consultancy services.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm md:text-base">
            We aim to remove the service gap in Pakistan&apos;s visa and immigration industry by providing honest guidance for education, visit visas, immigration, and international pathways.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8 text-sm md:text-base">
            Our vision is to empower Pakistani youth with global opportunities and establish Beyond Blue as one of the leading and most trusted consultancy firms in Pakistan, built on integrity, transparency, and client success.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
              Book Free Consultation →
            </Link>
            <Link href="/about" className="btn-outline-white !text-brand-navy !border-brand hover:!bg-brand hover:!text-white inline-flex items-center gap-2">
              About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CEOSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2" ref={ref}>
      {/* Left — CEO text */}
      <div className="bg-brand-bg-light flex items-center px-5 sm:px-10 lg:px-16 py-10 sm:py-14 order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-xl"
        >
          <p className="text-brand text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Beyond Blue IELTS &amp; Consultancy
          </p>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy uppercase mb-4 sm:mb-6 leading-tight">
            Chief Executive Officer
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4 text-sm md:text-base">
            As a Pakistani-Australian Citizen, I understand the challenges individuals face while pursuing international opportunities. The purpose of establishing Beyond Blue IELTS and Consultancy is to provide ease, transparency, and reliable guidance to people who dream of studying, traveling, or settling abroad.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8 text-sm md:text-base">
            Our mission is to simplify the visa and consultancy process while connecting Pakistani talent with global opportunities through professional and trustworthy services.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
              Book Free Consultation →
            </Link>
            <Link href="/about" className="btn-outline-white !text-brand-navy !border-brand hover:!bg-brand hover:!text-white inline-flex items-center gap-2">
              About Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right — CEO photo */}
      <div className="relative min-h-[500px] lg:min-h-[640px] overflow-hidden bg-brand-bg-light order-1 lg:order-2">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/ceo.jpeg"
            alt="Beyond Blue — CEO, Pakistani-Australian immigration consultant"
            fill
            className="object-cover object-[center_25%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10" />
        </motion.div>
      </div>
    </section>
  );
}

export default function DirectorSection() {
  return (
    <>
      <MDSection />
      <CEOSection />
    </>
  );
}
