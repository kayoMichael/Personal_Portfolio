export const locales = ['en', 'ja', 'fr', 'zh', 'es', 'ko'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
  fr: 'Français',
  zh: '中文',
  es: 'Español',
  ko: '한국어',
};
