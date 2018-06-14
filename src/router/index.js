import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/index'
import Home from '../pages/home/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
    },
    {
      path: '/home',
      component: Home,
    }
  ]
})
