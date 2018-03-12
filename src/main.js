import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import fastclick from 'fastclick'
import store from './store'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// import 'swiper/dist/css/swiper.css'
import 'assets/css/index.css'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
// Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
