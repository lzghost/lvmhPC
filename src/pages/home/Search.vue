<template>
  <div>
    <mt-search v-model="value" :autofocus="true">
      1
    </mt-search>
    <search>

    </search>
  </div>
</template>

<script>
  import { Search, Grid, GridItem, GroupTitle } from 'vux'
  export default {
    name: "Search",
    components:{
      Search, Grid, GridItem, GroupTitle
    },
    data(){
      return {
        value: "1",
      }
    }
  }
</script>

<style scoped>

</style>
