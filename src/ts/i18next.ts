import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


export const i18next = (): void => {
    i18n
        .use(initReactI18next)
        .use(LanguageDetector)
        .use(HttpApi)
        .init({
            fallbackLng: "en",
            detection: {
                order: ['cookie', 'htmlTag', 'localStorage', 'sessionStorage', 'path'],
                caches: ['cookie'],
            },
            backend: {
                loadPath: 'public/assets/locales/{{lng}}/translation.json',
            },
            react: {
                useSuspense: false
            },
            interpolation: {
                escapeValue: false,
            }
        });
}