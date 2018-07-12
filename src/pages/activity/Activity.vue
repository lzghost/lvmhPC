<template>
  <div style="background-color: black;width:100%;height:100%;">
    <el-main v-if="global.isPc === false" style="width:100%;height:100%;">
      <ActivityMb v-for="cap in campaignList" :key="cap.id" :camp="cap" @click.native="openPop(cap.id)"/>
    </el-main>
    <el-main v-else style="width:100%;height:100%;padding-top: 33px;">
      <el-row>
        <div style="margin: 40px 0;">
          <img src="../../assets/logo.png"/>
        </div>
      </el-row>
      <el-row style="padding-bottom: 30px">
        <el-col :span="20" :offset="2" v-for="cap in campaignList" :key="cap.id" @click.native="openPop(cap.id)">
          <Activity :camp="cap" />
        </el-col>
      </el-row>
      <el-row style="color: white">
        @2018 LVMH
      </el-row>
    </el-main>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import ActivityMb from '../../components/activity/ActivityMb.vue'
  import Activity from '../../components/activity/Activity'
  import { activityList } from '../../service/index'

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
      },
      ...mapMutations({
        chooseCampaign: 'INIT_CAMPAIGN'
      }),
      openPop(id){
        console.log(id)
        this.chooseCampaign({id})
        this.$router.push('/home')
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
