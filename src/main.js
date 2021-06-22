import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faSpeakerDeck, faKaggle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSpeakerDeck, faKaggle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
