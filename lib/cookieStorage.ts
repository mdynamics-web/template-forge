/**
 * Cookie Storage Service
 * Following Single Responsibility Principle - handles only cookie storage logic
 * Following Dependency Inversion Principle - depends on abstractions (interface)
 */

import type { CookieConsentStatus, CookieStorageService } from '@/types/cookies';

const COOKIE_CONSENT_KEY = 'cookie-consent';

class LocalStorageCookieService implements CookieStorageService {
  getConsent(): CookieConsentStatus {
    if (typeof window === 'undefined') return 'pending';
    
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    if (consent === 'accepted' || consent === 'rejected') {
      return consent;
    }
    
    return 'pending';
  }

  setConsent(status: Exclude<CookieConsentStatus, 'pending'>): void {
    if (typeof window === 'undefined') return;
    
    localStorage.setItem(COOKIE_CONSENT_KEY, status);
  }
}

// Export singleton instance - Open/Closed Principle: can be extended with different implementations
export const cookieStorageService: CookieStorageService = new LocalStorageCookieService();
