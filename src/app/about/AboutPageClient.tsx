"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";
import CountUp from "react-countup";
import { cinematicReveal, sectionReveal, staggerContainer, staggerItem } from "@/lib/animations";
import { STATS, TEAM, MILESTONES, WHY_CHOOSE_US, IMAGES, BLUR_PLACEHOLDER } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";

function TeamCard({ member }: { member: typeof TEAM[number] }) {
  return (
    <motion.div variants={staggerItem} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={member.photo}
          alt={`${member.name} — ${member.role} at Beyond Blue IELTS & Consultancy`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
        <div className="absolute bottom-4 right-4">
          <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:bg-brand transition-colors">
            <ExternalLink className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-brand-navy">{member.name}</h3>
        <div className="text-brand text-sm font-semibold mb-1">{member.role}</div>
        <div className="text-slate-400 text-xs">{member.specialization}</div>
      </div>
    </motion.div>
  );
}

export default function AboutPageClient() {
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: timelineRef, inView: timelineInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: teamRef, inView: teamInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      {/* Hero — split layout */}
      <section className="min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 pt-[80px] lg:pt-[100px]" ref={heroRef}>
        {/* Left: team image */}
        <div className="relative h-80 lg:h-auto overflow-hidden">
          <motion.div
            variants={cinematicReveal}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="absolute inset-0"
          >
            <Image
              src={IMAGES.about.hero.src}
              alt={IMAGES.about.hero.alt}
              fill
              className="object-cover"
              priority
              sizes="50vw"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
            />
            <div className="absolute inset-0 bg-brand/20" />
          </motion.div>
        </div>

        {/* Right: quote */}
        <div className="bg-brand-navy flex items-center px-6 lg:px-10 py-10 lg:py-0">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="max-w-md"
          >
            <span className="label-small text-brand-sky mb-4 block">About Us</span>
            <blockquote className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
              &ldquo;Transforming borders into pathways — one visa at a time.&rdquo;
            </blockquote>
            <cite className="text-white/50 text-sm not-italic">— Beyond Blue, est. in Rawalpindi</cite>
            <div className="mt-8 h-px bg-white/10" />
            <p className="text-white/60 text-sm leading-relaxed mt-6">
              Pakistan&apos;s most trusted IELTS and immigration consultancy with 7+ years of expertise and 700+ successful approvals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story section */}
      <section className="section-padding bg-brand-bg-light">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={IMAGES.about.story.src}
              alt={IMAGES.about.story.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
            />
          </div>
          <div>
            <span className="label-small text-brand mb-3 block">Our Story</span>
            <h2 className="font-display font-bold text-4xl text-brand-navy mb-6 leading-tight">
              Built on Trust, Driven by Results
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              We believe that looking for perfect opportunities for you is our utmost responsibility. We work according to your profile and search for the best opportunities in Pakistan and overseas. Beyond Blue also works in study visas — we help you find the best universities around the globe.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              We also deal in tour packages, visit visas, and our services include Hajj &amp; Umrah. Founded in Rawalpindi with 7+ years of experience and 700+ successful cases, we remain Pakistan&apos;s most trusted IELTS and immigration consultancy.
            </p>
            <Link href="/contact" className="btn-gold inline-block">
              Book Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader
            label="Our Foundation"
            title="Mission, Vision & Values"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: "🎯",
                title: "Mission",
                text: "Provide ethical, personalized immigration solutions that enable our clients to thrive in their desired destinations.",
              },
              {
                icon: "🔭",
                title: "Vision",
                text: "Empower global citizens by transforming borders into pathways to opportunity for every Pakistani.",
              },
              {
                icon: "⚖️",
                title: "Values",
                text: "Upholding the highest ethical standards of trust, transparency, and accountability in every client interaction.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-brand-bg-light rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand py-16" ref={statsRef}>
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white">
                  {statsInView ? (
                    <CountUp start={0} end={stat.value} duration={2.5} useEasing />
                  ) : "0"}
                  {stat.suffix}
                </span>
                <p className="text-white/70 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-brand-navy" ref={timelineRef}>
        <div className="container-wide">
          <SectionHeader
            label="Our Journey"
            title="Milestones That Shaped Us"
            light
          />
          <div className="mt-14 max-w-3xl mx-auto">
            {MILESTONES.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center shadow-lg shadow-brand/30 font-bold text-white text-sm">
                    {milestone.year.slice(2)}
                  </div>
                  {i < MILESTONES.length - 1 && (
                    <div className="w-px h-12 bg-white/20 mt-1" />
                  )}
                </div>
                <div className="pt-2.5">
                  <div className="text-brand-sky font-bold text-sm mb-1">{milestone.year}</div>
                  <div className="text-white font-medium">{milestone.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white" ref={teamRef}>
        <div className="container-wide">
          <SectionHeader
            label="Our Team"
            title="Meet the Experts Behind Your Approval"
            subtitle="A dedicated team of certified immigration specialists and IELTS coaches."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14"
          >
            {TEAM.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-brand-bg-light section-padding">
        <div className="container-wide">
          <SectionHeader
            label="Why Beyond Blue"
            title="Why Clients Choose Us"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-100 transition-all">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-lg text-brand-navy mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
