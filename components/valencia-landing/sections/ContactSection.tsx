"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, Mail, MapPin, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FadeSection } from "@/components/alicante-landing/components/FadeSection";
import { HeroParticles } from "@/components/alicante-landing/components/HeroParticles";
import { useContactForm } from "@/components/alicante-landing/hooks/useContactForm";
import { useLocale, useTranslations } from "next-intl";
import { localizeToValencia } from "@/components/valencia-landing/utils/localizeToValencia";
import { VALENCIA_PHONE_DISPLAY } from "@/lib/contact";
import BrandLoader from "@/components/ui/brand-loader";

export const ContactSection = () => {
  const locale = useLocale();
  const { formState, formData, handleSubmit, updateFormField } = useContactForm({
    source: "valencia",
    locale: locale === "es" ? "es" : "en",
  });
  const t = useTranslations("alicante.contact");
  const tv = (key: string) => localizeToValencia(t(key));

  const trustSignals = [
    {
      icon: MapPin,
      text: tv("trust.signals.0.text"),
    },
    {
      icon: PhoneIcon,
      text: VALENCIA_PHONE_DISPLAY,
    },
    {
      icon: Mail,
      text: tv("trust.signals.2.text"),
    },
    {
      icon: Clock,
      text: tv("trust.signals.3.text"),
    },
  ];

  return (
    <section id="contacto" className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, hsl(217 75% 10%) 0%, hsl(217 75% 15%) 40%, hsl(250 50% 18%) 70%, hsl(217 75% 12%) 100%)",
        }}
      />
      <HeroParticles />

      <div className="relative z-10 max-w-6xl mx-auto section-padding">
        <div className="grid lg:grid-cols-[58%_42%] gap-16">
          <FadeSection>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary-foreground mb-4 leading-tight">
              {tv("title")}
            </h2>
            <p className="text-primary-foreground/60 mb-10 text-[15px] leading-relaxed">
              {tv("subtitle")}
            </p>

            {formState === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary-foreground/[0.06] backdrop-blur-md rounded-3xl p-12 text-center border border-primary-foreground/10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="w-10 h-10 text-green-400" />
                </motion.div>
                <h3 className="font-display font-bold text-2xl text-primary-foreground mb-3">
                  {tv("successTitle")}
                </h3>
                <p className="text-primary-foreground/60">{tv("successMessage")}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder={tv("form.name")}
                    className="bg-primary-foreground/[0.07] border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 rounded-xl h-13 focus:border-secondary/50 transition-colors"
                    value={formData.name}
                    onChange={(e) => updateFormField("name", e.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder={tv("form.email")}
                    className="bg-primary-foreground/[0.07] border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 rounded-xl h-13 focus:border-secondary/50 transition-colors"
                    value={formData.email}
                    onChange={(e) => updateFormField("email", e.target.value)}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="tel"
                      placeholder={tv("form.phone")}
                      className="bg-primary-foreground/[0.07] border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 rounded-xl h-13 focus:border-secondary/50 transition-colors"
                      value={formData.phone}
                      onChange={(e) => updateFormField("phone", e.target.value)}
                    />
                  </div>

                  <Select onValueChange={(value) => updateFormField("service", value)}>
                    <SelectTrigger className="bg-primary-foreground/[0.07] border-primary-foreground/10 text-primary-foreground rounded-xl h-13 focus:border-secondary/50 [&>span]:text-primary-foreground/30 data-[state=open]:border-secondary/50">
                      <SelectValue placeholder={tv("form.servicePlaceholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nueva-web">{tv("form.services.0.label")}</SelectItem>
                      <SelectItem value="mejorar-web">
                        {tv("form.services.1.label")}
                      </SelectItem>
                      <SelectItem value="seo">{tv("form.services.2.label")}</SelectItem>
                      <SelectItem value="tienda">{tv("form.services.3.label")}</SelectItem>
                      <SelectItem value="no-seguro">
                        {tv("form.services.4.label")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Textarea
                  placeholder={tv("form.message")}
                  className="bg-primary-foreground/[0.07] border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 rounded-xl min-h-[120px] focus:border-secondary/50 transition-colors"
                  value={formData.message}
                  onChange={(e) => updateFormField("message", e.target.value)}
                />

                <Button
                  type="submit"
                  disabled={formState === "sending"}
                  className="w-full bg-secondary text-secondary-foreground font-bold h-14 rounded-2xl text-base shadow-[0_0_30px_rgba(0,194,255,0.3)] hover:shadow-[0_0_50px_rgba(0,194,255,0.5)] transition-all duration-300 gap-2 group"
                >
                  {formState === "sending" ? (
                    <span className="flex items-center gap-2">
                      <BrandLoader size="sm" label={locale === "es" ? "Enviando" : "Sending"} />
                      {tv("form.sending")}
                    </span>
                  ) : (
                    <>
                      {tv("form.submit")}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </FadeSection>

          <FadeSection delay={0.2}>
            <div className="lg:pt-16 space-y-8">
              <div className="bg-primary-foreground/[0.04] backdrop-blur-sm rounded-2xl border border-primary-foreground/[0.06] p-8 space-y-5">
                {trustSignals.map((signal, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 text-primary-foreground/80 text-sm"
                  >
                    <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <signal.icon className="w-4 h-4 text-secondary" />
                    </div>
                    <span>{signal.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
  );
};
