/**
 * i18n Helper Functions
 * Utility functions for internationalization and language handling
 */

import { Language } from './i18n';

/**
 * Gets the full language name from a language code
 * @param code - Language code ('fr' | 'en' | 'ar')
 * @returns Full language name
 */
export function getLanguageName(code: Language): string {
  const languageNames: Record<Language, string> = {
    fr: 'French',
    en: 'English',
    ar: 'Arabic',
  };
  return languageNames[code];
}

/**
 * Gets the native language name from a language code
 * @param code - Language code ('fr' | 'en' | 'ar')
 * @returns Native language name
 */
export function getNativeLanguageName(code: Language): string {
  const nativeNames: Record<Language, string> = {
    fr: 'Français',
    en: 'English',
    ar: 'العربية',
  };
  return nativeNames[code];
}

/**
 * Checks if a language uses RTL (right-to-left) text direction
 * @param code - Language code
 * @returns true if language is RTL
 */
export function isRTLLanguage(code: Language): boolean {
  return code === 'ar';
}

/**
 * Gets the appropriate HTML lang attribute value
 * @param code - Language code
 * @returns HTML lang attribute value
 */
export function getHTMLLangAttribute(code: Language): string {
  const langAttributes: Record<Language, string> = {
    fr: 'fr',
    en: 'en',
    ar: 'ar',
  };
  return langAttributes[code];
}
