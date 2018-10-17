<template>
  <div class="q" v-if="floorCar">
    <header><p>可向多个商家咨询最低价，商家及时回复</p> 
    <img src="https://h5.chelun.com/2017/official/img/icon-help.png"></header>
    <div class="content"  @scroll="scrollTo">
      <div data-hover="hover" class="q-info flex-row" @click="clickto">
        <img :src="floorCar.details.serial.Picture"/> <div class="flex-column flex-centerX"><p>{{floorCar.details.serial.AliasName}}</p> 
        <p>{{floorCar.details.market_attribute.year}}款 {{floorCar.details.car_name}} </p></div></div>
      <div class="self-info">
          <p class="tip">个人信息</p> 
          <ul>
            <li><span>姓名</span> <input type="text" placeholder="输入你的真实中文姓名" maxlength="4"></li> 
            <li><span>手机</span> <input type="tel" placeholder="输入你的真实手机号码" maxlength="11"></li> 
            <li @click="up"><span>城市</span> <span>{{city}}</span></li>
          </ul> 
          <div class="quotation">
            <button  class="" >询最低价</button>
          </div>
        </div>
      <div class="dealer-info" ref="dealer">
        <p class="tip">选择报价经销商</p> 
        <ul>
          <li v-for="(item,index) in floorCar.list" 
            v-if="arr.length>0"
            :key="index" 
            :data-id="item.dealerId"
            :class="[arr[index].istrue?'active':'']" 
            @click="clickLi(item.dealerId)"
          >
            <p><span>{{item.dealerShortName}}</span><span>{{Number(item.Latitude).toFixed(0)}}万</span></p> 
            <p><span>{{item.address}}</span> <span>售{{item.saleRange}}</span></p>
          </li> 
        </ul>
      </div>
      <div :class="['select-city',isactive?'active':'']">
        <div class="province">
          <div class="location">
            <p>自动定位</p> <p v-if="city" @click="hide">{{nowcity===null?city:nowcity}}</p>
          </div> 
            <div class="list">
              <p>省市</p> 
              <ul>
                  <li v-for="(item,index) in citylist" :key="index" :data-id="item.CityID" @click="cityshow">{{item.CityName}}</li>
              </ul>
              </div>
          </div> 
          <div :class="['city',iscityshow?'active':'']" @click="hide">
                <ul id="cityList">
                  <li v-for="(item,index) in smcitylist" :key="index" :data-id="item.CityID" :data-name="item.CityName">
                    {{item.CityName}}
                  </li>
                </ul>
            </div>
          </div>
          <div class="last" v-if="arr.length>3"></div>
    </div>
    
    <footer v-if="isshow">
      <button>询最低价</button>
    </footer>
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex';
export default {
  data(){
    return{
      arr:[],
      isshow:false,
      isactive:false,
      iscityshow:false,
      isupdata:true
    }
  },
  computed:{
    ...mapState({
      city:state=>state.question.city,
      nowcity:state=>state.question.nowcity,
      CityID:state=>state.question.CityID,
      floorCar:state=>state.question.floorCar,
      citylist:state=>state.question.citylist,
      smcitylist:state=>state.question.smcitylist
    })
  },
  methods:{
    ...mapActions({
      'getCity':'question/getCity',
      'getfloorcar':'question/getfloorcar',
      'getcitylist':'question/getcitylist',
      'getsmcitylist':'question/getsmcitylist'
    }),
    ...mapMutations({
      'getcity':'question/getcity'
    }),
    clickLi(id){
      this.floorCar.list.forEach((element,ind)=>{
        if(element.dealerId === id){
          this.arr[ind].istrue = !this.arr[ind].istrue
        } 
      })
    },
    hide(e){
      if (e.target.nodeName === 'DIV'){
        this.iscityshow = false
      } 
      if (e.target.nodeName === 'LI') {
        this.getcity(e.target.dataset.name)
        this.getfloorcar({Car_id:this.$route.query.Car_id,CityID:e.target.dataset.id})
        this.iscityshow = false
        this.isactive = false
      }
      if (e.target.nodeName === 'P'){
        this.getcity(e.target.innerHTML)
        this.getfloorcar({Car_id:this.$route.query.Car_id,CityID:this.CityID})
        this.iscityshow = false
        this.isactive = false
      }
    },
    up(){
      this.isactive = !this.isactive
      this.getcitylist()
    },
    cityshow(e){
      console.log(e.target.dataset.id)
      this.iscityshow = !this.iscityshow
      this.getsmcitylist(e.target.dataset.id)
    },
    scrollTo(e){
      if(this.$refs.dealer.getBoundingClientRect().top< 10){
        this.isshow = true
      } else{
        this.isshow = false
      }
    },
    clickto(){
      this.$router.push({path:'/type'})
    }
  },

  mounted(){
  this.getCity()
  this.getfloorcar({Car_id:this.$route.query.Car_id,CityID:this.$route.query.CityID})
  },
  updated(){
    let list = this.floorCar.list
    if (this.arr.length === 0){
      this.arr = list.map((element,index) => {
        if (index < 3){
          return {istrue:true}
        } else {
          return {istrue:false}
        }
      })
    }
  }
}
</script>
<style scoped>
@import url('../styles/quotation.css');

</style>