<template>
  <el-dialog :visible="isShow" width="500px" top="15vh" @close="closePop">
    <div slot="title" class="title">
      <el-row :gutter="0">
        <el-col :span="5">
          <el-row :gutter="0">
            <el-col>
              <img :src="product.url160" class="image"/>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="18" :offset="1">
          <el-row :gutter="0">
            <el-col>
              <div class="name">{{ goodInfo.name }}</div>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col>
              <div class="price"> ¥{{ goodInfo.price }}</div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!--<div class="body" v-if="Object.keys(spec).length > 0">-->
      <!--<div>规格</div>-->
      <!--<el-row :gutter="20" style="margin-top: 5px;">-->
        <!--<el-col :span="5">-->
          <!--<div class="active-capacity">-->
            <!--50ml-->
          <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :span="5">-->
          <!--<div class="capacity">-->
            <!--100ml-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->
      <!--<div style="margin-top: 15px;">-->
        <!--型号-->
      <!--</div>-->
      <!--<el-row :gutter="20" style="margin-top: 6px;">-->
        <!--<el-col :span="2">-->
          <!--<div class="active-type">-->
            <!--01-->
          <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :span="2">-->
          <!--<div class="type">-->
            <!--02-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->
    <!--</div>-->
    <el-row :gutter="20" style="margin-top: 20px;height: 28px;">
      <el-col :span="4" style="text-align: left;height: 28px;line-height: 28px;">数量</el-col>
      <el-col :span="12" style="text-align: right;font-size: 12px;color:#999999;height: 28px;line-height: 28px;">
        库存:{{ product.stock }}
      </el-col>
      <el-col :span="7">
        <el-input-number size="mini" v-model="count"></el-input-number>
      </el-col>
    </el-row>
    <div slot="footer" class="dialog-footer">
      <el-button type="text" @click="addToCart(product.id, $event)">
        <div class="add">
          <img src="../../assets/icon/cart.png" class="cartIcon"/>加入购物车
        </div>
      </el-button>
    </div>
  </el-dialog>

</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { addCart } from '../../service/index'
  export default {
    name: '',
    data(){
      return {
        count: 1,
        showMoveDot: [],
        select: 0,
      }
    },
    props: ['isShow', 'closePop', 'spec', 'productPic', 'goodInfo', 'products'],
    computed: {
      ...mapState([
        'cartList','campaign'
      ]),
      productAndPic(){
        const result = [];
        this.productPic.length && this.productPic.map((item) => {
          this.products.map((good) => {
            if(item.goodId === good.goodId){
              result.push({...item, ...good})
            }
          })
        })
        return result;
      },
      product(){
        return this.productAndPic.length > 0 ? this.productAndPic[this.select] : {}
      },
    },
    methods: {
      ...mapMutations({
        initCart: 'INIT_CART_NUM'
      }),
      async addToCart(goodId, event){
        const param = {
          "items": [
            {
              "productId": goodId,
              "qty": this.count
            }
          ]
        }
        const result = await addCart(this.campaign.id, param);
        if(result.status === 0){
          this.initCart({
            cartNum: this.count + this.cartList.cartNum,
          })
          let elLeft = event.target.getBoundingClientRect().left;
          let elBottom = event.target.getBoundingClientRect().bottom;
          this.showMoveDot.push(true);
          this.$emit('showMoveDot', this.showMoveDot, elLeft, elBottom);
          this.closePop();
        }
      }
    }
  }
</script>

<style scoped>
  .title {
    height: 95px;
    border-bottom: 2px solid rgba(230, 230, 230, 1);
  }

  .image {
    width: 80px;
    height: 77px;
    border: 1px solid rgba(230, 230, 230, 1);
  }

  .name {
    height: 20px;
    line-height: 20px;
    color: rgba(51, 51, 51, 1);
    font-size: 14px;
    text-align: left;
    margin-top: 15px;
  }

  .price {
    height: 30px;
    line-height: 30px;
    color: rgba(185, 142, 43, 1);
    font-size: 22px;
    text-align: left;
    margin-top: 5px;
  }

  .body {
    text-align: left;
    height: 147px;
    border-bottom: 2px solid rgba(230, 230, 230, 1);
  }

  .active-capacity {
    width: 90px;
    height: 28px;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(215, 178, 90, 1);
    text-align: center;
    line-height: 28px;
  }

  .capacity {
    width: 90px;
    height: 28px;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(153, 153, 153, 1);
    text-align: center;
    line-height: 28px;
  }

  .active-type {
    width: 31px;
    height: 28px;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(215, 178, 90, 1);
    line-height: 28px;
    text-align: center;
  }
  .type {
    width: 31px;
    height: 28px;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(153, 153, 153, 1);
    line-height: 28px;
    text-align: center;
  }
  .count{
    width: 28px;
    height: 28px;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(230, 230, 230, 1);
  }
  .dialog-footer{
    text-align: center;
  }
  .add{
    width: 290px;
    height: 40px;
    border-radius: 4px;
    background-color: rgba(215, 178, 90, 1);
    line-height: 40px;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    text-align: center;
  }
  .cartIcon{
    width: 21.43px;
    height: 20px;
    vertical-align: middle;
  }
</style>
