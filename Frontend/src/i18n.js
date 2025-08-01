import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      search: "Search",
      description:
        "For an craft unique, personalized reading lists by analyzing individual preferences, past reading habits, and trends, making book selection easier than ever before",
      aiReads: "AI Reads Your Mind: Your Personalized Reading List",
    },
  },
  pt: {
    translation: {
     
      search: "Busca",
      description:
        "Para criar listas de leitura personalizadas e únicas analisando preferências individuais, hábitos de leitura passados e tendências, facilitando a escolha de livros como nunca antes",
      aiReads: "A IA Lê Sua Mente: Sua Lista de Leitura Personalizada", 
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.split("-")[0],
  interpolation: { escapeValue: false },
});

export default i18n;
