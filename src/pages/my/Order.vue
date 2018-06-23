<template>
  <el-container>
    <el-header>
      <Menu />
    </el-header>
    <el-main>
      <el-row class="profile">
        <el-col :span="8" :offset="8">
          <img src="../../assets/profile.png" width="122" height="122" style="margin-top: 32px"/>
          <div class="name">
            Erik Banks
          </div>
        </el-col>
      </el-row>
    </el-main>
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
.profile{
  height: 213px;
  border-radius: 2px;
  background-color: rgba(64, 64, 64, 1);
  box-shadow: 0px 2px 4px 0px rgba(215, 215, 215, 1);
}
  .name{
    height: 45px;
    line-height: 45px;
    color: rgba(255, 255, 255, 1);
    font-size: 32px;
    text-align: center;
  }
</style>
