// import Router from 'vue-router'
import Login from '../pages/login/Login.vue'
import Nav from '../pages/nav/Nav.vue'
import Home from '../pages/home/Home'
import Activity from '../pages/activity/Activity.vue'
import GoodDetail from '../pages/good/Detail.vue'
import Cat from '../pages/cat/Cat'
import Order from '../pages/my/Order.vue'
import Cart from '../pages/cart/Cart.vue'
import DetailMb from '../pages/good/DetailMb'

import OrderDetail from '@/components/order/OrderDetail.vue'
import PayMoney from '@/components/pay/PayMoney.vue'
import Temp from '../components/display/DetailMb.vue'
import CartMb from '../pages/cart/CartMb.vue'
// Vue.use(Router)

export default [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/campaigns',
    component: Activity,
  },
  {
    path: '/cat',
    name: 'cat',
    component: Cat,
  },
  {
    path: '/detailMb',
    name: 'detailMb',
    component: DetailMb,
  },
  {
    path: '/',
    component: Nav,
    children:[
      {
        path: 'home',
        name: 'home',
        component: Home,
        meta: {
          keepAlive: true,
        }
      }, {
        path: 'homeFilter',
        component: Home,
      }, {
        path: 'goodDetail',
        name: 'goodDetail',
        component: GoodDetail,
      }, {
        path: 'order',
        component: Order,
      }, {
        path: 'orderDetail/:orderId',
        component: OrderDetail
      }, {
        path: 'pay/:orderId',
        component: PayMoney
      }, {
        path: 'cart',
        component: Cart,
      }, {
        path: 'cartmb',
        component: CartMb,
      }
    ]
  },
  {
    path: '/temp',
    component: Temp
  },
  {
    path: '/test',
    component: CartMb
  }
]

