"use client";

import Link from "next/link";
import { Flame } from "lucide-react";

const HOT_DEALS = [
  { label: "Australia National Innovation Visa", tag: "NEW", href: "/countries/australia" },
  { label: "Sweden Job Seeker Visa",             tag: "HOT", href: "/countries/sweden" },
  { label: "USA Visit Visa",                      tag: "HOT", href: "/countries/usa" },
];

const DealsItem = ({ items }: { items: typeof HOT_DEALS }) => (
  <div className="flex items-center">
    {items.map((deal, i) => (
      <span key={i} className="flex items-center">
        <Link
          href={deal.href}
          className="flex items-center gap-2 px-5 whitespace-nowrap group"
        >
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${deal.tag === "HOT" ? "bg-red-500 text-white" : "bg-brand-gold text-brand-navy"}`}>
            {deal.tag}
          </span>
          <span className="text-white/80 font-medium text-sm group-hover:text-white group-hover:underline transition-colors">
            {deal.label}
          </span>
        </Link>
        <Flame className="w-3 h-3 text-brand-gold/60 mx-2 flex-shrink-0" />
      </span>
    ))}
  </div>
);

export default function Marquee() {
  const doubled = [...HOT_DEALS, ...HOT_DEALS, ...HOT_DEALS, ...HOT_DEALS];
  return (
    <div className="bg-brand-navy overflow-hidden border-y border-white/5">
      <div className="py-3 flex">
        <div className="flex animate-marquee flex-shrink-0 min-w-full">
          <DealsItem items={doubled} />
        </div>
        <div className="flex animate-marquee flex-shrink-0 min-w-full">
          <DealsItem items={doubled} />
        </div>
      </div>
    </div>
  );
}
