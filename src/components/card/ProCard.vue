<template>
  <el-card :body-style="{ padding: '0px', width: '216px', marginLeft: 'auto', marginRight: 'auto' }">
    <img src="../../assets/skincare-1.png" class="image">
    <el-row :gutter="0" class="desc">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="code">
          F084055009
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="stock">
          库存：500
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="0" class="pro">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div>
          克丽丝汀迪奥真我情柔淡香氛 100ml
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="0" class="priceCard">
      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
        <div class="priceNow">
          ￥300
        </div>
      </el-col>
      <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">
        &nbsp;
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" style="height: 100%;">
        <div class="original">
          ¥2,100
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <div style="text-align: right">
          <el-button type="text"><img src="../../assets/icon/cart.png" alt="" @click="openPop"></el-button>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    name: 'ProCard',
    data(){
      return {}
    },
    mounted() {

    },
    methods: {
      openPop(){
          console.log(1);
      }
    }
  }
</script>

<style scoped>
  .el-card{
    text-align: center;
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
