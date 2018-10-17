<template>
  <div class="big_wrap" ref="wrap">
    <div class="wrap" ref="sm_wrap">
     <Load v-show="isShow"/>
      <div class="wrap_div" v-for="(item,index) in carList" :key="index"  :ref="item[0].Spelling.slice(0,1)" @click="clickside">
        <h2>{{item[0].Spelling.slice(0,1)}}</h2>
        <li class="car-brand" v-for="(items,indexs) in item" :key="indexs" :data-id="items.MasterID">
          <img v-lazy="items.CoverPhoto"/><span>{{items.Name}}</span>
        </li>
      </div>
      <div class="sider_right" ref="slider_rig"  @touchmove="move">
        <div class="sider_li" ref="sider_li">#</div>
        <div class="sider_li" v-for="(item,index) in carList" :key="index" @click="clickTo(item[0].Spelling.slice(0,1))">{{item[0].Spelling.slice(0,1)}}</div>
      </div>
      </div>
      <Slidebar :istrue="show" :list="masterList"/>
  </div>
</template>

<script>
import Load from '../components/loading'
import Slidebar from '../components/Slidebar';
import {mapActions,mapGetters} from 'vuex'
  export default {
    name:'index',
    data(){
      return{
        isShow:true,
        show:false
      }
    },
    computed:{
      ...mapGetters([
        'carList',
        'masterList',
        'letters'
      ])
    },
    methods:{
      ...mapActions([
        'getList',
        'getMaster'
      ]),
      move(e){
        let height = this.$refs.sider_li.getBoundingClientRect().height
        let now = Math.floor((e.targetTouches[0].clientY -(this.$refs.slider_rig.getBoundingClientRect().top+height)) / height)
        if (now < 0){
          now = 0
        } 
        if(now > this.letters.length - 1){
          now = this.letters.length - 1
        }
        this.$refs.wrap.scrollTo(0,this.$refs[this.letters[now]][0].offsetTop)
      },
      clickTo(ite){
        this.$refs.wrap.scrollTo(0,this.$refs[ite][0].offsetTop)
      },
      clickside(e){
        if (e.target.nodeName === 'IMG' || e.target.nodeName === 'SPAN'){
          console.log(e.target.parentNode.dataset.id)
          this.$store.commit('get_id',Number(e.target.parentNode.dataset.id))
          this.getMaster()
          this.show = true
        }
        if (e.target.nodeName === 'LI'){
          this.$store.commit('get_id',Number(e.target.dataset.id))
          this.getMaster()
          this.show = true
        }
      }
    },
    components:{
      Load,
      Slidebar
    },
    mounted(){
      this.getList()
    },
    updated(){
       if (this.carList){
        this.isShow = false
      }
    }
  }
</script>

<style scoped>
.big_wrap{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.wrap{
  width: 100%;
}
h2{
  box-sizing: border-box;
  width: 100%;
  font-size: .28rem;
  line-height: .4rem;
  padding-left: .3rem;
  background: #f4f4f4;
  color: #aaa;
}
.car-brand{
  display: flex;
  margin: 0 .3rem;
  height: 1rem;
  box-sizing: border-box;
  -webkit-box-align: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
}
.car-brand img{
  height:.8rem;
  border:none;
}
.car-brand span{
  font-size: .32rem;
  margin-left: .4rem;
}
.wrap_div{
  
}
.sider_right{
  position: fixed;
  right: 0;
  top:50%;
  margin:-50% 0 0 0;
  font-size: .25rem;
}
.sider_li{
  font-size: .24rem;
  color: #666;
  font-weight: 500;
  padding: .02rem .1rem;
}
</style>