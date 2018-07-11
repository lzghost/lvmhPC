<template>
    <mt-tabbar v-model="selected" style="z-index:999">
        <mt-tab-item id="activity" @click.native="goToHome">
            <img slot="icon" :src="activityIcon"> 活动
        </mt-tab-item>
        <mt-tab-item id="cat" @click.native="goToMenu">
            <img slot="icon" :src="catIcon"> 分类
        </mt-tab-item>
        <mt-tab-item id="cart" @click.native="goToCart">
            <img slot="icon" :src="cartIcon"> 购物车
        </mt-tab-item>
        <mt-tab-item id="my" @click.native="goToMy">
            <img slot="icon" :src="myIcon"> 我的
        </mt-tab-item>
    </mt-tabbar>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
        selected: 'activity',
        activityIcon : require('../../assets/mobile/home.png'),
        catIcon: require('../../assets/mobile/cat.png'),
        cartIcon: require('../../assets/mobile/cart.png'),
        myIcon: require('../../assets/mobile/my-mb-select.png'),
    };
  },
  async beforeMount() {},
  mounted() {},
  components: {},
  computed: {

  },
  methods: {
    goToMenu() {
      this.$router.push('/cat')
    },
    goToHome() {
      this.$router.push('/home')
    },
    goToCart() {
      this.$router.push('/cart')
    },
    goToMy() {
      this.$router.push('/order')
    }
  },
  watch: {
      selected: function(newSelected, oldSelected){
          switch(newSelected){
              case 'activity':
              this.activityIcon = require('../../assets/mobile/home-mb-select.png')
              break;
              case 'cat':
              this.catIcon = require('../../assets/mobile/cat.png')
              break;
              case 'cart':
              this.cartIcon = require('../../assets/mobile/cart-mb-select.png')
              break;
              case 'my':
              this.myIcon = require('../../assets/mobile/my-mb-select.png')
              break;
          }
          switch(oldSelected){
              case 'activity':
              this.activityIcon = require('../../assets/mobile/home.png')
              break;
              case 'cat':
              this.catIcon = require('../../assets/mobile/cat.png')
              break;
              case 'cart':
              this.cartIcon = require('../../assets/mobile/cart.png')
              break;
              case 'my':
              this.myIcon = require('../../assets/mobile/my-mb-select.png')
              break;
          }
      }
  }
};
</script>

<style scoped>
 .mint-tabbar{
  position: fixed;
}
</style>
