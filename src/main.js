import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import axios from 'axios'

axios.defaults.baseURL="https://api.it120.cc/xky"
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
