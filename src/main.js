// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Directives from './subpage/directives/directives'

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
Vue.use(Directives)
Vue.config.productionTip = false


// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(to.meta.auth)
//   console.log(1111111111111111)
//   //对此路由进行跳转时进行下列验证
//   if (to.meta.auth) {
//     // 对路由进行验证  
//     if (store.state.isLogin == '100') {
//       next()
//     }
//     else {
//       next({ path: '/login'})
//     }
//   } else {
//     next()
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
