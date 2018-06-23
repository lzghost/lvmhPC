<template>
  <el-container class="container">
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
        <el-col :span="12" :offset="2">
          <el-carousel arrow="always" :autoplay="false" height="474px">
            <el-carousel-item v-for="item in 4" :key="item" :label="item" name="test">
              <img src="../../assets/product-1.png" class="image"/>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="8" :offset="2">
          <Code></Code>
          <div>全新Dior迪奥小姐香氛</div>
          <div>全新Dior迪奥小姐香氛，散发感性迷人的高订气质：
格拉斯五月玫瑰与土耳其大马士革玫瑰打造精致蕾丝裙装，卡拉布里亚佛手柑的柑橘香调如清新“蝴蝶结”。法属圭亚那蔷薇木和留尼汪岛粉红胡椒交织共舞，为这件高订“刺绣”更添生动辛辣。
繁花谱写的爱情宣言，带给你一见钟情的芬芳气息。 </div>
          <Norm />
          <Count />
          <CartBtn />
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
  import Norm from '../../components/card/norm.vue'
  import Code from '../../components/card/GoodCode.vue'
  import Count from '../../components/cart/Count.vue'
  import CartBtn from '../../components/cart/CartBtn.vue'
  export default {
    name: 'GoodDetail',
    data(){
      return {}
    },
    components:{
        Menu,Norm,Code,Count,CartBtn
    },
    mounted() {

    },
    method(){

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
    height: 474px;
    width: 740px;
  }
  .el-carousel{
    background-color: rgba(0,0,0,0);
  }
</style>
