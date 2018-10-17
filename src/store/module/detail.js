import {getCar} from '@/api/index' 
import {mergeCar,sortCar,filter} from '@/utils/index'
const state = {
  detail:null,
  list:null,
  all:null, // 全部
  year:null
}
const mutations = {
  /*
*   本地存储 
*   
*
*/
  updateYear(state,payload){
    state.year = payload
  },
  updateall(state,payload){
    state.all = payload
  },
/*
 *
 *  做数据处理
 *  排序规则: 排量的升序=>发动机功率升序=>吸气方式（自然吸气>涡轮增压）=>年份降序
 * @param {*} state
 * @param {*} payload
 */

  updatetab(state,payload){
    // console.log(payload)
    if (payload === '全部'){
      state.all = mergeCar(sortCar(state.list))
      return ;
    }
    let filt = filter(payload,state.list)
    let newfilt = mergeCar(sortCar(filt))
    state.all = newfilt
  },
  updateCarList(state,payload){
    state.detail = payload
    state.list = payload.list
    let year = []
    payload.list.forEach((item,index)=>{
      if(year.indexOf(item.market_attribute.year)== -1){
        year.push(item.market_attribute.year)
      }
    })
    state.year = year
    state.all = mergeCar(sortCar(payload.list))
    window.sessionStorage.setItem('year',JSON.stringify(state.year))
    window.sessionStorage.setItem('list',JSON.stringify(state.all))
  }
}
const actions = {
  getCarlist({commit}, payload){
    getCar(payload).then((result) => {
        commit('updateCarList',result.data)
    })
  }
}
export default{
  namespaced:true,
  state,
  mutations,
  actions
}