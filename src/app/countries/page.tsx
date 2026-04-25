import type { Metadata } from "next";
import CountriesPageClient from "./CountriesPageClient";

export const metadata: Metadata = {
  title: "Countries | Beyond Blue IELTS & Consultancy",
  description:
    "Explore visa and immigration options for 40+ countries — UK, USA, Canada, Australia, Europe and more. Expert consultancy for every destination.",
};

export default function CountriesPage() {
  return <CountriesPageClient />;
}
