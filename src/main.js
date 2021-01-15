import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify/lib";
import i18n from "./i18n";
import axios from "axios";
import InfiniteLoading from "vue-infinite-loading";
import VueCookies from "vue-cookies";
import "./css/main.css";

Vue.config.productionTip = false;

Vue.use(Vuetify);

Vue.use(VueCookies);

axios.interceptors.response.use(res => {
  return res;
}, error => {
  if (error.response.status === 401) {
    router.push({
      name: "LOGIN"
    });
  } else {
    return error.response;
  }
});
axios.defaults.baseURL = "https://lk-space-service.herokuapp.com";
Vue.prototype.$axios = axios;

Vue.use(InfiniteLoading, {
  slots: {
    noMore: i18n.t("noMore"),
    noResults: ""
  },
});

new Vue({
  router,
  store,
  vuetify: new Vuetify({
    lang: {
      t: (key, ...params) => i18n.t(key, params),
    }
  }),
  i18n,
  render: h => h(App)
}).$mount("#app");
