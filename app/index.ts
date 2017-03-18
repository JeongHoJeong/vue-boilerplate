import Vue from "vue"
import VueRouter from "vue-router"

import About from "About"
import App from "App"
import Main from "Main"

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
          path: "about",
          component: About,
        },
      ],
    },
  ],
})

const app = new Vue({
  el: "#app",
  template: "<router-view></router-view>",
  router,
})
