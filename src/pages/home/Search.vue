<template>
  <div>
    <Search
      ref="searchPage"
      @on-cancel="goBack"
      placeholder="搜索您感兴趣的商品"
      auto-fixed
      @@on-submit="doSearch"
      @on-clear="clearSearch"
      v-model="keyword"
    >
      <group-title style="text-align: left" v-show="!showHistory"> 搜索历史 </group-title>
      <grid v-show="!showHistory" :cols="3" :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item v-for="i in hot" :key="i">
          <span class="grid-center">{{i}}</span>
        </grid-item>
      </grid>
      <cell-box v-show="showHistory" is-link v-for="item in searchResult" @click.native="saveThisHistory">
        {{ item.name }}
      </cell-box>
    </Search>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { Search, Grid, GridItem, GroupTitle, CellBox } from 'vux'
  import { searchGoods } from '@/service/index'
  import { saveSearch, getSearchInfo } from '@/utils/cache'
  export default {
    components:{
      Search, Grid, GridItem, GroupTitle, CellBox
    },
    data(){
      return {
        keyword: "",
        hot: [],
        searchResult: [],
      }
    },
    mounted(){
      this.$refs.searchPage.setFocus();
      this.hot = getSearchInfo()
    },
    computed: {
      ...mapState([
        'campaign'
      ]),
      showHistory(){
        return this.searchResult.length > 0
      }
    },
    methods: {
      ...mapMutations({
        initGoods: 'INIT_GOODS'
      }),
      goBack(){
        this.$router.history.go(-1);
      },
      async doSearch(){
        if(this.keyword){
          const res = await searchGoods(this.campaign.id, {
            keyword: this.keyword
          });
          if(res.status === 0){
            this.initGoods(res.data)
            this.$router.history.go(-1)
          }
        }else{
          this.clearSearch()
        }
      },
      clearSearch(){
        this.searchResult = []
      },
      saveThisHistory(){
        saveSearch(this.keyword)
      }
    }
  }
</script>

<style scoped>

</style>
