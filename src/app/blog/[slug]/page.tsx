import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS, BRAND } from "@/lib/constants";
import { Clock, Calendar, ArrowLeft, Tag } from "lucide-react";

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

/** Parse inline markdown: **bold**, *italic* */
function parseInline(text: string): React.ReactNode {
  // Split by bold and italic markers
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-semibold text-brand-navy">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={idx} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

function renderContent(markdown: string) {
  const lines = markdown.split("\n");
  const elements: JSX.Element[] = [];
  let listBuffer: { type: "ul" | "ol"; items: React.ReactNode[] } | null = null;

  function flushList() {
    if (!listBuffer) return;
    const key = `list-${elements.length}`;
    if (listBuffer.type === "ul") {
      elements.push(
        <ul key={key} className="my-5 space-y-2 pl-6">
          {listBuffer.items.map((item, j) => (
            <li key={j} className="text-slate-600 leading-relaxed list-disc marker:text-brand">
              {item}
            </li>
          ))}
        </ul>
      );
    } else {
      elements.push(
        <ol key={key} className="my-5 space-y-2 pl-6">
          {listBuffer.items.map((item, j) => (
            <li key={j} className="text-slate-600 leading-relaxed list-decimal marker:text-brand marker:font-semibold">
              {item}
            </li>
          ))}
        </ol>
      );
    }
    listBuffer = null;
  }

  lines.forEach((line, i) => {
    // Inline image: ![alt](url)
    const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
      flushList();
      elements.push(
        <figure key={i} className="my-8 rounded-2xl overflow-hidden shadow-md">
          <div className="relative h-64 sm:h-80 w-full">
            <Image
              src={imgMatch[2]}
              alt={imgMatch[1]}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
          {imgMatch[1] && (
            <figcaption className="text-center text-xs text-slate-400 italic bg-slate-50 px-4 py-2.5">
              {imgMatch[1]}
            </figcaption>
          )}
        </figure>
      );
      return;
    }

    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={i} className="font-display font-bold text-2xl text-brand-navy mt-12 mb-4 pb-3 border-b border-slate-100">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={i} className="font-display font-bold text-xl text-brand-navy mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**") && !line.slice(2, -2).includes("**")) {
      // Standalone bold line (label / key point)
      flushList();
      elements.push(
        <p key={i} className="font-semibold text-brand-navy mt-5 mb-1">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      if (listBuffer?.type !== "ul") {
        flushList();
        listBuffer = { type: "ul", items: [] };
      }
      listBuffer.items.push(parseInline(line.slice(2)));
    } else if (/^\d+\. /.test(line)) {
      if (listBuffer?.type !== "ol") {
        flushList();
        listBuffer = { type: "ol", items: [] };
      }
      listBuffer.items.push(parseInline(line.replace(/^\d+\. /, "")));
    } else if (line.trim() === "") {
      flushList();
      elements.push(<div key={i} className="h-2" />);
    } else {
      flushList();
      elements.push(
        <p key={i} className="text-slate-600 leading-relaxed text-base mb-0">
          {parseInline(line)}
        </p>
      );
    }
  });

  flushList();
  return elements;
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const CATEGORY_STYLES: Record<string, string> = {
    "Visit Visa": "bg-blue-50 text-blue-700 border-blue-200",
    "Immigration": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Jobseeker Visa": "bg-amber-50 text-amber-700 border-amber-200",
    "Study Abroad": "bg-purple-50 text-purple-700 border-purple-200",
  };
  const catStyle = CATEGORY_STYLES[post.category] || "bg-brand/10 text-brand border-brand/20";

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-brand-navy/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border mb-4 ${catStyle}`}>
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight max-w-3xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-white/60 text-sm">
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

      {/* Content area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14">
          {/* Article */}
          <article>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand text-sm font-semibold mb-8 hover:gap-3 transition-all duration-200 bg-brand/5 px-4 py-2 rounded-full"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            {/* Excerpt lead */}
            <p className="text-lg text-slate-500 leading-relaxed mb-8 pb-8 border-b border-slate-100 font-light italic">
              {post.excerpt}
            </p>

            {/* Rendered content */}
            <div className="space-y-1 text-base">
              {renderContent(post.content)}
            </div>

            {/* Bottom CTA */}
            <div className="mt-14 bg-gradient-to-br from-brand to-brand-navy rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <h3 className="font-display font-bold text-2xl sm:text-3xl mb-3 relative z-10">
                Need Expert Guidance?
              </h3>
              <p className="text-white/70 mb-6 text-sm sm:text-base leading-relaxed max-w-md relative z-10">
                Our consultants are available Mon–Sat, 9 AM – 7 PM for free initial consultations.
                Get your visa journey started today.
              </p>
              <div className="flex flex-wrap gap-3 relative z-10">
                <Link
                  href="/contact"
                  className="btn-gold text-sm px-6 py-3 inline-block"
                >
                  Book Free Assessment →
                </Link>
                <a
                  href={BRAND.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {/* WhatsApp quick help */}
            <div className="bg-brand-navy rounded-2xl p-6 text-white">
              <h4 className="font-display font-bold text-lg mb-2">Quick Help?</h4>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                Chat with our visa experts on WhatsApp — instant replies, no waiting.
              </p>
              <a
                href={BRAND.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-bold py-3 rounded-xl transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Free assessment CTA */}
            <div className="bg-gradient-to-br from-brand-sky/10 to-brand/5 border border-brand/15 rounded-2xl p-6">
              <h4 className="font-display font-bold text-lg text-brand-navy mb-2">
                Free Consultation
              </h4>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                Not sure which visa is right for you? Our experts will assess your profile for free.
              </p>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-navy text-white text-sm font-bold py-3 rounded-xl transition-colors"
              >
                Book Free Assessment
              </Link>
            </div>

            {/* Related posts */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-brand-navy mb-5 text-sm uppercase tracking-wider">
                Related Articles
              </h4>
              <div className="space-y-5">
                {related.map((rel) => (
                  <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group flex gap-4 items-start">
                    <div className="relative w-20 h-16 flex-shrink-0 rounded-xl overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm font-semibold text-brand-navy group-hover:text-brand transition-colors leading-snug line-clamp-2 mb-1">
                        {rel.title}
                      </h5>
                      <div className="flex items-center gap-2 text-slate-400 text-xs">
                        <Clock className="w-3 h-3" />
                        {rel.readTime}
                      </div>
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
