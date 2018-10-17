<template>
  <div class="car-img">
    <div class="flex-row tit" @click="clickTo">
      <p data-hover="hover" :data-id="0"><span> {{left===null?'颜色':left}}</span></p> 
      <p data-hover="hover" :data-id="1"><span><em>{{right===null?'车款':right}}</em></span></p>
      </div> 
    <ul class="img-default">
    <div v-if="colorlist"  v-for="(item,index) in colorlist" :key="index">
      <li v-for="(v,i) in item.List" :key="i" :index="index" :data-id="item.Id + '_' + i + '_' + item.Count"  @click="clickLi(item.Id,i)"><img v-lazy="v.Url.replace('{0}',v.LowSize)"><div v-if="i===0" @click="clicktab(item.Id)"><p>{{item.Name}}</p> <p>{{item.Count}}张&gt;</p></div></li>
      <!-- :style="{backgroundImage:'url('+v.Url.replace('{0}',v.LowSize)+')'}" -->
    </div> 
    </ul>
    <ul v-if="imglist!==null" class="img-list" v-show="ishide"  @scroll="scrollto" ref="scroll"> 
      <!-- :style="{backgroundImage:'url('+v.Url.replace('{0}',v.LowSize)+')'}" -->
       <li v-for="(v,i) in imglist" :key="i" @click="clickshow(i)"><img v-lazy="v.Url.replace('{0}',v.LowSize)"></li>
       <div id="drop" class="drop" ref="drop">
         <!-- <img src="https://h5.chelun.com/2017/official/img/loading.gif"> <span>加载中...</span> -->
       </div>
    </ul>
    <swiper :options="swiperOption" ref="mySwiper" v-show="isshow"  @click="clickImg">
    <!-- slides -->
    <swiper-slide v-for="(v,i) in imglist" :key="i">
    <img 
    class="img"
    v-lazy="v.Url.replace('{0}',v.LowSize)"/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
   
  </swiper>
     <div  class="bot_num" v-show="isshow" v-if="imglist">{{ind}}/{{imglist.length}}</div>
    <button class="btn"  v-show="isshow">询最低价</button>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {mapState,mapMutations,mapActions} from 'vuex'
  export default {
    data(){

      return{
        id:'',
        ind:1,
        ishide:false,

      }
    },
    computed:{
      ...mapState({
        left:state=>state.morecolor.left,
        right:state=>state.morecolor.right,
        colorlist:state=>state.color.colorlist,
        imglist:state=>state.color.imglist,
        page:state=>state.color.page,
        isshow:state=>state.color.isshow,
      }),
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      swiperOption(){
        let that = this
        return {
          on: {
          slideChangeTransitionEnd: function(){
            let a = this.activeIndex + 1
            if (a >= that.imglist.length - 3){
              this.getpage()
              let obj = {}
              obj.serialID = window.sessionStorage.getItem('serialID')
              obj.id = id
              this.id = id
              obj.page = this.page
              obj.size = 30
              this.ishide = true
              this.getImgList(obj)
            }
            that.ind = a
          }
        }
      }
     }
    },
    methods:{
      ...mapActions({
        'getColorList':'color/getColorList',
        'getImgList':'color/getImgList'
      }),
      ...mapMutations({
        'getpage':'color/getpage',
        'ISshow':'color/ISshow',
        'setind':'color/setind'
      }),
      clickshow(ind){
        this.swiper.slideTo(ind, 1000, false)
        this.ind = ind
        this.ISshow(true)
      },
      clickImg(e){
        if (e.target.nodeName === 'DIV'){
          this.ISshow(false)
        }
      },
      clickLi(id,ind){
        if(window.event.target.nodeName ==='LI' || window.event.target.nodeName==='IMG'){
        let obj = {}
        obj.serialID = window.sessionStorage.getItem('serialID')
        obj.id = id
        this.id = id
        obj.page = this.page
        obj.size = 30
        this.getImgList(obj)
        let i = ++ind
        this.ind = i
        this.swiper.slideTo(ind, 1000, false)
        this.ISshow(true)
        }
      },
      clicktab(id){
        this.getpage()
        let obj = {}
        obj.serialID = window.sessionStorage.getItem('serialID')
        obj.id = id
        this.id = id
        obj.page = this.page
        obj.size = 30
        this.ishide = true
        this.getImgList(obj)
      },
      clickTo(e){
        if(e.target.nodeName === 'P' && e.target.dataset.id === '0'){
          this.$router.push({path:'/color'})
        }
        if(e.target.nodeName === 'SPAN' && e.target.parentNode.dataset.id === '0'){
          this.$router.push({path:'/color'})
        }
        if(e.target.nodeName === 'P' && e.target.dataset.id === '1'){
          this.$router.push({path:'/type',query:{id:e.target.dataset.id}})
        }
        if(e.target.nodeName === 'SPAN' && e.target.parentNode.dataset.id === '1'){
          this.$router.push({path:'/type',query:{id:e.target.parentNode.dataset.id}})
        }
        if(e.target.nodeName === 'EM' && e.target.parentNode.parentNode.dataset.id === '1'){
          this.$router.push({path:'/type',query:{id:e.target.parentNode.parentNode.dataset.id}})
        }
      },
      scrollto(e){
        if(this.$refs.drop.getBoundingClientRect().top < 800){
          this.getpage()
          let obj = {}
          obj.serialID = window.sessionStorage.getItem('serialID')
          obj.id = this.id
          obj.page = this.page
          obj.size = 30
          this.getImgList(obj)
        }
      }
    },
    mounted(){
      let serialID = window.sessionStorage.getItem('serialID')
      let CarID = window.sessionStorage.getItem('CarID')
      let ColorID = window.sessionStorage.getItem('ColorID')
      this.getColorList({serialid:serialID,carid:CarID,colorid:ColorID})
      // this.getImgList()
      // console.log(this.imglist)
      // this.left = window.sessionStorage.getItem('left')
      // this.right = window.sessionStorage.getItem('right')
    },
    destroyed(){

    }
  }
</script>

<style scoped>
@import url('../styles/img.css');
</style>