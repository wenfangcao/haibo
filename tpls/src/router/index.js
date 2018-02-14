import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import HomePage from '@/components/HomePage'
import CustomTailor from '@/components/CustomTailor.vue'
import Product from '@/components/Product'
import ManageLogin from '@/components/manage/ManLogin'
import Manmain from '@/components/manage/ManMain'
import Recruit from '@/components/Recruit';
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
      path: '/CustomTailor',
      name: 'CustomTailor',
      component: CustomTailor
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
    },
    {
      path:'/recruit',
      name:'recruit',
      component:Recruit
    }
  ]
})
