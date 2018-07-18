<template>
  <div>
    <div v-if="global.isPc">
      <el-main>
        <el-row class="profile">
          <el-col :span="8" :offset="8">
            <div class="head-portrait">
              <img :src="userInfo.head" width="122" height="122"/>
            </div>
            <div class="name">{{userInfo.name}}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" :offset="8">
            <div class="given-chy">
              GIVENCHY
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18" :offset="3">
            <el-tabs type="border-card" :stretch="true">
              <el-tab-pane label="全部订单">
                <Order
                  v-for="order in orderList"
                  :key="order.id"
                  :orderId="order.id"
                  :tableData="order.items"
                  :orderDate="order.orderDate"
                  :status="order.status"
                  :amount="order.amount"
                  :totalQty="order.amount"
                  :orderNo="order.orderNo"
                ></Order>
              </el-tab-pane>
              <el-tab-pane label="未付款">
                <Order
                  v-for="order in getNoPaiedOrder"
                  :key="order.id"
                  :orderId="order.id"
                  :tableData="order.items"
                  :orderDate="order.orderDate"
                  :status="order.status"
                  :amount="order.amount"
                  :totalQty="order.amount"
                  :orderNo="order.orderNo"
                ></Order>
              </el-tab-pane>
              <el-tab-pane label="已付款">
                <Order
                  v-for="order in getPaiedOrder"
                  :key="order.id"
                  :orderId="order.id"
                  :tableData="order.items"
                  :orderDate="order.orderDate"
                  :status="order.status"
                  :amount="order.amount"
                  :totalQty="order.amount"
                  :orderNo="order.orderNo"
                ></Order>
              </el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </el-main>
    </div>
    <div v-else>
      <el-row class="mb-profile">
        <el-col :span="8" :offset="8">
          <div class="head-portrait">
            <img :src="userInfo.head" width="122" height="122"/>
          </div>
          <div class="mb-name">{{userInfo.name}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" :offset="8">
          <div class="mb-given-chy">
            GIVENCHY
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="mb-nav-wrapper">
          <router-link to="/orderMb/first">
            <mt-cell title="全部订单">
              <img slot="icon" src="../../assets/mobile/付款.png" width="20" height="20">
            </mt-cell>
          </router-link>
          <router-link to="/orderMb/second">
            <mt-cell title="未付款">
               <img slot="icon" src="../../assets/mobile/付款.png" width="20" height="20">
            </mt-cell>
          </router-link>
          <router-link to="/orderMb/third">
            <mt-cell title="已付款">
               <img slot="icon" src="../../assets/mobile/付款.png" width="20" height="20">
            </mt-cell>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { orderList, userInfo } from '@/service/index'

  import Order from '@/components/order/Order.vue'

  export default {
    name: 'Home',
    data () {
      return {
        userInfo: {},
        orderList: []
      }
    },
    components: {
      Order
    },
    mounted () {
      this.getOrderList()
      this.getUserInfo()
    },
    computed: {
      ...mapState(['global', 'campaign']),
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
      },
      async getUserInfo () {
        const res = await userInfo(this.campaign.id)
        if (res.status === 0) {
          this.userInfo = res.data
        }
      }
    }
  }
</script>

<style scoped>
  .profile {
    height: 213px;
    border-radius: 2px;
    background-color: rgba(64, 64, 64, 1);
    box-shadow: 0 2px 4px 0 rgba(215, 215, 215, 1);
  }

  .name {
    height: 45px;
    line-height: 45px;
    color: rgba(255, 255, 255, 1);
    font-size: 32px;
    text-align: center;
  }

  .given-chy {
    height: 14px;
    padding: 10px 0 50px;
    letter-spacing: .3em;
    font-size: 14px;
    font-weight: 700;
  }

  .head-portrait {
    width: 122px;
    height: 122px;
    margin: 32px auto 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
  }

  .mb-profile {
    height: 209px;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 1);
  }

  .mb-name {
    height: 28px;
    line-height: 28px;
    margin-top: 17px;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    color: #333333;
  }

  .mb-given-chy {
    height: 10px;
    padding-bottom: 50px;
    letter-spacing: .3em;
    font-size: 10px;
    font-weight: 400;
  }

  .mb-nav-wrapper {
    padding: 0 20px;
    text-align: left;
  }

  a, a:hover, a:active {
    text-decoration: none;
    color: #333333;
  }

  .mint-cell {
    border-bottom: 1px solid #E6E6E6;
  }
</style>
