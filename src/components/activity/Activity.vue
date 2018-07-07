<template>
  <el-row class="activity" @click="openPop">
    <el-col class="content" v-bind:style="{backgroundImage: 'url(' + camp.pic + ')'}">
      <el-row style="height:100%;">
        <el-col :span="3" :offset="20" class="next">
          <div class="display" style="height:100%;width:100%;">Next
            <div>--></div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data(){
      return {
      }
    },
    props:['camp'],
    mounted() {

    },
    methods: {
      openPop(){
        console.log(this.camp)
        this.$router.push(`/home/${this.camp.id}`)
      }
    }
  }
</script>

<style scoped>
  .activity{
    margin-bottom: 3px;
    cursor: pointer;
  }
  .content{
    width: 100%;
    height: 400px;
    background-size:100% 400px;
    background-repeat:no-repeat;
  }
  .next{
    opacity: 0.28;
    background-color: rgba(0, 0, 0, 1);
    line-height: 20px;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    height: 30%;
    width: 10%;
    /* margin-top: 13%; */
    text-align: center;
    position: relative;
    top:50%;
    transform:translateY(-50%);
  }
  .display{
    /*flex 布局*/
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
    flex-direction: column;
  }
</style>
