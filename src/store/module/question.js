import {getlocation,getFloorCar,getCitylist,getsmCityList} from '../../api/index';
const state = {
  city: null,
  nowcity:null,
  CityID:null,
  floorCar: null,
  citylist: null,
  smcitylist: null
}
const mutations = {
  getcity(state,payload){
    state.city = payload
  },
  nowCity(state,payload){
    state.nowcity = payload
    console.log(state.nowcity)
  },
  getfloorCar(state,payload){
    state.floorCar = payload
  },
  getcityList(state,payload){
    state.citylist = payload
  },
  getsmCitylist(state,payload){
    state.smcitylist = payload
  },
  cityid(state,payload){
    state.CityID = payload
  }
}
const actions = {
  getCity({commit},payload){
    getlocation().then((res)=>{
      window.sessionStorage.setItem('cityid',res.data.CityID)
      commit('getcity',res.data.CityName)
      commit('cityid',res.data.CityID)
      commit('nowCity',res.data.CityName)
    })
  },
  getfloorcar({commit},payload){
    getFloorCar(payload.Car_id,payload.CityID).then((res)=>{
      console.log(res.data)
      commit('getfloorCar',res.data)
    })
  },
  getcitylist({commit},payload){
    getCitylist().then(res=>{
      commit('getcityList',res.data)
    })
  },
  getsmcitylist({commit},payload){
    getsmCityList(payload).then(res=>{
      commit('getsmCitylist',res.data)
    })
  }
}
export default {
  namespaced:true,
  state,
  mutations,
  actions
}
