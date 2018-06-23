<template>
  <el-row :gutter="10" style="margin-top: 20px;height: 28px;">
    <el-col :span="4" style="text-align: left;height: 28px;line-height: 28px;">数量</el-col>
    <el-col :span="7">
      <el-input-number size="mini" v-model="count"></el-input-number>
    </el-col>
    <el-col :span="5" style="text-align: left;font-size: 12px;color:#999999;height: 28px;line-height: 28px;">
      库存:5000
    </el-col>
  </el-row>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    data(){
      return {
          count: 1,
      }
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

</style>
