import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'// 引入Ant Design Vue组件
 
import 'ant-design-vue/dist/antd.css' // 引入Ant Design Vue样式
 
Vue.use(Antd) //挂载到vue中

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
