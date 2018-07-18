<template>
  <div class="wrapper">
    <el-row style="height: 39px;vertical-align: middle">
      <el-col :span="6" class="order-time">下单时间：{{ orderDate | dateFormat }}</el-col>
      <el-col :span="8" :offset="10" v-if="status === 11">
        <el-col :span="8" :offset="9" class="export"><a href="">导出订单</a></el-col>
        <el-col :span="7" class="complete">已完成</el-col>
      </el-col>
      <el-col class="need-pay" :span="8" :offset="10" v-else-if="status === 2">
        待付款
      </el-col>
      <el-col class="complete" :span="8" :offset="10" v-else>
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
          <div class="name-wrapper">
            {{ scope.row.name }}
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="参数"
      >
        <template slot-scope="scope">
          <div class="param-wrapper">
            <div class="param">{{ scope.row.spec1 }}</div>
            <div class="param">{{ scope.row.spec2 }}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="价格"
      >
        <template slot-scope="scope">
          <span class="price">￥{{ scope.row.price }}</span>&nbsp;<span class="qty">x&nbsp;{{ scope.row.qty }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="总价"
      >
        <template slot-scope="scope">
          <div class="total">￥{{ scope.row.price * scope.row.qty }}</div>
        </template>
      </el-table-column>
    </el-table>
    <el-row class="calc-desc">
      <el-col :xs="5" :sm="5" :md="4" :lg="3" :xl="3" class="count-desc">共{{totalQty}}件商品</el-col>
      <el-col :xs="5" :sm="5" :md="4" :lg="3" :xl="3">
        <span class="total-desc">合计:</span><span class="money">￥{{ amount }}</span>
      </el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="11" :xl="14">&#12288;</el-col>
      <el-col v-if="status === 2" :xs="6" :sm="6" :md="6" :lg="4" :xl="3" style="height: 100%;text-align: right">
        <el-button size="small" class="cancel" @click="dialogVisible = true">取消订单</el-button>
      </el-col>
      <el-col v-if="status === 2" :xs="4" :sm="4" :md="4" :lg="3" :xl="1" style="height: 100%;text-align: right">
        <el-button size="small" class="pay" @click="payMoney(orderId)">付款</el-button>
      </el-col>
    </el-row>
    <el-dialog
      title="提示"
      width="30%"
      :modal="true"
      :show-close="false"
      :visible.sync="dialogVisible"
      :before-close="cancelOrder">
      <span>您确定要取消该笔订单？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialogVisible: false
      }
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
    async beforeMount () {},
    mounted () {},
    components: {},
    computed: {},
    methods: {
      queryOrderDetail (orderId) {
        this.$router.push({path: '/orderDetail/' + orderId})
      },
      cancelOrder (done) {
        // 取消订单
        // 没有取消订单的接口
      },
      payMoney (orderId) {
        this.$router.push({path: '/pay/' + orderId})
      }
    },
    watch: {}
  }
</script>

<style scoped>
  .wrapper {
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(230, 230, 230, 1);
    padding: 0 20px 0 20px;
    margin-top: 20px;
  }

  a, a:hover {
    text-decoration: none;
    color: rgba(185, 142, 43, 1) !important;
  }

  .el-table {
    border-top: 1px solid #ebeef5;
  }

  .order-time {
    height: 39px;
    line-height: 39px;
    color: rgba(102, 102, 102, 1);
    font-size: 14px;
    text-align: left;
  }

  .export {
    height: 39px;
    line-height: 39px;
    color: rgba(185, 142, 43, 1) !important;
    font-size: 14px;
    text-align: right;
  }

  .complete {
    height: 39px;
    line-height: 39px;
    color: rgba(51, 51, 51, 1);
    font-size: 14px;
    text-align: right;
  }

  .need-pay {
    height: 39px;
    line-height: 39px;
    color: rgba(190, 65, 65, 1);
    font-size: 14px;
    text-align: right;
  }

  .img-wrapper {
    width: 110px;
    height: 110px;
    border:1px solid rgba(230, 230, 230, 1);
    overflow: hidden;
  }

  .img-wrapper img {
    width: 100%;
    height: 100%;
  }

  .name-wrapper {
    height: 25px;
    line-height: 25px;
    text-overflow: ellipsis;
    color: rgba(51, 51, 51, 1);
    font-weight: 700;
    font-size: 18px;
  }

  .param {
    height: 20px;
    line-height: 20px;
    color: rgba(102, 102, 102, 1);
    font-size: 14px;
  }

  .price {
    height: 25px;
    line-height: 25px;
    color: rgba(51, 51, 51, 1);
    font-size: 18px;
  }

  .qty {
    height: 25px;
    line-height: 25px;
    color: rgba(153, 153, 153, 1);
    font-size: 14px;
  }

  .total {
    height: 25px;
    line-height: 25px;
    color: rgba(185, 142, 43, 1);
    font-size: 18px;
  }

  .calc-desc {
    height: 49px;
    font-size: 14px;
  }

  .count-desc {
    line-height: 49px;
    color: rgba(102, 102, 102, 1);
    text-align: left;
  }

  .total-desc {
    line-height: 49px;
    color: rgba(102, 102, 102, 1);
  }

  .money {
    line-height: 49px;
    color: rgba(185, 142, 43, 1);
  }

  .cancel {
    margin: 8px 20px 8px 0;
    border-radius: 2px;
    border: 1px solid rgba(153, 153, 153, 1);
    background-color: rgba(255, 255, 255, 1);
    font-size: 14px;
  }

  .pay {
    margin: 8px auto;
    border-radius: 2px;
    border: 1px solid rgba(185, 142, 43, 1);
    background-color: rgba(255, 255, 255, 1);
    color: rgb(185, 142, 43);
    font-size: 14px;
  }
</style>
