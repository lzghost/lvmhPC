// import Router from 'vue-router'
import Login from "../pages/login/Login.vue";
import Home from "../pages/home/Home";
import Activity from "../pages/activity/Activity.vue";
import GoodDetail from "../pages/good/Detail.vue";
import Temp from "../components/cart/PopCart.vue";
import Order from "../pages/my/Order.vue"
// Vue.use(Router)

export default [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
    meta: {keepAlive: true}
  },
  {
    path: '/activity',
    component: Activity,
  },
  {
    path: '/goodDetail',
    component: GoodDetail,
  },{
    path: '/order',
    component: Order,
  },
  {
    path: '/temp',
    component: Temp
  }
]

