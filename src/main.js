import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios';


/*axios.defaults.headers["Content-type"]="application/json";
axios.defaults.baseURL = 'http://localhost:8899/'; /!*!//设置统一路径前缀*!/*/
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
