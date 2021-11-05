import Vue from 'vue'
import App from './App.vue'
import { VueHammer } from 'vue2-hammer'
import VueGtag from 'vue-gtag';

Vue.use(VueHammer);
Vue.use(VueGtag, {
  config: {
    id: 'G-32DVTPTR4S'
  }
});
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
