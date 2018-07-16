<template>
  <div class="order-wrapper">
    <el-row>
      <el-col :span="24">
        <el-tabs :stretch="true" v-model="activeName">
          <el-tab-pane label="全部订单" name="first">
            <order-mb
              v-for="order in orderList"
              :key="order.id"
              :orderId="order.id"
              :tableData="order.items"
              :orderDate="order.orderDate"
              :status="order.status"
              :amount="order.amount"
              :totalQty="order.amount"
              :orderNo="order.orderNo"
            ></order-mb>
          </el-tab-pane>
          <el-tab-pane label="未付款" name="second">
            <order-mb
              v-for="order in getNoPaiedOrder"
              :key="order.id"
              :orderId="order.id"
              :tableData="order.items"
              :orderDate="order.orderDate"
              :status="order.status"
              :amount="order.amount"
              :totalQty="order.amount"
              :orderNo="order.orderNo"
            ></order-mb>
          </el-tab-pane>
          <el-tab-pane label="已付款" name="third">
            <order-mb
              v-for="order in getPaiedOrder"
              :key="order.id"
              :orderId="order.id"
              :tableData="order.items"
              :orderDate="order.orderDate"
              :status="order.status"
              :amount="order.amount"
              :totalQty="order.amount"
              :orderNo="order.orderNo"
            ></order-mb>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { orderList } from '@/service/index'

  import OrderMb from '@/components/order/OrderMb.vue'

  export default {
    data () {
      return {
        activeName: 'first',
        orderList: []
      }
    },
    components: {
      OrderMb
    },
    mounted () {
      this.getOrderList()
      this.activeName = this.$route.params.orderType
    },
    computed: {
      getNoPaiedOrder () {
        return this.orderList.filter(order => order.status === 2)
      },
      getPaiedOrder () {
        return this.orderList.filter(order => order.status === 11)
      }
    },
    methods: {
      async getOrderList () {
        const res = await orderList()
        if (res.status === 0) {
          this.orderList = res.data
        }
      }
    }
  }
</script>

<style scoped>
  .el-tabs {
    margin-bottom: 55px;
    background-color: rgba(255, 255, 255, 1);
  }

  .el-tab-pane {
    background-color: #f3f3f3;
  }
</style>
