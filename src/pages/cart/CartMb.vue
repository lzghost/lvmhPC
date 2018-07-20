<template>
  <div>
    <!--<check-list-mb-->
      <!--:options="cartInfoList"-->
      <!--style="margin-bottom:115px;"-->
    <!--&gt;</check-list-mb>-->
    <div class="checklist-mb-wrapper">
      <el-row
        v-for="(one, index) in cartInfoList"
        v-bind:key="index"
        class="list"
      >
        <div>
          <el-col :span="3">
            <check-icon
              :value.sync="one.checked"
              style="margin-top:20px;"
            ></check-icon>
          </el-col>
          <el-col :span="6">
            <img :src="one.pic" width="70" height="70">
          </el-col>
          <el-col :span="14" style="margin-left:5px;">
            <div class="good-name"> {{one.name}}</div>
            <div class="good-norm"> {{one.spec1}}；{{one.spec2}}</div>
            <el-row>
              <el-col :span="9">
                <div class="good-price"> ¥{{one.price}}</div>
              </el-col>
              <el-col :span="15">
                <el-input-number
                  size="mini"
                  :min="1"
                  v-model="one.qty"
                  @change="changeCount(one)"
                ></el-input-number>
              </el-col>
            </el-row>
          </el-col>
        </div>
      </el-row>
    </div>
    <el-row class="nav-good">
      <el-col :span="7" style="height:100%">
        <check-icon
          :value.sync="demo1"
          style="margin-top:13px;"
        >全选</check-icon>
      </el-col>
      <el-col :span="7" style="height:100%">
        <div class="total">
          ￥{{ total }}
        </div>
      </el-col>
      <el-col :span="9" :offset="1">
        <div class="cart">立即购买</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import {CheckIcon} from 'vux'
  import {cartInfo, orderPlace, updateCart, getCartNum} from '@/service/index'


  export default {
    data() {
      return {
        temp: [],
        demo1: false,
        total: 0,
        cartInfoList: []
      }
    },
    computed: {
      ...mapState([
        'global', 'categories', 'campaign', 'bread', 'goods'
      ]),
    },
    mounted() {
      this.getCartInfo()
    },
    components: {
      CheckIcon,
    },
    methods: {
      async getCartInfo() {
        const res = await cartInfo(this.campaign.id)
        if (res.status === 0) {
          res.data.map(item => item.checked = false)
          this.cartInfoList = res.data
        }
      },
    },
    watch: {
      cartInfoList: {
        deep: true,
        handler: function(val, oldVal){
          console.log(val);
        }
      },
      demo1() {
        console.log(2)
      }
    }
  }
</script>

<style scoped>
  .nav-good {
    height: 49px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: inset 0px 0.5px 0px 0px rgba(0, 0, 0, 0.25);
    position: fixed;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#d9d9d9), color-stop(50%, #d9d9d9), color-stop(50%, transparent));
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    background-color: #fafafa;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    right: 0;
    bottom: 55px;
    left: 0;
    text-align: center;
    z-index: 999;
  }

  .cart {
    height: 49px;
    background-color: rgba(215, 178, 90, 1);
    line-height: 49px;
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    text-align: center;
  }

  .total {
    line-height: 49px;
    color: rgba(185, 142, 43, 1);
    font-size: 18px;
    text-align: right;
    height: 100%;
  }

  .checklist-mb-wrapper {
    width: 100%;
  }

  .list {
    padding: 18px 10px;
  }

  .good-name {
    line-height: 17px;
    color: rgba(51, 51, 51, 1);
    font-size: 12px;
    text-align: left;
  }

  .good-norm {
    line-height: 17px;
    color: rgba(153, 153, 153, 1);
    font-size: 12px;
    text-align: left;
  }

  .good-price {
    line-height: 20px;
    color: rgba(185, 142, 43, 1);
    font-size: 14px;
    text-align: left;
  }
</style>
