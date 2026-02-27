/**
 * Cookie Policy Types
 * Following Interface Segregation Principle - specific interfaces for specific needs
 */

export interface CookiePolicySection {
  title: string;
  text: string;
  items?: string[];
}

export interface CookiePolicyContent {
  metaTitle: string;
  title: string;
  lastUpdated: string;
  section1: CookiePolicySection;
  section2: CookiePolicySection;
  section3: CookiePolicySection;
  section4: CookiePolicySection;
  section5: CookiePolicySection;
  section6: CookiePolicySection;
  section7: CookiePolicySection;
}

export interface CookieConsentContent {
  title: string;
  description: string;
  policyLink: string;
  accept: string;
  reject: string;
}

export type CookieConsentStatus = 'accepted' | 'rejected' | 'pending';

export interface CookieStorageService {
  getConsent(): CookieConsentStatus;
  setConsent(status: Exclude<CookieConsentStatus, 'pending'>): void;
}
