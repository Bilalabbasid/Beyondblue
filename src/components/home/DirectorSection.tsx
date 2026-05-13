"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LEADERS = [
  {
    role: "Managing Director",
    photo: "/md-photo.jpeg",
    objectPosition: "object-[center_20%]",
    bio: [
      "At Beyond Blue IELTS and Consultancy, our mission is to bridge the gap between Pakistani talent and global opportunities through transparent, professional, and trustworthy consultancy services.",
      "Our vision is to empower Pakistani youth with global opportunities and establish Beyond Blue as one of the leading and most trusted consultancy firms in Pakistan, built on integrity, transparency, and client success.",
    ],
  },
  {
    role: "Chief Executive Officer",
    photo: "/ceo.jpeg",
    objectPosition: "object-[center_15%]",
    bio: [
      "As a Pakistani-Australian Citizen, I understand the challenges individuals face while pursuing international opportunities. The purpose of establishing Beyond Blue IELTS and Consultancy is to provide ease, transparency, and reliable guidance to people who dream of studying, traveling, or settling abroad.",
      "Our mission is to simplify the visa and consultancy process while connecting Pakistani talent with global opportunities through professional and trustworthy services.",
    ],
  },
];

export default function DirectorSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="bg-brand-bg-light py-10 sm:py-14 px-4">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-brand text-xs font-bold uppercase tracking-[0.2em] mb-3">Beyond Blue IELTS &amp; Consultancy</p>
          <h2 className="font-display font-black text-3xl md:text-5xl text-brand-navy uppercase">
            Our <span className="text-brand-sky italic">Leadership</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {LEADERS.map((leader, i) => (
            <motion.div
              key={leader.role}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="relative h-80 sm:h-96 w-full">
                <Image
                  src={leader.photo}
                  alt={`Beyond Blue — ${leader.role}`}
                  fill
                  className={`object-cover ${leader.objectPosition}`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/90 to-transparent px-6 pt-10 pb-5">
                  <p className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-0.5">Beyond Blue</p>
                  <h3 className="font-display font-black text-xl text-white uppercase">{leader.role}</h3>
                </div>
              </div>
              <div className="px-7 py-7">
                {leader.bio.map((para, j) => (
                  <p key={j} className={`text-slate-600 text-sm leading-relaxed ${j < leader.bio.length - 1 ? "mb-4" : ""}`}>
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
            Book Free Consultation →
          </Link>
          <Link href="/about" className="btn-outline-white !text-brand-navy !border-brand hover:!bg-brand hover:!text-white inline-flex items-center gap-2">
            About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}