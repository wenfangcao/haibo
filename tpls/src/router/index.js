import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import HomePage from '@/components/HomePage'
import History from '@/components/History.vue'
import Product from '@/components/Product'
import ManageLogin from '@/components/manage/ManLogin'
import Manmain from '@/components/manage/ManMain'
Vue.use(Router)


export default new Router({
 
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path:'/manage',
      name:'manage',
      component:ManageLogin
    },
    {
      path:'/manmain',
      name:"manmain",
      component:Manmain
    }
  ]
})
