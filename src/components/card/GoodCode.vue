<template>
  <div class="code">
    {{ codeValue }}
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    props:['codeValue']
  }

</script>

<style scoped>
  .code {
    text-align: left;
    color: #999999;
    font-size: 12px;
    margin-top: 18px;
  }
</style>
