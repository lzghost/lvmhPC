<template>
  <el-row class="activity">
    <el-col class="content" v-bind:style="{backgroundImage: 'url(' + camp.pic + ')'}">
        <el-row style="height:100%;">
            <el-col :span="5" :offset="19" class="next">
                <div class="display" style="height:100%;width:100%;" >Next
                    <div>
                      <img src="../../assets/icon/left.png"/>
                    </div>
                </div>
            </el-col>
        </el-row>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'mb-activity',
    data(){
      return {
        test: require('../../assets/activity-mb-one.png')
      }
    },
    props:['camp'],
  }
</script>

<style scoped>
  .activity{
    height: 25%;
  }
  .content{
    height: 100%;
    background-size: 100% 100%;
  }
  .next{
    opacity: 0.28;
    background-color: rgba(0, 0, 0, 1);
    line-height: 20px;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    text-align: left;
    height: 46%;
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
