import { createRouter, createWebHashHistory } from 'vue-router'

import useLoginStore from '@/store/login'

export const routes = [
  {
    path: '/',
    redirect: 'home',
  },  
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/home/Home.vue'),
    meta: { showFooter: true },
  },
  {
    name: 'search',
    //打个问号代表可以不传params
    path: '/search',
    component: () => import('@/views/search/Search.vue'),
    meta: { showFooter: true },

    //把pramas传入到当前route的props属性中,布尔写法
    //props: true
    //对象写法，可以注入更多的参数
    //props: { a: 10, b: 'abc' }
    //函数写法
    //props: (route)
  },
  {
    name: 'detail',
    path: '/detail/:id',
    component: () => import('@/views/detail/Detail.vue'),
    meta: { showFooter: true },

  },  
  {
    name: 'cart',
    path: '/cart',
    component: () => import('@/views/cart/Cart.vue'),
    meta: { showFooter: true },

  },  
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    meta: { showFooter: false },
  },
  {
    name: 'register',
    path: '/register',
    component: () => import('@/views/register/Register.vue'),
    meta: { showFooter: false },
  },
  {
    name: 'trade',
    path: '/trade',
    component: () => import('@/views/trade/Trade.vue'),
    meta: { showFooter: true },
  },
  {
    name: 'pay',
    path: '/pay/:orderId',
    component: () => import('@/views/pay/Pay.vue'),
    meta: { showFooter: true },
    props: true
  },
  {
    name: 'pay-success',
    path: '/pay-success',
    component: () => import('@/views/pay/PaySuccess.vue'),
    meta: { showFooter: true },
    
  },  
  {
    name: 'my-order',
    path: '/my-order',
    component: () => import('@/views/my-order/MyOrder.vue'),
    meta: { showFooter: true },
    
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//const loginStore = useLoginStore()

router.beforeEach((to, from, next) => {
  const loginStore = useLoginStore()
  switch(to.name) {
    case 'login':

      if(loginStore.loginInfo?.loginName) {
        next('/home')
      } else {
        next()
      }

      break
    case 'register':

      if(loginStore.loginInfo?.loginName) {
        next('/home')
      }else{
        next()
      }

      break 
    case 'cart':

      if(!loginStore.loginInfo?.loginName) {
        next('/home')
      }else{
        next()
      }

      break
    case 'my-order':

      if(!loginStore.loginInfo?.loginName) {
        next('/home')
      }else{
        next()
      }

      break
    case 'trade':

      if(!loginStore.loginInfo?.loginName) {
        next('/home')
      }else{
        next()
      }

      break               
    default:
      next()
      break
  }
  
  
})

export default router