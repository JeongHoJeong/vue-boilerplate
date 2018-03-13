import Vue from 'vue'
import VueRouter from 'vue-router'

import AboutPage from './components/AboutPage.vue'
import App from './components/App.vue'
import CounterPage from './components/CounterPage.vue'
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
          children: [
            {
              path: '',
              component: CounterPage,
            },
            {
              path: 'about',
              component: AboutPage,
            },
          ],
        },
      ],
    },
  ],
})

export default router
