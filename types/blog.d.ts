// Interfaz unificada para los posts del blog
export interface BlogPost {
  slug: string;
  title: string;
  description: string; // Usado como excerpt
  date: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  canonical: string;
  readTime: string;
  locale: string; // 'es' | 'en'
}

// Post con contenido completo (para artículos individuales)
export interface BlogPostFull extends BlogPost {
  content: string;
}

// Metadata del post (sin contenido, para listados)
export type BlogPostMeta = Omit<BlogPostFull, 'content'>;
