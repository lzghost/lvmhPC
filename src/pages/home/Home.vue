<template>
  <div>
    <div v-if="global.isPc">
      <el-row style="margin-top: 40px;margin-bottom: 26px;">
        <el-col :offset="1" :span="6">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(des,index) in global.bread" :key="index">{{ des }}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6" v-for="good in showGoods" :key="good.id">
          <ProCard :goodInfo="good" :changeVisible="changeVisible" :closePop="closePop"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-pagination
            background
            :page-size="pageSize"
            :pager-count=5
            :current-page="currentPage"
            layout="prev, pager, next"
            @current-change="changeCurrentPage"
            :total="total">
          </el-pagination>
        </el-col>
      </el-row>
      <PopCart :isShow="isShow" :goodInfo="productDetail" :closePop="closePop" :spec="spec"/>
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
  import { Search } from 'vux'
  import { mapState } from 'vuex'
  import ProCard from '../../components/card/ProCard.vue'
  import CardMb from '../../components/card/CardMb'
  import PopCart from '../../components/cart/PopCart.vue'
  import { goodProduct } from '../../service/index'
  import { productCombine } from '../../utils/storage'
  export default {
    name: 'Home',
    data(){
      return {
        currentPage: 1,
        pageSize: 8,
        isShow: false,
        productDetail: {},
        spec: {},
      }
    },
    components:{
      ProCard, Search, CardMb, PopCart
    },
    computed:{
      ...mapState([
        'global','categories', 'goods'
      ]),
      total(){
        return this.goods.length
      },
      showGoods: {
        get(){
          return this.goods.slice && this.goods.slice((this.currentPage-1) * this.pageSize,this.currentPage * this.pageSize);
        },
        set() {

        }
      },
    },
    watch:{
      currentPage: function(val, oldVal){
        this.showGoods = this.goods.slice && this.goods.slice((val-1) * this.pageSize,val * this.pageSize);
      }
    },
    methods:{
      changeCurrentPage(val){
        this.currentPage = val
      },
      async changeVisible(id){
        const goodDetail = await goodProduct(id);
        this.spec = productCombine(goodDetail.data);
        this.isShow = true
      },
      closePop(){
        this.isShow = false
      }
    }
  }
</script>

<style scoped>

</style>
