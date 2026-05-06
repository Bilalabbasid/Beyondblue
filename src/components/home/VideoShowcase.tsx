"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CARDS = [
  {
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=85&auto=format&fit=crop",
    label: "USA EB2-NIW",
    sublabel: "National Interest Waiver",
    desc: "Get a U.S. green card without an employer sponsor. We prepare and file EB2-NIW petitions for engineers, doctors, researchers and entrepreneurs.",
    href: "/countries/usa",
    color: "from-blue-950",
  },
  {
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=85&auto=format&fit=crop",
    label: "USA Visit Visa",
    sublabel: "B1 / B2 Tourist & Business",
    desc: "Explore the United States on a B1/B2 visa. We handle your complete DS-160, documentation, and interview preparation for maximum approval chances.",
    href: "/countries/usa",
    color: "from-slate-900",
  },
  {
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=85&auto=format&fit=crop",
    label: "Sweden Talent Hunt",
    sublabel: "Job Seeker Visa",
    desc: "Sweden''s Job Seeker Visa lets highly qualified Master''s and PhD graduates enter Sweden to hunt for employment. We guide every step.",
    href: "/countries/sweden",
    color: "from-indigo-950",
  },
];

function ShowcaseCard({ card, index }: { card: typeof CARDS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl group cursor-pointer"
      style={{ aspectRatio: "9/14" }}
    >
      <Image
        src={card.image}
        alt={card.label}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${card.color} via-black/50 to-black/10`} />
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5 pb-6">
        <p className="text-brand-gold text-[11px] font-black uppercase tracking-[0.2em] mb-1.5 drop-shadow">{card.sublabel}</p>
        <h3 className="font-display font-black text-white text-2xl leading-tight mb-3 drop-shadow-lg">{card.label}</h3>
        <p className="text-white/85 text-xs leading-relaxed mb-4 line-clamp-3 drop-shadow">{card.desc}</p>
        <Link
          href={card.href}
          className="inline-flex items-center gap-2 bg-brand-gold hover:bg-amber-400 text-brand-navy text-xs font-bold px-4 py-2 rounded-full transition-colors"
        >
          Learn More -&gt;
        </Link>
      </div>
    </motion.div>
  );
}

export default function VideoShowcase() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section-padding bg-brand-navy overflow-hidden" ref={ref}>
      <div className="container-wide">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-white/15 text-brand-sky text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-5 bg-white/5"
          >
            <span className="w-1.5 h-1.5 bg-brand-sky rounded-full animate-pulse" />
            Featured Pathways
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl text-white leading-tight"
          >
            Your Dream Visa,{" "}
            <span className="text-brand-sky italic">Our Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 mt-4 text-lg max-w-xl mx-auto"
          >
            From USA green cards to Sweden talent visas - explore the pathways Beyond Blue makes possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {CARDS.map((card, i) => (
            <ShowcaseCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}