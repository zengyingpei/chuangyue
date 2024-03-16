<template>
  <NavBar/>
  <router-view/>
</template>

<script>
// import NavBar from '@/components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
// import $ from 'jquery';

export default ({
  // 用到的全部自己写的组件都要放进来
  components:{
    // NavBar,
  },
  setup:()=>{
  
  }
})
</script>


<style>
  /* 设置html的body部分的背景，且100%填充 */
  body{
    background-image: url('@/assets/images/hh.jpg');
    background-size: cover;
  }
</style>
