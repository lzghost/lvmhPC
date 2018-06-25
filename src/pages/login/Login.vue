<template>
  <div>
    <div class="container login-wrapper" v-if="global.isPc === true">
      <div class="logo"></div>
      <div class="words">Internal purchase</div>
      <!--登录部分 start-->
      <el-col :span="6" :offset="9">
        <el-form :model="loginForm" ref="loginForm" class="loginFormStyle">
          <el-form-item prop="userName">
            <el-input class="input-login"
                      v-model="loginForm.userName"
                      auto-complete="off">
              <img slot="prepend" src="../../assets/icon/user.png" style="background-color: transparent">
            </el-input>
          </el-form-item>
          <el-form-item prop="passWord" size="large">
            <el-input type="password" clearable resize="both" class="input-login" v-model="loginForm.passWord" placeholder="请输入密码" >
              <img slot="prepend" src="../../assets/icon/password.png" alt="">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="loginBtn">登录</el-button>
          </el-form-item>
        </el-form>
        <!--登录部分 end-->
      </el-col>
    </div>
    <div v-if="global.isPc === false">
      
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
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
    computed: {
      ...mapState([
        'global'
      ]),
    },
    methods:{

    }
  }
</script>

<style scoped>
  /*设置背景图*/
  .container{
    width:100%;
    height:100%;
    background:url('../../assets/pc-bg.png') no-repeat center;
    background-size:100% 100%;
  }
  .container:before{
    content: "";
    display: table;
  }
  .container .logo{
    width:339px;
    height:60px;
    margin:auto;
    margin-top: 10%;
    background-image:url('../../assets/logo.png');
    background-size:100% 100%;
  }
  .words{
    margin-top:49px;
    margin-bottom:68px;
    font-size:36px;
    line-height:50px;
    color:#fff;
  }
  .loginFormStyle{
    margin:auto;
  }

  .input-login{
    height: 52px;
    border-radius: 8px;
    border: 1px solid rgba(224, 227, 229, 1);
    background-color: transparent;
    color: white;
  }
  .el-input__inner{
    background-color: transparent;
    color: white;
  }
  .loginBtn{
    height: 52px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid rgba(224, 227, 229, 1);
    background-color: transparent;
    color: white;
  }
</style>
