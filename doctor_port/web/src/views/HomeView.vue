<template>
  <div class="box">
    <!-- 首页顶部导航栏 -->
    <div class="header">
      <div class="chat">
        <router-link :class="route_name == 'chat' ? ' select ' : ' no_select'" :to="{ name: 'chat' }" style="text-decoration: none">
          问诊
        </router-link>
      </div>
      <div class="appointment">
        <router-link :class="route_name == 'appointment' ? ' select' : ' no_select'" :to="{ name: 'appointment' }" style="text-decoration: none">
          设置预约时间
        </router-link>
      </div>
    </div>
    <div class="body">
      <!-- 首页主题内容 -->
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  setup: () => {
    const route = useRoute(); //获取当前路由对象

    let route_name = computed(() => route.name); //通过computed实时计算当前页面路由的字符串
    return {
      route_name,
    };
  },
};
</script>

<style scoped>
.box {
  height: 100vh;
}

.header {
  background-color: #6ea3e5;
  width: 100vw;
  height: 8vh;
  display: flex;
  font-size: 3vh;
  padding-left: 3vw;
}

.chat {
  width: 10vw;
  height: 8vh;
  line-height: 8vh;
}

.appointment {
  width: 20vw;
  height: 8vh;
  line-height: 8vh;
}

.select {
  color: white;
}

.no_select {
  color: black;
}

.body {
  width: 100vw;
  display: inline-flex;
  height: 91vh;
}

.main {
  width: 100vw;
}

.router-link-active {
  text-decoration: none;
  color: white;
}
</style>
