'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const { toast } = useToast();
  const t = useTranslations();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">{t("contact.tag")}</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-3">
              {t("contact.title1")} <span className="gradient-text">{t("contact.title2")}</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">{t("contact.subtitle")}</p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center rounded-2xl bg-card border border-border card-shadow">
                  <CheckCircle className="w-16 h-16 text-secondary mb-6" />
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">{t("contact.thankyou.title")}</h3>
                  <p className="text-muted-foreground max-w-md">{t("contact.thankyou.desc")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-card border border-border card-shadow">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("contact.name")}</Label>
                      <Input id="name" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-background" maxLength={100} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("contact.email")}</Label>
                      <Input id="email" type="email" placeholder="john@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-background" maxLength={255} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">{t("contact.company")}</Label>
                      <Input id="company" placeholder="Acme Corp" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="bg-background" maxLength={100} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">{t("contact.serviceLabel")}</Label>
                      <Select onValueChange={(val: string) => setFormData({ ...formData, service: val })}>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder={t("contact.servicePlaceholder")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website">{t("contact.serviceWebsite")}</SelectItem>
                          <SelectItem value="seo">{t("contact.serviceSeo")}</SelectItem>
                          <SelectItem value="chatbot">{t("contact.serviceChatbot")}</SelectItem>
                          <SelectItem value="redesign">{t("contact.serviceRedesign")}</SelectItem>
                          <SelectItem value="automation">{t("contact.serviceAutomation")}</SelectItem>
                          <SelectItem value="platform">{t("contact.servicePlatform")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.message")}</Label>
                    <Textarea id="message" placeholder={t("contact.messagePlaceholder")} rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-background resize-none" maxLength={2000} />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-cyan font-semibold group">
                    {t("contact.submit")}
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="p-6 rounded-2xl bg-card border border-border card-shadow">
                <h3 className="font-display font-bold text-lg text-foreground mb-4">{t("contact.info.title")}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t("contact.info.email.label")}</div>
                      <div className="text-foreground font-medium">hello@neuralforge.io</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t("contact.info.phone.label")}</div>
                      <div className="text-foreground font-medium">+1 (555) 000-0000</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t("contact.info.location.label")}</div>
                      <div className="text-foreground font-medium">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl gradient-bg text-primary-foreground">
                <h3 className="font-display font-bold text-lg mb-3">{t("footer.consultation")}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">{t("footer.consultationDesc")}</p>
                <div className="text-sm font-medium text-secondary">{t("footer.response")}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
