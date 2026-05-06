"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, CheckCircle, ArrowRight, ArrowLeft, Users } from "lucide-react";
import { formStepVariants, generateConfetti } from "@/lib/animations";
import { BRAND, COUNTRIES, TEAM } from "@/lib/constants";

// ─── Zod schemas per step ─────────────────────────────────────────────────────
const step1Schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  whatsapp: z.string().min(10, "Enter a valid WhatsApp number"),
  email: z.string().email("Enter a valid email address"),
  city: z.string().min(1, "Please select your city"),
  purposeOfVisit: z.string().min(1, "Please select purpose of visit"),
  visaCategory: z.string().min(1, "Please select visa category"),
});

const step2Schema = z.object({
  country: z.string().min(1, "Please select a destination"),
  visaType: z.string().min(1, "Please select a visa type"),
  travelFrom: z.string().optional(),
  travelTo: z.string().optional(),
  firstApplication: z.enum(["yes", "no"]),
});

const step3Schema = z.object({
  passportExpiry: z.string().optional(),
  previousRefusal: z.enum(["yes", "no"]),
  refusalCountry: z.string().optional(),
  employmentStatus: z.string().min(1, "Please select employment status"),
  monthlyIncome: z.string().min(1, "Please select income range"),
});

const step4Schema = z.object({
  message: z.string().optional(),
  hearAboutUs: z.string().optional(),
  agreePrivacy: z.boolean().refine((v) => v === true, "You must agree to the privacy policy"),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3Data = z.infer<typeof step3Schema>;
type Step4Data = z.infer<typeof step4Schema>;

type FormData = Step1Data & Step2Data & Step3Data & Step4Data;

// ─── Confetti Component ───────────────────────────────────────────────────────
function Confetti() {
  const particles = generateConfetti(40);
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: 2,
          }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: p.rotation }}
          animate={{
            x: p.velocityX,
            y: [0, p.velocityY, p.velocityY * 0.3 + 400],
            opacity: [1, 1, 0],
            rotate: p.rotation + 360,
          }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}

// ─── Step 1 ───────────────────────────────────────────────────────────────────
function Step1({ form }: { form: ReturnType<typeof useForm<Step1Data>> }) {
  const { register, formState: { errors } } = form;
  return (
    <div className="space-y-4">
      <h3 className="font-display font-bold text-2xl text-brand-navy">About You</h3>
      <p className="text-slate-400 text-sm">Tell us a little about yourself to get started.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div>
          <label className="label-small text-slate-500 mb-1.5 block">Full Name *</label>
          <input
            {...register("fullName")}
            placeholder="Muhammad Ali"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors"
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
        </div>
        <div>
          <label className="label-small text-slate-500 mb-1.5 block">WhatsApp Number *</label>
          <input
            {...register("whatsapp")}
            placeholder="+92 300 0000000"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors"
          />
          {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp.message}</p>}
        </div>
        <div>
          <label className="label-small text-slate-500 mb-1.5 block">Email Address *</label>
          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="label-small text-slate-500 mb-1.5 block">City</label>
          <select
            {...register("city")}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors text-slate-600"
          >
            <option value="">Select your city</option>
            {["Rawalpindi", "Islamabad", "Lahore", "Karachi", "Peshawar", "Other"].map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
        </div>
        <div>
          <label className="label-small text-slate-500 mb-1.5 block">Purpose of Visit *</label>
          <select
            {...register("purposeOfVisit")}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors text-slate-600"
          >
            <option value="">Select purpose</option>
            {["Tourism / Holiday", "Business Meeting", "Family / Friends Visit", "Study Inquiry", "Work / Immigration", "Medical Treatment", "IELTS Coaching"].map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          {errors.purposeOfVisit && <p className="text-red-500 text-xs mt-1">{errors.purposeOfVisit.message}</p>}
        </div>
        <div className="md:col-span-2">
          <label className="label-small text-slate-500 mb-1.5 block">Visa Category *</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {["Visit Visa", "Student Visa", "Work / Jobseeker", "PR / Immigration", "Spouse / Family", "IELTS Preparation"].map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer border border-slate-200 rounded-xl px-3 py-2.5 hover:border-brand transition-colors has-[:checked]:border-brand has-[:checked]:bg-brand/5">
                <input
                  type="radio"
                  value={cat}
                  {...register("visaCategory")}
                  className="w-4 h-4 text-brand accent-brand"
                />
                <span className="text-sm text-slate-600 font-medium">{cat}</span>
              </label>
            ))}
          </div>
          {errors.visaCategory && <p className="text-red-500 text-xs mt-1">{errors.visaCategory.message}</p>}
        </div>
      </div>
    </div>
  );
}

