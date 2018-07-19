<template>
  <div>
    <div v-if="global.isPc">
      <el-row style="margin-top: 40px;margin-bottom: 26px;">
        <el-col :offset="1" :span="6">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(des,index) in bread" :key="index">{{ des }}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6" v-for="good in showGoods" :key="good.id">
          <ProCard :goodInfo="good" :changeVisible="changeVisible" :closePop="closePop"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-pagination
            background
            :page-size="pageSize"
            :pager-count=5
            :current-page="currentPage"
            layout="prev, pager, next"
            @current-change="changeCurrentPage"
            :total="showAllGoods.length">
          </el-pagination>
        </el-col>
      </el-row>
      <!--<transition-->
        <!--appear-->
        <!--@after-appear = 'afterEnter'-->
        <!--@before-appear="beforeEnter"-->
        <!--v-for="(item,index) in showMoveDot"-->
      <!--&gt;-->
            <!--<span class="move_dot" v-if="item">-->
                <!--<svg class="move_liner">-->
                    <!--<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use>-->
                <!--</svg>-->
            <!--</span>-->
      <!--</transition>-->
      <PopCart
        :isShow="isShow"
        :goodInfo="productDetail"
        :products="products"
        :closePop="closePop"
        :spec="spec"
        :productPic="productPic"
      />
    </div>
    <div v-else style="background-color: white">
      <Search
        @on-focus="goToSearch"
        ref="homeSearch"
      >
        <img @click="goToMenuMb" slot="left" src="../../assets/mobile/menu.png" height="13px" width="15px" style="margin:auto; margin-right: 8px;">
      </Search>
      <el-row style="margin-bottom:60px;margin-top:15px;">
        <el-col :span="12">
          <el-row
            :gutter="0"
            type="flex"
            justify="space-around"
            v-for="(good,index) in firstCol"
            :key="good.id"
          >
            <el-col :span="22" :offset="1">
              <CardMb :goodInfo="good" @click.native="goToDetails(good.id)"/>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row
            :gutter="0"
            type="flex"
            justify="space-around"
            v-for="(good,index) in secondCol"
            :key="good.id"
          >
            <el-col :span="22">
              <CardMb :goodInfo="good" @click.native="goToDetails(good.id)"/>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import { Search, Grid, GridItem, GroupTitle } from 'vux'
  import { mapState, mapMutations } from 'vuex'
  import ProCard from '../../components/card/ProCard.vue'
  import CardMb from '../../components/card/CardMb'
  import PopCart from '../../components/cart/PopCart.vue'
  import { goodProduct, getProductPic, campaignGoods, getGoodsByType } from '../../service/index'
  import { productCombine } from '../../utils/storage'
  export default {
    name: 'Home',
    data(){
      return {
        currentPage: 1,
        pageSize: 8,
        total: 0,
        isShow: false,
        productDetail: {},
        spec: {},
        productPic: {},
        products: {},
        showMoveDot: [],
        filter: {},
        type: 0,
        cat: 0,
        firstCol: [],
        secondCol: [],
        searchDefault: '搜索'
      }
    },
    created(){
      this.reload()
      this.type = parseInt(this.$route.query.type || 0)
      this.cat = parseInt(this.$route.query.cat || 0)
      const length = this.goods.length;
      if(length % 2 === 0){
        this.firstCol = this.goods.slice(0, length/2)
        this.secondCol = this.goods.slice(length/2, length)
      }else{
        this.firstCol = this.goods.slice(0, parseInt(length/2) + 1)
        this.secondCol = this.goods.slice(parseInt(length/2) + 1, length)
      }
    },
    activated(){
      this.reload()
      this.type = parseInt(this.$route.query.type || 0)
      this.cat = parseInt(this.$route.query.cat || 0)
      const length = this.goods.length;
      if(length % 2 === 0){
        this.firstCol = this.goods.slice(0, length/2)
        this.secondCol = this.goods.slice(length/2, length)
      }else{
        this.firstCol = this.goods.slice(0, parseInt(length/2) + 1)
        this.secondCol = this.goods.slice(parseInt(length/2) + 1, length)
      }
    },
    mounted(){
    },
    components:{
      ProCard, Search, CardMb, PopCart, Grid, GridItem, GroupTitle
    },
    computed:{
      ...mapState([
        'global','categories','campaign', 'bread', 'goods'
      ]),
      showGoods: {
        get(){
          return this.showAllGoods.slice && this.showAllGoods.slice((this.currentPage-1) * this.pageSize,this.currentPage * this.pageSize);
        },
        set() {

        }
      },
      showAllGoods: {
        get() {
          if(this.type && this.cat){
            const typeGoods = this.goods.filter(item => item.productTypeId === this.type)
            return typeGoods.filter(item => item.productCategoryId === this.cat);
          }else if(this.$route.query.type){
            return this.goods.filter(item => item.productTypeId === this.type)
          }
          return this.goods;
        },
        set(val){

        }
      }
    },
    watch:{
      currentPage: function(val, oldVal){
        this.showGoods = this.showAllGoods.slice && this.showAllGoods.slice((val-1) * this.pageSize,val * this.pageSize);
      },
      //监听路由跳转过来，传入的值
      $route(to){
        this.type = parseInt(this.$route.query.type || 0)
        this.cat = parseInt(this.$route.query.cat || 0)
        if(this.type && this.cat){
          this.getGoodsOfCat(this.type,this.cat)
        }else if(this.type){
          this.getGoodsOfType(this.type)
        }else{
          this.showAllGoods = this.goods
        }
      },
    },
    methods:{
      ...mapMutations({
        reload: 'RELOAD_GOODS'
      }),
      getGoodsOfType(typeId){
        this.showAllGoods = this.goods.filter(item => item.productTypeId === typeId);
      },
      getGoodsOfCat(typeId, catId){
        const typeGoods = this.goods.filter(item => item.productTypeId === typeId)
        this.showAllGoods = typeGoods.filter(item => item.productCategoryId === catId);
      },
      changeCurrentPage(val){
        this.currentPage = val
      },
      async changeVisible(goodInfo){
        const goodDetail = await goodProduct(goodInfo.id);
        this.spec = productCombine(goodDetail.data);
        this.products = goodDetail.data;
        this.productDetail = goodInfo
        const productPicture = await getProductPic(goodInfo.id)
        this.productPic = productPicture.data;
        this.isShow = true
      },
      closePop(){
        this.isShow = false
      },
      goToMenuMb(){
        this.$router.push({
          name: 'cat',
        })
      },
      goToDetails(id) {
        this.$router.push({name: 'detailMb', query: { id } });
      },
      goToSearch(){
        console.log(1)
        // this.$refs.homeSearch.setBlur();
        // this.$router.push('/search')
        this.$router.push('/search')
      },
    },
  }
</script>

<style scoped>

</style>
