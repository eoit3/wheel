import Vue from 'vue'
import Vuex from 'vuex'
import Car from './module/car'
import detail from './module/detail'
import question from './module/question'
import color from './module/color'
import morecolor from './module/morecolor'
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    Car,
    detail,
    question,
    color,
    morecolor
  }
})