// import Router from 'vue-router'
import Login from "../pages/login/Login.vue";
import Nav from '../pages/nav/Nav.vue'
import Home from "../pages/home/Home.vue";
import Activity from "../pages/activity/Activity.vue";
import GoodDetail from "../pages/good/Detail.vue";
import Temp from "../components/order/Order.vue";
import Order from "../pages/my/Order.vue"
import Cart from "../pages/cart/Cart.vue"
import Pay from "../pages/pay/Pay.vue"
// Vue.use(Router)

export default [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Nav,
    children:[
      {
        path: '/home',
        component: Home,
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
        path: '/cart',
        component: Cart,
      },
      {
        path: '/pay',
        component: Pay,
      },
    ]
  },
  {
    path: '/temp',
    component: Temp
  }
]

