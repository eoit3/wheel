<template>
  <div class="slide_wrap anim" ref="slide_wrap" @touchstart="start">
    <div v-for="(item,index) in list" :key="index">
      <p>{{list[index].GroupName}}</p>
      <ul @click="clickTo">
        <li class="" v-for="(ite,ind) in item.GroupList" :key="ind" :data-id="ite.SerialID">
          <img :src="ite.Picture">
          <div>
            <p>{{ite.AliasName}}</p>
            <p>{{ite.DealerPrice}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      list:{
        type:Array,
        default:[]
      },
      istrue:{
        type:Boolean,
        default:''
      }
    },
    data(){
      return{
        pos:null
      }
    },
    methods:{
      start(e){
        this.left = e.targetTouches[0].pageX-this.$refs.slide_wrap.getBoundingClientRect().left
      },
      clickTo(e){
        if (e.target.nodeName === 'LI'){
          let ser = Number(e.target.dataset.id)
          this.$router.push({path:'/car',query:{SerialID:ser}})
          window.sessionStorage.setItem('serialID',ser)
        }
        if (e.target.nodeName === 'DIV' || e.target.nodeName === 'IMG'){
          let ser = Number(e.target.parentNode.dataset.id)
          this.$router.push({path:'/car',query:{SerialID:ser}})
          window.sessionStorage.setItem('serialID',ser)
        }
        if (e.target.nodeName === 'P'){
           let ser = Number(e.target.parentNode.parentNode.dataset.id)
          this.$router.push({path:'/car',query:{SerialID:ser}})
          window.sessionStorage.setItem('serialID',ser)
        }
      }
    },
    mounted(){
      let doc_width = window.innerWidth
      if(!this.istrue){
        this.$refs.slide_wrap.style.left = doc_width + 'px'
      }
      this.$nextTick(()=>{
            var startx, starty;
            // 获得角度
            let that = this
            function getAngle(angx, angy) {
                return Math.atan2(angy, angx) * 180 / Math.PI;
            }
            // 根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
            function getDirection(startx, starty, endx, endy) {
                var angx = endx - startx;
                var angy = endy - starty;
                var result = 0;
                //如果滑动距离太短
                if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
                    return result;
                }
                var angle = getAngle(angx, angy);
                if (angle >= -135 && angle <= -45) {
                    result = 1;
                } else if (angle > 45 && angle < 135) {
                    result = 2;
                } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
                    result = 3;
                } else if (angle >= -100 && angle <= 100) {
                    result = 4;
                }
                return result;
            }
            //手指接触屏幕
            this.$refs.slide_wrap.addEventListener("touchstart", function(e) {
                startx = e.touches[0].pageX;
                starty = e.touches[0].pageY;
            }, false);
            //手指离开屏幕
            this.$refs.slide_wrap.addEventListener("touchmove", function(e) {
                var endx, endy;
                endx = e.changedTouches[0].pageX;
                endy = e.changedTouches[0].pageY;
                let pos =  e.targetTouches[0].pageX - that.left
                var direction = getDirection(startx, starty, endx, endy);
                switch (direction) {
                    case 0:
                        
                        break;
                    case 1:
                      
                        break;
                    case 2:
                        break;
                    case 3:
                        that.$refs.slide_wrap.style.left = pos + 'px'
                        break;
                    case 4:
                        that.$refs.slide_wrap.style.left = pos + 'px'
                        break;
                    default:
                }
            }, false)
            this.$refs.slide_wrap.addEventListener("touchend", function(e) {
                var endx, endy;
                endx = e.changedTouches[0].pageX;
                endy = e.changedTouches[0].pageY;
                let pos =  endx - that.left
                var direction = getDirection(startx, starty, endx, endy);
                switch (direction) {
                    case 0:
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        that.$refs.slide_wrap.style.left =  window.innerWidth + 'px'
                        break;
                    case 4:
                        that.$refs.slide_wrap.style.left =  window.innerWidth + 'px'
                        break;
                    default:
                }
            }, false)
      })
    

    },
    updated(){
      if(this.istrue){
        this.$refs.slide_wrap.style.left = 31.5 + '%'
      }
    }
  }
</script>

<style scoped>
.slide_wrap{
  position: fixed;
  top: 0;
  left: 31.5%;
  width: 68.5%;
  height: 100%;
  background: #fff;
  overflow-y:scroll;
  z-index: 3;
}
.slide_wrap>div{
  width: 100%;
  overflow-y:scroll;
}
.anim{
  transition: all .1s;
}
.slide_wrap>div>p{
  margin-left: 1px;
  font-size: .28rem;
  line-height: .48rem;
  background: #f2f2f2;
  padding-left: .3rem;
  color: #717171;
}
.slide_wrap>div>ul{
  margin-left: .1rem;
  -webkit-box-align: center;
  align-items: center;
}

.slide_wrap>div>ul li{
  display: flex;
  height: 1.4rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
}
.slide_wrap li img{
  display: block;
  margin: .2rem .1rem 0 .2rem;
  /* width: 1.8rem; */
  height: 1rem;
}

.slide_wrap li div{
  display: block;
  flex: 1;
}
.slide_wrap li div p:nth-child(1){
  font-size: .34rem;
  color: #5f687a;
  line-height: .6rem;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.slide_wrap li div p:nth-child(2){
  margin-top: .1rem;
  font-size: .28rem;
  color: red;
  line-height: .5rem;
}

</style>