<template>
  <el-row :gutter="0">
    <el-col :xs="4" :sm="4" :md="2" :lg="1" :xl="2"></el-col>
    <el-col :xs="4" :sm="4" :md="2" :lg="1" :xl="2">LVMH</el-col>
    <el-col :xs="4" :sm="4" :md="2" :lg="2" :xl="2" v-for="(menu,index) in menuData" :key="index">
      <Type :menu="menu"/>
    </el-col>
    <el-col :xs="4" :sm="4" :md="5" :lg="7" :xl="2">搜索</el-col>
    <el-col :xs="4" :sm="4" :md="3" :lg="3" :xl="2">我的</el-col>
    <el-col :xs="4" :sm="4" :md="3" :lg="3" :xl="2">购物车</el-col>
    <el-col :xs="4" :sm="4" :md="3" :lg="3" :xl="2">EN</el-col>

  </el-row>

</template>

<script>
  import Type from './Type'
  export default {
    data(){
      return {
      }
    },
    components: {
      Type
    },
    props: ['menuData'],
    mounted() {

    },
    methods: {
    }
  }
</script>

<style scoped>
  .el-row {
    background-color: #333333;
    height: 100%;
    color: white;
    text-align: center;
    vertical-align: middle;
  }

  .el-col {
    height: 100%;
    line-height: 60px;
    cursor: pointer;
  }

  .el-col div {
    height: 100%;
    width: 100%;
  }

  .activePerfume {
    color: yellow;
    border-bottom: 2px yellow solid;
  }

</style>
