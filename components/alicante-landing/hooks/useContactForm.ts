'use client'

import { useState, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { FormData, FormState } from "../types";

/**
 * Custom hook for contact form logic
 * Follows Single Responsibility Principle - handles form state and submission
 * Follows Dependency Inversion Principle - depends on toast abstraction
 */
export const useContactForm = () => {
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
          title: "Por favor completa nombre y email",
          variant: "destructive",
        });
        return;
      }

      setFormState("sending");

      // Simulate API call - replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormState("sent");
      toast({
        title: "¡Recibido! Te contactamos en 48h.",
      });
    },
    [formData, toast]
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
