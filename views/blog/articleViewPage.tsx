"use client"
import { BlogPostFull, BlogPostMeta } from "@/types/blog";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface ArticleViewPageProps {
  article: BlogPostFull;
  related: BlogPostMeta[];
}

export default function ArticleViewPage({ article, related }: ArticleViewPageProps) {
  const t = useTranslations("blog");

  const handleShare = () => {
    navigator.share?.({ title: article.title, url: window.location.href }).catch(() => {});
  };
  return (
    <section className="bg-primary">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-secondary text-sm font-medium mb-6 hover:gap-3 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("back")}
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full border border-secondary/40 text-secondary text-xs font-semibold tracking-widest uppercase mb-4">
                {article.category}
              </span>
              <h1 className="font-display font-bold text-3xl md:text-5xl text-primary-foreground leading-tight mb-6">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-primary-foreground/50 text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> {article.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> {article.readTime}
                </span>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 hover:text-secondary transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  {t("share")}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose-custom"
        >
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mt-16 mb-6 pb-3 border-b border-secondary/20">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="font-display font-bold text-xl text-primary-foreground mt-10 mb-4">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-primary-foreground/70 leading-relaxed mb-6 text-[15px]">
                  {children}
                </p>
              ),
              strong: ({ children }) => (
                <strong className="text-primary-foreground font-semibold">
                  {children}
                </strong>
              ),
              ul: ({ children }) => (
                <ul className="space-y-3 mb-6 ml-4">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="space-y-3 mb-6 ml-4 list-decimal">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-primary-foreground/70 text-[15px] leading-relaxed pl-2">
                  <span className="text-secondary mr-2">—</span>
                  {children}
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-2 border-secondary pl-6 my-8 py-2">
                  <div className="text-primary-foreground/80 italic text-lg font-display">
                    {children}
                  </div>
                </blockquote>
              ),
              hr: () => (
                <hr className="border-none h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent my-12" />
              ),
              a: ({ href, children }) => (
                <Link
                  href={href || "#"}
                  className="text-secondary hover:text-secondary/80 underline underline-offset-4 transition-colors"
                >
                  {children}
                </Link>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto my-8 rounded-xl border border-border/20">
                  <table className="w-full text-sm">{children}</table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-secondary/10 text-primary-foreground">
                  {children}
                </thead>
              ),
              th: ({ children }) => (
                <th className="px-4 py-3 text-left font-display font-semibold text-xs tracking-wider uppercase">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-3 text-primary-foreground/60 border-t border-border/10">
                  {children}
                </td>
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 rounded-2xl border border-secondary/20 bg-secondary/5 text-center"
        >
          <h3 className="font-display font-bold text-2xl text-primary-foreground mb-3">
            {t("cta")}
          </h3>
          <p className="text-primary-foreground/50 text-sm mb-6 max-w-lg mx-auto">
            {t("ctaDescription")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-secondary/90 glow-cyan transition-all duration-300"
          >
            {t("ctaButton")}
          </Link>
        </motion.div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="flex items-center gap-6 mb-10">
            <h3 className="font-display font-bold text-xl text-primary-foreground whitespace-nowrap">
              {t("relatedArticles")}
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-secondary/30 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                <div className="rounded-2xl border border-border/10 bg-card/5 overflow-hidden hover:border-secondary/30 transition-all duration-500">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={p.image}
                      width={200}
                      height={150}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="text-secondary text-[10px] font-semibold tracking-widest uppercase">
                      {p.category}
                    </span>
                    <h4 className="font-display font-bold text-lg text-primary-foreground mt-2 group-hover:text-secondary transition-colors">
                      {p.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
