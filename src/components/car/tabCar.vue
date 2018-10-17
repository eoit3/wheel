<template>
  <div>
    <div v-for="(item,key,index) in lists" :key="index">
      <p>{{key==='/ '?'':key}}</p>
        <ul @click="jump">
          <li v-for="(v,i) in item" :key="i" >
            
            <p>{{v.market_attribute.year}}款 {{v.car_name}}</p>
            <p>{{v.horse_power}}马力{{v.gear_num}}档手动{{v.trans_type}}</p> 
            <p><span>指导价 {{v.market_attribute.official_refer_price}}</span> <span>{{v.market_attribute.dealer_price_min}}起</span></p> 
            <button :data-id="v.car_id" data-hover="hover" class="" >询问底价</button>
           </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import {mapActions,mapState} from 'vuex'
  export default {
    computed:{
    ...mapState({
        CityID:state=>state.question.CityID,
      })
    },
    methods:{
      ...mapActions({
        'getCity':'question/getCity',
      })
    },
    props:{
      lists:{
        type:Object,
        default:{}
      }
    },
    methods:{
      jump(e){
        if (e.target.nodeName === 'BUTTON'){
          console.log(e.target.dataset.id)
          this.$router.push({path:'/Quotation',query:{Car_id:e.target.dataset.id,CityID:this.CityID}})
        }
      }
    }
  }
</script>

<style scoped>
div>p {
  padding: 0 .2rem;
  height: .5rem;
  line-height: .5rem;
  font-size: .26rem;
  color: #999;
  background: #f4f4f4;
}
div>ul{
  background: #fff;
}
div ul li{
  padding: 0 .2rem;
  border-bottom: .18rem solid #f4f4f4;
  overflow: hidden;
}
div ul li p:first-child {
    padding: .26rem 0 .18rem;
    font-size: .3rem;
    line-height: 1;
    color: #3d3d3d;
}
div ul li p:nth-child(2) {
    color: #bdbdbd;
    font-size: .26rem;
}
div ul li p:nth-child(3) {
  text-align: right;
  padding-bottom: .1rem;
  font-size: .24rem;
  color: #818181;
}
div ul li button {
  border: none;
  border-top: 1px solid #eee;
  width: 110%;
  height: .8rem;
  font-size: .32rem;
  color: #00afff;
  background: #fff;
  font-weight: 500;
  margin-left: -.3rem;
}
</style>