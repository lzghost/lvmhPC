<template>
  <div>
    <el-popover
      placement="bottom"
      width="100%"
      trigger="hover"
      popper-class="popMenu"
      :visible-arrow=false
    >
      <el-row :gutter="0" class="cat">
        <span v-for="item in menu.children" :key="item.id">
          <router-link :to="{path: '/home', query:{type: menu.id, cat: item.id}}">
            <el-button type="text">{{ item.name }}</el-button>
          </router-link>
        </span>
      </el-row>
        <el-button slot="reference" type="text">
          <router-link :to="{path: '/home', query:{type: menu.id}}"><span class="cat">{{ menu.name }}</span></router-link>
        </el-button>
    </el-popover>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: '',
    data() {
      return {
        popOption: {boundariesElement: 'body'},
      }
    },
    mounted(){
      this.popoverRef = this.menu.id;
    },
    props: ['menu'],
    methods: {
      ...mapMutations({
        changeBread: 'CHANGE_BREAD',
      }),
      changeBreadCrumb(menuName, childrenName){
        if(childrenName){
          this.changeBreadCrumb([menuName, childrenName])
        }else{
          this.changeBreadCrumb([menuName])
        }
      },
    }
  }
</script>

<style scoped>
  .cat {
    background-color: #333333;
    height: 100%;
    color: white;
    text-align: left;
    vertical-align: middle;
  }

  .cat span{
    margin: 0 10px;
  }

  .el-col {
    height: 100%;
    line-height: 40px;
    cursor: pointer;
  }

  .el-col div {
    height: 100%;
    width: 100%;
  }
  .el-button{
    color: white;
  }

  .el-button span{
    background-color: #333333;
    height: 100%;
    color: white;
    text-align: left;
    vertical-align: middle;
  }
  .el-button:focus, .el-button:hover{
    color: rgba(215, 178, 90, 1);
    border-bottom: 2px solid rgba(215, 178, 90, 1);
    border-radius: 0;
  }

</style>
