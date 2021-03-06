// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/bootstrap.css'
import './assets/js/jquery-3.2.1.js'
import './assets/js/less.min.js'
//import './assets/js/vue-resource.js'

import Header from './components/Header'
import Footer from './components/Footer'
import Prolist from './components/ProlistComponent'
Vue.component('Prolist',Prolist)
Vue.component('Header',Header)
Vue.component('Footer',Footer)
// import VueResource from 'Vue-resource'
// Vue.use(VueResource)
Vue.config.productionTip = false

import axios from 'axios';
axios.defaults.withCredentials = true;//是否携带cookie信息
Vue.prototype.$axios = axios ;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
