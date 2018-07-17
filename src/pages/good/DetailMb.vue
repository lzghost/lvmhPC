<template>
  <div class="detail-mb-wrapper">
    <el-main style="margin-bottom:60px;">
      <swiper :min-moving-distance="moveDistance" class="swiper-mb">
        <swiper-item v-for="item in productAndPic" :key="item.id">
          <img :src="item.url160" style="width:100%;height:100%;">
        </swiper-item>
      </swiper>
      <el-row :gutter="0">
        <el-col :span="22" :offset="1">
          <Code></Code>
          <div class="title-name">{{ product.name }}</div>
          <el-row :gutter="0" class="priceCard">
            <el-col :span="5">
              <div class="priceNow">
                ￥{{ product.price }}
              </div>
            </el-col>
            <el-col :offset="1" :span="6" style="height: 100%;">
              <div class="original">
                ¥{{ product.originPrice }}
              </div>
            </el-col>
          </el-row>
          <div class="des">{{ product.description }}
          </div>
          <Norm v-if="spec == null"/>
          <el-row :gutter="10" style="margin-top: 20px;height: 28px;">
            <el-col :span="4" style="text-align: left;height: 28px;line-height: 28px;">数量</el-col>
            <el-col :span="7" style="text-align: right;font-size: 12px;color:#999999;height: 28px;line-height: 28px;">
              库存:{{ product.stock }}
            </el-col>
            <el-col :span="13">
              <el-input-number size="mini" v-model="count"></el-input-number>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
    <el-row class="nav-good">
      <el-col :span="4" style="height:100%" @click.native="goHome">
        <img src="../../assets/mobile/pagehome.png" width="25" height="24" style="margin:13px auto;">
      </el-col>
      <el-col :span="4" style="height:100%" @click.native="goCart">
        <el-badge :value="cartList.cartNum" :hidden="cartList.cartNum === 0" :max="99" class="item" ref="cartContainer">
          <img src="../../assets/mobile/cart.png" width="25" height="24" style="margin:13px auto;">
        </el-badge>
      </el-col>
      <el-col :span="16">
        <div class="cart" @click="addProToCart(product.id)">加入购物车</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapState, mapMutations } from "vuex";
  import { Swiper, SwiperItem } from "vux"
  import Norm from '../../components/card/norm'
  import { goodProduct, getProductPic, addCart } from '../../service/index'
  import { productCombine } from '../../utils/storage'

  export default {
    data() {
      return {
        moveDistance: 60,
        count: 1,
        spec: null,
        productPic: [],
        products: {},
        select: 0,
      };
    },
    components:{
      Swiper, SwiperItem, Norm
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
        this.productPic.map((item) => {
          this.products.map((good) => {
            if (item.goodId === good.goodId) {
              result.push({...item, ...good})
            }
          })
        })
        return result;
      },
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
          // let elLeft = event.target.getBoundingClientRect().left;
          // let elBottom = event.target.getBoundingClientRect().bottom;
          // this.showMoveDot.push(true);
          // this.$emit('showMoveDot', this.showMoveDot, elLeft, elBottom);
        }
      },
      goHome(){
        this.$router.push('/campaigns')
      },
      goCart(){
        this.$router.push('/cart')
      }
    }
  };
</script>

<style scoped>
  .detail-mb-wrapper{

  }

  .swiper-mb {
    border: 1px solid rgba(243, 243, 243, 1);
  }

  .title-name {
    line-height: 22px;
    color: rgba(51, 51, 51, 1);
    font-size: 16px;
    text-align: left;
    margin-top: 3px;
  }

  .priceCard {
    margin-top: 7px;
    height: 22px;
  }

  .priceNow {
    color: #b98e2b;
    font-size: 16px;
    text-align: left;
  }

  .original {
    color: #999999;
    font-size: 12px;
    line-height: 25px;
    color: rgba(153, 153, 153, 1);
    text-align: left;
    height: 100%;
    text-decoration: line-through;
  }

  .des {
    line-height: 17px;
    color: rgba(102, 102, 102, 1);
    font-size: 12px;
    text-align: left;
    padding-bottom: 19px;
  }

  .nav-good {
    height: 49px;
    background-color: rgba(255, 255, 255, 1);
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
    bottom: 0;
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
</style>
