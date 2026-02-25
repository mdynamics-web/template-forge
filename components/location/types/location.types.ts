import { LucideIcon } from "lucide-react";

export type CityType = "alicante" | "valencia";

export interface LocationPageProps {
  city?: CityType;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  expandedDesc: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface BeforeAfterItem {
  label: string;
  value: string;
}

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
}

export interface AuthorityItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface StatementItem {
  icon: LucideIcon;
  text: string;
}

export interface CaseStudyData {
  businessName: string;
  industry: string;
  before: {
    title: string;
    items: BeforeAfterItem[];
  };
  after: {
    title: string;
    items: BeforeAfterItem[];
  };
  metrics: StatItem[];
}

export interface LocationData {
  city: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    badge: string;
    title1: string;
    titleCity: string;
    title2: string;
    subtitle: string;
    cta: string;
    cta2: string;
  };
  reality: {
    tag: string;
    title: string;
    stats: StatItem[];
    statements: StatementItem[];
  };
  services: {
    tag: string;
    title: string;
    items: ServiceItem[];
  };
  caseStudy: CaseStudyData;
  process: {
    tag: string;
    title: string;
    steps: ProcessStep[];
  };
  authority: {
    tag: string;
    title: string;
    items: AuthorityItem[];
  };
  cta: {
    title1: string;
    titleCity: string;
    title2: string;
    subtitle: string;
    button: string;
    urgency: string;
  };
  testimonialPlaceholder: {
    quote: string;
    author: string;
    company: string;
  };
}
