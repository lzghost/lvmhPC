<template>
<div>
  <el-container v-if="global.isPc">
    <el-header >
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
    <el-footer v-if="global.isPc">
      @2018 LVMH
    </el-footer>
  </el-container>
  <div v-if="!global.isPc">
  <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
   <MenuMb/>
  </div>
</div>
</template>

<script>
  import Menu from '../../components/menu/Menu.vue'
  import MenuMb from '../../components/menu/MenuMb.vue'
  import { mapState } from 'vuex'
  export default {
    name: 'Home',
    data(){
      return {
        goods: [{},{},{},{},{},{},{},{},{},{}]
      }
    },
    components:{
      Menu,MenuMb
    },
    mounted() {

    },
    computed:{
      ...mapState([
        'global'
      ])
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>
