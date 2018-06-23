<template>
  <el-container>
    <el-header>
      <Menu />
    </el-header>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <el-footer>
      @2018 LVMH
    </el-footer>
  </el-container>
</template>

<script>
  import Menu from '../../components/menu/Menu.vue'
  import ProCard from '../../components/card/ProCard.vue'
  export default {
    name: 'Home',
    data(){
      return {
        goods: [{},{},{},{},{},{},{},{},{},{}]
      }
    },
    components:{
      Menu,
      ProCard
    },
    mounted() {

    },
    mounted(){

    },
    method(){

    }
  }
</script>

<style scoped>

</style>
