import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import ServiceDetailClient from "./ServiceDetailClient";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | Beyond Blue IELTS & Consultancy`,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();
  return <ServiceDetailClient service={service} />;
}
