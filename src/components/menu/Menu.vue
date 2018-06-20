<template>
  <el-row :gutter="0">
    <el-col :xs="4" :sm="4" :md="2" :lg="1" :xl="2"></el-col>
    <el-col :xs="4" :sm="4" :md="2" :lg="1" :xl="2">LVMH</el-col>
    <el-col :xs="4" :sm="4" :md="2" :lg="2" :xl="2" v-bind:class="{ activePerfume: isPerfumeActive }">
      <!--<div v-on:click="showPerfume">香水</div>-->
      <div v-on:click="showPerfume" v-popover:popoverPer>香水</div>
    </el-col>
    <el-col :xs="4" :sm="4" :md="2" :lg="2" :xl="2" v-bind:class="{ activePerfume: isMakeUpActive }">
      <div @click="showMakeUp" v-popover:popoverMake >彩妆</div>
    </el-col>
    <el-col :xs="4" :sm="4" :md="2" :lg="2" :xl="2" v-bind:class="{ activePerfume: isSkinActive }">
      <div @click="showSkin" v-popover:popoverSkin >护肤</div>
    </el-col>
    <el-col :xs="4" :sm="4" :md="5" :lg="7" :xl="2">搜索</el-col>
    <el-col :xs="4" :sm="4" :md="3" :lg="3" :xl="2">我的</el-col>
    <el-col :xs="4" :sm="4" :md="3" :lg="3" :xl="2">购物车</el-col>
    <el-col :xs="4" :sm="4" :md="3" :lg="3" :xl="2">EN</el-col>
    <el-popover
      ref="popoverPer"
      placement="bottom"
      width="100%"
      trigger="click"
      popper-class="popMenu"
      :visible-arrow=false
    >
      <el-row :gutter="0">
        <el-col :xs="4" :sm="4" :md="4" :lg="2" :xl="2">Combined</el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="2" :xl="2">CPCD</el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="2" :xl="2">Dior Homme</el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="2" :xl="2">J'Adore</el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="2" :xl="2">Miss Dior</el-col>
      </el-row>
    </el-popover>
    <el-popover
      ref="popoverMake"
      placement="bottom"
      width="100%"
      trigger="click"
      popper-class="popMenu"
      :visible-arrow=false
    >
      <el-row :gutter="0">
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">Addict Make-up</el-col>
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">Backstage </el-col>
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">Capture Totale Make-up </el-col>
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">Diorific</el-col>
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">Diorshow</el-col>
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">Diorskin</el-col>
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">Prestige</el-col>
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">Rouge Dior</el-col>
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">Snow Make-up</el-col>
      </el-row>
    </el-popover>
    <el-popover
      ref="popoverSkin"
      placement="bottom"
      width="100%"
      trigger="click"
      popper-class="popMenu"
      :visible-arrow=false
    >
      <el-row :gutter="0">
        <el-col :xs="3" :sm="3" :md="3" :lg="2" :xl="2">Capture Totale </el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="2" :xl="2">Cleanser </el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="2" :xl="2">Dior Snow </el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="2" :xl="2">Hydralife </el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="2" :xl="2">L'or de vie</el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="2" :xl="2">One Essential</el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="2" :xl="2">Prestige</el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="2" :xl="2">Prestige White</el-col>
      </el-row>
    </el-popover>
  </el-row>

</template>

<script>
  export default {
    name: '',
    data(){
      return {
        isPerfumeActive: false,
        isMakeUpActive: false,
        isSkinActive: false,
        popOption: { boundariesElement:'body' },
      }
    },
    mounted() {

    },
    methods: {
      showPerfume(event){
        console.log(1)
        this.isPerfumeActive = true;
        this.isMakeUpActive = false;
        this.isSkinActive = false;
      },
      showMakeUp(){
        this.isPerfumeActive = false;
        this.isMakeUpActive = true;
        this.isSkinActive = false;
      },
      showSkin(){
        this.isPerfumeActive = false;
        this.isMakeUpActive = false;
        this.isSkinActive = true;
      }
    }
  }
</script>

<style scoped>
  .el-row {
    background-color: black;
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

  .activePerfume {
    color: yellow;
    border-bottom: 2px yellow solid;
  }

</style>
