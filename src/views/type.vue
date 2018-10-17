<template>
  <div class="type"><!----> 
    <div>
      <p v-if="ishas" class="all" @click="clickall">全部车款</p>
      <div class="c-type">
        <span v-for="(item,index) in year" :key="index" :class="[ind === index?'active':'']" @click="clickTab(index,item)">{{item}}</span>
      </div> 
        <div v-for="(item,key,index) in all" :key="index">
        <p class="tip">{{key==='/ '?'':key}}</p>
        <ul @click="jump">
          <li v-for="(v,i) in item" :key="i" :data-id="v.car_id" :data-name="v.market_attribute.year+'款 '+v.car_name">
            <p><span>{{v.market_attribute.year}}款 {{v.car_name}}</span> <span>{{v.market_attribute.dealer_price_min}}起</span></p> <p><span>{{v.horse_power}}马力{{v.gear_num}}档手动{{v.trans_type}}</span> <span>指导价  {{v.market_attribute.official_refer_price}}</span></p>
          </li>
          
        </ul>
        
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions,mapMutations} from 'vuex'
import {mergeCar,sortCar,filter} from '@/utils/index'
import tabCar from '../components/car/tabCar'
  export default {
    data(){
    return {
        ind:0,
        ishas:false
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
       
      })
    },
      methods: {
      ...mapMutations({
        'updatetab':'detail/updatetab',
        'updateall':'detail/updateall',
        'updateYear':'detail/updateYear',
        'changeRight':'morecolor/changeRight'
      }),
      ...mapActions({
        'getCarlist':'detail/getCarlist',
        'getCity':'question/getCity',
        'getfloorcar':'question/getfloorcar'
      }),
      clickTab(num,item){
        this.ind = num
        this.updatetab(item)
      },
      clickall(e){
        this.changeRight(e.target.innerHTML)
        window.sessionStorage.removeItem('CarID')
        window.sessionStorage.removeItem('ColorID')
        this.$router.push('/img')
      },
      jump(e){
        let Cityid = window.sessionStorage.getItem('cityid')
         if(e.target.nodeName === 'SPAN'){
           if(this.$route.query.id){
            this.$router.push({path:'/img'})
            this.changeRight(e.target.parentNode.parentNode.dataset.name)
             window.sessionStorage.setItem('CarID',e.target.parentNode.parentNode.dataset.id)
           } else {
             this.$router.push({path:'/Quotation',query:{Car_id:e.target.parentNode.parentNode.dataset.id,CityID: Cityid}})
           }
          
         }
         if(e.target.nodeName === 'P'){
          if(this.$route.query.id){
            this.$router.push({path:'/img'})
               this.changeRight(e.target.parentNode.dataset.name)
            this.changeRight(e.target.childNodes[0].childNodes[0].innerHTML)
            window.sessionStorage.setItem('CarID',e.target.parentNode.dataset.id)
          } else {
          this.$router.push({path:'/Quotation',query:{Car_id:e.target.parentNode.dataset.id,CityID: Cityid}})
          }
        }
        if (e.target.nodeName === 'LI'){
          if(this.$route.query.id){
            this.$router.push({path:'/img'})
            this.changeRight(e.target.dataset.name)
            window.sessionStorage.setItem('CarID',e.target.dataset.id)
           } else {
            this.$router.push({path:'/Quotation',query:{Car_id:e.target.dataset.id,CityID:Cityid}})
          }
        }
      }
    },
    mounted(){
      let list = window.sessionStorage.getItem('list')
      let years = window.sessionStorage.getItem('year')
      console.log(this.$route.query)
      if (this.$route.query.id === '1'){
        this.ishas = true
      }
      if(list!==null){
        this.updateall(JSON.parse(list))
        this.updateYear(JSON.parse(years))
      }

    }
  }
</script>

<style scoped>
@import url('../styles/type.css');
</style>