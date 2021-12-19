import Vue from 'vue'
import App from './App.vue'
import { VueHammer } from 'vue2-hammer'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
    config: {
      id: 'G-MLY8K6YLN0'
    },
    params: {
      send_page_view: true
    }
});
Vue.use(VueHammer);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
