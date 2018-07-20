<template>
  <div>
    <check-list-mb :options="cartInfoList" style="margin-bottom:115px;"></check-list-mb>
    <el-row class="nav-good">
      <el-col :span="7" style="height:100%">
        <check-icon :value.sync="demo1" style="margin-top:13px;">全选</check-icon>
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
  import { mapState, mapMutations } from 'vuex'
  import { CheckIcon } from 'vux'
  import { cartInfo } from '@/service/index'
  import CheckListMb from '@/components/cart/CheckList.vue'

  export default {
    data () {
      return {
        temp: [],
        demo1: true,
        total: 0,
        cartInfoList: []
      }
    },
    computed: {
      ...mapState([
        'global', 'categories', 'campaign', 'bread', 'goods'
      ])
    },
    mounted () {
      this.getCartInfo()
    },
    components: {
      CheckListMb,
      CheckIcon,
    },
    methods: {
      async getCartInfo () {
        const res = await cartInfo(this.campaign.id)
        if (res.status === 0) {
          this.cartInfoList = res.data
        }
      }
    },
    watch: {}
  }
</script>

<style scoped>
  .nav-good {
    height: 49px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: undefined, inset 0px 0.5px 0px 0px rgba(0, 0, 0, 0.25);
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

</style>
