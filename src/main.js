import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'
import VueLazyImageLoading from 'vue-lazy-image-loading'

Vue.config.productionTip = false

Vue.use(VueLazyImageLoading)

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
