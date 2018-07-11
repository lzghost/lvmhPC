<template>
  <div class="wrapper">
    <mt-index-list :show-indicator="noIndex">
      <mt-index-section @click.native="goHomeWithFilter(categories[index].id)" :index="categories[index].name" v-for="index in Object.keys(categories)" :key="categories[index].id">
        <mt-cell :title="item.name" @click.native.stop="goHomeWithFilter(categories[index].id, item.id)" :key="item.id" v-for="item in categories[index].children"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
  import {
    mapState
  } from "vuex";

  export default {
    data() {
      return {
        noIndex: false,
      };
    },
    async beforeMount() {
    },
    mounted() {
    },
    components: {},
    computed: {
      ...mapState([
        "categories"
      ])
    },
    methods: {
      goHomeWithFilter(typeId,catId){
        this.$router.push({
          name: 'home',
          query:{ type: typeId, cat: catId }
        })
      }
    },
    watch: {}
  };
</script>

<style scoped>
  .wrapper {
    text-align: left;
    width: 100%;
  }

  .wrapper .mint-indexlist-nav {
    display: none;
  }
</style>
