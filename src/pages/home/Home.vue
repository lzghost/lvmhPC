<template>
  <div>
    <el-main v-if="global.isPc">
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
    <div>
      <Search />
      <el-row :gutter="0" v-if="!global.isPc">
        <el-col :span="12" v-for="good in goods" :key="good.id">
          <ProCard />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import ProCard from '../../components/card/ProCard.vue'
  import { Search } from 'vux'
  import { mapState } from 'vuex'
  export default {
    name: 'Home',
    data(){
      return {
          goods: [{},{},{},{},{},{},{},{},{},{}]
      }
    },
    components:{
      ProCard, Search
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
