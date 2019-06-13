import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false

// const token = localStorage.getItem('token');
// if (token) {
//   Vue.prototype.$http.defaults.common['Authorization'] = token;
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
