"use client";

import Image from "next/image";
import { Plane } from "lucide-react";

const DESTINATIONS = [
  { name: "United Kingdom",  code: "gb" },
  { name: "United States",   code: "us" },
  { name: "Canada",          code: "ca" },
  { name: "Australia",       code: "au" },
  { name: "Italy",           code: "it" },
  { name: "Spain",           code: "es" },
  { name: "Germany",         code: "de" },
  { name: "France",          code: "fr" },
  { name: "Sweden",          code: "se" },
  { name: "Hungary",         code: "hu" },
  { name: "Netherlands",     code: "nl" },
  { name: "New Zealand",     code: "nz" },
];

const MarqueeItem = ({ items }: { items: typeof DESTINATIONS }) => (
  <div className="flex items-center">
    {items.map((dest, i) => (
      <span key={`${dest.code}-${i}`} className="flex items-center">
        <span className="flex items-center gap-2.5 px-6 text-brand-sky font-semibold text-sm whitespace-nowrap">
          <Image
            src={`https://flagcdn.com/w40/${dest.code}.png`}
            width={22}
            height={15}
            alt={dest.name}
            className="rounded-sm object-cover shadow-sm flex-shrink-0"
            unoptimized
          />
          {dest.name}
        </span>
        <Plane className="w-3.5 h-3.5 text-white/30 mx-2 flex-shrink-0" />
      </span>
    ))}
  </div>
);

export default function Marquee() {
  const doubled = [...DESTINATIONS, ...DESTINATIONS];

  return (
    <div className="bg-brand-navy py-3.5 overflow-hidden border-y border-white/5">
      <div className="flex">
        <div className="flex animate-marquee flex-shrink-0 min-w-full">
          <MarqueeItem items={doubled} />
        </div>
        <div className="flex animate-marquee flex-shrink-0 min-w-full">
          <MarqueeItem items={doubled} />
        </div>
      </div>
    </div>
  );
}

