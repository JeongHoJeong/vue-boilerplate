import Vue from "vue"
import VueRouter from "vue-router"
import Vuex from "vuex"

import App from "App"
import Counter from "Counter"
import Main from "Main"

import store from "store"
import "style.scss"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: App,
      children: [
        {
          path: "",
          component: Main,
        },
        {
          path: "counter",
          component: Counter,
        },
      ],
    },
  ],
})

const app = new Vue({
  el: "#app",
  template: "<router-view></router-view>",
  router,
  store,
})
