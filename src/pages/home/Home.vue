<template>
  <div class="container">
    <div class="logo"></div>
    <div class="words">Internal purchase</div>
    <!--登录部分 start-->
    <el-form :model="loginForm" ref="loginForm" label-width="100px" class="loginFormStyle">
      <el-form-item prop="userName">
        <el-input
          v-model="loginForm.userName"
          auto-complete="off">
          <i slot="prefix">
            <img src="../../assets/icon/user.png" alt="">
          </i>
        </el-input>
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input
          type="password"
          v-model="loginForm.passWord"
          auto-complete="off">
          <i slot="prefix">
            <img src="../../assets/icon/password.png" alt="">
          </i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button>提交</el-button>
      </el-form-item>
    </el-form>
    <!--登录部分 end-->
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data(){
      return {
        loginForm:{
          userName:'',
          passWord:''
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
  .container{
    width:100%;
    height:100%;
    background:url('../../assets/banner-Trail.png') no-repeat center;
    background-size:contain;
  }
  .container:before{
    content: "";
    display: table;
  }
  .logo{
    width:339px;
    height:60px;
    margin:auto;
    margin-top:185px;
    background-image:url('../../assets/logo.png');
    background-size:100% 100%;
  }
  .words{
    margin:auto;
    margin-top:49px;
    margin-bottom:68px;
    font-size:36px;
    line-height:50px;
    color:#fff;
  }
  .loginFormStyle{
    width:400px;
    margin:auto;
  }
  .loginFormStyle .el-input .el-input__inner{
    height:52px !important;
  }
</style>
