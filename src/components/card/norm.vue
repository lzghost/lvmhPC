<template>
  <div class="body">
    <div>规格</div>
    <el-row :gutter="0" style="margin-top: 5px;">
      <el-col :xs="8" :sm="6" :md="6" :lg="6" :xl="1">
        <div class="active-capacity">
          50ml
        </div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="6" :lg="6" :xl="1">
        <div class="capacity">
          100ml
        </div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="6" :lg="6" :xl="1">
        <div class="capacity">
          100ml
        </div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="6" :lg="6" :xl="1">
        <div class="capacity">
          100ml
        </div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="6" :lg="6" :xl="1">
        <div class="capacity">
          100ml
        </div>
      </el-col>
    </el-row>
    <div style="margin-top: 15px;">
      型号
    </div>
    <el-row :gutter="0" style="margin-top: 6px;">
      <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="active-type">
          01
        </div>
      </el-col>
      <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="type">
          02
        </div>
      </el-col>
    </el-row>
  </div>
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
  .body{
    text-align: left;
    height: 147px;
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
</style>
