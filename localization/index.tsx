import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./langFiles/en.json";
import translationFr from "./langFiles/fr.json";

const resources = {
  "pt-BR": { translation: translationFr },
  "en-US": { translation: translationEn },
};

const initI18n = async () => {
  i18n.use(initReactI18next).init({
    compatibilityJSON: "v4",
    resources,
    lng: "en-US",
    fallbackLng: "pt-BR",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
