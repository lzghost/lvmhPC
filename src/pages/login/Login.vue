<template>
  <div style="width:100%;height:100%">
    <div class="container login-wrapper" v-if="global.isPc === true">
      <div class="logo"></div>
      <div class="words">Internal purchase</div>
      <!--登录部分 start-->
      <el-col :span="6" :offset="9">
        <el-form :model="loginForm" ref="loginForm" class="loginFormStyle">
          <el-form-item prop="userName">
            <el-input class="input-login"
                      v-model="loginForm.userName"
                      clearable
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
            <el-button class="loginBtn" @click="doLogin">登录</el-button>
          </el-form-item>
        </el-form>
        <!--登录部分 end-->
      </el-col>
    </div>
    <div class="container-mb login-mb-wrapper"  v-if="global.isPc === false">
      <div class="content"></div>
      <div class="logo-mb"></div>
      <div class="loginFormStyle-mb">
        <mt-cell>
          <mt-field label="" placeholder="请输入用户名" >
          </mt-field>
          <img slot="icon" src="../../assets/mobile/user.png" width="21" height="24">
        </mt-cell>
        <mt-cell>
          <mt-field label="" placeholder="请输入密码" >
          </mt-field>
          <img slot="icon" src="../../assets/mobile/password.png" width="21" height="24">
        </mt-cell>
      </div>
      <mt-button plain type="default" size="large" @click="doLogin">登录</mt-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { login } from '../../service/index'

export default {
  name: "Home",
  data() {
    return {
      loginForm: {
        userName: "",
        passWord: ""
      },
    };
  },
  mounted() {

  },
  computed: {
    ...mapState(["global"])
  },
  methods: {
    async doLogin(){
      const param = {
        account: this.loginForm.userName, //yimlink.defia',
        password: this.loginForm.passWord,
      }
      const res = await login(param);
      if(res.status === 0){
        this.$router.push('/campaigns')
      }else if(this.global.isPc){

      }else{

      }
    }
  }
};
</script>

<style scoped>
/*设置背景图*/
.container {
  width: 100%;
  height: 100%;
  background: url("../../assets/pc-bg.png") no-repeat center;
  background-size: 100% 100%;
}
.container-mb {
  width: 100%;
  height: 100%;
  background: url("../../assets/app-bg.png") no-repeat center;
  background-size: 100% 100%;
  text-align: center;
}
.container:before {
  content: "";
  display: table;
}
.logo-mb {
  background-image: url("../../assets/logo-mb.png");
  background-size: 100% 100%;
  width: 226px;
  height: 40px;
  margin: auto;
}

.content {
  height: 30%;
}

.container .logo {
  width: 339px;
  height: 60px;
  margin: auto;
  margin-top: 10%;
  background-image: url("../../assets/logo.png");
  background-size: 100% 100%;
}

.words {
  margin-top: 49px;
  margin-bottom: 68px;
  font-size: 36px;
  line-height: 50px;
  color: #fff;
}
.loginFormStyle {
  margin: auto;
}

.loginFormStyle-mb {
  margin: auto;
  margin-top: 24%;
  margin-bottom: 5%;
  color:white;
}

.input-login {
  height: 52px;
  border-radius: 8px;
  border: 1px solid rgba(224, 227, 229, 1);
  background-color: transparent;
  color: white;
}
.el-input__inner {
  background-color: transparent;
  color: white;
}
.loginBtn {
  height: 52px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(224, 227, 229, 1);
  background-color: transparent;
  color: white;
}
.mint-cell{
  background-color: transparent;
  color: white;
}
.mint-button{
  color: white;
  background-color: transparent;
}
</style>
