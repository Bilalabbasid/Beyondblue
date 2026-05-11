"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import { staggerContainer, staggerItem, cinematicReveal } from "@/lib/animations";
import { COUNTRIES, BLUR_PLACEHOLDER } from "@/lib/constants";
import Flag from "@/components/shared/Flag";
import SectionHeader from "@/components/shared/SectionHeader";

function MonumentCard({ country }: { country: typeof COUNTRIES[number] }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
      <motion.div ref={ref} variants={staggerItem} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] min-w-0">
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable
        glareMaxOpacity={0.15}
        className="w-full"
      >
        <Link href={`/countries/${country.slug}`}>
          <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
            {/* Image */}
            <motion.div
              variants={cinematicReveal}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="absolute inset-0"
            >
              <Image
                src={country.image}
                alt={`${country.name} landmark — ${country.name} visa & immigration from Pakistan`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.09]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
              />
            </motion.div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />

            {/* Country info — bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="mb-2">
                <Flag code={country.flagCode} name={country.name} size={28} className="shadow-md" />
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-2">{country.name}</h3>

              {/* Visa pills — always visible */}
              <div className="flex flex-wrap gap-1.5 mb-2">
                {country.visaTypes.map((type) => (
                  <span
                    key={type}
                    className="text-xs font-semibold bg-white/20 backdrop-blur-sm border border-white/30 text-white px-2.5 py-0.5 rounded-full"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-brand-sky text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore →
              </span>
            </div>
          </div>
        </Link>
      </Tilt>
    </motion.div>
  );
}

export default function MonumentGrid() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section className="relative bg-brand-navy section-padding overflow-hidden">
      {/* dot grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      {/* glow orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-sky/10 blur-3xl rounded-full pointer-events-none" />
      <div className="relative z-10 container-wide">
        <SectionHeader
          label="Destinations"
          title="Dream Destinations Await You"
          subtitle="40+ countries, every visa type. Your global journey starts with a single consultation."
          light
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-5 mt-14"
        >
          {COUNTRIES.map((country) => (
            <MonumentCard key={country.slug} country={country} />
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link href="/countries" className="btn-gold inline-block">
            Explore All Countries →
          </Link>
        </div>
      </div>
    </section>
  );
}
