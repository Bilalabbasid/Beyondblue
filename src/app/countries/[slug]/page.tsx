import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { COUNTRIES } from "@/lib/constants";
import CountryPageClient from "./CountryPageClient";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return COUNTRIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const country = COUNTRIES.find((c) => c.slug === params.slug);
  if (!country) return {};
  return {
    title: `${country.flag} ${country.name} Visa | Beyond Blue IELTS & Consultancy`,
    description: `Visa and immigration services for ${country.name} — ${country.visaTypes.join(", ")} visas. Expert consultancy from Rawalpindi, Pakistan.`,
  };
}

export default function CountryPage({ params }: Props) {
  const country = COUNTRIES.find((c) => c.slug === params.slug);
  if (!country) notFound();
  return (
    <Suspense>
      <CountryPageClient country={country} />
    </Suspense>
  );
}
