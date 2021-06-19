import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Meta from 'vue-meta';
Vue.use(Meta);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
