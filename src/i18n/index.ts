import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './locales/en';
import { zh } from './locales/zh';
import { vi } from './locales/vi';
import { id } from './locales/id';
import { hi } from './locales/hi';
import { tr } from './locales/tr';
import { pt } from './locales/pt';
import { af } from './locales/af';
import { ru } from './locales/ru';
import { de } from './locales/de';
import { ar } from './locales/ar';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            zh: { translation: zh },
            vi: { translation: vi },
            id: { translation: id },
            hi: { translation: hi },
            tr: { translation: tr },
            pt: { translation: pt },
            af: { translation: af },
            ru: { translation: ru },
            de: { translation: de },
            ar: { translation: ar },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage'],
            caches: ['localStorage'],
        },
    });

export default i18n;
