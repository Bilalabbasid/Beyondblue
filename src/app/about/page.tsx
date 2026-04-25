import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | Beyond Blue IELTS & Consultancy",
  description:
    "Learn about Beyond Blue IELTS & Consultancy — founded in Rawalpindi with 7+ years of experience, 700+ successful cases, and a passionate team of immigration specialists.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
