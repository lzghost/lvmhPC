<template>
  <el-container class="container">
    <el-main>
      <el-row>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="10" :offset="2">
          <el-carousel arrow="always" :autoplay="false" height="474px">
            <el-carousel-item v-for="item in productAndPic" :key="item.id" name="test">
              <img :src="item.url640" class="image"/>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="8" :offset="2">
          <Code :codeValue="product.sku"></Code>
          <div class="pro-name">{{ product.name }}</div>
          <div class="pro-desc">{{ product.description }}</div>
          <Norm v-if="spec === null"/>
          <Count />
          <CartBtn />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import Menu from '../../components/menu/Menu.vue'
  import Norm from '../../components/card/norm.vue'
  import Code from '../../components/card/GoodCode.vue'
  import Count from '../../components/cart/Count.vue'
  import CartBtn from '../../components/cart/CartBtn.vue'
  import { goodProduct, getProductPic, getGoodDetail } from '../../service/index'
  import { productCombine } from '../../utils/storage'
  export default {
    name: 'GoodDetail',
    data(){
      return {
        spec: null,
        productPic: [],
        products: {},
        select: 0,
      }
    },
    components:{
        Menu,Norm,Code,Count,CartBtn
    },
    created(){
      this.changeVisible()
    },
    computed: {
      product(){
        return this.productAndPic.length > 0 ? this.productAndPic[this.select] : {}
      },
      productAndPic(){
        const result = [];
        this.productPic.map((item) => {
          this.products.map((good) => {
            if(item.goodId === good.goodId){
              result.push({...item, ...good})
            }
          })
        })
        return result;
      }
    },
    methods: {
      async changeVisible(){
        const goodId = this.$route.query.id;
        const products = await goodProduct(goodId);
        this.spec = productCombine(products.data);
        this.products = products.data;
        const productPicture = await getProductPic(goodId)
        this.productPic = productPicture.data;
        this.isShow = true
      },
    }
  }
</script>

<style scoped>
  .container{
    background-size:100% auto;
    width:100%;
    height:100%;
    background-image: url('../../assets/bg.png');
  }
  .image{
    height: 399px;
    width: 399px;
  }
  .el-carousel{
    background-color: rgba(0,0,0,0);
  }
  .pro-name{
    height: 33px;
    line-height: 33px;
    color: rgba(51, 51, 51, 1);
    font-size: 24px;
    text-align: left;
  }
  .pro-desc{
    line-height: 20px;
    color: rgba(102, 102, 102, 1);
    font-size: 14px;
    text-align: left;
  }
</style>
