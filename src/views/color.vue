<template>
  <div class="color" v-if="colorList">
    <p data-hover="hover" @click="clickall">全部颜色</p>
    <div>
      <p class="c-type" @click="clicktab"> 
        <span  
        v-if="colorarr" 
        v-for="(item,index) in colorarr" 
        :key="index" 
        :data-index="index"
        :class="[index === isacived?'active':'']"
        >{{item}}</span>
        </p> 
      <ul @click="clickTo">
        <!-- :class="[isacived?'actived':'']" -->
        <li v-for="(item,index) in tablist" :key="index" :data-id="item.ColorId" :data-name="item.Name" data-hover="hover">
        <span :style="{backgroundColor: item.Value}"></span>
            {{item.Name}}
        </li>
   </ul>
   </div>
  </div>
</template>

<script>
  import {mapState,mapMutations,mapActions} from 'vuex'
  export default {
    data(){
      return{
        
      }
    },
    computed:{
      ...mapState({
        'colorList':state=>state.morecolor.colorList,
        'colorarr':state=>state.morecolor.colorarr,
        'tablist':state=>state.morecolor.tablist,
        'year':state=>state.morecolor.year,
        'isacived':state=>state.morecolor.isacived
      })
    },
    methods:{
      ...mapActions({
        'getColor':'morecolor/getColor'
      }),
      ...mapMutations({
         'changeTab':'morecolor/changeTab',
         'changeacived':'morecolor/changeacived',
         'changeLeft':'morecolor/changeLeft',
         'changeRight':'morecolor/changeRight'
      }),
      clicktab(e){
        if(e.target.nodeName ==='SPAN'){
          this.changeTab(e.target.innerHTML)
          this.changeacived(Number(e.target.dataset.index))
        }
      },
      clickTo(e){
        if(e.target.nodeName === 'LI'){
          console.log(e.target.dataset.id,e.target.dataset.name)
          this.changeLeft(e.target.dataset.name)
          window.sessionStorage.setItem('ColorID',e.target.dataset.id)
          this.$router.push('/img')
        }
      },
      clickall(e){
        this.changeLeft(e.target.innerHTML)
        window.sessionStorage.removeItem('CarID')
        window.sessionStorage.removeItem('ColorID')
        this.$router.push('/img')
      }
    },
    mounted(){
     
      let id = window.sessionStorage.getItem('serialID')
      this.getColor(id)
      
    }
  }
</script>

<style scoped>
@import url('../styles/color.css');
</style>