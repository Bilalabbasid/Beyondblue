"use client";

import { Flame } from "lucide-react";

const HOT_DEALS = [
  { label: "USA EB2-NIW - Green Card Pathway",    tag: "HOT" },
  { label: "USA Visit Visa - B1/B2 Tourist",       tag: "HOT" },
  { label: "Spain La Tomatina Festival Tour",       tag: "NEW" },
  { label: "Germany Opportunity Card - Job Search", tag: "HOT" },
  { label: "Australia Subclass 858 - Global Talent",tag: "NEW" },
  { label: "Sweden Job Seeker Visa",                tag: "HOT" },
  { label: "Canada Express Entry - Open Draws",    tag: "NEW" },
  { label: "UK Skilled Worker Visa",                tag: "HOT" },
];

const DealsItem = ({ items }: { items: typeof HOT_DEALS }) => (
  <div className="flex items-center">
    {items.map((deal, i) => (
      <span key={i} className="flex items-center">
        <span className="flex items-center gap-2 px-5 whitespace-nowrap">
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${deal.tag === "HOT" ? "bg-red-500 text-white" : "bg-brand-gold text-brand-navy"}`}>
            {deal.tag}
          </span>
          <span className="text-white/80 font-medium text-sm">{deal.label}</span>
        </span>
        <Flame className="w-3 h-3 text-brand-gold/60 mx-2 flex-shrink-0" />
      </span>
    ))}
  </div>
);

export default function Marquee() {
  const doubled = [...HOT_DEALS, ...HOT_DEALS];
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