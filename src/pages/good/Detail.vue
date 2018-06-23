<template>
  <el-container>
    <el-header>
      <Menu/>
    </el-header>
    <el-main>
      <el-row>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="13" :offset="1">

        </el-col>
        <el-col :span="10">

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
  export default {
    name: 'GoodDetail',
    data(){
      return {}
    },
    components:{
        Menu
    },
    mounted() {

    },
    method(){

    }
  }
</script>

<style scoped>
</style>
