<template>
<div>
  <el-container v-if="global.isPc">
    <el-header >
      <Menu />
    </el-header>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <el-footer v-if="global.isPc">
      @2018 LVMH
    </el-footer>
  </el-container>
  <div v-if="!global.isPc">
  <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
   <MenuMb/>
  </div>
</div>
</template>

<script>
  import { mapState } from 'vuex'
  import Menu from '../../components/menu/Menu.vue'
  import MenuMb from '../../components/menu/MenuMb.vue'
  import { campaignMenu, campaignInfo } from '../../service'

  export default {
    data(){
      return {
      }
    },
    components:{
      Menu,MenuMb
    },
    mounted() {
      this.getMenu();
    },
    computed:{
      ...mapState([
        'global', 'campaign'
      ])
    },
    methods:{
      ...mapMutations({
        saveCampaignInfo: 'INIT_CAMPAIGN'
      }),
      async getMenu(){
        const campaignInfo = await campaignInfo(this.campaign.id);
        if(campaignInfo.data){
          const dateTime = new Date().getTime()
          if(dateTime > campaignInfo.data.end){
            this.$router.push() //活动过期
          }else if(dateTime < campaignInfo.data.begin){
            this.$router.push() //活动未开始
          }else{
            this.saveCampaignInfo(campaignInfo.data)
            const menu = await campaignMenu(this.campaign.id);

          }
        }

      }
    }
  }
</script>

<style scoped>

</style>
