<template>
  <div class="wrapper">
    <el-row style="height: 39px;vertical-align: middle">
      <el-col :span="6" class="order-time">下单时间:{{ orderDate }}</el-col>
      <el-col :span="8" :offset="10" v-if="status==='5'">
        <el-col :span="8" :offset="9" class="export"><a href="">导出订单</a></el-col>
        <el-col :span="7" class="complete">已完成</el-col>
      </el-col>
      <el-col :span="8" :offset="10" v-else="status === '2'" class="need-pay">
        待付款
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      :show-header="false"
      style="width: 100%">
      <el-table-column
        label="图片"
        width="120">
        <template slot-scope="scope">
          <img :src='scope.row.pic'/>
        </template>
      </el-table-column>
      <el-table-column
        label="名称"
        width="200">
        <template slot-scope="scope">
          <div class="name-wrapper">
            {{ scope.row.name }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="参数">
        <template slot-scope="scope">
          <div class="param">{{ scope.row.spec1 }}</div>
          <div class="param">{{ scope.row.spec2 }}</div>
        </template>
      </el-table-column>
      <el-table-column
        label="价格">
        <template slot-scope="scope">
          <span class="price">￥{{ scope.row.price }}</span>&nbsp;<span class="qty">x  {{ scope.row.qty }}</span>
        </template>
      </el-table-column>
      <el-table-column label="总价">
        <template slot-scope="scope">
          <div class="total">
            ￥{{ scope.row.price * scope.row.qty }}
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-row class="calc-desc">
      <el-col :xs="5" :sm="5" :md="4" :lg="3" :xl="1" class="count-desc">共{{totalQty}}件商品</el-col>
      <el-col :xs="5" :sm="5" :md="4" :lg="3" :xl="1" ><span class="total-desc">合计:</span><span class="money">￥{{ amount }}</span></el-col>
      <el-col :xs="6" :sm="6" :md="8" :lg="12" :xl="20" >&#12288;</el-col>
      <el-col v-if="status !== '5'" :xs="4" :sm="4" :md="4" :lg="3" :xl="1" style="height: 100%;text-align: right">
        <el-button size="small" class="cancel">取消订单</el-button>
      </el-col>
      <el-col v-if="status !== '5'" :xs="4" :sm="4" :md="4" :lg="3" :xl="1" style="height: 100%;text-align: right">
        <el-button size="small" class="pay">付款</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  export default {
    data(){
      return {}
    },
    props: ['tableData','orderDate','status','amount','totalQty'],
    async beforeMount(){
    },
    mounted(){
    },
    components: {},
    computed: {},
    methods: {},
    watch: {}
  }

</script>

<style scoped>
  .wrapper{
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(230, 230, 230, 1);
    padding:0 20px 0 20px;
  }

  a,a:hover{
    text-decoration: none;
    color: rgba(185, 142, 43, 1) !important;
  }

  .el-table{
    border-top: 1px solid #ebeef5;
  }

  .order-time{
    height: 39px;
    line-height: 39px;
    color: rgba(102, 102, 102, 1);
    font-size: 14px;
    text-align: left;
  }
  .export{
    height: 39px;
    line-height: 39px;
    color: rgba(185, 142, 43, 1) !important;
    font-size: 14px;
    text-align: right;
  }
  .complete{
    height: 39px;
    line-height: 39px;
    color: rgba(51, 51, 51, 1);
    font-size: 14px;
    text-align: right;
  }
  .need-pay{
    height: 39px;
    line-height: 39px;
    color: rgba(190, 65, 65, 1);
    font-size: 14px;
    text-align: right;
  }
  .name-wrapper{
    height: 25px;
    line-height: 25px;
    color: rgba(51, 51, 51, 1);
    font-size: 18px;
  }
  .param {
    height: 20px;
    line-height: 20px;
    color: rgba(102, 102, 102, 1);
    font-size: 14px;
  }
  .price {
    height: 25px;
    line-height: 25px;
    color: rgba(51, 51, 51, 1);
    font-size: 18px;
  }
  .qty{
    height: 20px;
    line-height: 20px;
    color: rgba(153, 153, 153, 1);
    font-size: 14px;
  }
  .total{
    height: 25px;
    line-height: 25px;
    color: rgba(185, 142, 43, 1);
    font-size: 18px;
  }
  .calc-desc{
    height: 49px;
  }
  .count-desc{
    line-height: 49px;
    color: rgba(102, 102, 102, 1);
    font-size: 14px;
    text-align: left;
  }
  .total-desc{
    line-height: 49px;
    color: rgba(102, 102, 102, 1);
    font-size: 14px;
  }
  .money{
    color: rgba(185, 142, 43, 1);
    line-height: 49px;
    font-size: 14px;
  }
  .cancel{
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(153, 153, 153, 1);
    margin: 8px auto;
  }
  .pay{
    border-radius: 2px;
    color: rgb(185, 142, 43);
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(185, 142, 43, 1);
    margin: 8px auto;
  }
</style>
