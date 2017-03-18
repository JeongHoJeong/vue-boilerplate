import Vue from "vue"
import VueRouter from "vue-router"

import App from "App"
import Counter from "Counter"
import Main from "Main"

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

export default router
