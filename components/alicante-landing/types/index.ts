/**
 * Types for Alicante Landing Page
 * Following Interface Segregation Principle - specific interfaces for each concern
 */

export interface City {
  name: string;
  client: string;
  x: number;
  y: number;
}

export interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  chip: string;
  delay: number;
}

export interface ProcessStepProps {
  num: string;
  title: string;
  text: string;
  delay: number;
  isLast?: boolean;
}

export interface MetricCardProps {
  end: number;
  suffix: string;
  label: string;
  sub: string;
  delay: number;
  isDecimal?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TrustSignal {
  icon: React.ElementType;
  text: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export type FormState = "idle" | "sending" | "sent";

export interface MetricData {
  end: number;
  suffix: string;
  label: string;
}
