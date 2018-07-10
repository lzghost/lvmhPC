<template>
  <div class="wrapper">
    <mt-index-list :show-indicator="noIndex">
      <mt-index-section :index="categories[index].name" v-for="index in Object.keys(categories)" :key="categories[index].id">
        <mt-cell :title="item.name" :key="item.id" v-for="item in categories[index].children"></mt-cell>
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
    methods: {},
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
