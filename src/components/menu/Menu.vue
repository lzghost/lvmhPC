<template>
  <el-row :gutter="0">
    <el-col :xs="4" :sm="4" :md="2" :lg="1" :xl="2"></el-col>
    <el-col :xs="4" :sm="4" :md="2" :lg="1" :xl="2">
      <router-link :to="{path: '/home'}">
        <el-button type="text">LVMH</el-button>
      </router-link>
    </el-col>
    <el-col :xs="4" :sm="4" :md="2" :lg="2" :xl="2" v-for="(menu,index) in menuData" :key="index">
      <Type :menu="menu"/>
    </el-col>
    <el-col :xs="4" :sm="4" :md="5" :lg="7" :xl="2">搜索</el-col>
    <el-col :xs="4" :sm="4" :md="3" :lg="3" :xl="2" clas="nav">
      <el-button type="text">
        <img style="margin-right: 4px;vertical-align: middle" src="../../assets/icon/mine.png" width="16" height="16"/>我的
      </el-button>
    </el-col>
    <el-col :xs="4" :sm="4" :md="3" :lg="3" :xl="2" class="nav">

        <el-button type="text">
          <el-badge :value="cartNum" :hidden="cartList.cartNum === 0" class="item" ref="cartContainer">
            <img style="margin-right: 4px;" src="../../assets/icon/nav-cart.png" width="18" height="16"/>
          </el-badge>
          购物车
        </el-button>
    </el-col>
    <el-col :xs="4" :sm="4" :md="3" :lg="3" :xl="2">EN</el-col>

  </el-row>

</template>

<script>
  import {mapState, mapMutations} from 'vuex'
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
    computed:{
      ...mapState([
        'global','cartList'
      ]),
      cartNum(){
        if(this.cartList.cartNum){
          return cartList.cartNum > 99 ? '99+' : cartList.cartNum;
        }
        return 0
      }
    },
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

  .el-button{
    color: white;
  }
  .nav{

  }
  .el-button:focus, .el-button:hover, nav:focus, nav:hover{
    color: rgba(215, 178, 90, 1);
    border-bottom: 2px solid rgba(215, 178, 90, 1);
    border-radius: 0;
  }
  .item {
    width: auto !important;
    height: auto !important;
  }

</style>
