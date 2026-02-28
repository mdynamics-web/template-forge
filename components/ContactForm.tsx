'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.name.length < 3 || !formData.email || formData.message.length < 10) {
      toast.error(t("contact.errorMessage"));
      return;
    }
    
    setIsSubmitting(true);
    
    // Simular envío (aquí puedes agregar tu lógica de API)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    toast.success(t("contact.successMessage"));
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center py-20 text-center rounded-2xl bg-card border border-border card-shadow"
      >
        <CheckCircle className="w-16 h-16 text-secondary mb-6" />
        <h3 className="font-display font-bold text-2xl text-foreground mb-2">
          {t("contact.thankyou.title")}
        </h3>
        <p className="text-muted-foreground max-w-md">
          {t("contact.thankyou.desc")}
        </p>
      </motion.div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-6 p-8 rounded-2xl bg-card border border-border card-shadow"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">{t("contact.name")}</Label>
          <Input 
            id="name" 
            placeholder="John Doe" 
            value={formData.name} 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
            className="bg-background" 
            maxLength={100}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t("contact.email")}</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="john@company.com" 
            value={formData.email} 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
            className="bg-background" 
            maxLength={255}
            required
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">{t("contact.company")}</Label>
          <Input 
            id="company" 
            placeholder="Acme Corp" 
            value={formData.company} 
            onChange={(e) => setFormData({ ...formData, company: e.target.value })} 
            className="bg-background" 
            maxLength={100}
          />
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
        <Textarea 
          id="message" 
          placeholder={t("contact.messagePlaceholder")} 
          rows={5} 
          value={formData.message} 
          onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
          className="bg-background resize-none" 
          maxLength={2000}
          required
        />
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-cyan font-semibold group"
        disabled={isSubmitting}
      >
        {isSubmitting ? t("contact.sending") || "Enviando..." : t("contact.submit")}
        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </form>
  );
}
