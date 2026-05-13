import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import DirectorSection from "@/components/home/DirectorSection";
import TeamSection from "@/components/home/TeamSection";
import VideoShowcase from "@/components/home/VideoShowcase";
import Achievements from "@/components/home/Achievements";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Beyond Blue IELTS & Consultancy | Pakistan's Trusted Visa & IELTS Experts",
  description:
    "Beyond Blue IELTS & Consultancy — 5+ years, 400+ approvals. Visit visas, study abroad, skilled immigration, IELTS coaching. UK, USA, Canada, Europe and beyond.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <DirectorSection />
      <VideoShowcase />
      <Achievements />
      <ServicesGrid />
      <HowItWorks />
      <TeamSection />
      <Testimonials />
      <CTABanner />
    </>
  );
}
