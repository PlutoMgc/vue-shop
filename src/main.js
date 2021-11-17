import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入字体图标
import '@/assets/fonts/iconfont.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  // 在最后必须 return config
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
// 导入element
import '@/plugins/element.js'

// 导入全局样式表
import '@/assets/css/global.css'


// import './plugins/element.js'

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
