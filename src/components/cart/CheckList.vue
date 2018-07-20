<template>
  <div class="checklist-mb-wrapper">
    <el-row
      v-for="(one, index) in options"
      v-bind:key="index"
      class="list"
    >
      <div>
        <el-col :span="3">
          <check-icon
            @click.native="toggleCheck(index)"
            :value.sync="checkList[index]"
            style="margin-top:20px;"
          ></check-icon>
        </el-col>
        <el-col :span="6">
          <img :src="one.pic" width="70" height="70">
        </el-col>
        <el-col :span="14" style="margin-left:5px;">
          <div class="good-name"> {{one.name}} </div>
          <div class="good-norm"> {{one.spec1}}；{{one.spec2}} </div>
          <el-row>
            <el-col :span="9">
              <div class="good-price"> ¥{{one.price}} </div>
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
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { CheckIcon } from 'vux'
  import { orderPlace, updateCart, getCartNum } from '@/service/index'

  export default {
    props: {
      options: {
        type: Array,
        required: true
      },
    },
    data () {
      return {
        demo: true,
        checkList: []
      }
    },
    created () {
      for (let i = 0; i < this.options.length; i++) {
        this.checkList.push(true)
      }
    },
    components: {
      CheckIcon,
    },
    computed: {
      ...mapState([
        'global', 'categories', 'campaign', 'bread', 'goods'
      ])
    },
    methods: {
      ...mapMutations({
        initCartNum: 'INIT_CART_NUM',
      }),
      async changeCount (goods) {
        const param = {}
        param.items = []
        param.items.push({
          qty: goods.qty,
          productId: goods.productId
        })
        const res = await updateCart(this.campaign.id, param)
        if (res.status === 0) {
          const cartRes = await getCartNum(this.campaign.id)
          this.initCartNum({cartNum: cartRes.data})
        }
      },
      toggleCheck (index) {
        console.log('index = ' + index)
        this.$set(this.checkList, index, !this.checkList[index])
      }
    },
    watch: {}
  }
</script>

<style scoped>
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