// ─── Step 2 ───────────────────────────────────────────────────────────────────
function Step2({ form }: { form: ReturnType<typeof useForm<Step2Data>> }) {
  const { register, formState: { errors } } = form;
  return (
    <div className="space-y-4">
      <h3 className="font-display font-bold text-2xl text-brand-navy">Visa Details</h3>
      <p className="text-slate-400 text-sm">Tell us about the visa you&apos;re applying for.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div>
          <label className="label-small text-slate-500 mb-1.5 block">Destination Country *</label>
          <select
            {...register("country")}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors text-slate-600"
          >
            <option value="">Select country</option>
            {COUNTRIES.map((c) => (
              <option key={c.slug} value={c.name}>{c.flag} {c.name}</option>
            ))}
          </select>
          {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
        </div>
        <div>
          <label className="label-small text-slate-500 mb-1.5 block">Visa Type *</label>
          <select
            {...register("visaType")}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors text-slate-600"
          >
            <option value="">Select visa type</option>
            {["Visit", "Study", "Work / Jobseeker", "PR / Immigration", "IELTS", "Spouse / Family"].map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.visaType && <p className="text-red-500 text-xs mt-1">{errors.visaType.message}</p>}
        </div>
        <div>
          <label className="label-small text-slate-500 mb-1.5 block">Travel Date (From)</label>
          <input
            {...register("travelFrom")}
            type="date"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors"
          />
        </div>
        <div>
          <label className="label-small text-slate-500 mb-1.5 block">Travel Date (To)</label>
          <input
            {...register("travelTo")}
            type="date"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors"
          />
        </div>
        <div className="md:col-span-2">
          <label className="label-small text-slate-500 mb-3 block">First visa application? *</label>
          <div className="flex gap-4">
            {[{ val: "yes", label: "Yes, this is my first application" }, { val: "no", label: "No, I&apos;ve applied before" }].map((opt) => (
              <label key={opt.val} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value={opt.val}
                  {...register("firstApplication")}
                  className="w-4 h-4 text-brand"
                />
                <span className="text-sm text-slate-600" dangerouslySetInnerHTML={{ __html: opt.label }} />
              </label>
            ))}
          </div>
          {errors.firstApplication && <p className="text-red-500 text-xs mt-1">{errors.firstApplication.message}</p>}
        </div>
      </div>
    </div>
  );
}

// ─── Step 3 ───────────────────────────────────────────────────────────────────
function Step3({ form }: { form: ReturnType<typeof useForm<Step3Data>> }) {
  const { register, watch, formState: { errors } } = form;
  const showRefusalCountry = watch("previousRefusal") === "yes";
  return (
    <div className="space-y-4">
      <h3 className="font-display font-bold text-2xl text-brand-navy">Your Background</h3>
      <p className="text-slate-400 text-sm">Help us build the strongest possible case for you.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div>
          <label className="label-small text-slate-500 mb-1.5 block">Passport Expiry Date</label>
          <input
            {...register("passportExpiry")}
            type="date"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors"
          />
        </div>
        <div>
          <label className="label-small text-slate-500 mb-1.5 block">Employment Status *</label>
          <select
            {...register("employmentStatus")}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors text-slate-600"
          >
            <option value="">Select status</option>
            {["Employed", "Self-Employed", "Business Owner", "Student", "Retired", "Other"].map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.employmentStatus && <p className="text-red-500 text-xs mt-1">{errors.employmentStatus.message}</p>}
        </div>
        <div>
          <label className="label-small text-slate-500 mb-1.5 block">Monthly Income (PKR) *</label>
          <select
            {...register("monthlyIncome")}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors text-slate-600"
          >
            <option value="">Select range</option>
            {["Under 50,000", "50,000 – 100,000", "100,000 – 200,000", "200,000 – 500,000", "500,000 – 1,000,000", "Over 1,000,000"].map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          {errors.monthlyIncome && <p className="text-red-500 text-xs mt-1">{errors.monthlyIncome.message}</p>}
        </div>
        <div>
          <label className="label-small text-slate-500 mb-3 block">Previous visa refusals?</label>
          <div className="flex gap-4">
            {[{ val: "no", label: "No" }, { val: "yes", label: "Yes" }].map((opt) => (
              <label key={opt.val} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" value={opt.val} {...register("previousRefusal")} className="w-4 h-4 text-brand" />
                <span className="text-sm text-slate-600">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>
        {showRefusalCountry && (
          <div className="md:col-span-2">
            <label className="label-small text-slate-500 mb-1.5 block">Which country refused you?</label>
            <input
              {...register("refusalCountry")}
              placeholder="e.g., United Kingdom"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors"
            />
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Step 4 ───────────────────────────────────────────────────────────────────
function Step4({ form }: { form: ReturnType<typeof useForm<Step4Data>> }) {
  const { register, formState: { errors } } = form;
  return (
    <div className="space-y-4">
      <h3 className="font-display font-bold text-2xl text-brand-navy">Final Details</h3>
      <p className="text-slate-400 text-sm">Almost done! Any additional information to help us.</p>
      <div className="space-y-4 mt-6">
        <div>
          <label className="label-small text-slate-500 mb-1.5 block">Additional Message</label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Tell us more about your specific situation, goals, or any questions you have..."
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors resize-none"
          />
        </div>
        <div>
          <label className="label-small text-slate-500 mb-1.5 block">How did you hear about us?</label>
          <select
            {...register("hearAboutUs")}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors text-slate-600"
          >
            <option value="">Select option</option>
            {["Google Search", "Facebook", "Instagram", "WhatsApp", "Friend/Family Referral", "TikTok", "YouTube", "Other"].map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="flex items-start gap-3 mt-2">
          <input
            type="checkbox"
            {...register("agreePrivacy")}
            id="privacy"
            className="w-4 h-4 mt-0.5 rounded text-brand"
          />
          <label htmlFor="privacy" className="text-sm text-slate-500 cursor-pointer">
            I agree to Beyond Blue&apos;s Privacy Policy and consent to being contacted about my visa inquiry.
          </label>
        </div>
        {errors.agreePrivacy && <p className="text-red-500 text-xs">{errors.agreePrivacy.message}</p>}
      </div>
    </div>
  );
}

// ─── Success State ────────────────────────────────────────────────────────────
function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="text-center py-10"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
        className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle className="w-10 h-10 text-brand-green" />
      </motion.div>
      <h3 className="font-display font-bold text-3xl text-brand-navy mb-3">
        Assessment Submitted!
      </h3>
      <p className="text-slate-500 max-w-sm mx-auto">
        We&apos;ll review your details and contact you within 24 hours on WhatsApp and email.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={BRAND.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
        >
          Chat on WhatsApp Now
        </a>
      </div>
    </motion.div>
  );
}

// ─── Multi-step form wrapper ──────────────────────────────────────────────────
function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [, setFormData] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const TOTAL_STEPS = 4;

  const form1 = useForm<Step1Data>({ resolver: zodResolver(step1Schema) });
  const form2 = useForm<Step2Data>({ resolver: zodResolver(step2Schema) });
  const form3 = useForm<Step3Data>({ resolver: zodResolver(step3Schema) });
  const form4 = useForm<Step4Data>({ resolver: zodResolver(step4Schema) });

  const handleStep1 = form1.handleSubmit((data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2);
  });

  const handleStep2 = form2.handleSubmit((data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(3);
  });

  const handleStep3 = form3.handleSubmit((data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(4);
  });

  const handleStep4 = form4.handleSubmit((data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setShowConfetti(true);
    setSubmitted(true);
    toast.success("✓ We'll contact you within 24 hours!");
    setTimeout(() => setShowConfetti(false), 3000);
  });

  const steps = [
    { label: "About You" },
    { label: "Visa Details" },
    { label: "Background" },
    { label: "Final" },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 lg:p-10">
      {showConfetti && <Confetti />}

      {!submitted ? (
        <>
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-2 flex-1 last:flex-none">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    i + 1 < step ? "bg-brand-green text-white" :
                    i + 1 === step ? "bg-brand text-white shadow-lg shadow-brand/30" :
                    "bg-slate-100 text-slate-400"
                  }`}>
                    {i + 1 < step ? "✓" : i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 transition-all duration-300 ${i + 1 < step ? "bg-brand-green" : "bg-slate-100"}`} />
                  )}
                </div>
              ))}
            </div>
            <motion.div
              className="h-1.5 bg-slate-100 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-brand rounded-full"
                initial={{ width: "25%" }}
                animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>
            <p className="text-right text-xs text-slate-400 mt-1">Step {step} of {TOTAL_STEPS}</p>
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={formStepVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {step === 1 && (
                <form onSubmit={handleStep1}>
                  <Step1 form={form1} />
                  <div className="flex justify-end mt-8">
                    <button type="submit" className="btn-gold flex items-center gap-2 px-8">
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
              {step === 2 && (
                <form onSubmit={handleStep2}>
                  <Step2 form={form2} />
                  <div className="flex justify-between mt-8">
                    <button type="button" onClick={() => setStep(1)} className="flex items-center gap-2 text-slate-500 hover:text-brand transition-colors">
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button type="submit" className="btn-gold flex items-center gap-2 px-8">
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
              {step === 3 && (
                <form onSubmit={handleStep3}>
                  <Step3 form={form3} />
                  <div className="flex justify-between mt-8">
                    <button type="button" onClick={() => setStep(2)} className="flex items-center gap-2 text-slate-500 hover:text-brand transition-colors">
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button type="submit" className="btn-gold flex items-center gap-2 px-8">
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
              {step === 4 && (
                <form onSubmit={handleStep4}>
                  <Step4 form={form4} />
                  <div className="flex justify-between mt-8">
                    <button type="button" onClick={() => setStep(3)} className="flex items-center gap-2 text-slate-500 hover:text-brand transition-colors">
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button type="submit" className="btn-gold text-base px-8 py-4">
                      Submit Free Assessment →
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        <SuccessState />
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ContactPageClient() {
  return (
    <section className="min-h-screen bg-brand-bg-light pt-[80px] lg:pt-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16">
          {/* Left info panel */}
          <div className="bg-brand-navy rounded-3xl p-8 lg:p-10 text-white h-fit lg:sticky lg:top-28">
            <span className="label-small text-brand-sky mb-4 block">Get in Touch</span>
            <h1 className="font-display font-bold text-4xl mb-3 leading-tight">
              Let&apos;s Start Your Journey
            </h1>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Trust us to get you there — book your free assessment below.
            </p>

            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              {[
                { Icon: MapPin, text: BRAND.address },
                { Icon: Phone, text: BRAND.phone, href: `tel:${BRAND.phone}` },
                { Icon: Mail, text: BRAND.email, href: `mailto:${BRAND.email}` },
                { Icon: Clock, text: BRAND.hours },
              ].map(({ Icon, text, href }) => (
                <div key={text} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <Icon className="w-5 h-5 text-brand-sky flex-shrink-0 mt-0.5" />
                  {href ? (
                    <a href={href} className="text-white/80 text-sm hover:text-white transition-colors">{text}</a>
                  ) : (
                    <span className="text-white/80 text-sm">{text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {[
                { name: "WhatsApp", href: BRAND.social.whatsapp, color: "hover:bg-green-600" },
                { name: "Facebook", href: BRAND.social.facebook, color: "hover:bg-blue-600" },
                { name: "Instagram", href: BRAND.social.instagram, color: "hover:bg-pink-600" },
                { name: "LinkedIn", href: BRAND.social.linkedin, color: "hover:bg-blue-700" },
                { name: "YouTube", href: BRAND.social.youtube, color: "hover:bg-red-600" },
                { name: "TikTok", href: BRAND.social.tiktok, color: "hover:bg-black" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white/10 ${social.color} text-white text-xs font-semibold py-2.5 rounded-xl text-center transition-colors`}
                >
                  {social.name}
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={BRAND.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-xl transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat with Us Now
            </a>

            {/* Consultant Team */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-brand-sky" />
                <span className="text-white font-semibold text-sm">Meet Our Consultants</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {(TEAM as readonly { name: string; role: string; specialization: string; photo: string }[]).map((member) => (
                  <div key={member.name} className="flex items-center gap-3 bg-white/5 rounded-xl p-2.5 hover:bg-white/10 transition-colors">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-brand-sky/30">
                      <Image
                        src={member.photo}
                        alt={`${member.name} — ${member.role}`}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-white text-xs font-semibold truncate">{member.name}</div>
                      <div className="text-white/50 text-[10px] truncate">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="mt-6 rounded-xl overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.3!2d73.0462!3d33.5234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBahria+Town+Phase+7+Rawalpindi!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Beyond Blue Office Location"
              />
            </div>
          </div>

          {/* Right form */}
          <div>
            <MultiStepForm />
          </div>
        </div>
      </div>
    </section>
  );
}
