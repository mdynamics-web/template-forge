"use client";

import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Lightbulb,
  LineChart,
  Megaphone,
  ShoppingCart,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "@/i18n/routing";
import NextLink from "next/link";
import { useTranslations } from "next-intl";
import { ServiceKey } from "@/lib/service-pages";

export type ServicePageCase = {
  title: string;
  description: string;
  metricValue: string;
  metricLabel: string;
};

export type ServicePageFaq = {
  question: string;
  answer: string;
};

export type ServicePageContent = {
  serviceKey: ServiceKey;
  serviceName: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  heroSupport: string;
  problemsTitle: string;
  problems: string[];
  processTitle: string;
  processSteps: string[];
  includesTitle: string;
  includes: string[];
  technologiesTitle: string;
  technologies: string[];
  casesTitle: string;
  cases: ServicePageCase[];
  faqTitle: string;
  faqs: ServicePageFaq[];
  finalTitle: string;
  finalSubtitle: string;
  finalCta: string;
};

type ServicePageViewProps = {
  content: ServicePageContent;
};

type ChartsT = (key: string, values?: Record<string, string | number>) => string;

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const serviceVisualConfig: Record<
  ServiceKey,
  {
    icon: typeof Target;
    glow: string;
    chip: string;
    card: string;
    chartA: string;
    chartB: string;
    chartC: string;
    sectionTint: string;
  }
> = {
  webDesign: {
    icon: Sparkles,
    glow: "from-cyan-500/15 via-cyan-500/5 to-transparent",
    chip: "bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300",
    card: "border-cyan-500/25",
    chartA: "#06b6d4",
    chartB: "#22d3ee",
    chartC: "#0891b2",
    sectionTint: "bg-cyan-500/5",
  },
  localSeo: {
    icon: LineChart,
    glow: "from-emerald-500/15 via-emerald-500/5 to-transparent",
    chip: "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300",
    card: "border-emerald-500/25",
    chartA: "#10b981",
    chartB: "#34d399",
    chartC: "#059669",
    sectionTint: "bg-emerald-500/5",
  },
  apps: {
    icon: Code2,
    glow: "from-blue-500/15 via-blue-500/5 to-transparent",
    chip: "bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300",
    card: "border-blue-500/25",
    chartA: "#3b82f6",
    chartB: "#60a5fa",
    chartC: "#1d4ed8",
    sectionTint: "bg-blue-500/5",
  },
  onlineStores: {
    icon: ShoppingCart,
    glow: "from-amber-500/15 via-amber-500/5 to-transparent",
    chip: "bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300",
    card: "border-amber-500/25",
    chartA: "#f59e0b",
    chartB: "#fbbf24",
    chartC: "#d97706",
    sectionTint: "bg-amber-500/5",
  },
  consulting: {
    icon: Lightbulb,
    glow: "from-violet-500/15 via-violet-500/5 to-transparent",
    chip: "bg-violet-500/10 border-violet-500/30 text-violet-700 dark:text-violet-300",
    card: "border-violet-500/25",
    chartA: "#8b5cf6",
    chartB: "#a78bfa",
    chartC: "#7c3aed",
    sectionTint: "bg-violet-500/5",
  },
};

const baseCartesianOptions = ({
  visual,
  categories,
  yMax,
}: {
  visual: (typeof serviceVisualConfig)[ServiceKey];
  categories: string[];
  yMax?: number;
}): ApexOptions => ({
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    selection: { enabled: false },
    foreColor: "#94a3b8",
    animations: { enabled: true, speed: 550 },
    dropShadow: { enabled: true, top: 1, left: 0, blur: 4, opacity: 0.16 },
  },
  dataLabels: { enabled: false },
  stroke: { curve: "smooth", lineCap: "round", width: [2.6, 5], dashArray: [6, 0] },
  markers: { size: [3, 5], strokeWidth: 0, hover: { sizeOffset: 1 } },
  colors: ["#475569", visual.chartA],
  fill: {
    type: ["solid", "gradient"],
    opacity: [0.07, 0.32],
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0.25,
      opacityFrom: 0.44,
      opacityTo: 0.06,
      stops: [0, 100],
    },
  },
  grid: { borderColor: "#33415533", strokeDashArray: 4 },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontSize: "12px",
    labels: { colors: "#94a3b8", useSeriesColors: true },
  },
  xaxis: {
    categories,
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { style: { colors: "#94a3b8", fontSize: "12px" } },
    tooltip: { enabled: false },
    crosshairs: { show: false },
  },
  yaxis: {
    min: 0,
    max: yMax,
    labels: { style: { colors: "#94a3b8", fontSize: "12px" } },
  },
  tooltip: {
    theme: "dark",
    marker: { show: true },
    shared: false,
    intersect: true,
    inverseOrder: false,
    followCursor: false,
    fixed: { enabled: false },
    fillSeriesColor: false,
    x: { show: true },
    y: { formatter: (value) => `${value}` },
  },
  states: { hover: { filter: { type: "none" } }, active: { filter: { type: "none" } } },
});

