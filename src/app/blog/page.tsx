import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog | Beyond Blue IELTS & Consultancy",
  description:
    "Expert guides on UK visa, Canada Express Entry, Germany Jobseeker Visa, Schengen visa, and Australia PR from Pakistan's trusted immigration consultancy.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero header */}
      <div className="relative bg-brand-navy pt-[80px] lg:pt-[100px] pb-24 text-center overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand/20 rounded-full blur-3xl translate-y-1/2" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 bg-brand-sky/15 border border-brand-sky/25 text-brand-sky text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-6">
            Our Blog
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-5 leading-tight">
            Visa &amp; Immigration
            <span className="block text-brand-sky">Guides</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Expert articles to help you understand every immigration pathway — from Schengen tourist
            visas to Australian PR.
          </p>
        </div>
      </div>

      <BlogPageClient />
    </>
  );
}
