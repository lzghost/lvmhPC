<template>
  <el-container>
    <el-header>
      <Menu />
    </el-header>
    <el-main>
      <el-row>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6" v-for="good in goods" :key="good.id">
          <ProCard />
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
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
.el-header{
  padding: 0;
}
</style>
