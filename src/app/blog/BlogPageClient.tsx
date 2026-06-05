"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";
import type { BlogPost } from "@/lib/constants";

const CATEGORY_STYLES: Record<string, { badge: string; dot: string }> = {
  "Visit Visa": { badge: "bg-blue-50 text-blue-700 border-blue-200", dot: "bg-blue-500" },
  "Immigration": { badge: "bg-emerald-50 text-emerald-700 border-emerald-200", dot: "bg-emerald-500" },
  "Jobseeker Visa": { badge: "bg-amber-50 text-amber-700 border-amber-200", dot: "bg-amber-500" },
  "Study Abroad": { badge: "bg-purple-50 text-purple-700 border-purple-200", dot: "bg-purple-500" },
};

function CategoryBadge({ category, size = "sm" }: { category: string; size?: "sm" | "lg" }) {
  const style = CATEGORY_STYLES[category] || { badge: "bg-brand/10 text-brand border-brand/20", dot: "bg-brand" };
  const padding = size === "lg" ? "px-3.5 py-1.5 text-sm" : "px-2.5 py-1 text-xs";
  return (
    <span className={`inline-flex items-center gap-1.5 font-semibold rounded-full border ${padding} ${style.badge}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
      {category}
    </span>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="bg-white rounded-[24px] overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1.5 border border-slate-100/80 h-full flex flex-col"
      >
        <div className="relative h-64 overflow-hidden flex-shrink-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-80" />
          <div className="absolute top-4 left-4">
            <CategoryBadge category={post.category} />
          </div>
        </div>
        <div className="p-7 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-slate-400 text-[11px] font-medium uppercase tracking-wider mb-3.5">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-200" />
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
          <h2 className="font-display font-bold text-xl text-brand-navy mb-3 leading-[1.3] group-hover:text-brand transition-colors duration-300 flex-1 line-clamp-3">
            {post.title}
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6 opacity-80">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-1.5 text-brand text-sm font-bold mt-auto group-hover:gap-3 transition-all duration-300">
            Read Article <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function BlogPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

  const filtered =
    activeCategory === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <section className="section-padding bg-[#F8FAFC] min-h-[60vh]">
      <div className="container-wide">
        {/* Category filters */}
        <div className="flex items-center justify-between gap-4 flex-wrap mb-12">
          <div className="flex items-center gap-2.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-brand text-white border-brand shadow-[0_10px_20px_-5px_rgba(13,71,161,0.3)]"
                    : "bg-white text-slate-600 border-slate-200 hover:border-brand/40 hover:text-brand hover:bg-slate-50/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="text-slate-400 text-sm font-semibold bg-white border border-slate-100 px-4 py-2 rounded-full shadow-sm">
            {filtered.length} Article{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Article grid */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={`grid-${activeCategory}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
              {filtered.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32 bg-white rounded-3xl border border-dashed border-slate-200"
            >
              <BookOpen className="w-16 h-16 mx-auto mb-5 text-slate-200" />
              <p className="text-xl font-display font-bold text-slate-400">No articles found in this category.</p>
              <button 
                onClick={() => setActiveCategory("All")}
                className="mt-4 text-brand font-bold hover:underline"
              >
                Show all articles
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
