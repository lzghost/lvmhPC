<template>
  <el-container class="container">
    <el-main>
      <el-row style="margin-top: 40px;margin-bottom: 26px;">
        <el-col :offset="1" :span="12">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(des,index) in bread" >{{ des }}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="10" :offset="2">
          <el-carousel arrow="always" :autoplay="false" height="474px">
            <el-carousel-item v-for="item in productAndPic" name="test">
              <img :src="item.url640" class="image"/>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="10" :offset="1">
          <Code :codeValue="product.sku"></Code>
          <el-row>
            <el-col>
              <div class="pro-name">{{ product.name }}</div>
            </el-col>
          </el-row>
          <div style="text-align: left;margin-bottom: 7px;">
            <span class="pro-price">￥{{ product.price }}</span>
            <span class="pro-origin">￥{{ product.originPrice }}</span>
          </div>
          <div class="pro-desc">{{ product.description }}</div>
          <Norm v-if="spec === null"/>
          <el-row style="margin-top: 20px;height: 28px;">
            <el-col :span="9" style="text-align: left">
              数量
              <el-input-number size="mini" v-model="count"></el-input-number>
            </el-col>
            <el-col :span="5" style="text-align: left;font-size: 12px;color:#999999;height: 28px;line-height: 28px;">
              库存:{{ product.stock }}
            </el-col>
          </el-row>
          <el-row>
            <el-col style="text-align: left">
              <el-button v-if="product.stock > 0" type="text" @click.native="addProToCart(product.id)">
                <div class="add">
                  <img src="../../assets/icon/cart.png" class="cartIcon"/>加入购入车
                </div>
              </el-button>
              <el-button v-else type="text">
                <div class="add" style="background-color: #CCCCCC">
                  售罄
                </div>
              </el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import Menu from '../../components/menu/Menu.vue'
  import Norm from '../../components/card/norm.vue'
  import Code from '../../components/card/GoodCode.vue'
  import Count from '../../components/cart/Count.vue'
  import CartBtn from '../../components/cart/CartBtn.vue'
  import {goodProduct, getProductPic, addCart} from '../../service/index'
  import {productCombine} from '../../utils/storage'

  export default {
    name: 'GoodDetail',
    data() {
      return {
        spec: null,
        productPic: [],
        products: {},
        select: 0,
        count: 1,
      }
    },
    components: {
      Menu, Norm, Code, Count, CartBtn
    },
    created() {
      this.changeVisible()
    },
    computed: {
      ...mapState([
        'categories', 'cartList', 'campaign', 'global'
      ]),
      product() {
        return this.productAndPic.length > 0 ? this.productAndPic[this.select] : {}
      },
      productAndPic() {
        const result = [];
        this.productPic && this.productPic.map((item) => {
          this.products.map((good) => {
            if (item.goodId === good.goodId) {
              result.push({...item, ...good})
            }
          })
        })
        return result;
      },
      bread() {
        const zhBread = ['内购']
        this.categories.length && this.categories.map((item) => {
          if (item.id === this.product.productTypeId) {
            zhBread.push(item.name)
          }
        })
        zhBread.push(this.product.name)
        return zhBread;
      }
    },
    methods: {
      ...mapMutations({
        initCart: 'INIT_CART_NUM'
      }),
      async changeVisible() {
        const goodId = this.$route.query.id;
        const products = await goodProduct(goodId);
        this.spec = productCombine(products.data);
        this.products = products.data;
        const productPicture = await getProductPic(goodId)
        this.productPic = productPicture.data;
        this.isShow = true
      },
      async addProToCart(goodId) {
        const param = {
          "items": [
            {
              "productId": goodId,
              "qty": this.count
            }
          ]
        }
        const result = await addCart(this.campaign.id, param);
        if (result.status === 0) {
          this.initCart({
            cartNum: this.count + this.cartList.cartNum,
          })
          // this.$
          // let elLeft = event.target.getBoundingClientRect().left;
          // let elBottom = event.target.getBoundingClientRect().bottom;
          // this.showMoveDot.push(true);
          // this.$emit('showMoveDot', this.showMoveDot, elLeft, elBottom);
        }
      }
    }
  }
</script>

<style scoped>
  .container {
    background-size: 100% auto;
    width: 100%;
    height: 100%;
    background-image: url('../../assets/bg.png');
  }

  .image {
    height: 399px;
    width: 399px;
  }

  .el-carousel {
    background-color: rgba(0, 0, 0, 0);
  }

  .pro-price {
    height: 42px;
    line-height: 42px;
    color: rgba(185, 142, 43, 1);
    font-size: 30px;
    text-align: left;
  }

  .pro-origin {
    height: 22px;
    line-height: 22px;
    color: rgba(153, 153, 153, 1);
    font-size: 16px;
    text-decoration: line-through;
    text-align: left;
    margin-left: 26px;
  }

  .pro-name {
    height: 33px;
    line-height: 33px;
    color: rgba(51, 51, 51, 1);
    font-size: 24px;
    text-align: left;
    margin-top: 5px;
  }

  .pro-desc {
    line-height: 20px;
    color: rgba(102, 102, 102, 1);
    font-size: 14px;
    text-align: left;
    margin-top: 17px;
  }

  .add {
    width: 290px;
    height: 40px;
    border-radius: 4px;
    background-color: rgba(215, 178, 90, 1);
    line-height: 40px;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    text-align: center;
  }

  .cartIcon {
    width: 21.43px;
    height: 20px;
    vertical-align: middle;
  }
</style>
