<template>
  <div>
    <div class="order-detail-wrapper" v-if="global.isPc">
      <el-row>
        <el-col :span="18" :offset="3">
          <el-row style="height: 42px; line-height: 42px;">
            <el-col :span="12">
              <div class="order-detail-title">订单详情</div>
            </el-col>
            <el-col :span="12">
              <div class="order-detail-export" v-if="orderDetail.status === 11">导出订单</div>
            </el-col>
          </el-row>
          <el-row>
            <div class="order-card">
              <el-card>
                <div slot="header" class="order-hook clearfix">
                  <el-row>
                    <el-col :span="6">
                      <div class="order-num">订单号：{{orderDetail.orderNo}}</div>
                    </el-col>
                    <el-col :span="6">
                      <div class="order-date">下单时间：{{orderDetail.orderDate | timeFormat}}</div>
                    </el-col>
                    <el-col :span="12">
                      <div class="order-status" v-if="orderDetail.status === 11">已签收</div>
                      <div class="order-status" v-else>
                        <el-button type="text">取消订单</el-button>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="text item">
                  <el-row>
                    <el-col :span="2">
                      <div class="left-label">收&nbsp;&nbsp;货&nbsp;&nbsp;人：</div>
                    </el-col>
                    <el-col :span="18">
                      <div class="left-cont">{{orderDetail.userName}}</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="right-label">付款方式：</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="right-cont">{{orderDetail.payMethod}}</div>
                    </el-col>
                  </el-row>
                </div>
                <div class="text item">
                  <el-row>
                    <el-col :span="2">
                      <div class="left-label">手机号码：</div>
                    </el-col>
                    <el-col :span="18">
                      <div class="left-cont">{{orderDetail.mobile}}</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="right-label">商品合计：</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="right-cont">￥{{orderDetail.amount}}</div>
                    </el-col>
                  </el-row>
                </div>
                <div class="text item">
                  <el-row>
                    <el-col :span="2">
                      <div class="left-label">收货地址：</div>
                    </el-col>
                    <el-col :span="18">
                      <div class="left-cont">{{orderDetail.address}}</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="right-label">已折扣：</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="right-cont">￥{{orderDetail.amount}}</div>
                    </el-col>
                  </el-row>
                </div>
                <div class="text item">
                  <el-row>
                    <el-col :span="19" style="height: 26px;"></el-col>
                    <el-col :span="5" style="border-bottom: 1px solid #979797; height: 26px;"></el-col>
                  </el-row>
                </div>
                <div class="text item">
                  <el-row style="padding: 29px 0 11px;">
                    <el-col :span="20" class="hook-height"></el-col>
                    <el-col :span="2" class="hook-height paid-label">实付金额：</el-col>
                    <el-col :span="2" class="hook-height paid-money">￥{{orderDetail.amount}}</el-col>
                  </el-row>
                </div>
                <div class="text item" v-if="orderDetail.status === 2">
                  <el-row>
                    <el-col :span="20" class="hook-height"></el-col>
                    <el-col :span="4" style="text-align: right">
                      <el-button class="pay-money" @click="payMoney(orderDetail.id)">付款</el-button>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
            </div>
          </el-row>
          <el-row class="order-goods">
            <el-table
              :data="orderGoodsList"
              :show-header="true"
              :fit="true"
              style="width: 100%; border: 1px solid rgba(230, 230, 230, 1);"
            >
              <el-table-column
                label="商品信息"
                width="500"
              >
                <template slot-scope="scope">
                  <div class="wrapper-box clearfix">
                    <div class="img-wrapper">
                      <img :src='scope.row.pic'/>
                    </div>
                    <div class="cont-wrapper">
                      <p class="main-param param-name">{{ scope.row.name }}</p>
                      <p class="param">规格：{{ scope.row.spec1 }}</p>
                      <p class="param">型号：{{ scope.row.spec2 }}</p>
                    </div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="单价"
              >
                <template slot-scope="scope">
                  <div class="wrapper-box">
                    <p class="main-param">{{ scope.row.price }}</p>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="数量"
              >
                <template slot-scope="scope">
                  <div class="wrapper-box">
                    <p class="main-param">{{ scope.row.qty }}</p>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="小计"
              >
                <template slot-scope="scope">
                  <div class="wrapper-box">
                    <p class="main-param">￥{{ scope.row.price * scope.row.qty }}</p>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="实付"
              >
                <template slot-scope="scope">
                  <div class="wrapper-box">
                    <p class="main-param">￥{{ scope.row.price * scope.row.qty }}</p>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="mb-order-detail-wrapper" v-else>
      <el-row class="mb-order-status">
        <el-col>{{orderDetail.status !== 11 ? '待付款' : '已付款'}}</el-col>
      </el-row>
      <el-row class="mb-user-info">
        <el-row style="height: 30px; line-height: 30px;">
          <el-col :span="12" class="mb-username">{{orderDetail.userName}}</el-col>
          <el-col :span="12" class="mb-phone">{{orderDetail.mobile}}</el-col>
        </el-row>
        <el-row style="height: 30px; line-height: 30px;">
          <el-col :span="24" class="mb-address">{{orderDetail.address}}</el-col>
        </el-row>
      </el-row>
      <el-row class="mb-goods-list">
        <el-table
          :data="orderGoodsList"
          :show-header="false"
          @row-click="queryOrderDetail(orderId)"
          style="width: 100%; cursor: pointer;"
        >
          <el-table-column
            label="图片"
            width="80"
          >
            <template slot-scope="scope">
              <div class="mb-img-wrapper">
                <img :src='scope.row.pic'/>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            label="名称"
          >
            <template slot-scope="scope">
              <div>
                <div class="mb-goods-name">{{ scope.row.name }}</div>
                <div class="mb-goods-param-wrapper">
                  <span class="mb-goods-param">{{ scope.row.spec1 }}；</span><span class="mb-goods-param">{{ scope.row.spec2 }}</span>
                </div>
                <div class="mb-goods-quality-wrapper">
                  <span class="mb-goods-price">￥{{ scope.row.price }} </span><span class="mb-goods-quality">x {{ scope.row.qty }}</span>
                </div>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-row class="mb-order-mark" v-if="orderDetail.status === 11">
        <el-col :span="4" class="mb-order-label">总计</el-col>
        <el-col :span="20" class="mb-order-amount">￥{{orderDetail.amount}}</el-col>
      </el-row>
      <el-row class="mb-order-info">
        <el-row>
          <el-col :span="8" class="mb-order-label">订单编号</el-col>
          <el-col :span="16" class="mb-order-des">{{orderDetail.orderNo}}</el-col>
        </el-row>
        <el-row style="border-top: 1px solid #f3f3f3;">
          <el-col :span="8" class="mb-order-label">下单时间</el-col>
          <el-col :span="16" class="mb-order-des">{{orderDetail.orderDate}}</el-col>
        </el-row>
      </el-row>
      <el-row class="mb-pay-info" v-if="orderDetail.status === 2">
        <el-col :span="6" class="mb-pay-label">合计金额：</el-col>
        <el-col :span="9" class="mb-pay-money">￥{{orderDetail.amount}}</el-col>
        <el-col :span="9" class="mb-pay-btn">
          <el-button size="small" @click="payMoney(orderDetail.id)">支付</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { orderDetail } from '../../service/index'

  export default {
    data () {
      return {
        orderDetail: {},
        orderGoodsList: []

      }
    },
    created () {
      const orderId = this.$route.params.orderId
      this.getOrderDetail(orderId)
    },
    computed: {
      ...mapState(['global'])
    },
    methods: {
      async getOrderDetail (orderId) {
        const res = await orderDetail(orderId)
        if (res.status === 0) {
          this.orderDetail = res.data
          this.orderGoodsList = res.data.items
        }
      },
      payMoney (orderId) {
        this.$router.push({path: '/pay/' + orderId})
      }
    }
  }
