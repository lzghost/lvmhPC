// import Router from 'vue-router'
import Login from "../pages/login/Login.vue";
import Nav from '../pages/nav/Nav.vue'
import Home from "../pages/home/Home";
import Activity from "../pages/activity/Activity.vue";
import GoodDetail from "../pages/good/Detail.vue";
import Cat from '../pages/cat/Cat'
import Temp from "../components/activity/ActivityMb.vue";
import Order from "../pages/my/Order.vue"
import Cart from "../pages/cart/Cart.vue"
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
        path: 'cat',
        component: Cat,
      },{
        path: '/cart',
        component: Cart,
      },
    ]
  },
  {
    path: '/temp',
    component: Activity
  }
]

