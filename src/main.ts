import Vue from 'vue'
import App from './App.vue'
import { VueHammer } from 'vue2-hammer'
import analytics from './analytics'

Vue.use(VueHammer);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
