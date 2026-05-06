"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_VIDEOS = [
  "https://cdn.pixabay.com/video/2016/09/14/5293-183619062_large.mp4",
  "https://cdn.pixabay.com/video/2021/04/01/70377-533600671_large.mp4",
  "https://cdn.pixabay.com/video/2020/04/18/36510-411342239_large.mp4",
  "https://cdn.pixabay.com/video/2019/04/09/23116-330288605_large.mp4",
  "https://cdn.pixabay.com/video/2017/07/23/10874-226635348_large.mp4",
];

export default function Hero() {
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Must set as DOM property — JSX attribute alone is insufficient in some browsers
    v.muted = true;
    v.src = HERO_VIDEOS[videoIndex];
    v.load();
    const play = () => { v.play().catch(() => {}); };
    // Listen to both events — whichever fires first triggers play
    v.addEventListener("loadedmetadata", play, { once: true });
    v.addEventListener("canplay", play, { once: true });
    // Timeout fallback: attempt play after 1.5 s regardless
    const t = setTimeout(play, 1500);
    return () => {
      v.removeEventListener("loadedmetadata", play);
      v.removeEventListener("canplay", play);
      clearTimeout(t);
    };
  }, [videoIndex]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center bg-brand-navy">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        onEnded={() => setVideoIndex((p) => (p + 1) % HERO_VIDEOS.length)}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-navy/60" />
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
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {HERO_VIDEOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setVideoIndex(i)}
            className={`h-1 rounded-full transition-all duration-300 ${i === videoIndex ? "w-8 bg-brand-gold" : "w-2 bg-white/40"}`}
          />
        ))}
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