<template>
  <el-container>
    <el-header>
      <div class="logo"></div>
    </el-header>
    <el-main>
      <el-carousel height="660px" width="1120px" :autoplay=false :interval="3000">
        <el-carousel-item>
          <div class="internal"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="integral"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="trail"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="trail"></div>
        </el-carousel-item>
      </el-carousel>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: '',
    data(){
      return {}
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
    margin-top: 1vh;
  }
  .logo{
    height:60px;
    margin:auto;
    width: 339px;
    background-image:url('../../assets/logo.png');
    background-size:100% auto;
  }
  .words{
    margin-top:49px;
    margin-bottom:68px;
    font-size:36px;
    line-height:50px;
    color:green;
  }
  .el-carousel-item{
    width: 75% !important;
  }
  .internal{
    width: 100%;
    height: 100%;
    background-image:url('../../assets/banner-internal.png');
  }
  .integral{
    width: 100%;
    height: 100%;
    background-image:url('../../assets/bnaner-hr.png');
    background-size:auto auto;
  }
  .trail{
    width: 100%;
    height: 100%;
    background-image:url('../../assets/banner-Trail.png');
    background-size:auto auto;
  }
</style>
