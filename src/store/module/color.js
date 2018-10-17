import { getColorlist,getimglist} from '../../api/index'
const state = {
  colorlist:null, // 首页图片
  imglist:null,  // img[0]列表
  page:0,   // 页数
  istrue:true, //次数
  isshow:false, // swiper显示
  // ind:0
}
const mutations = {
  getcolorlist(state,payload){
    state.colorlist = payload
  },
  getpage(state,payload){
    state.page++
  },
  // setind(state,payload){
  //   state.ind = payload
  // },
  getImglist(state,payload){
    console.log(payload)
    if (state.imglist !== null && state.istrue){
     let img = state.imglist
     img.push(...payload.List)
     state.imglist = img
     state.istrue = false
     setTimeout(function(){
      state.istrue = true
     },1500)
    }
    if (state.imglist === null){
      state.imglist = payload.List
    }
  },
  ISshow(state,payload){
    state.isshow = payload
    console.log(state.isshow)
  }
}
const actions = {
  getColorList({commit},payload){
    getColorlist(payload.serialid,payload.carid,payload.colorid).then(res=>{
      commit('getcolorlist',res.data)
    })
  },
  getImgList({commit},payload){
    console.log(payload)
    getimglist(payload.serialID,payload.id,payload.page,payload.size).then(res=>{
      commit('getImglist',res.data)
    })
  }
}

export default {
  namespaced:true,
  state,
  mutations,
  actions
}