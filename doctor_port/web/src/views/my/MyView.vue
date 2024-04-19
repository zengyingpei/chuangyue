<template>
    <div class="body">
        <div class="aside">
            <div class="item">
                <router-link :to="{name:'myInfo'}" style="text-decoration: none">信息管理</router-link>
            </div>
            <div class="item">退出登录</div>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import { useRoute } from "vue-router";
    import { computed } from "vue";

    export default {
        setup:()=> {

        const route = useRoute(); //获取当前路由只读对象
        
        let route_name = computed(() => route.name); //通过computed实时计算当前页面路由的字符串

        return{
            route_name,
        };
    },
  };
</script>

<style scoped>

.aside{
    width: 10vw;
    background-color: antiquewhite;
}

.item{
    height: 7vh;
    font-size: 2vh;
    line-height: 7vh;
    text-align: center;
}


</style>
