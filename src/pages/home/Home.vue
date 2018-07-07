<template>
  <div>
    <div v-if="global.isPc">
      <el-row :gutter="20">
        <el-col :span="6" v-for="good in goods" :key="good.id">
          <ProCard :goodInfo="good"/>
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
    </div>
    <div v-else>
      <Search
      >
        <img slot="left" src="../../assets/mobile/menu.png" height="13px" width="15px" style="margin:auto 10px;">
      </Search>
      <el-row :gutter="0" style="margin-bottom:60px;margin-top:15px;">
        <div v-for="good in goods" :key="good.id">
          <el-col :span="10" :offset="1">
            <CardMb />
          </el-col>
          <el-col :span="1">
            &#12288;
          </el-col>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
  import ProCard from '../../components/card/ProCard.vue'
  import CardMb from '../../components/card/CardMb'
  import { Search } from 'vux'
  import { mapState } from 'vuex'
  import { categorieInfo } from '../../service/index'
  export default {
    name: 'Home',
    data(){
      return {
        goods: []
      }
    },
    components:{
      ProCard, Search, CardMb
    },
    mounted() {
      this.getGoodsByType();
    },
    computed:{
      ...mapState([
        'global','categories'
      ])
    },
    methods:{
      async getGoodsByType(){
        console.log(this.categories)
        const allGoods = await categorieInfo(this.categories[0].id)
        this.goods = allGoods.data;
      }
    }
  }
</script>

<style scoped>

</style>
