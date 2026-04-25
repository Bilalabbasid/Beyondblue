import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS, BRAND } from "@/lib/constants";
import { Clock, Calendar, ArrowLeft } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Beyond Blue Blog`,
    description: post.excerpt,
  };
}

function renderContent(markdown: string) {
  // Simple markdown to HTML transformation
  const lines = markdown.split("\n");
  const elements: JSX.Element[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-display font-bold text-2xl text-brand-navy mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="font-display font-bold text-xl text-brand-navy mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-semibold text-brand-navy mb-2">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="text-slate-600 leading-relaxed ml-4 list-disc mb-1">
          {line.slice(2)}
        </li>
      );
    } else if (line.startsWith("1. ") || /^\d+\. /.test(line)) {
      elements.push(
        <li key={i} className="text-slate-600 leading-relaxed ml-4 list-decimal mb-1">
          {line.replace(/^\d+\. /, "")}
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="mt-2" />);
    } else {
      elements.push(
        <p key={i} className="text-slate-600 leading-relaxed mb-4">
          {line}
        </p>
      );
    }
    i++;
  }
  return elements;
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero image */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-navy/70" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <span className="bg-brand text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mt-4 text-white/60 text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          {/* Article */}
          <article>
            <Link href="/blog" className="flex items-center gap-2 text-brand text-sm font-semibold mb-8 hover:underline">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="prose prose-slate max-w-none">
              {renderContent(post.content)}
            </div>

            {/* CTA inside article */}
            <div className="mt-12 bg-brand rounded-2xl p-8 text-white">
              <h3 className="font-display font-bold text-2xl mb-3">Need Expert Guidance?</h3>
              <p className="text-white/70 mb-5 text-sm leading-relaxed">
                Our consultants are available Mon–Sat, 9 AM – 7 PM for free initial consultations.
              </p>
              <Link href="/contact" className="btn-gold text-sm px-6 py-3 inline-block">
                Book Free Assessment →
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* WhatsApp CTA */}
            <div className="bg-brand-navy rounded-2xl p-6 text-white">
              <h4 className="font-display font-bold text-xl mb-2">Quick Help?</h4>
              <p className="text-white/60 text-sm mb-4">Chat with our visa experts on WhatsApp — instant replies.</p>
              <a
                href={BRAND.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-bold py-3 rounded-xl transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Related posts */}
            <div>
              <h4 className="font-bold text-brand-navy mb-4">Related Articles</h4>
              <div className="space-y-4">
                {related.map((rel) => (
                  <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group flex gap-3">
                    <div className="relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-brand-navy group-hover:text-brand transition-colors leading-tight line-clamp-2">
                        {rel.title}
                      </h5>
                      <span className="text-slate-400 text-xs">{rel.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
