<template>
  <el-row :gutter="0" class="menu-wrapper">
    <el-col :xs="4" :sm="4" :md="2" :lg="1" :xl="1"></el-col>
    <el-col :xs="4" :sm="4" :md="2" :lg="1" :xl="1">
      <router-link :to="{path: '/campaigns'}">
        <el-button type="text">LVMH</el-button>
      </router-link>
    </el-col>
    <el-col :xs="4" :sm="4" :md="2" :lg="2" :xl="2" v-for="(menu, index) in menuData" :key="index">
      <Type :menu="menu"/>
    </el-col>
    <el-col  :xs="4" :sm="4" :md="5" :lg="menuLength" :xl="menuLength">

    </el-col>
    <el-col :xs="4" :sm="4" :md="5" :lg="4" :xl="4" style="text-align: right">
      <el-button
        v-show="searchState"
        @click.native="changeSearchState"
        type="text">
        <img
          style="vertical-align: middle;"
          width="16" height="16" src="../../assets/icon/search.png">
      </el-button>
      <el-input
        v-show="!searchState"
        autofocus
        clearable
        v-model="keyWord"
        @change="searchKeyWord"
        placeholder="搜索"
        size="mini"
        ref="searchInput"
        >
        <i slot="prefix" class="el-input__icon el-icon-search" @click="searchStateTrue"></i>
      </el-input>
    </el-col>
    <el-col  :xs="4" :sm="4" :md="5" :lg="1" :xl="1">

    </el-col>
    <el-col :xs="4" :sm="4" :md="3" :lg="2" :xl="2" clas="nav">
      <router-link to="/order">
        <el-button type="text">
          <img style="margin-right: 4px;vertical-align: middle" src="../../assets/icon/mine.png" width="16"
               height="16"/>我的
        </el-button>
      </router-link>
    </el-col>
    <el-col :xs="4" :sm="4" :md="3" :lg="2" :xl="2" class="nav">
      <router-link to="/cart">
        <el-button type="text">
          <el-badge :value="cartList.cartNum" :hidden="cartList.cartNum === 0" :max="99" class="item" ref="cartContainer">
            <img style="margin-right: 4px;" src="../../assets/icon/nav-cart.png" width="18" height="16"/>
          </el-badge>
          购物车
        </el-button>
      </router-link>
    </el-col>
    <el-col :xs="4" :sm="4" :md="3" :lg="2" :xl="2">EN</el-col>
  </el-row>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { searchGoods } from '../../service/index'
  import Type from './Type'

  export default {
    data () {
      return {
        searchState: true,
        keyWord: ''
      }
    },
    components: {
      Type
    },
    props: {
      menuData: {
        type: Array,
        default: [],
      }
    },
    computed: {
      ...mapState([
        'global', 'cartList', 'campaign'
      ]),
      cartNum(){
        if(this.cartList.cartNum){
          return this.cartList.cartNum > 99 ? '99+' : this.cartList.cartNum;
        }
        return 0
      },
      menuLength() {
        return 10 - (this.menuData.length*2)
      }
    },
    watch:{
      searchState(newValue, oldValue){
        if(!newValue){
          this.$nextTick(_ => this.$refs.searchInput.focus())
        }
      }
    },
    methods: {
      ...mapMutations({
        initGoods: 'INIT_GOODS'
      }),
      changeSearchState(){
        this.searchState = !this.searchState;
      },
      searchStateTrue(){
        this.searchState = true
        this.keyWord = ''
      },
      async searchKeyWord(){
        const res = await searchGoods(this.campaign.id, {
          keyword: this.keyWord
        });
        if(res.status === 0){
          this.initGoods(res.data)
        }
      }
    }
  }
</script>

<style scoped>
  .el-row {
    background-color: #333333;
    height: 100%;
    color: white;
    text-align: center;
    vertical-align: middle;
  }

  .el-col {
    height: 100%;
    line-height: 60px;
    cursor: pointer;
  }

  .el-col div {
    height: 100%;
    width: 100%;
  }

  .el-button {
    color: white;
  }

  .nav {

  }

  .el-button:focus, .el-button:hover, nav:focus, nav:hover {
    color: rgba(215, 178, 90, 1);
    border-bottom: 2px solid rgba(215, 178, 90, 1);
    border-radius: 0;
  }

  .item {
    width: auto !important;
    height: auto !important;
  }

</style>
