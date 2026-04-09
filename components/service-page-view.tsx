"use client";

import { CheckCircle2, ChevronRight, Clock3, Layers3, Target, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "@/i18n/routing";

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

export default function ServicePageView({ content }: ServicePageViewProps) {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 lg:pt-40 pb-16 section-padding">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-secondary text-xs font-semibold uppercase tracking-[0.12em]">
              <Target className="h-4 w-4" />
              {content.serviceName}
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-4">{content.heroTitle}</h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{content.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/contact">{content.heroCta}</Link>
              </Button>
              <span className="text-sm text-muted-foreground">{content.heroSupport}</span>
            </div>
          </div>
          <Card className="border-border/80 bg-card/70">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">{content.processTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {content.processSteps.map((step) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-full border border-secondary/30 bg-secondary/10 p-1.5">
                    <Clock3 className="h-3.5 w-3.5 text-secondary" />
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-padding pb-10">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2">
          <Card className="bg-card/70 border-border/80">
            <CardHeader>
              <CardTitle className="text-2xl">{content.problemsTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {content.problems.map((problem) => (
                <div key={problem} className="flex items-start gap-3">
                  <ChevronRight className="h-4 w-4 mt-0.5 text-secondary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{problem}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/80">
            <CardHeader>
              <CardTitle className="text-2xl">{content.includesTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {content.includes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-secondary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-padding py-10 bg-muted/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6 text-secondary">
            <Wrench className="h-4 w-4" />
            <h2 className="font-display text-2xl font-bold text-foreground">{content.technologiesTitle}</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {content.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8 text-secondary">
            <Layers3 className="h-4 w-4" />
            <h2 className="font-display text-2xl font-bold text-foreground">{content.casesTitle}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {content.cases.map((item) => (
              <Card key={item.title} className="border-border/80 bg-card/70">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between rounded-lg border border-secondary/20 bg-secondary/5 px-4 py-3">
                    <span className="text-sm text-muted-foreground">{item.metricLabel}</span>
                    <span className="font-display text-lg font-bold text-foreground">{item.metricValue}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-10 bg-muted/40">
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
        <div className="max-w-4xl mx-auto rounded-3xl border border-secondary/20 bg-secondary/5 px-6 py-10 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">{content.finalTitle}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{content.finalSubtitle}</p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/contact">{content.finalCta}</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
