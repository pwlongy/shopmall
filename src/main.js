import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"

Vue.config.productionTip = false

// 添加事件总线
Vue.prototype.$bus = new Vue()

// 解决移动端 300 毫秒的延迟
FastClick.attach(document.body)

// 使用图片懒加载
Vue.use(VueLazyLoad)

// 提示信息
import { Toast } from 'vant';

Vue.use(Toast);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
