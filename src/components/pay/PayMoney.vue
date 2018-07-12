<template>
  <div class="pay-money-wrapper">
    <el-row>
      <el-col :span="18" :offset="3">
        <el-row class="header-row">
          <el-col :span="24">
            <div class="order-title">订单支付</div>
          </el-col>
        </el-row>
        <el-row class="content-row">
          <el-col :span="24">
            <p class="notice">请使用你的微信app扫描二维码来支付。</p>
            <div class="reciving-qr-code">
              <img src="../../assets/二维码.png" alt="">
            </div>
            <p class="notice-item pay-money">支付金额：￥{{800}}</p>
            <p class="notice-item">请在 2 小时内完成付款，以免订单被取消。</p>
            <p class="notice-item">付款完成后，我们会立即处理你的订单，并通过电子邮件或信息向你发送最新的送货详情。</p>
            <p class="notice-item">收货时，请准备好与订单收货人姓名相符的身份证件或送货通知。</p>
            <div class="back-row">
              <el-button type="text" class="notice-item back-link" @click="backOrderDetail">返回订单详情 &gt;</el-button>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      backOrderDetail () {
        console.log(this.$route.param)
        this.$router.push({path: '/orderDetail/' + this.$route.params.orderId})
      }
    }
  }
</script>

<style scoped>
  .pay-money-wrapper {
    margin-bottom: 160px;
  }

  .header-row {
    padding: 35px 0 39px;
  }

  .order-title {
    height: 42px;
    line-height: 42px;
    text-align: left;
    font-size: 30px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }

  .content-row {
    padding: 44px 0 32px;
    border: 1px solid #E6E6E6;
  }

  .notice {
    height: 33px;
    line-height: 33px;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    color: #333333;
  }

  .reciving-qr-code {
    width: 153px;
    height: 153px;
    margin: 36px auto 34px;
    overflow: hidden;
  }

  .reciving-qr-code img {
    width: 100%;
    height: 100%;
  }

  .notice-item {
    height: 22px;
    line-height: 22px;
    text-align: center;
    font-size:16px;
    color: #333333;
  }

  .pay-money {
    margin-bottom: 39px;;
  }

  .back-row {
    margin: 67px 0 32px;
  }

  .back-link {
    color: #B98E2B;
  }
</style>
