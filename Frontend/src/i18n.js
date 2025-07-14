import i18n from "i18next";
import {initReactI18next} from "react-i18next";

const resources = {
    en:{ translation: {welcome: "Welcome", search:"Search"}},
    pt:{ translation: {welcome: "Bem vindo", search:"Busca"}}
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lg: navigator.language.split("-")[0],
    interpolation : { espaceValue: false},

  });

export default i18n;