<template>
  <div>
    <el-container v-if="global.isPc">
      <el-header>
        <Menu :menuData="navMenu"/>
      </el-header>
      <el-main>
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
  import {campaignMenu, campaignInfo, categorieInfo, campaignGoods} from '../../service/index'
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
    created() {
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
        initGoods: 'INIT_GOODS',
      }),
      async getMenu() {
        const camId = this.campaign.id || this.$route.params.id
        const responseCampaign = await campaignInfo(camId);
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
          const menu = await campaignMenu(camId);
          const parent = menu.data.types;
          const children = menu.data.cats;
          pushChildren(parent, children)
          this.navMenu = parent;
          this.initMenu(parent);
          this.getGoodsByType(camId);
        }

      },
      async getGoodsByType(camId){
        const allGoods = await campaignGoods(camId)
        this.initGoods(allGoods.data)
      }
    }
  }
</script>

<style scoped>

</style>
