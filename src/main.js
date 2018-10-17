import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload,{
  preLoad: 1.3,
  loading: 'http://img.zcool.cn/community/012f00595ca1bca8012193a3ee2ae1.gif'
})
import './styles/common.css';
import router from './router/index'
import store from './store/index'
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
