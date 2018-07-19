<template>
  <el-row :gutter="0">
    <el-col :offset="1" :span="15">
      <div class="left-contain">
        <div class="tab-subtitle">
          <div class="cart-title">
            购物车
          </div>
          <el-button class="cart-back" @click="goBack()">
            继续购物
          </el-button>

        </div>
        <el-table
          ref="multipleTable"
          :data="cartInfoList"
          tooltip-effect="dark"
          :show-header=false
          style="width: 100%"
          :row-style={height:120,padding:0}
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="40"
          >
          </el-table-column>
          <el-table-column
            label="商品信息"
            width="400">
            <template slot-scope="scope">
              <el-row type="flex" style="padding:20px">
                <el-col class="align-left goods-pic">
                  <img width=80   height=80   :src="scope.row.pic" class="image">
                </el-col>
                <el-col style="margin-left: 20px">
                  <div class="goods-title align-left font-18">
                    {{scope.row.name}}
                  </div>
                  <div class="goods-subtitle" v-if="scope.row.spec1">
                    <div class="goods-spec align-left font-14">
                      规格：{{scope.row.spec1}}
                    </div>
                    <div class="goods-model align-left font-14">
                      型号：{{scope.row.spec2}}
                    </div>
                  </div>
                </el-col>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column
            label="数量"
            width="145"
          >
            <template slot-scope="scope">
              <el-input-number
                size="mini"
                v-model="scope.row.qty"
                :min="1"
                @change="changeCount(scope.row)"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column
            label="价格"
          >
            <template slot-scope="scope">￥{{ scope.row.price }}</template>
          </el-table-column>
          <el-table-column
          >
            <template slot-scope="scope">
              <el-button @click="deletePro(scope.row)" type="text" size="small">
                <img src="../../assets/icon/delete.png" >
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="button-contain">
          <el-button @click="toggleSelection(cartInfoList)" size="small">全选</el-button>
          <!--<el-button @click="toggleSelection()">取消选择</el-button>-->
        </div>
      </div>
    </el-col>
    <el-col :span="6" :offset="1">
      <div class="right-contain">
        <div class="total-contain">
          <div class="total">总计:</div>
          <div class="total-num">¥{{ total }}</div>
        </div>
        <div class="desc-text">已选择{{multipleSelection.length}}件商品</div>
        <el-button class="submit" :disabled="submitFilter(multipleSelection.length)"   @click="submitData">提交订单</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import { cartInfo, orderPlace, updateCart, getCartNum } from '@/service/index'

  export default {
    data() {
      return {
        multipleSelection: [],
        total: 0,
        selectAll: false,
        cartInfoList: [],
      }
    },
    computed: {
      ...mapState([
        'global','categories','campaign', 'bread', 'goods'
      ]),
    },
    methods: {
      ...mapMutations({
        initCartNum: 'INIT_CART_NUM',
      }),
      toggleSelection(rows) {
        if (rows && !this.selectAll) {
          this.selectAll = true;
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row, true);
          });
        } else {
          this.selectAll = false
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        this.total = 0;
        val.forEach(item => {
          this.total = this.total + parseFloat(item.price) * parseInt(item.qty);
        })
      },
      async changeCount(row){
        const param = {};
        param.items = [];
        param.items.push({
          qty: row.qty,
          productId: row.productId
        })
        const res = await updateCart(this.campaign.id, param)
        if(res.status === 0 ){
          this.total = 0;
          this.$refs.multipleTable.selection.forEach(item => {
            this.total = this.total + parseFloat(item.price) * parseInt(item.qty);
          })
          const cartRes = await getCartNum(this.campaign.id)
          this.initCartNum({ cartNum: cartRes.data })
        }
      },
      submitData() {
        this.$confirm('一个人只有2次下单机会，一经付款，订单就不可取消和修改，您依然确定要下单吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const id = this.orderPlace(this.multipleSelection);
          this.$router.push({
            name: 'cartmb',
            query:{id:id }
          })

        }).catch(() => {
        });
      },
      submitFilter(data){
        return data/1===0;
      },
      goBack(){
//        goback可能不存在
        this.$router.push('/home');
      },
      async getCartInfo() {
        const res = await cartInfo(this.campaign.id);
        console.log('cartInfoList', res);
        if (res.status === 0) {
          this.cartInfoList = res.data
        }
      },
      async orderPlace() {
        const param = {};
        param.items = [];
        this.multipleSelection.map(item => {
          param.items.push({
            productId: item.productId,
            qty: item.qty
          })
        })
        const res = await orderPlace(this.campaign.id, param);
        console.log('cartInfoList', res);
        if (res.status === 0) {
          this.$router.push(`/orderDetail/${res.data.order.id}`)
        }
      },
      async deletePro(row){
        const param = {};
        param.items = [];
        param.items.push({
          qty: 0,
          productId: row.productId
        })
        const res = await updateCart(this.campaign.id, param)
        if(res.status === 0){
          const cartRes = await getCartNum(this.campaign.id)
          this.initCartNum({ cartNum: cartRes.data })
          this.getCartInfo()
        }
      }
    },
    mounted() {
      this.getCartInfo();
    },

  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }

  .left-contain{
    flex-grow: 1;
  }

  .tab-subtitle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 107px;
    width: 100%;
    align-items: center;
    border-bottom: 2px solid #E6E6E6;
  }

  .right-contain {
    padding: 20px;
    margin-top: 24px;
    width: 330px;
    height: 132px;
    border-radius: 2px;
    background-color: rgba(244, 244, 244, 1);
    flex-grow: 1;
  }

  .cart-title {
    height: 42px;
    line-height: 42px;
    color: rgba(51, 51, 51, 1);
    font-size: 30px;
    text-align: left;
  }

  .cart-back {
    width: 128px;
    height: 40px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(230, 230, 230, 1);

  }

  .goods-title {
    text-align: left;
  }

  .goods-pic {
    height: 80px;
    width: 100px;
  }

  .goods-subtitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .align-left {
    text-align: left;
  }

  .font-14 {
    color: rgba(102, 102, 102, 1);
    font-size: 14px;
    text-align: left;

  }

  .font-18 {
    color: #333333;
    font-size: 18px;
    text-align: left;

  }

  .button-contain {
    margin: 30px 0 0 0;
    text-align: left;
  }

  .submit {
    width: 330px;
    height: 50px;
    border-radius: 4px;
    color: #ffffff;
    background-color: rgba(215, 178, 90, 1);
  }

  .total-contain {
    margin-top: 8px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  .total {
    width: 48px;
    height: 21px;
    line-height: 21px;
    color: rgba(51, 51, 51, 1);
    font-size: 16px;
    text-align: left;
    font-family: MicrosoftYaHei-Bold;
  }

  .total-num {
    width: 76px;
    height: 28px;
    line-height: 28px;
    color: rgba(190, 65, 65, 1);
    font-size: 20px;
    text-align: right;
  }

  .desc-text {
    margin-top: 13px;
    margin-bottom: 29px;
    width: 94px;
    height: 16px;
    line-height: 16px;
    color: rgba(102, 102, 102, 1);
    font-size: 12px;
    text-align: left;
    font-family: MicrosoftYaHei;

  }
</style>
