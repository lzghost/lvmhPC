<template>
  <el-container>
    <el-header>
      <Menu />
    </el-header>
    <el-main>
      <el-row class="profile">
        <el-col :span="8" :offset="8">
          <img src="../../assets/profile.png" width="122" height="122" style="margin-top: 32px"/>
          <div class="name">
            Erik Banks
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" :offset="8">
          <div class="">
            GIVENCHY
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18" :offset="3">
          <el-tabs type="border-card" :stretch="true">
            <el-tab-pane label="全部订单" >
              <el-table
                ref="multipleTable"
                :data="tableData3"
                tooltip-effect="dark"
                style="width: 100%"
                :show-header="false"
                @selection-change="handleSelectionChange">
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column
                  label="日期"
                  width="120">
                  <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址"
                  show-overflow-tooltip>
                </el-table-column>
              </el-table>

            </el-tab-pane>
            <el-tab-pane label="未付款">

            </el-tab-pane>
            <el-tab-pane label="已付款">

            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      @2018 LVMH
    </el-footer>
  </el-container>
</template>

<script>
  import Menu from '../../components/menu/Menu.vue'
  import ProCard from '../../components/card/ProCard.vue'
  export default {
    name: 'Home',
    data(){
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },
    components:{
      Menu,
      ProCard
    },
    mounted() {

    },
    mounted(){

    },
    method(){

    }
  }
</script>

<style scoped>
.profile{
  height: 213px;
  border-radius: 2px;
  background-color: rgba(64, 64, 64, 1);
  box-shadow: 0px 2px 4px 0px rgba(215, 215, 215, 1);
}
  .name{
    height: 45px;
    line-height: 45px;
    color: rgba(255, 255, 255, 1);
    font-size: 32px;
    text-align: center;
  }
</style>
