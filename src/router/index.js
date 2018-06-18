// import Router from 'vue-router'
import App from '../App.vue'
import Layout from "../layout/index";
import Login from "../pages/login/Login.vue";
import Home from "../pages/home/Home";
import Activity from "../pages/activity/Activity.vue";
// import Temp from '../pages/home/Temp.vue'
// Vue.use(Router)

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'home',
        component: Home,
        meta: {keepAlive: true}
      },
      {
        path: 'activity',
        component: Activity,
      }
    ]
  },

  // {
  //   path: '/temp',
  //   component: Temp
  // }
]

