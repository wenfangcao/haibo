// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/bootstrap.css'
import './assets/js/jquery-3.2.1.js'
import './assets/js/bootstrap.js'
import './assets/js/less.min.js'
import Header from './components/Header'
Vue.component('Header',Header)

import VueResource from 'Vue-resource'
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