const ChartCard = ({
  title,
  description,
  reason,
  technologies,
  type,
  series,
  options,
  visual,
}: {
  title: string;
  description: string;
  reason: string;
  technologies: string[];
  type: "line" | "area" | "bar" | "radar";
  series: { name: string; data: number[] }[];
  options: ApexOptions;
  visual: (typeof serviceVisualConfig)[ServiceKey];
}) => {
  const baseline = series[0]?.data.at(-1) ?? 0;
  const applied = series[1]?.data.at(-1) ?? 0;
  const delta = applied - baseline;

  return (
    <Card className={`bg-card/90 ${visual.card}`}>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-sm text-foreground/90">{reason}</p>
        <div className="flex flex-wrap items-center gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-foreground/85">
              {tech}
            </span>
          ))}
          <span className="ml-auto rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-400">+{delta} pts</span>
        </div>
        <div className="rounded-xl border border-border/70 bg-background/60 p-2 shadow-[inset_0_0_20px_0_rgba(15,23,42,0.25)]">
          <ReactApexChart type={type} series={series} options={options} height={300} />
        </div>
    </CardContent>
  </Card>
  );
};

const ServiceHeader = ({ content, visual }: { content: ServicePageContent; visual: (typeof serviceVisualConfig)[ServiceKey] }) => {
  const ServiceIcon = visual.icon;

  return (
    <section className={`relative pt-32 lg:pt-40 pb-12 section-padding overflow-hidden ${visual.sectionTint}`}>
      <div className={`absolute inset-0 bg-gradient-to-b ${visual.glow}`} />
      <div className="max-w-5xl mx-auto relative">
        <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] ${visual.chip}`}>
          <ServiceIcon className="h-4 w-4" />
          {content.serviceName}
        </span>
        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mt-5">{content.heroTitle}</h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{content.heroSubtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link href="/contact">{content.heroCta}</Link>
          </Button>
          <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground">
            {content.heroSupport}
          </span>
        </div>
      </div>
    </section>
  );
};

const WebDesignService = ({
  content,
  visual,
  tCharts,
}: {
  content: ServicePageContent;
  visual: (typeof serviceVisualConfig)[ServiceKey];
  tCharts: ChartsT;
}) => {
  const categories = [tCharts("month1"), tCharts("month2"), tCharts("month3"), tCharts("month4"), tCharts("month5")];
  const uxOptions = baseCartesianOptions({ visual, categories, yMax: 100 });
  const speedOptions = baseCartesianOptions({ visual, categories, yMax: 100 });

  return (
    <section className="section-padding py-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <Card className={`bg-card/90 ${visual.card}`}>
          <CardHeader>
            <CardTitle className="inline-flex items-center gap-2 text-2xl">{content.problemsTitle}</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-3">
            {content.problems.map((problem) => (
              <div key={problem} className="rounded-xl border border-border/70 bg-background/70 p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{problem}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className={`bg-card/90 ${visual.card}`}>
          <CardHeader>
            <CardTitle className="inline-flex items-center gap-2 text-2xl">
              <Workflow className="h-5 w-5 text-secondary" />
              {content.processTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {content.processSteps.map((step, index) => (
              <div key={step} className="rounded-xl border border-border/70 bg-background/70 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{tCharts("step", { value: index + 1 })}</p>
                <p className="mt-1 text-sm text-foreground">{step}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <ChartCard
          title={tCharts("webDesign.ux.title")}
          description={tCharts("webDesign.ux.description")}
          reason={tCharts("webDesign.ux.reason")}
          technologies={[tCharts("tech.figma"), tCharts("tech.ga4"), tCharts("tech.hotjar")]}
          type="area"
          visual={visual}
          series={[
            { name: tCharts("webDesign.ux.without"), data: [36, 38, 37, 39, 40] },
            { name: tCharts("webDesign.ux.with"), data: [41, 57, 69, 80, 88] },
          ]}
          options={uxOptions}
        />
        <ChartCard
          title={tCharts("webDesign.speed.title")}
          description={tCharts("webDesign.speed.description")}
          reason={tCharts("webDesign.speed.reason")}
          technologies={[tCharts("tech.nextjs"), tCharts("tech.image"), tCharts("tech.cdn")]}
          type="line"
          visual={visual}
          series={[
            { name: tCharts("webDesign.speed.without"), data: [48, 47, 46, 47, 46] },
            { name: tCharts("webDesign.speed.with"), data: [52, 68, 79, 90, 96] },
          ]}
          options={speedOptions}
        />
        <Card className={`bg-card/90 ${visual.card}`}>
          <CardHeader>
            <CardTitle className="text-2xl">{content.includesTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {content.includes.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-secondary" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const LocalSeoService = ({
  content,
  visual,
  tCharts,
}: {
  content: ServicePageContent;
  visual: (typeof serviceVisualConfig)[ServiceKey];
  tCharts: ChartsT;
}) => {
  const visibilityOptions = baseCartesianOptions({
    visual,
    categories: [tCharts("month1"), tCharts("month2"), tCharts("month3"), tCharts("month4"), tCharts("month5"), tCharts("month6")],
    yMax: 100,
  });
  const trustOptions = baseCartesianOptions({
    visual,
    categories: [tCharts("q1"), tCharts("q2"), tCharts("q3"), tCharts("q4"), tCharts("q5")],
    yMax: 100,
  });

  return (
    <section className="section-padding py-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <Card className={`bg-card/90 ${visual.card}`}>
          <CardHeader>
            <CardTitle className="inline-flex items-center gap-2 text-2xl">{content.problemsTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {content.problems.map((problem, index) => (
              <div key={problem} className="rounded-xl border border-border/70 bg-background/70 px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{tCharts("phase", { value: index + 1 })}</p>
                <p className="mt-1 text-sm text-foreground">{problem}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className={`bg-card/90 ${visual.card}`}>
          <CardHeader>
            <CardTitle className="inline-flex items-center gap-2 text-2xl">
              <Megaphone className="h-5 w-5 text-secondary" />
              {content.processTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {content.processSteps.map((step, index) => (
              <div key={step} className="rounded-xl border border-border/70 bg-background/70 px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{tCharts("phase", { value: index + 1 })}</p>
                <p className="mt-1 text-sm text-foreground">{step}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <ChartCard
          title={tCharts("localSeo.gbp.title")}
          description={tCharts("localSeo.gbp.description")}
          reason={tCharts("localSeo.gbp.reason")}
          technologies={[tCharts("tech.gbp"), tCharts("tech.geoGrid"), tCharts("tech.gsc")]}
          type="bar"
          visual={visual}
          series={[
            { name: tCharts("localSeo.gbp.without"), data: [22, 24, 23, 25, 24, 26] },
            { name: tCharts("localSeo.gbp.with"), data: [28, 36, 42, 49, 57, 63] },
          ]}
          options={visibilityOptions}
        />
        <ChartCard
          title={tCharts("localSeo.content.title")}
          description={tCharts("localSeo.content.description")}
          reason={tCharts("localSeo.content.reason")}
          technologies={[tCharts("tech.schema"), tCharts("tech.sem"), tCharts("tech.entities")]}
          type="line"
          visual={visual}
          series={[
            { name: tCharts("localSeo.content.without"), data: [31, 33, 34, 34, 35] },
            { name: tCharts("localSeo.content.with"), data: [35, 47, 59, 70, 81] },
          ]}
          options={trustOptions}
        />
      </div>
    </section>
  );
};

const AppsService = ({
  content,
  visual,
  tCharts,
}: {
  content: ServicePageContent;
  visual: (typeof serviceVisualConfig)[ServiceKey];
  tCharts: ChartsT;
}) => {
  const sprintOptions = baseCartesianOptions({
    visual,
    categories: [tCharts("sprint1"), tCharts("sprint2"), tCharts("sprint3"), tCharts("sprint4"), tCharts("sprint5")],
    yMax: 100,
  });
  const qaOptions = baseCartesianOptions({
    visual,
    categories: [tCharts("release1"), tCharts("release2"), tCharts("release3"), tCharts("release4"), tCharts("release5")],
    yMax: 100,
  });

  return (
    <section className="section-padding py-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <Card className={`bg-card/90 ${visual.card}`}>
          <CardHeader>
            <CardTitle className="text-2xl">{content.problemsTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {content.problems.map((problem) => (
              <div key={problem} className="rounded-lg border border-border/70 px-3 py-2 text-sm text-muted-foreground">
                {problem}
              </div>
            ))}
          </CardContent>
        </Card>
        <ChartCard
          title={tCharts("apps.architecture.title")}
          description={tCharts("apps.architecture.description")}
          reason={tCharts("apps.architecture.reason")}
          technologies={[tCharts("tech.typescript"), tCharts("tech.cleanArchitecture"), tCharts("tech.prisma")]}
          type="line"
          visual={visual}
          series={[
            { name: tCharts("apps.architecture.without"), data: [35, 37, 39, 40, 42] },
            { name: tCharts("apps.architecture.with"), data: [41, 55, 66, 78, 86] },
          ]}
          options={sprintOptions}
        />
        <ChartCard
          title={tCharts("apps.cicd.title")}
          description={tCharts("apps.cicd.description")}
          reason={tCharts("apps.cicd.reason")}
          technologies={[tCharts("tech.githubActions"), tCharts("tech.playwright"), tCharts("tech.sentry")]}
          type="area"
          visual={visual}
          series={[
            { name: tCharts("apps.cicd.without"), data: [43, 44, 45, 44, 46] },
            { name: tCharts("apps.cicd.with"), data: [49, 62, 74, 86, 93] },
          ]}
          options={qaOptions}
        />
        <Card className={`bg-card/90 ${visual.card}`}>
          <CardHeader>
            <CardTitle className="text-2xl">{content.technologiesTitle}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2.5">
            {content.technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-muted-foreground">
                {tech}
              </span>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const OnlineStoresService = ({
  content,
  visual,
  tCharts,
}: {
  content: ServicePageContent;
  visual: (typeof serviceVisualConfig)[ServiceKey];
  tCharts: ChartsT;
}) => {
  const checkoutOptions = baseCartesianOptions({
    visual,
    categories: [tCharts("month1"), tCharts("month2"), tCharts("month3"), tCharts("month4"), tCharts("month5"), tCharts("month6")],
    yMax: 100,
  });
  const channelOptionsBase: ApexOptions = {
    labels: [tCharts("channelOrganic"), tCharts("channelPaid"), tCharts("channelEmail"), tCharts("channelDirect")],
    legend: { position: "bottom", labels: { colors: "#94a3b8" } },
    stroke: { colors: ["#0f172a"], width: 2 },
    dataLabels: { enabled: true, style: { fontSize: "11px", fontWeight: 600 } },
    plotOptions: {
      pie: {
        donut: {
          size: "68%",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: tCharts("onlineStores.channels.totalLabel"),
              color: "#cbd5e1",
            },
          },
        },
      },
    },
    chart: { foreColor: "#94a3b8", toolbar: { show: false }, dropShadow: { enabled: true, blur: 6, opacity: 0.16 } },
    tooltip: {
      theme: "dark",
      followCursor: true,
      fixed: { enabled: false },
      fillSeriesColor: true,
      y: { formatter: (value) => `${value}%` },
    },
    states: { hover: { filter: { type: "none" } } },
  };
  const channelOptionsBaseline: ApexOptions = {
    ...channelOptionsBase,
    colors: ["#64748b", "#475569", "#94a3b8", "#334155"],
  };
  const channelOptionsApplied: ApexOptions = {
    ...channelOptionsBase,
    colors: [visual.chartA, visual.chartB, visual.chartC, "#f59e0b"],
  };

  return (
    <section className="section-padding py-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <Card className={`bg-card/90 ${visual.card}`}>
          <CardHeader>
            <CardTitle className="text-2xl">{content.problemsTitle}</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-3">
            {content.problems.map((problem) => (
              <div key={problem} className="rounded-xl border border-border/70 px-4 py-3 text-sm text-muted-foreground">
                {problem}
              </div>
            ))}
          </CardContent>
        </Card>
        <ChartCard
          title={tCharts("onlineStores.recovery.title")}
          description={tCharts("onlineStores.recovery.description")}
          reason={tCharts("onlineStores.recovery.reason")}
          technologies={[tCharts("tech.klaviyo"), tCharts("tech.checkoutExt"), tCharts("tech.ga4")]}
          type="line"
          visual={visual}
          series={[
            { name: tCharts("onlineStores.recovery.without"), data: [28, 29, 28, 30, 29, 31] },
            { name: tCharts("onlineStores.recovery.with"), data: [33, 41, 50, 58, 67, 74] },
          ]}
          options={checkoutOptions}
        />
        <Card className={`bg-card/90 ${visual.card}`}>
          <CardHeader>
            <CardTitle className="text-2xl">{tCharts("onlineStores.channels.title")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">{tCharts("onlineStores.channels.description")}</p>
            <p className="text-sm text-foreground/90">{tCharts("onlineStores.channels.reason")}</p>
            <div className="flex flex-wrap gap-2">
              {[tCharts("tech.shopify"), tCharts("tech.merchantCenter"), tCharts("tech.metaAds")].map((tech) => (
                <span key={tech} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-foreground/85">
                  {tech}
                </span>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border/70 bg-background/60 p-2">
                <p className="mb-2 text-sm text-muted-foreground">{tCharts("onlineStores.channels.without")}</p>
                <ReactApexChart type="donut" height={250} options={channelOptionsBaseline} series={[24, 52, 10, 14]} />
              </div>
              <div className="rounded-xl border border-emerald-500/35 bg-emerald-500/5 p-2 shadow-[0_0_24px_rgba(16,185,129,0.18)]">
                <p className="mb-2 text-sm text-muted-foreground">{tCharts("onlineStores.channels.with")}</p>
                <ReactApexChart type="donut" height={250} options={channelOptionsApplied} series={[43, 29, 18, 10]} />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="rounded-lg border border-border/70 bg-background/60 px-4 py-3">
                <p className="text-xs text-muted-foreground">{tCharts("onlineStores.channels.organicGain")}</p>
                <p className="text-lg font-semibold text-emerald-400">+19 pts</p>
              </div>
              <div className="rounded-lg border border-border/70 bg-background/60 px-4 py-3">
                <p className="text-xs text-muted-foreground">{tCharts("onlineStores.channels.paidDrop")}</p>
                <p className="text-lg font-semibold text-emerald-400">-23 pts</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const ConsultingService = ({
  content,
  visual,
  tCharts,
}: {
  content: ServicePageContent;
  visual: (typeof serviceVisualConfig)[ServiceKey];
  tCharts: ChartsT;
}) => {
  const roadmapOptions = baseCartesianOptions({
    visual,
    categories: [tCharts("quarter1"), tCharts("quarter2"), tCharts("quarter3"), tCharts("quarter4"), tCharts("quarter5")],
    yMax: 100,
  });
  const kpiOptions = baseCartesianOptions({
    visual,
    categories: [tCharts("areaOffer"), tCharts("areaChannels"), tCharts("areaProcess"), tCharts("areaMeasurement"), tCharts("areaTeam")],
    yMax: 100,
  });

  return (
    <section className="section-padding py-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <Card className={`bg-card/90 ${visual.card}`}>
          <CardHeader>
            <CardTitle className="text-2xl">{content.problemsTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {content.problems.map((step, index) => (
              <div key={step} className="rounded-xl border border-border/70 bg-background/70 px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{tCharts("block", { value: index + 1 })}</p>
                <p className="mt-1 text-sm text-foreground">{step}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className={`bg-card/90 ${visual.card}`}>
          <CardHeader>
            <CardTitle className="text-2xl">{content.processTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {content.processSteps.map((step, index) => (
              <div key={step} className="rounded-xl border border-border/70 bg-background/70 px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{tCharts("block", { value: index + 1 })}</p>
                <p className="mt-1 text-sm text-foreground">{step}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <ChartCard
          title={tCharts("consulting.roadmap.title")}
          description={tCharts("consulting.roadmap.description")}
          reason={tCharts("consulting.roadmap.reason")}
          technologies={[tCharts("tech.notion"), tCharts("tech.lookerStudio"), tCharts("tech.crm")]}
          type="line"
          visual={visual}
          series={[
            { name: tCharts("consulting.roadmap.without"), data: [36, 37, 38, 39, 40] },
            { name: tCharts("consulting.roadmap.with"), data: [40, 53, 65, 76, 84] },
          ]}
          options={roadmapOptions}
        />
        <ChartCard
          title={tCharts("consulting.attribution.title")}
          description={tCharts("consulting.attribution.description")}
          reason={tCharts("consulting.attribution.reason")}
          technologies={[tCharts("tech.bigquery"), tCharts("tech.ga4"), tCharts("tech.powerbi")]}
          type="radar"
          visual={visual}
          series={[
            { name: tCharts("consulting.attribution.without"), data: [45, 41, 43, 32, 46] },
            { name: tCharts("consulting.attribution.with"), data: [68, 61, 74, 63, 72] },
          ]}
          options={{
            ...kpiOptions,
            xaxis: { categories: [tCharts("areaOffer"), tCharts("areaChannels"), tCharts("areaProcess"), tCharts("areaMeasurement"), tCharts("areaTeam")] },
            stroke: { width: 2 },
            fill: { opacity: 0.28 },
          }}
        />
      </div>
    </section>
  );
};

const ServiceBody = ({
  content,
  visual,
  tCharts,
}: {
  content: ServicePageContent;
  visual: (typeof serviceVisualConfig)[ServiceKey];
  tCharts: ChartsT;
}) => {
  if (content.serviceKey === "webDesign") {
    return <WebDesignService content={content} visual={visual} tCharts={tCharts} />;
  }
  if (content.serviceKey === "localSeo") {
    return <LocalSeoService content={content} visual={visual} tCharts={tCharts} />;
  }
  if (content.serviceKey === "apps") {
    return <AppsService content={content} visual={visual} tCharts={tCharts} />;
  }
  if (content.serviceKey === "onlineStores") {
    return <OnlineStoresService content={content} visual={visual} tCharts={tCharts} />;
  }
  return <ConsultingService content={content} visual={visual} tCharts={tCharts} />;
};

export default function ServicePageView({ content }: ServicePageViewProps) {
  const visual = serviceVisualConfig[content.serviceKey];
  const tCharts = useTranslations("servicePages.common.charts");

  return (
    <main className="min-h-screen bg-background">
      <ServiceHeader content={content} visual={visual} />
      <ServiceBody content={content} visual={visual} tCharts={tCharts} />

      <section className={`section-padding py-10 ${visual.sectionTint}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">{content.faqTitle}</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {content.faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} className="rounded-xl border border-border px-4">
                <AccordionTrigger className="text-left text-foreground">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="section-padding py-16">
        <div className={`max-w-4xl mx-auto rounded-3xl border ${visual.card} ${visual.sectionTint} px-6 py-10 text-center`}>
          <h2 className="font-display text-3xl font-bold text-foreground">{content.finalTitle}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{content.finalSubtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/contact">{content.finalCta}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="group">
              <NextLink href="/#cases">
                <span className="inline-flex items-center gap-1.5">
                  {content.casesTitle}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </NextLink>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
