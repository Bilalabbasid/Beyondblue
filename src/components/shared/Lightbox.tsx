"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxImage {
  src: string;
  label?: string;
  country?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  activeIndex: number | null;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

export default function Lightbox({ images, activeIndex, onClose, onChangeIndex }: LightboxProps) {
  const isOpen = activeIndex !== null;
  const total = images.length;

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    onChangeIndex((activeIndex - 1 + total) % total);
  }, [activeIndex, total, onChangeIndex]);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    onChangeIndex((activeIndex + 1) % total);
  }, [activeIndex, total, onChangeIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, goPrev, goNext]);

  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <AnimatePresence>
      {isOpen && active && (
        <motion.div
          key="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          {total > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Image */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-[90vw] max-h-[88vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ maxHeight: "80vh", maxWidth: "min(90vw, 900px)" }}>
              <Image
                src={active.src}
                alt={active.label ?? "Visa approval"}
                width={900}
                height={680}
                className="rounded-xl object-contain shadow-2xl"
                style={{ maxHeight: "80vh", width: "auto", height: "auto" }}
                unoptimized
              />
            </div>
            {(active.label || active.country) && (
              <div className="mt-3 flex items-center gap-2">
                {active.label && (
                  <span className="inline-flex items-center gap-1.5 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full">
                    ✓ {active.label}
                  </span>
                )}
                {active.country && (
                  <span className="text-white/60 text-xs">{active.country}</span>
                )}
              </div>
            )}
            {total > 1 && (
              <p className="text-white/40 text-xs mt-2">{(activeIndex ?? 0) + 1} / {total}</p>
            )}
          </motion.div>

          {/* Next */}
          {total > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Thumbnails strip */}
          {total > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); onChangeIndex(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === activeIndex ? "bg-white w-5" : "bg-white/30"}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
