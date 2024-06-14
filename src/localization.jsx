import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        resources: {
            en: {
                translation: {
                    overall_sentiment: 'Overall Sentiments',
                    setting: 'Setting',
                    logout: 'Logout',

                },
            },
            id: {
                translation: {
                    overall_sentiment: 'Keseluruhan Sentimen',
                    setting: 'Pengaturan',
                    logout: 'Keluar',

                },
            },
        },
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
