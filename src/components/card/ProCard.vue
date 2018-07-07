<template>
  <el-card :body-style="{ padding: '0px', width: '216px', marginLeft: 'auto', marginRight: 'auto' }" shadow="never">
    <router-link :to="{path: '/goodDetail', query: {}}">
        <img :src="goodInfo.pic" class="image">
    </router-link>
    <el-row :gutter="0" class="desc">
      <el-col :span="12">
        <div class="code">
          F084055009
        </div>
      </el-col>
      <el-col :span="12">
        <div class="stock">
          库存：{{goodInfo.stock }}
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="0" class="pro">
      <el-col :span="24">
        <div>
          {{ goodInfo.name }}
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="0" class="priceCard">
      <el-col :span="5">
        <div class="priceNow">
          ￥{{ goodInfo.price }}
        </div>
      </el-col>
      <el-col :offset="1" :span="6" style="height: 100%;">
        <div class="original">
          ¥{{ goodInfo.originPrice }}
        </div>
      </el-col>
      <el-col :span="12">
        <div style="text-align: right">
          <el-button type="text"><img src="../../assets/icon/cart.png" alt="" @click="openPop"></el-button>
          <PopCart :isShow="isShow"/>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  import PopCart from '../../components/cart/PopCart.vue'
  export default {
    name: 'ProCard',
    data(){
      return {
          isShow: false,
      }
    },
    props:['goodInfo'],
    components:{
      PopCart
    },
    mounted() {

    },
    methods: {
      openPop(){
          this.isShow = true
      }
    }
  }
</script>

<style scoped>
  .el-card{
    text-align: center;
    border: 0;
  }
  .el-button{
    padding: 0;
  }
  .image {
    width: 216px;
    height: 140px;
    border: 1px solid rgba(230, 230, 230, 1);

  }
  .desc {
    margin-top: 18px;
    color: #999999;
    font-size: 12px;
  }
  .code{
    text-align: left;
  }
  .stock{
    text-align: right;
  }
  .pro{
    text-align: left;
    margin-top: 4px;
    color: #333333;
    font-size: 12px;
    font-family: PingFangSC-Regular;
  }
  .priceCard{
    margin-top: 7px;
    height: 22px;
  }
  .priceNow{
    color: #B98E2B;
    font-size: 16px;
    text-align: left;
  }
  .original{
    color:#999999;
    font-size: 12px;
    line-height: 25px;
    color: rgba(153, 153, 153, 1);
    text-align: left;
    height: 100%;
    text-decoration:line-through;
    font-family: PingFangSC-Regular;
  }
</style>
