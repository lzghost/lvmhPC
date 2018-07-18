<template>
  <div class="order-wrapper">
    <el-row style="height: 33px;vertical-align: middle">
      <el-col :span="16" class="order-time">下单时间：{{ orderDate | dateFormat }}</el-col>
      <el-col :span="8" v-if="status === 11">
        <el-col :span="24" class="complete">已签收</el-col>
      </el-col>
      <el-col class="need-pay" :span="8" v-else-if="status === 2">
        待付款
      </el-col>
      <el-col class="complete" :span="8" v-else>
        已取消
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      :show-header="false"
      @row-click="queryOrderDetail(orderId)"
      style="width: 100%; cursor: pointer;"
    >
      <el-table-column
        label="图片"
        width="80"
      >
        <template slot-scope="scope">
          <div class="img-wrapper">
            <img :src='scope.row.pic'/>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="名称"
      >
        <template slot-scope="scope">
          <div class="">
            <div class="goods-name">{{ scope.row.name }}</div>
            <div class="goods-param-wrapper">
              <span class="goods-param">{{ scope.row.spec1 }}；</span><span class="goods-param">{{ scope.row.spec2 }}</span>
            </div>
            <div class="goods-quality-wrapper">
              <span class="goods-price">￥{{ scope.row.price }} </span><span class="goods-quality">x {{ scope.row.qty }}</span>
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-row class="calc-desc">
      <el-col :xs="8" :sm="8" :md="4" :lg="3" :xl="3" class="count-desc">共 {{totalQty}} 件商品</el-col>
      <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="3">
        <span class="total-desc">实付:</span><span class="money">￥{{ amount }}</span>
      </el-col>
      <el-col :xs="6" :sm="8" :md="8" :lg="15" :xl="17">&#12288;</el-col>
      <el-col v-if="status === 2" :xs="4" :sm="4" :md="4" :lg="3" :xl="1" style="height: 100%;text-align: right">
        <el-button type="text" class="pay" @click="payMoney(orderId)">付款</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: {
      orderId: Number,
      tableData: Array,
      orderDate: Number,
      status: Number,
      amount: Number,
      totalQty: Number,
      orderNo: String
    },
    methods: {
      queryOrderDetail (orderId) {
        this.$router.push({path: '/orderDetail/' + orderId})
      },
      payMoney (orderId) {
        this.$router.push({path: '/pay/' + orderId})
      }
    }
  }
</script>

<style scoped>
  .order-wrapper {
    padding: 0 10px;
    margin-bottom: 10px;
    background-color: rgba(255, 255, 255, 1);
  }

  .el-table {
    border-top: 1px solid #ebeef5;
  }

  .order-time, .complete, .need-pay {
    height: 33px;
    line-height: 33px;
    font-size: 12px;
  }

  .order-time {
    padding-left: 5px;
    text-align: left;
    color: rgba(102, 102, 102, 1);
  }

  .complete {
    color: rgba(51, 51, 51, 1);
    text-align: right;
  }

  .need-pay {
    color: rgba(190, 65, 65, 1);
    text-align: right;
  }

  .img-wrapper {
    width: 70px;
    height: 70px;
    border:1px solid rgba(230, 230, 230, 1);
    overflow: hidden;
  }

  .img-wrapper img {
    width: 100%;
    height: 100%;
  }

  .goods-name, .goods-param-wrapper, .goods-quality-wrapper {
    height: 17px;
    line-height: 17px;
    text-align: left;
    font-size: 12px;
  }

  .goods-name {
    text-overflow: ellipsis;
    color: rgba(51, 51, 51, 1);
    font-weight: 400;
  }

  .goods-param, .goods-quality {
    color: rgba(153, 153, 153, 1);
  }

  .goods-price {
    color: #B98E2B;
  }

  .calc-desc {
    height: 40px;
    font-size: 12px;
  }

  .count-desc {
    line-height: 40px;
    color: rgba(102, 102, 102, 1);
    text-align: left;
  }

  .total-desc {
    line-height: 40px;
    color: rgba(102, 102, 102, 1);
  }

  .money {
    line-height: 40px;
    color: rgba(185, 142, 43, 1);
  }

  .pay {
    padding-left: 15px;
    font-size: 12px;
    font-weight: 400;
    color: rgb(185, 142, 43);
  }
</style>
