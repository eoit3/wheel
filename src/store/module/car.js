import { getBrandList,getMakeList,getCar } from '../../api/index'
const state = {
  list:null,
  master_List:null, // master列表
  ma_id:null, // masterID
  letters:null,// 字母列表,
  tablist:null,    // tab列表,
}
const getters = {
  carList: state => state.list,
  masterList:state=>state.master_List,
  letters:state=>state.letters
}
const mutations = {
  getList(state,payload){
    state.list = payload
  },
  getMaster(state,payload){
    state.masterList = payload
  },
  get_id(state,payload){
    state.ma_id = Number(payload)
  },
  get_letter(state,payload){
    state.letters = payload
  }
  
}
const actions = {
  getList(context){
    getBrandList().then(res=>{
      let engarr =[] ,engarr_2={}
      res.data.forEach((element) => {
        let first = element.Spelling.slice(0,1)
        if(engarr.indexOf(first)===-1){
          engarr.push(first)
          engarr_2[first] = [element]
        } else {
          engarr_2[first].push(element)
        }
      })
      context.commit('get_letter',engarr)
      context.commit('getList',engarr_2)
    })
  },
  getMaster(context){
    getMakeList(context.state.ma_id).then(res=>{
      context.state.master_List =  res.data
    })
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}