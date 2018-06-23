<template>
  <el-button type="text">
    <div class="add">
      <img src="../../assets/icon/cart.png" class="cartIcon"/>加入购入车
    </div>
  </el-button>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    data(){
      return {}
    },
    async beforeMount(){
    },
    mounted(){
    },
    components: {},
    computed: {},
    methods: {},
    watch: {}
  }

</script>

<style scoped>
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
