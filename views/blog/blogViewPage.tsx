
"use client"
import { BlogPostMeta } from "@/types/blog";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface BlogProps {
    featured: BlogPostMeta
    rest: BlogPostMeta[];
}

export default function BlogViewPage({ featured, rest }: BlogProps) {
    const t = useTranslations("blog");
  return (
    <section className="min-h-screen bg-primary">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--secondary)) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 text-secondary text-xs font-semibold tracking-widest uppercase mb-6">
              {t("tag")}
            </span>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-primary-foreground mb-6">
                {t("title")}
            </h1>
            <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="max-w-6xl mx-auto px-6 -mt-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="relative rounded-2xl overflow-hidden border border-border/20 bg-card/5 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-[420px] overflow-hidden">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/60 md:block hidden" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider">
                        {t("featured")}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-secondary text-xs font-semibold tracking-widest uppercase mb-4">
                        {featured.category}
                    </span>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mb-4 group-hover:text-secondary transition-colors duration-300">
                      {featured.title}
                    </h2>
                    <p className="text-primary-foreground/50 text-sm leading-relaxed mb-6">
                      {featured.description}
                    </p>

                    <div className="flex items-center gap-6 text-primary-foreground/40 text-xs mb-6">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />{" "}
                        {featured.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />{" "}
                        {featured.readTime}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-secondary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                      {t("readArticle")}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </section>
      )}

      {/* Article Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display font-bold text-2xl text-primary-foreground">
            {t("latestArticles")}
          </h2>
          <div className="h-px flex-1 ml-8 bg-gradient-to-r from-secondary/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div className="h-full rounded-2xl border border-border/10 bg-card/5 backdrop-blur-sm overflow-hidden hover:border-secondary/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_hsl(var(--secondary)/0.15)]">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full border border-secondary/40 text-secondary text-[10px] font-semibold tracking-widest uppercase">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg text-primary-foreground mb-3 group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-primary-foreground/40 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between text-primary-foreground/30 text-xs">
                      <span>{post.date}</span>
                      <span>
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}
