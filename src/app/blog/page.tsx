import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog | Beyond Blue IELTS & Consultancy",
  description:
    "Expert guides on UK visa, Canada Express Entry, Germany Jobseeker Visa, Schengen visa, and Australia PR from Pakistan's trusted immigration consultancy.",
};

export default function BlogPage() {
  return (
    <>
      <div className="bg-brand pt-[80px] lg:pt-[100px] pb-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="label-small text-brand-sky mb-4 block">Our Blog</span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Visa & Immigration Guides
          </h1>
          <p className="text-white/70 text-base md:text-xl max-w-2xl mx-auto">
            Expert articles to help you understand every immigration pathway, from Schengen to PR.
          </p>
        </div>
      </div>

      <section className="section-padding bg-brand-bg-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={`${post.title} — Beyond Blue immigration & visa blog`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-brand text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-slate-400 text-xs mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="font-display font-bold text-xl text-brand-navy mb-2 leading-tight group-hover:text-brand transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-brand text-sm font-semibold group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