</script>

<style scoped>
  .order-detail-wrapper {
    margin-top: 35px;
    margin-bottom: 30px;
  }

  .order-detail-title {
    text-align: left;
    font-size: 30px;
    font-weight: 700;
    color: rgba(51, 51, 51, 1);
  }

  .order-detail-export {
    text-align: right;
    color: rgba(185, 142, 43, 1);
    font-size: 14px;
  }

  .order-card {
    padding: 20px 0;
  }

  .order-card .el-card_header {
    height: 60px;
    background-color: rgba(230, 230, 230, 1);
  }

  .order-card .item {
    padding-left: 8px;
  }

  .order-num, .order-date {
    text-align: left;
    font-size: 18px;
    color: rgba(51, 51, 51, 1);
  }

  .order-num, .order-status {
    font-weight: 400;
  }

  .order-status {
    text-align: right;
    color: rgba(190, 65, 65, 1);
    font-size: 18px;
  }

  .left-label, .left-cont, .right-label, .right-cont {
    height: 32px;
    line-height: 32px;
    font-size: 16px;
  }

  .left-label, .right-label {
    color: rgba(153, 153, 153, 1);
  }

  .left-cont, .right-cont {
    color: rgba(51, 51, 51, 1);
  }

  .left-label, .left-cont {
    text-align: left;
  }

  .right-label, .right-cont {
    text-align: right;
  }

  .hook-height {
    height: 50px;
  }

  .paid-label, .paid-money {
    line-height: 50px;
    text-align: right;
  }

  .paid-label {
    font-size: 18px;
    color: rgba(51, 51, 51, 1);
  }

  .paid-money {
    font-size: 24px;
    font-weight: 700;
    color: rgba(190, 65, 65, 1);
  }

  .pay-money {
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 4px;
    font-weight: 400;
    font-size: 18px;
    background-color: rgba(215, 178, 90, 1);
    color: rgba(255, 255, 255, 1);
  }

  .order-goods {
    margin-bottom: 95px;
  }

  .wrapper-box {
    height: 100px;
    margin: 20px 0;
  }

  .img-wrapper {
    float: left;
    width: 100px;
    height: 100px;
    border:1px solid rgba(230, 230, 230, 1);
    overflow: hidden;
  }

  .img-wrapper img {
    width: 100%;
    height: 100%;
  }

  .cont-wrapper {
    float: left;
    margin-left: 32px;
  }

  .main-param {
    height: 25px;
    line-height: 25px;
    text-align: left;
    padding: 12px 0 7px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }

  .param-name {
    text-align: left;
  }

  .param {
    height: 20px;
    line-height: 20px;
    text-align: left;
    padding-bottom: 10px;
    font-size: 14px;
    color: #666666;
  }

  .mb-order-detail-wrapper {
    background-color: #f3f3f3;
  }

  .mb-order-status {
    height: 35px;
    line-height: 35px;
    text-align: left;
    padding-left: 15px;
    font-size: 14px;
    font-weight: 400;
    background-color: #D7B25A;
    color: #ffffff;
  }

  .mb-user-info {
    padding: 15px 0 10px;
    margin-bottom: 10px;
    font-size: 14px;
    background-color: #ffffff;
    color: #333333;
  }

  .mb-username, .mb-phone {
    height: 30px;
    line-height: 30px;
  }

  .mb-username, .mb-address {
    padding-left: 29px;
    text-align: left;
  }

  .mb-phone {
    padding-right: 15px;
    text-align: right;
  }

  .mb-address {
    line-height: 30px;
    padding-right: 15px;
  }

  .mb-goods-list {
    padding: 0 10px;
    margin-bottom: 10px;
    background-color: #ffffff;
  }

  .mb-img-wrapper {
    width: 70px;
    height: 70px;
    border:1px solid rgba(230, 230, 230, 1);
    overflow: hidden;
  }

  .mb-img-wrapper img {
    width: 100%;
    height: 100%;
  }

  .mb-goods-name, .mb-goods-param-wrapper, .mb-goods-quality-wrapper {
    height: 17px;
    line-height: 17px;
    text-align: left;
    font-size: 12px;
  }

  .mb-goods-name {
    text-overflow: ellipsis;
    color: rgba(51, 51, 51, 1);
    font-weight: 400;
  }

  .mb-goods-param, .mb-goods-quality {
    color: rgba(153, 153, 153, 1);
  }

  .mb-goods-price {
    color: #B98E2B;
  }

  .mb-order-mark {
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    border-bottom: 1px solid #f3f3f3;
    background-color: #ffffff;
  }

  .mb-order-amount {
    padding-right: 15px;
    text-align: right;
    font-size: 14px;
    font-weight: 400;
    color: #D7B25A;
  }

  .mb-order-info {
    padding: 0 15px;
    margin-bottom: 10px;
    background-color: #ffffff;
  }

  .mb-order-label, .mb-order-des {
    height: 40px;
    line-height: 40px;
    color: #333333;
  }

  .mb-order-label {
    text-align: left;
    font-size: 13px;
  }

  .mb-order-des {
    text-align: right;
    font-size: 12px;
  }

  .mb-pay-info {
    background-color: #ffffff;
  }

  .mb-pay-label, .mb-pay-money {
    height: 50px;
    line-height: 50px;
    text-align: left;
  }

  .mb-pay-label {
    padding-left: 15px;
    font-size: 14px;
    color: #999999;
  }

  .mb-pay-money {
    font-size: 18px;
    font-weight: 400;
    color: #B98E2B;
  }

  .mb-pay-btn {
    text-align: right;
  }

  .el-button {
    width: 135px;
    height: 50px;
    border-radius: 0;
    background-color: #D7B25A;
    font-size: 14px;
    color: #ffffff;
  }
</style>
