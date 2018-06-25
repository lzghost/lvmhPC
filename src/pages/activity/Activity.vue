<template>
  <el-main style="width:100%;height:100%;">
    <ActivityMb />
    <ActivityMb />
    <ActivityMb />
    <ActivityMb />
  </el-main>
</template>

<script>
  import ActivityMb from '../../components/activity/ActivityMb.vue'
  export default {
    name: '',
    data(){
      return {}
    },
    components:{
      ActivityMb
    },
    mounted() {

    },
    methods:{

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
