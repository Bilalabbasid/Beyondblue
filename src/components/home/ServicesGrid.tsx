"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Plane, GraduationCap, Briefcase, Search, Heart, ArrowRight, Star
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Flag from "@/components/shared/Flag";

const COUNTRY_NAMES: Record<string, string> = {
  ca: "Canada", gb: "UK", au: "Australia", us: "USA",
  it: "Italy", es: "Spain", fr: "France", de: "Germany",
  se: "Sweden", hu: "Hungary", nl: "Netherlands", nz: "New Zealand",
  at: "Austria", no: "Norway", az: "Azerbaijan", my: "Malaysia",
  tr: "Turkey", th: "Thailand", ae: "UAE", sa: "Saudi Arabia",
};

const IMMIGRATION_PROGRAMS = [
  {
    icon: "Briefcase",
    title: "USA EB2-NIW",
    subtitle: "National Interest Waiver",
    desc: "Get a U.S. green card without an employer. Perfect for professionals, researchers, and entrepreneurs whose work benefits the U.S.",
    flags: ["us"],
    href: "/countries/usa",
    badge: "HOT",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80&auto=format&fit=crop", // Statue of Liberty
  },
  {
    icon: "Search",
    title: "Sweden Talent Hunt",
    subtitle: "Job Seeker Visa",
    desc: "Sweden's Job Seeker Visa allows Master's and PhD graduates to enter Sweden and search for employment with leading tech and research firms.",
    flags: ["se"],
    href: "/countries/sweden?program=work",
    badge: "HOT",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=600&q=80&auto=format&fit=crop", // Stockholm
  },
  {
    icon: "Star",
    title: "Australia Subclass 858",
    subtitle: "National Innovation Visa",
    desc: "Australia's most prestigious visa for globally recognised academics, researchers, and innovators. No age limit, no skills assessment.",
    flags: ["au"],
    href: "/countries/australia?program=pr",
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80&auto=format&fit=crop", // Sydney Opera House
  },
  {
    icon: "GraduationCap",
    title: "Germany Opportunity Card",
    subtitle: "Chancenkarte â€” Points System",
    desc: "Germany's new Opportunity Card lets qualified Pakistani professionals enter Germany for up to 1 year to find a job.",
    flags: ["de"],
    href: "/countries/germany?program=work",
    badge: null,
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80&auto=format&fit=crop", // Brandenburg Gate
  },
  {
    icon: "Briefcase",
    title: "Norway Specialist",
    subtitle: "Skilled Worker Visa",
    desc: "Norway's Skilled Worker visa for doctors, engineers, and specialists. Fast-track processing for high-demand occupations.",
    flags: ["no"],
    href: "/countries/norway?program=work",
    badge: null,
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80&auto=format&fit=crop", // Norwegian fjord
  },
];

const VISIT_VISAS = [
  {
    icon: "Plane",
    title: "USA Visit Visa",
    subtitle: "B1 / B2 Tourist & Business",
    desc: "Complete DS-160, interview preparation, and documentation support for the USA B1/B2 visitor visa with maximum approval chances.",
    flags: ["us"],
    href: "/countries/usa",
    badge: "HOT",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80&auto=format&fit=crop", // Times Square
  },
  {
    icon: "Plane",
    title: "Canada Visit Visa",
    subtitle: "Temporary Resident Visa",
    desc: "Explore Canada as a tourist or visit family. We prepare a watertight application with strong ties evidence and financial documents.",
    flags: ["ca"],
    href: "/countries/canada",
    badge: null,
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80&auto=format&fit=crop", // Niagara Falls Canada
  },
  {
    icon: "Plane",
    title: "UK Visit Visa",
    subtitle: "Standard Visitor Visa",
    desc: "Visit the United Kingdom for tourism, business or family. We guide you through the online application and document preparation.",
    flags: ["gb"],
    href: "/countries/uk",
    badge: null,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80&auto=format&fit=crop", // Big Ben
  },
  {
    icon: "Plane",
    title: "Schengen Tourist Visa",
    subtitle: "26 European Countries",
    desc: "One visa â€” all of Europe. Apply for Spain, Italy, France, Germany, or any Schengen state. Full document preparation and consulate support.",
    flags: ["es", "it", "fr", "de"],
    href: "/countries/spain",
    badge: null,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80&auto=format&fit=crop", // Eiffel Tower Paris
  },
  {
    icon: "Plane",
    title: "Other Destinations",
    subtitle: "Azerbaijan, Malaysia, Turkey, Thailand & Dubai",
    desc: "We process tourism visas for Azerbaijan, Malaysia, Turkey, Thailand, Dubai (UAE), and other popular destinations.",
    flags: ["az", "my", "tr", "th", "ae"],
    href: "/services/visit-visa",
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80&auto=format&fit=crop", // Dubai Burj Khalifa
  },
  {
    icon: "Heart",
    title: "Hajj & Umrah",
    subtitle: "Sacred Journey Packages",
    desc: "Complete Hajj and Umrah packages for Pakistani pilgrims — visa processing, accommodation near Haram, group travel, and end-to-end support.",
    flags: ["sa"],
    href: "/services/hajj-umrah",
    badge: null,
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&q=80&auto=format&fit=crop", // Kaaba Mecca
  },
];

