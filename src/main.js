import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 引入全局样式
import './styles/index.scss'
// 引入 lib-flexible 动态设置 REM 基准值
import 'amfe-flexible'
// 引入时间过滤器
import './utils/dayjs'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
