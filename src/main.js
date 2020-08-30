import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'



axios.defaults.baseURL = 'http://127.0.0.1:8088/api/'  // 配置请求根路径
Vue.prototype.$http = axios  // 挂在到Vue实例，后面可通过this调用

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
