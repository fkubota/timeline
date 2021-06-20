import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import Meta from 'vue-meta';
import VueHead from 'vue-head'
Vue.use(VueHead);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
