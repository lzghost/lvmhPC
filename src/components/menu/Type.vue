<template>
  <div>
    <el-popover
      placement="bottom"
      width="100%"
      trigger="hover"
      popper-class="popMenu"
      :visible-arrow=false
    >
      <el-row :gutter="0">
        <el-col :xs="4" :sm="4" :md="4" :lg="2" :xl="2" v-for="item in menu.children" :key="item.id">{{ item.name }}</el-col>
      </el-row>
      <el-button slot="reference" type="text">{{ menu.name }}</el-button>
    </el-popover>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        popOption: {boundariesElement: 'body'},
      }
    },
    mounted(){
      this.popoverRef = this.menu.id;
    },
    props: ['menu'],
    watch: {
    },
    methods: {
      changeVisible(){
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
    line-height: 40px;
    cursor: pointer;
  }

  .el-col div {
    height: 100%;
    width: 100%;
  }
  .el-button{
    color: white;
  }
  .el-button:focus, .el-button:hover{
    color: rgba(215, 178, 90, 1);
    border-bottom: 2px solid rgba(215, 178, 90, 1);
    border-radius: 0;
  }

  .activePerfume {
    color: yellow;
    border-bottom: 2px yellow solid;
  }

</style>
