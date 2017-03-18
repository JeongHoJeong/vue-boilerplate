import Vue from 'vue'
import 'style.less'

declare var require: any
const App = require('App')

const app = new Vue({
  el: '#app',
  template: '<App />',
  components: {
    App: App
  }
})
