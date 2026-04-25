import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Our Services | Beyond Blue IELTS & Consultancy",
  description:
    "Explore our comprehensive immigration and IELTS services — visit visas, study abroad, skilled immigration, jobseeker visas, IELTS coaching, and spouse/family visas.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