const ICONS: Record<string, React.ElementType> = {
  Plane, GraduationCap, Briefcase, Search, Heart, Star,
};

type ProgramCard = {
  icon: string; title: string; subtitle: string; desc: string;
  flags: string[]; href: string; badge: string | null; image: string;
};

function ProgCard({ card, dark = false }: { card: ProgramCard; dark?: boolean }) {
  const Icon = ICONS[card.icon] ?? Plane;
  return (
    <motion.div
      variants={staggerItem}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] ${
        dark
          ? "bg-white/8 backdrop-blur-sm border border-white/10 hover:bg-white/12 hover:shadow-xl hover:shadow-black/30"
          : "bg-white shadow-sm hover:shadow-xl hover:shadow-brand-navy/10 border border-slate-100"
      }`}
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden shrink-0">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
        {card.badge && (
          <span className={`absolute top-3 right-3 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider ${card.badge === "HOT" ? "bg-red-500 text-white" : "bg-emerald-500 text-white"}`}>
            {card.badge}
          </span>
        )}
        <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <Icon className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div>
          <h3 className={`font-display font-bold text-lg leading-tight ${dark ? "text-white" : "text-brand-navy"}`}>{card.title}</h3>
          <p className="text-brand-sky text-xs font-semibold uppercase tracking-wider mt-0.5">{card.subtitle}</p>
        </div>
        <p className={`text-sm leading-relaxed flex-1 ${dark ? "text-white/60" : "text-slate-500"}`}>{card.desc}</p>
        {card.flags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {card.flags.map((code) => (
              <span key={code} className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full border ${dark ? "bg-white/10 text-white/80 border-white/15" : "bg-slate-50 text-slate-600 border-slate-100"}`}>
                <Flag code={code} name={COUNTRY_NAMES[code] ?? code} size={13} />
                {COUNTRY_NAMES[code] ?? code}
              </span>
            ))}
          </div>
        )}
        <Link href={card.href} className={`inline-flex items-center gap-1.5 text-sm font-bold hover:gap-3 transition-all duration-200 mt-1 ${dark ? "text-brand-gold" : "text-brand-navy"}`}>
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}

function ProgramSection({
  label, title, cards, dark = false,
}: {
  label: string; title: string; cards: ProgramCard[]; dark?: boolean;
}) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section className={`relative section-padding overflow-hidden ${dark ? "bg-brand-navy" : "bg-brand-bg-light"}`}>
      {/* Background texture */}
      {!dark && (
        <>
          <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "radial-gradient(circle, #42A5F520 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
        </>
      )}
      {dark && (
        <>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-brand/20 blur-3xl rounded-full pointer-events-none" />
        </>
      )}
      <div className="relative z-10 container-wide">
        <div className="mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3 text-brand-sky">
            {label}
          </span>
          <h2 className={`font-display font-black text-3xl md:text-4xl leading-tight ${dark ? "text-white" : "text-brand-navy"}`}>
            {title}
          </h2>
        </div>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-5"
        >
          {cards.map((card, i) => (
            <ProgCard key={i} card={card} dark={dark} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function ServicesGrid() {
  return (
    <>
      <ProgramSection
        label="Immigration Programs"
        title="Skilled & Innovation Pathways"
        cards={IMMIGRATION_PROGRAMS}
      />
      <ProgramSection
        label="Visit Visas"
        title="Explore the World"
        cards={VISIT_VISAS}
        dark
      />
    </>
  );
}
