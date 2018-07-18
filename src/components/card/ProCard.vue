<template>
  <el-card :body-style="{ padding: '0px', width: '216px', marginLeft: 'auto', marginRight: 'auto' }" shadow="never">
    <!--<router-link :to="{path: 'goodDetail', query: { id: goodInfo.id }}">-->
      <!--<img :src="goodInfo.pic" class="image" @click="goToDetails(goodInfo.id)">-->
    <div class="image" :style="{ backgroundImage: 'url(' + goodInfo.pic + ')' }" @click="goToDetails(goodInfo)">
      <img v-if="goodInfo.stock <= 0" src="../../assets/icon/sell-out.png" style=""/>
    </div>
    <!--</router-link>-->
    <!--<el-row :gutter="0" class="desc">-->
    <!--<el-col :span="12">-->
    <!--<div class="code">-->
    <!--F084055009-->
    <!--</div>-->
    <!--</el-col>-->
    <!--<el-col :span="12">-->
    <!--<div class="stock">-->
    <!--库存：{{goodInfo.stock }}-->
    <!--</div>-->
    <!--</el-col>-->
    <!--</el-row>-->
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
        <div class="original" v-if="goodInfo.originPrice">
          ¥{{ goodInfo.originPrice }}
        </div>
      </el-col>
      <el-col :span="12">
        <div style="text-align: right">
          <el-button type="text">
            <img v-if="goodInfo.stock <= 0"  src="../../assets/icon/add_no.png">
            <img v-else src="../../assets/icon/cart.png" alt="" @click="changeVisible(goodInfo)">
          </el-button>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>

  export default {
    name: 'ProCard',
    data() {
      return {
      }
    },
    props: ['goodInfo', 'changeVisible'],
    components: {
    },
    mounted() {

    },
    methods: {
      goToDetails(goodInfo) {
        const id = goodInfo.id;
        this.$router.push({name: 'goodDetail', query: { id } });
      }
    }
  }
</script>

<style scoped>
  .el-card {
    text-align: center;
    border: 0;
  }

  .el-button {
    padding: 0;
  }

  .image {
    width: 213px;
    height: 213px;
    background-size: 100% 100%;
    border: 1px solid rgba(230, 230, 230, 1);
    text-align: right;
  }

  .desc {
    margin-top: 18px;
    color: #999999;
    font-size: 12px;
  }

  .code {
    text-align: left;
  }

  .stock {
    text-align: right;
  }

  .pro {
    text-align: left;
    margin-top: 4px;
    color: #333333;
    font-size: 12px;
    min-height: 34px;
  }

  .priceCard {
    margin-top: 7px;
    height: 22px;
  }

  .priceNow {
    color: #B98E2B;
    font-size: 16px;
    text-align: left;
  }

  .original {
    color: #999999;
    font-size: 12px;
    line-height: 25px;
    color: rgba(153, 153, 153, 1);
    text-align: left;
    height: 100%;
    text-decoration: line-through;
  }
</style>
