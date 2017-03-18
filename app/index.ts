import Vue from "vue"

import router from "router"
import store from "store"
import "style.scss"

const app = new Vue({
  el: "#app",
  template: "<router-view></router-view>",
  router,
  store,
})
