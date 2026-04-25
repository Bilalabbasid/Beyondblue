import { Variants } from "framer-motion";

// ─── Shared Easings ─────────────────────────────────────────
export const smoothEase = [0.22, 1, 0.36, 1] as const;
export const cinematicEase = [0.76, 0, 0.24, 1] as const;

// ─── 1. Hero Parallax (use with useScroll + useTransform) ───
// Apply in component: const { scrollY } = useScroll();
// const y = useTransform(scrollY, [0, 500], [0, 150]);

// ─── 2. Word Stagger ───────────────────────────────────────
export const wordStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.065,
      delayChildren: 0.2,
    },
  },
};

export const wordStaggerChild: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

// ─── 3. Navbar glassmorphism handled in component ───────────

// ─── 4. Floating Card Oscillation ───────────────────────────
export const floatingCard = (delay: number): Variants => ({
  initial: { y: 0, rotate: -2, opacity: 0, scale: 0.8 },
  animate: {
    y: [0, -14, 0],
    rotate: [-2, 3, -2],
    opacity: 1,
    scale: 1,
    transition: {
      y: {
        duration: 3.5,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      },
      rotate: {
        duration: 3.5,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      },
      opacity: { duration: 0.6, delay: delay + 0.3 },
      scale: { duration: 0.6, delay: delay + 0.3, type: "spring" },
    },
  },
});

// ─── 5. Section Reveal ─────────────────────────────────────
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 55 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: smoothEase as unknown as string,
    },
  },
};

// ─── 6. Staggered Card Grid ────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: smoothEase as unknown as string,
    },
  },
};

// ─── 7. Country Card 3D (tilt handled by react-parallax-tilt) ─
export const countryCardImage: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.08,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const countryCardOverlay: Variants = {
  rest: { y: "100%" },
  hover: {
    y: "0%",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// ─── 8. Cinematic Reveal ───────────────────────────────────
export const cinematicReveal: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
    scale: 1.1,
  },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    scale: 1.0,
    transition: {
      clipPath: { duration: 0.9, ease: cinematicEase as unknown as string },
      scale: { duration: 1.2, ease: "easeOut" },
    },
  },
};

// ─── 9. Stat counter pulse (CSS animation applied after count) ─
// Handled in component with react-countup onEnd callback

// ─── 10. SVG Line Draw ─────────────────────────────────────
export const svgLineDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.2, ease: "easeInOut", delay: 0.3 },
      opacity: { duration: 0.3 },
    },
  },
};

export const stepDotAppear = (delay: number): Variants => ({
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay,
    },
  },
});

// ─── 11. Service Card Hover ────────────────────────────────
export const serviceCardBorder: Variants = {
  rest: { height: "0%" },
  hover: {
    height: "100%",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export const serviceCardArrow: Variants = {
  rest: { x: 0 },
  hover: {
    x: 6,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

// ─── 12. Achievement Badge Pop ─────────────────────────────
export const badgePopContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const badgePop: Variants = {
  hidden: { scale: 0, opacity: 0, rotate: -10 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

// ─── 13. Testimonial Card ──────────────────────────────────
export const testimonialActive: Variants = {
  active: { scale: 1, opacity: 1 },
  inactive: { scale: 0.94, opacity: 0.5 },
};

// ─── 14. Form Step Transition ──────────────────────────────
export const formStepVariants: Variants = {
  enter: { x: 80, opacity: 0 },
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: smoothEase as unknown as string },
  },
  exit: {
    x: -80,
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

// ─── 15. WhatsApp Pulse (CSS animation in tailwind config) ─

// ─── 16. Confetti ──────────────────────────────────────────
export interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  velocityX: number;
  velocityY: number;
}

export function generateConfetti(count: number = 40): ConfettiParticle[] {
  const colors = ["#1565C0", "#42A5F5", "#FFB300", "#00C853", "#1E88E5", "#0D47A1"];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 0,
    y: 0,
    rotation: Math.random() * 360,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: Math.random() * 8 + 4,
    velocityX: (Math.random() - 0.5) * 600,
    velocityY: Math.random() * -500 - 200,
  }));
}

// ─── Fade In Variants ──────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: smoothEase as unknown as string },
  },
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: smoothEase as unknown as string,
    },
  },
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: smoothEase as unknown as string },
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: smoothEase as unknown as string },
  },
};
