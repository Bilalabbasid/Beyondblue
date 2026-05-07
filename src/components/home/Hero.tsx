"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Passport / immigration / travel themed HD videos from Pixabay (free license)
const VIDEOS = [
  "https://cdn.pixabay.com/video/2018/03/20/15129-261402885_large.mp4",   // passport & documents
  "https://cdn.pixabay.com/video/2020/09/22/50611-460792415_large.mp4",   // close-up stamp action
  "https://cdn.pixabay.com/video/2022/10/13/134789-760690952_large.mp4",  // airport departure board
  "https://cdn.pixabay.com/video/2015/11/26/1383-147055496_large.mp4",    // airport terminal timelapse
  "https://cdn.pixabay.com/video/2020/02/27/32948-395456400_large.mp4",   // plane take-off
];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center bg-brand-navy">
      {/* Video playlist — key forces remount + autoplay on each new video */}
      <video
        key={idx}
        autoPlay
        muted
        playsInline
        onEnded={() => setIdx((i) => (i + 1) % VIDEOS.length)}
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80&auto=format&fit=crop"
      >
        <source src={VIDEOS[idx]} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-brand-navy/55" />

      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="font-display font-black text-white leading-[0.88] tracking-tight mb-6 uppercase"
            style={{ fontSize: "clamp(4.5rem, 15vw, 15rem)" }}
          >
            BEYOND<br />
            <span className="text-brand-sky italic">BLUE</span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-white/80 text-base sm:text-xl md:text-2xl font-medium tracking-widest uppercase mb-10"
        >
          Pakistan&apos;s Trusted Visa &amp; IELTS Consultancy
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/contact" className="btn-gold text-base px-10 py-4">Free Assessment</Link>
          <Link href="/services" className="btn-outline-white text-base px-10 py-4">Our Services</Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );
}