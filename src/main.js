import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify/lib';
import i18n from './i18n'
import axios from 'axios'
import InfiniteLoading from 'vue-infinite-loading';

Vue.config.productionTip = false;

Vue.use(Vuetify);

axios.interceptors.response.use(res => { 
  return res;
}, error => {
  if (error.response.status === 401) {
    router.push({
      name: 'Login'
    });
  } else {
    return error.response;
  }
});
Vue.prototype.$axios = axios;

Vue.use(InfiniteLoading, {
  slots: {
    noMore: i18n.t('noMore'),
    noResults: ''
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
}).$mount('#app');
