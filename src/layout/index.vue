<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'Layout',
    data(){
      return{
        guessCity: '',   //当前城市
        guessCityid: '', //当前城市id
        hotcity: [],     //热门城市列表
        groupcity: {},   //所有城市列表
      }
    },
    mounted(){

    },
    computed:{
      //将获取的数据按照A-Z字母开头排序
      sortgroupcity(){
        let sortobj = {};
        for (let i = 65; i <= 90; i++) {
          if (this.groupcity[String.fromCharCode(i)]) {
            sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)];
          }
        }
        return sortobj
      }
    },
    methods:{
      //点击图标刷新页面
      reload(){
        window.location.reload();
      }
    },
  }
</script>

<style  scoped>

</style>
