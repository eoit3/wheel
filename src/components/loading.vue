<template>
  <div class="load_wrap">
    <div class="load">
      <img class="load_img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539005002401&di=60b6d98fbcffc165424559620c54c0bb&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Fkoen_li%2Fpic%2Fitem%2Fd6c019faa498715d024f561b.jpg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.load_wrap{
  position: fixed;
  width:100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 2;
}
.load{
  display: block;
  position: absolute;
  left:50%;
  top:30%;
  transform: translateY(-50%);
  transform: translateX(-50%);
}
.load_img{
  height: 4.5rem;
}
</style>