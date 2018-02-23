import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import Counter from './components/Counter.vue'
import Main from './components/Main.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          component: Main,
        },
        {
          path: 'counter',
          component: Counter,
        },
      ],
    },
  ],
})

export default router
