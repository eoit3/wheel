<template>
  <div class="car">
    <div class="content" v-if="detail">
      <div class="img" @click="clickTo"><img :src="detail.CoverPhoto" data-hover="hover" class=""> <span data-hover="hover">{{detail.pic_group_count}}张照片</span></div> 
      <div class="info"><p>{{detail.market_attribute.dealer_price}}</p> <p>指导价 {{detail.market_attribute.official_refer_price}}</p> 
      <div class="action active flex-row">
      <button  @click="jump(detail.list[0].car_id)">{{detail.BottomEntranceTitle}}</button></div></div>
      <div class="car-list">

      <div class="c-type"><span :class="[ind === 0?'active':'']" @click="clickTab(0,'全部')">全部</span>
        <span v-for="(item,index) in year" :key="index" :class="[ind === index+1?'active':'']" @click="clickTab(index+1,item)">{{item}}</span>
      </div>
      </div>
     <tabCar :lists="all"/>
    </div>
     
    <div  @click="jump(detail.list[0].car_id)" class="bottom flex-column flex-centerY"><p >询问底价</p> <p>本地经销商为你报价</p></div>
   
  </div>
</template>

<script>
import { mapState, mapActions,mapMutations} from 'vuex'
import {mergeCar,sortCar,filter} from '@/utils/index'
import tabCar from '../components/car/tabCar'
export default {
  data(){
    return{
      ind:0
    }
  },
  components:{
    tabCar
  },
  computed:{
    ...mapState({
      CityID:state=>state.question.CityID,
      detail:state=>state.detail.detail,
      list:state=>state.detail.list,
      all:state=>state.detail.all,
      year:state=>state.detail.year,
      filt:state=>state.detail.filt
    })
  },
  methods: {
    ...mapMutations({
      'updatetab':'detail/updatetab'
    }),
    ...mapActions({
      'getCarlist':'detail/getCarlist',
      'getCity':'question/getCity'
    }),
    clickTab(num,item){
      this.ind = num
      this.updatetab(item)
    },
    jump(carid){
      this.$router.push({path:'/Quotation',query:{Car_id:carid,CityID:this.CityID}})
    },
    clickTo(){
      this.$router.push({path:'/img'})
      
    }
  },
  created(){
    this.getCity()
    this.getCarlist(this.$route.query.SerialID)
    window.sessionStorage.setItem('serialID',this.$route.query.SerialID)
  }
};
</script>

<style scoped>
.car{
  width: 100%;
  height: 100%;
  background: #f4f4f4;
}
.content{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.img{
  position: relative;
  height: 3.29rem;
  overflow: hidden;
}
.img img {
  width: 100%;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  position: absolute;
}
.img span {
  position: absolute;
  bottom: .3rem;
  right: .3rem;
  color: #fff;
  padding: 1px .1rem;
  border-radius: .2rem;
  background: rgba(0,0,0,.6);
  font-size: .24rem;
}
.info {
  padding: .36rem .2rem .3rem;
  background: #fff;
  position: relative;
}
.info p{
  display: block;
  max-width: 3.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  
}
.info p:first-child {
  font-size: .36rem;
  color: red;
  font-weight: 500;
}
.info p:nth-child(2) {
  font-size: .26rem;
  color: silver;
}
.info .action {
  -webkit-box-pack: justify;
  justify-content: space-between;
  position: absolute;
  right: .2rem;
  top:-.1rem;
  -webkit-box-orient: horizontal;
  flex-direction: row;
}
.bottom{
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 99;
  background: #3aacff;
  height: 1rem;
  color: #fff;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  display: flex;
  -webkit-box-direction: normal;
}
.info .active button {
  width: 100%;
  border-radius: .1rem;
  font-size: .32rem;
  height: .7rem;
  width: 3.45rem;
  border: none;
  box-sizing: border-box;
}
.info .action button:last-child {
  background: #00afff;
  color: #fff;
}
.flex-column {
  -webkit-box-orient: vertical;
  flex-direction: column;
}
.bottom p:first-child {
  font-size: .32rem;
  margin-top: .12rem;
  font-weight: 500;
}
.bottom p:nth-child(2) {
  font-size: .24rem;
}
.car-list .c-type {
  border-top: .15rem solid #f4f4f4;
  padding: 0 .3rem;
  font-size: .32rem;
  height: .77rem;
  line-height: .77rem;
  background: #fff;
}
.car-list .c-type span {
  padding-right: .46rem;
}
.car-list .c-type span.active {
    color: #3aacff;
}
</style>