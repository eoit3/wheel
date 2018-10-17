import {getmoreColor} from '../../api/index'
const state = {
  colorList:null, // 颜色list
  colorarr:null,   // tab
  tablist:null,
  isacived:0, // 下标，
  left:null,
  right:null
}
const mutations = {
  getcolor(state,payload){ // 颜色 list
    state.colorList = payload.data
    state.colorarr = payload.newarr
    for (const key in state.colorList) {
      if (key === payload.bigyear) {
        state.tablist = state.colorList[key]
      }
    }
  },
  changeTab(state,payload){
    for (const key in state.colorList) {
      if (key === payload) {
        state.tablist = state.colorList[key]
      }
    }
  },
  changeacived(state,payload){ // tab样式
    state.isacived = payload
  },
  changeLeft(state,payload){
    state.left = payload
  },
  changeRight(state,payload){
    console.log(payload)
    state.right = payload
    console.log(state.right)
  }
}
const actions = {
  getColor({commit},payload){ // 颜色 list
    getmoreColor(payload).then(res=>{
      let obj = res.data
      var arr = []
      for (const key in obj) {
        arr.push(key)
      }
      arr.reverse()
      let year = arr[0]
      commit('getcolor',{newarr:arr,data:res.data,bigyear:year})
      
    })
  }
}
export default {
  namespaced:true,
  state,
  mutations,
  actions
}