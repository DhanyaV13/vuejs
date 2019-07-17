import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
import store from './store'

Vue.use(VueMaterial);
Vue.use(VueAxios, axios);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  
}).$mount('#app')
