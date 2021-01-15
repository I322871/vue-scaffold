import Vue from "vue";
import VueI18n from "vue-i18n";

import en from "vuetify/lib/locale/en";
import cn from "vuetify/lib/locale/zh-Hans";

Vue.use(VueI18n);

const messages = {
  en: {
    ...require("@/locales/en.json"),
    $vuetify: en,
  },
  cn: {
    ...require("@/locales/zh-cn.json"),
    $vuetify: cn,
  },
};

export default new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});
