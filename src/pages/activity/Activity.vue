<template>
  <div style="background-color: black;width:100%;height:100%;">
    <el-main v-if="global.isPc === false" style="width:100%;height:100%;">
      <ActivityMb />
      <ActivityMb />
      <ActivityMb />
      <ActivityMb />
    </el-main>
    <el-main v-else style="width:100%;height:100%;pa">
      <div>
        <img src=""/>
      </div>
      <Activity :campList="campaignList"/>
    </el-main>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import ActivityMb from '../../components/activity/ActivityMb.vue'
  import Activity from '../../components/activity/Activity'
  import { activityList } from '../../utils/api'

  export default {
    data(){
      return {
        campaignList: [],
      }
    },
    components:{
      ActivityMb, Activity
    },
    mounted() {
      this.getCampaignList();
    },
    computed:{
      ...mapState([
        "global"
      ])
    },
    methods:{
      async getCampaignList(){
        const res = await activityList();
        if(res.status === 0){
          this.campaignList = res.data;
        }
      }
    }
  }
</script>

<style scoped>
  .el-header{
    margin-top: 1vh;
  }
  .logo{
    height:60px;
    margin:auto;
    width: 339px;
    background-image:url('../../assets/logo.png');
    background-size:100% auto;
  }
  .words{
    margin-top:49px;
    margin-bottom:68px;
    font-size:36px;
    line-height:50px;
    color:green;
  }
  .el-carousel-item{
    width: 75% !important;
  }
  .internal{
    width: 100%;
    height: 100%;
    background-image:url('../../assets/banner-internal.png');
  }
  .integral{
    width: 100%;
    height: 100%;
    background-image:url('../../assets/bnaner-hr.png');
    background-size:auto auto;
  }
  .trail{
    width: 100%;
    height: 100%;
    background-image:url('../../assets/banner-Trail.png');
    background-size:auto auto;
  }
</style>
