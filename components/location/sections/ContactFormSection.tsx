"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface ContactFormSectionProps {
  t: (key: string) => string;
}

export const ContactFormSection = ({ t }: ContactFormSectionProps) => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t("contact.error"),
        description: t("contact.errorMessage"),
        variant: "destructive",
      });
      return;
    }
    setSubmitted(true);
    toast({
      title: t("contact.thankyou.title"),
      description: t("contact.thankyou.desc"),
    });
  };

  if (submitted) {
    return (
      <section
        id="location-contact"
        className="section-padding bg-background"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-12 rounded-2xl bg-secondary/10 border border-secondary/20"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-display font-bold text-3xl text-foreground mb-4">
              {t("contact.thankyou.title")}
            </h3>
            <p className="text-muted-foreground text-lg">
              {t("contact.thankyou.desc")}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="location-contact" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            {t("contact.title1")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-2xl bg-card border border-border card-shadow"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">{t("contact.name")}</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("contact.email")}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="company">{t("contact.company")}</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">{t("contact.serviceLabel")}</Label>
              <Select
                value={formData.service}
                onValueChange={handleServiceChange}
              >
                <SelectTrigger>
                  <SelectValue
                    placeholder={t("contact.servicePlaceholder")}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">
                    {t("contact.serviceWebsite")}
                  </SelectItem>
                  <SelectItem value="seo">{t("contact.serviceSeo")}</SelectItem>
                  <SelectItem value="chatbot">
                    {t("contact.serviceChatbot")}
                  </SelectItem>
                  <SelectItem value="redesign">
                    {t("contact.serviceRedesign")}
                  </SelectItem>
                  <SelectItem value="automation">
                    {t("contact.serviceAutomation")}
                  </SelectItem>
                  <SelectItem value="platform">
                    {t("contact.servicePlatform")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t("contact.message")}</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact.messagePlaceholder")}
              required
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-cyan font-bold"
          >
            {t("contact.submit")}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};
