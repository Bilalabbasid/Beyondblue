"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TEAM = [
  {
    name: "General Manager & Processor",
    photo: "/GM.jpeg",
    quote:
      "Our mission at Beyond Blue IELTS and Consultancy is to deliver trusted and efficient consultancy services by maintaining high professional standards and transparent procedures. We strive to help individuals achieve their global goals through proper guidance, smooth processing, and exceptional client support.",
  },
  {
    name: "Sales Manager & Processor",
    photo: "/SALES%20man.jpeg",
    quote:
      "At Beyond Blue IELTS and Consultancy, we are committed to guiding our clients with transparency, professionalism, and personalized support. Our goal is to understand every client's needs and provide the best possible international opportunities with complete dedication and reliable processing services.",
  },
];

const CERTS = [
  "/certs/WhatsApp%20Image%202026-05-13%20at%2020.42.24.jpeg",
  "/certs/WhatsApp%20Image%202026-05-13%20at%2020.42.25.jpeg",
  "/certs/WhatsApp%20Image%202026-05-13%20at%2020.42.26.jpeg",
  "/certs/WhatsApp%20Image%202026-05-14%20at%2000.52.05.jpeg",
];

export default function TeamSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: certRef, inView: certInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="bg-white py-12 sm:py-20 px-4">
      <div className="container-wide">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand-sky text-xs font-bold uppercase tracking-[0.2em] mb-2">The People Behind Your Success</p>
          <h2 className="font-display font-black text-3xl md:text-5xl text-brand-navy uppercase">
            Meet Our <span className="text-brand-sky italic">Team</span>
          </h2>
        </motion.div>

        {/* Team cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden w-full sm:w-[340px] lg:w-[380px] max-w-sm sm:max-w-none"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="400px"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <p className="font-bold text-brand-navy text-lg mb-1">{member.name}</p>
                <p className="text-brand-sky text-xs font-semibold uppercase tracking-widest mb-3">Beyond Blue IELTS &amp; Consultancy</p>
                <p className="text-slate-500 text-sm leading-relaxed italic">&ldquo;{member.quote}&rdquo;</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <motion.div
          ref={certRef}
          initial={{ opacity: 0, y: 30 }}
          animate={certInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-brand-sky text-xs font-bold uppercase tracking-[0.2em] mb-2">Officially Recognised</p>
          <h3 className="font-display font-black text-2xl md:text-4xl text-brand-navy uppercase mb-10">
            Our <span className="text-brand-sky italic">Certifications</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {CERTS.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={certInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-2 border-brand-bg-light"
              >
                <Image
                  src={src}
                  alt={`Beyond Blue certification ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                  unoptimized
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
