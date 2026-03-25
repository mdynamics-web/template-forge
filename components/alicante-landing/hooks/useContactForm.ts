'use client'

import { useState, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { FormData, FormState } from "../types";

/**
 * Custom hook for contact form logic
 * Follows Single Responsibility Principle - handles form state and submission
 * Follows Dependency Inversion Principle - depends on toast abstraction
 */
type ContactSource = "alicante" | "valencia" | "location";

interface UseContactFormOptions {
  source: ContactSource;
  locale: "es" | "en";
}

export const useContactForm = ({ source, locale }: UseContactFormOptions) => {
  const { toast } = useToast();
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!formData.name || !formData.email) {
        toast({
          title: locale === "es" ? "Por favor completa nombre y email" : "Please complete name and email",
          variant: "destructive",
        });
        return;
      }

      setFormState("sending");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            source,
            locale,
          }),
        });

        if (!response.ok) {
          throw new Error("Contact form submission failed");
        }

        setFormState("sent");
        toast({
          title: locale === "es" ? "¡Recibido! Te contactamos en 48h." : "Received! We'll contact you within 48h.",
        });
      } catch {
        setFormState("idle");
        toast({
          title: locale === "es" ? "No se pudo enviar el mensaje" : "Message could not be sent",
          variant: "destructive",
        });
      }
    },
    [formData, locale, source, toast]
  );

  const updateFormField = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  return {
    formState,
    formData,
    handleSubmit,
    updateFormField,
  };
};
