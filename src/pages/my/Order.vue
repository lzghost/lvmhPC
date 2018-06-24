<template>
  <el-main>
    <el-row class="profile">
      <el-col :span="8" :offset="8">
        <img src="../../assets/profile.png" width="122" height="122" style="margin-top: 32px"/>
        <div class="name">
          Erik Banks
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" :offset="8">
        <div class="">
          GIVENCHY
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18" :offset="3">
        <el-tabs type="border-card" :stretch="true">
          <el-tab-pane label="全部订单">
            <Order />
          </el-tab-pane>
          <el-tab-pane label="未付款">

          </el-tab-pane>
          <el-tab-pane label="已付款">

          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
  import Order from '../../components/order/Order.vue'
  export default {
    name: 'Home',
    data(){
      return {
      }
    },
    components: {
      Order
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
  .profile {
    height: 213px;
    border-radius: 2px;
    background-color: rgba(64, 64, 64, 1);
    box-shadow: 0px 2px 4px 0px rgba(215, 215, 215, 1);
  }

  .name {
    height: 45px;
    line-height: 45px;
    color: rgba(255, 255, 255, 1);
    font-size: 32px;
    text-align: center;
  }
</style>
