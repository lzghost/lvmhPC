<template>
  <div>
    <el-container v-if="global.isPc">
      <el-header>
        <Menu :menuData="navMenu"/>
      </el-header>
      <el-main>
        <el-row style="margin-top: 40px;margin-bottom: 26px;">
          <el-col :offset="1">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item v-for="(des,index) in global.bread" :key="index">{{ des }}</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
        </el-row>
        <transition name="router-fade" mode="out-in">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
        </transition>
        <transition name="router-fade" mode="out-in">
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
      </el-main>
      <el-footer v-if="global.isPc">
        @2018 LVMH
      </el-footer>
    </el-container>
    <div v-else>
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
  import {mapState, mapMutations} from 'vuex'
  import Menu from '../../components/menu/Menu.vue'
  import MenuMb from '../../components/menu/MenuMb.vue'
  import {campaignMenu, campaignInfo} from '../../service/index'
  import {pushChildren} from '../../utils/storage'

  export default {
    data() {
      return {
        navMenu: {},
      }
    },
    components: {
      Menu, MenuMb
    },
    mounted() {
      this.getMenu();
    },
    computed: {
      ...mapState([
        'global', 'campaign'
      ])
    },
    methods: {
      ...mapMutations({
        saveCampaignInfo: 'INIT_CAMPAIGN',
        initMenu: 'INIT_MENU',
      }),
      async getMenu() {
        const responseCampaign = await campaignInfo(this.campaign.id);
        if (responseCampaign.data) {
          const dateTime = new Date().getTime()
          // if(dateTime > responseCampaign.data.end){
          //   this.$router.push() //活动过期
          // }else if(dateTime < responseCampaign.data.begin){
          //   this.$router.push() //活动未开始
          // }else{
          //   this.saveCampaignInfo(responseCampaign.data)
          //   const menu = await campaignMenu(this.campaign.id);
          //
          // }
          this.saveCampaignInfo(responseCampaign.data)
          const menu = await campaignMenu(this.campaign.id);
          const parent = menu.data.types;
          const children = menu.data.cats;
          pushChildren(parent, children)
          this.navMenu = parent;
          this.initMenu(parent)
        }

      }
    }
  }
</script>

<style scoped>

</style>
