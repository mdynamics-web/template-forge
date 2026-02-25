import { LocationData, CityType } from "../types/location.types";
import {
  AlertTriangle,
  TrendingDown,
  Clock,
  Layout,
  Search,
  Bot,
  Settings,
  RefreshCw,
  Cpu,
  Target,
  Code2,
  BarChart3,
  Rocket,
  MapPin,
  Shield,
  Users,
} from "lucide-react";

export const getLocationData = (
  city: CityType = "alicante",
  t: (key: string) => string
): LocationData => {
  const cityKey = city === "alicante" ? "alicante" : "valencia";

  return {
    city: t(`location.${cityKey}.city`),
    metaTitle: t(`location.${cityKey}.metaTitle`),
    metaDescription: t(`location.${cityKey}.metaDescription`),
    hero: {
      badge: t(`location.${cityKey}.hero.badge`),
      title1: t(`location.${cityKey}.hero.title1`),
      titleCity: t(`location.${cityKey}.hero.titleCity`),
      title2: t(`location.${cityKey}.hero.title2`),
      subtitle: t(`location.${cityKey}.hero.subtitle`),
      cta: t(`location.${cityKey}.hero.cta`),
      cta2: t(`location.${cityKey}.hero.cta2`),
    },
    reality: {
      tag: t(`location.${cityKey}.reality.tag`),
      title: t(`location.${cityKey}.reality.title`),
      stats: [
        {
          value: 73,
          suffix: "%",
          label: t(`location.${cityKey}.reality.stats.0`),
        },
        {
          value: 68,
          suffix: "%",
          label: t(`location.${cityKey}.reality.stats.1`),
        },
        {
          value: 20,
          suffix: "h",
          label: t(`location.${cityKey}.reality.stats.2`),
        },
        {
          value: 4,
          suffix: "seg",
          label: t(`location.${cityKey}.reality.stats.3`),
        },
      ],
      statements: [
        {
          icon: AlertTriangle,
          text: t(`location.${cityKey}.reality.statements.0`),
        },
        {
          icon: TrendingDown,
          text: t(`location.${cityKey}.reality.statements.1`),
        },
        {
          icon: Clock,
          text: t(`location.${cityKey}.reality.statements.2`),
        },
      ],
    },
    services: {
      tag: t(`location.${cityKey}.services.tag`),
      title: t(`location.${cityKey}.services.title`),
      items: [
        {
          icon: Layout,
          title: t(`location.${cityKey}.services.items.0.title`),
          desc: t(`location.${cityKey}.services.items.0.desc`),
          expandedDesc: t(`location.${cityKey}.services.items.0.expandedDesc`),
        },
        {
          icon: Search,
          title: t(`location.${cityKey}.services.items.1.title`),
          desc: t(`location.${cityKey}.services.items.1.desc`),
          expandedDesc: t(`location.${cityKey}.services.items.1.expandedDesc`),
        },
        {
          icon: Bot,
          title: t(`location.${cityKey}.services.items.2.title`),
          desc: t(`location.${cityKey}.services.items.2.desc`),
          expandedDesc: t(`location.${cityKey}.services.items.2.expandedDesc`),
        },
        {
          icon: Settings,
          title: t(`location.${cityKey}.services.items.3.title`),
          desc: t(`location.${cityKey}.services.items.3.desc`),
          expandedDesc: t(`location.${cityKey}.services.items.3.expandedDesc`),
        },
        {
          icon: RefreshCw,
          title: t(`location.${cityKey}.services.items.4.title`),
          desc: t(`location.${cityKey}.services.items.4.desc`),
          expandedDesc: t(`location.${cityKey}.services.items.4.expandedDesc`),
        },
        {
          icon: Cpu,
          title: t(`location.${cityKey}.services.items.5.title`),
          desc: t(`location.${cityKey}.services.items.5.desc`),
          expandedDesc: t(`location.${cityKey}.services.items.5.expandedDesc`),
        },
      ],
    },
    caseStudy: {
      businessName: t(`location.${cityKey}.caseStudy.businessName`),
      industry: t(`location.${cityKey}.caseStudy.industry`),
      before: {
        title: t(`location.${cityKey}.caseStudy.before.title`),
        items: [
          {
            label: t(`location.${cityKey}.caseStudy.before.items.0.label`),
            value: t(`location.${cityKey}.caseStudy.before.items.0.value`),
          },
          {
            label: t(`location.${cityKey}.caseStudy.before.items.1.label`),
            value: t(`location.${cityKey}.caseStudy.before.items.1.value`),
          },
          {
            label: t(`location.${cityKey}.caseStudy.before.items.2.label`),
            value: t(`location.${cityKey}.caseStudy.before.items.2.value`),
          },
          {
            label: t(`location.${cityKey}.caseStudy.before.items.3.label`),
            value: t(`location.${cityKey}.caseStudy.before.items.3.value`),
          },
        ],
      },
      after: {
        title: t(`location.${cityKey}.caseStudy.after.title`),
        items: [
          {
            label: t(`location.${cityKey}.caseStudy.after.items.0.label`),
            value: t(`location.${cityKey}.caseStudy.after.items.0.value`),
          },
          {
            label: t(`location.${cityKey}.caseStudy.after.items.1.label`),
            value: t(`location.${cityKey}.caseStudy.after.items.1.value`),
          },
          {
            label: t(`location.${cityKey}.caseStudy.after.items.2.label`),
            value: t(`location.${cityKey}.caseStudy.after.items.2.value`),
          },
          {
            label: t(`location.${cityKey}.caseStudy.after.items.3.label`),
            value: t(`location.${cityKey}.caseStudy.after.items.3.value`),
          },
        ],
      },
      metrics: [
        {
          value:
            city === "alicante"
              ? 1135
              : 1227,
          suffix: "%",
          label: t(`location.${cityKey}.caseStudy.metrics.0`),
        },
        {
          value: city === "alicante" ? 12 : 14,
          suffix: "x",
          label: t(`location.${cityKey}.caseStudy.metrics.1`),
        },
        {
          value: city === "alicante" ? 340 : 360,
          suffix: "%",
          label: t(`location.${cityKey}.caseStudy.metrics.2`),
        },
      ],
    },
    process: {
      tag: t(`location.${cityKey}.process.tag`),
      title: t(`location.${cityKey}.process.title`),
      steps: [
        {
          icon: Search,
          title: t(`location.${cityKey}.process.steps.0.title`),
          desc: t(`location.${cityKey}.process.steps.0.desc`),
          color: "from-secondary to-secondary",
        },
        {
          icon: Target,
          title: t(`location.${cityKey}.process.steps.1.title`),
          desc: t(`location.${cityKey}.process.steps.1.desc`),
          color: "from-secondary to-accent",
        },
        {
          icon: Code2,
          title: t(`location.${cityKey}.process.steps.2.title`),
          desc: t(`location.${cityKey}.process.steps.2.desc`),
          color: "from-accent to-accent",
        },
        {
          icon: BarChart3,
          title: t(`location.${cityKey}.process.steps.3.title`),
          desc: t(`location.${cityKey}.process.steps.3.desc`),
          color: "from-accent to-secondary",
        },
        {
          icon: Rocket,
          title: t(`location.${cityKey}.process.steps.4.title`),
          desc: t(`location.${cityKey}.process.steps.4.desc`),
          color: "from-secondary to-secondary",
        },
      ],
    },
    authority: {
      tag: t(`location.${cityKey}.authority.tag`),
      title: t(`location.${cityKey}.authority.title`),
      items: [
        {
          icon: MapPin,
          title: t(`location.${cityKey}.authority.items.0.title`),
          desc: t(`location.${cityKey}.authority.items.0.desc`),
        },
        {
          icon: Cpu,
          title: t(`location.${cityKey}.authority.items.1.title`),
          desc: t(`location.${cityKey}.authority.items.1.desc`),
        },
        {
          icon: Shield,
          title: t(`location.${cityKey}.authority.items.2.title`),
          desc: t(`location.${cityKey}.authority.items.2.desc`),
        },
        {
          icon: Users,
          title: t(`location.${cityKey}.authority.items.3.title`),
          desc: t(`location.${cityKey}.authority.items.3.desc`),
        },
      ],
    },
    cta: {
      title1: t(`location.${cityKey}.cta.title1`),
      titleCity: t(`location.${cityKey}.cta.titleCity`),
      title2: t(`location.${cityKey}.cta.title2`),
      subtitle: t(`location.${cityKey}.cta.subtitle`),
      button: t(`location.${cityKey}.cta.button`),
      urgency: t(`location.${cityKey}.cta.urgency`),
    },
    testimonialPlaceholder: {
      quote: t(`location.${cityKey}.testimonialPlaceholder.quote`),
      author: t(`location.${cityKey}.testimonialPlaceholder.author`),
      company: t(`location.${cityKey}.testimonialPlaceholder.company`),
    },
  };
};
