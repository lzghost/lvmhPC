<template>
    <div class="container">
      <el-container direction="vertical">
        <el-header>
        </el-header>
        <el-main>
          <!--登录部分 start-->
          1
          <!--登录部分 end-->
        </el-main>
      </el-container>
    </div>
</template>

<script>
  export default {
    name: 'Home',
    data(){
      return {
        loginForm: {
          userName: '',
          passWord: ''
        }
      }
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
  /*设置背景图*/
  .container {
    width:100%;
    height:100%;
    background: url('../../assets/banner-Trail.png') no-repeat center;
    background-size: 100% auto;
  }

  .el-main {
  }

  .el-header {
    text-align: center;
    line-height: 20vh;
    height: 20vh !important;
  }
</style>
