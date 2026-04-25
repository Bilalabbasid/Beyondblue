"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Headphones, BookOpen, PenTool, Mic, Clock, Users, Award, CheckCircle } from "lucide-react";
import { staggerContainer, staggerItem, sectionReveal } from "@/lib/animations";
import { IELTS_SKILLS, TESTIMONIALS, IMAGES } from "@/lib/constants";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import { Star } from "lucide-react";
import Flag from "@/components/shared/Flag";

const SKILL_ICONS: Record<string, React.ElementType> = {
  Headphones, BookOpen, PenTool, Mic,
};

const BATCHES = [
  { batch: "Morning Batch", time: "8:00 AM – 10:00 AM", days: "Mon, Wed, Fri", seats: "5 seats left", duration: "8 weeks" },
  { batch: "Afternoon Batch", time: "2:00 PM – 4:00 PM", days: "Tue, Thu, Sat", seats: "3 seats left", duration: "8 weeks" },
  { batch: "Evening Batch", time: "6:00 PM – 8:00 PM", days: "Mon – Fri", seats: "8 seats left", duration: "6 weeks intensive" },
  { batch: "Weekend Intensive", time: "9:00 AM – 1:00 PM", days: "Sat & Sun", seats: "10 seats left", duration: "12 weeks" },
];

export default function IELTSPageClient() {
  const { ref: whyRef, inView: whyInView } = useInView({ threshold: 0.15, triggerOnce: true });
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: batchRef, inView: batchInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <PageHero
        title="IELTS Preparation That Gets You to Band 7+"
        subtitle="Certified trainers, proven strategies, and personalized coaching for Listening, Reading, Writing, and Speaking."
        image={IMAGES.ielts.hero.src}
        imageAlt={IMAGES.ielts.hero.alt}
        label="IELTS Coaching"
      />

      {/* Why IELTS matters */}
      <section className="section-padding bg-white" ref={whyRef}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={sectionReveal}
              initial="hidden"
              animate={whyInView ? "visible" : "hidden"}
            >
              <span className="label-small text-brand mb-3 block">Why IELTS?</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-6 leading-tight">
                IELTS is the Gateway to Your Global Journey
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Whether you&apos;re applying for a student visa, skilled worker visa, or permanent residency — almost every immigration pathway requires a strong IELTS score. Band 7 is the magic number that unlocks Canada Express Entry, UK Skilled Worker, Australia PR, and prestigious university admissions.
              </p>
              <div className="space-y-4">
                {[
                  { code: "ca", text: "Canada Express Entry: CLB 9 = IELTS Band 7" },
                  { code: "gb", text: "UK Skilled Worker: CEFR B2 minimum" },
                  { code: "au", text: "Australia PR (FSW): IELTS 7.0 in all bands" },
                  { code: "us", text: "Top universities: IELTS 6.5\u20137.5" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-slate-600">
                    <Flag code={item.code} name={item.code} size={22} />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={whyInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Award, value: "Band 7+", label: "Average Student Score" },
                { icon: Users, value: "500+", label: "Students Trained" },
                { icon: CheckCircle, value: "94%", label: "Success Rate" },
                { icon: Clock, value: "8 Weeks", label: "Standard Course" },
              ].map((stat) => (
                <motion.div key={stat.label} variants={staggerItem} className="bg-brand-bg-light rounded-2xl p-6 text-center">
                  <stat.icon className="w-8 h-8 text-brand mx-auto mb-3" />
                  <div className="font-display font-bold text-2xl text-brand-navy mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills cards */}
      <section className="section-padding bg-brand-bg-light" ref={skillsRef}>
        <div className="container-wide">
          <SectionHeader
            label="Our Approach"
            title="Master All Four IELTS Skills"
            subtitle="Comprehensive training with personalized feedback for every skill area."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14"
          >
            {IELTS_SKILLS.map((skill) => {
              const Icon = SKILL_ICONS[skill.icon] ?? BookOpen;
              return (
                <motion.div
                  key={skill.skill}
                  variants={staggerItem}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={skill.image}
                      alt={skill.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
                    <div className="absolute top-3 right-3 w-9 h-9 bg-brand/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-bold text-xl text-brand-navy">{skill.skill}</h3>
                      <span className="text-brand-gold font-bold text-sm">~{skill.targetBand}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{skill.description}</p>
                    <ul className="space-y-1.5">
                      {skill.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2 text-xs text-slate-500">
                          <span className="text-brand-green mt-0.5">✓</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Batch schedules */}
      <section className="section-padding bg-white" ref={batchRef}>
        <div className="container-wide">
          <SectionHeader
            label="Enrollment"
            title="Current Batch Schedules"
            subtitle="Join a batch that fits your lifestyle. All batches are limited to 15 students for personalized attention."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={batchInView ? "visible" : "hidden"}
            className="mt-12 overflow-hidden rounded-2xl border border-slate-100 shadow-sm"
          >
            <table className="w-full">
              <thead className="bg-brand text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Batch</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold hidden md:table-cell">Time</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold hidden lg:table-cell">Days</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold hidden md:table-cell">Duration</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Availability</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Enroll</th>
                </tr>
              </thead>
              <tbody>
                {BATCHES.map((batch, i) => (
                  <motion.tr
                    key={batch.batch}
                    variants={staggerItem}
                    className={`border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-brand-bg-light/50"} hover:bg-brand-bg-light transition-colors`}
                  >
                    <td className="px-6 py-4 font-semibold text-brand-navy text-sm">{batch.batch}</td>
                    <td className="px-6 py-4 text-slate-500 text-sm hidden md:table-cell">{batch.time}</td>
                    <td className="px-6 py-4 text-slate-500 text-sm hidden lg:table-cell">{batch.days}</td>
                    <td className="px-6 py-4 text-slate-500 text-sm hidden md:table-cell">{batch.duration}</td>
                    <td className="px-6 py-4">
                      <span className="bg-orange-50 text-orange-600 text-xs font-semibold px-2.5 py-1 rounded-full">{batch.seats}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link href="/contact" className="text-brand text-sm font-semibold hover:underline">
                        Enroll →
                      </Link>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Success stories */}
      <section className="section-padding bg-brand-navy">
        <div className="container-wide">
          <SectionHeader label="Success Stories" title="Students Who Achieved Band 7+" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div key={t.id} className="glass rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <blockquote className="text-white/80 text-sm italic leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <Image src={t.photo} alt={`${t.name} — Beyond Blue IELTS student who achieved Band 7+`} width={40} height={40} className="rounded-full" sizes="40px" />
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/50 text-xs">{t.visa}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gold py-16">
        <div className="container-wide text-center">
          <h2 className="font-display font-bold text-4xl text-brand-navy mb-4">
            Ready to Achieve Band 7?
          </h2>
          <p className="text-brand-navy/70 text-lg mb-8">
            Join our next batch and start your journey to IELTS success today.
          </p>
          <Link href="/contact" className="bg-brand-navy hover:bg-brand text-white font-bold px-8 py-4 rounded-full transition-colors inline-block">
            Enroll Now →
          </Link>
        </div>
      </section>
    </>
  );
}
