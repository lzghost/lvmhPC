<template>
  <div v-if="global.isPc" >
    <cart-pc />
  </div>
  <div v-else>
    <cart-mb />
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import CartMb from "./CartMb.vue";
  import CartPc from "./CartPc.vue";

  export default {
    name: 'cart',
    data(){
      return {}
    },
    components: {
      CartMb,
      CartPc,
    },
    computed:{
      ...mapState([
        'global'
      ]),
    }
  }
</script>

