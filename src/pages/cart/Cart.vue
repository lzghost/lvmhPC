<template>
  <div class="container">
    <div class="left-contain">
      <div  class="tab-subtitle"  >
        <div  class="cart-title" >
          购物车
        </div>
        <el-button class="cart-back" @click="toggleSelection()">
          继续购物
        </el-button>

      </div>
      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        :show-header=false
        style="width: 100%"
        :row-style={height:120,padding:0}
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="40"
        >
        </el-table-column>
        <el-table-column
          label="goods"
          width="400">
          <template slot-scope="scope" >
            <el-row type="flex" style="padding:20px">
              <el-col class="align-left goods-pic" >
                <img width=80 height=80 src="./../../assets/01.png" class="image">
              </el-col>
              <el-col style="margin-left: 20px">
                <div class="goods-title align-left font-18">
                  全新Dior迪奥小姐香氛
                </div>
                <div class="goods-subtitle">
                  <div class="goods-spec align-left font-14">
                    规格：50ml
                  </div>
                  <div class="goods-model align-left font-14">
                    型号：01
                  </div>
                </div>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="数量"
          show-overflow-tooltip>
          <template slot-scope="scope">X{{ scope.row.num }}</template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="价格"
          show-overflow-tooltip>
          <template slot-scope="scope">X{{ scope.row.price }}</template>
        </el-table-column>
      </el-table>
      <div class="button-contain">
        <el-button @click="toggleSelection(tableData3)">全选</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
    </div>
    <div class="right-contain">
      <div class="total-contain">
        <div class="total">总计:</div>
        <div class="total-num">¥{{total}}</div>
      </div>
      <div class="desc-text" >已选择{{multipleSelection.length}}件商品</div>
      <el-button class="submit" >提交订单</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data(){
      return {
        tableData3: [{
          price: '300',
          name: '王小虎',
          num: '1'
        }, {
          price: '300',
          name: '王小虎',
          num: '2'
        }],
        multipleSelection: [],
        total:0,

      }
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        this.total=0;
       val.forEach(item=>{
         this.total=this.total+parseInt(item.price);
       })
      },
    },
    mounted(){

    },

  }
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width:100%;
    height:100%;
  }
  .tab-subtitle{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 107px;
    width: 100%;
    align-items: center;
    border-bottom: 2px solid #E6E6E6;
  }
  .left-contain{
    padding-left:149px ;
    width: 800px;
  }
  .right-contain{
    padding: 20px;
    margin-top:24px;
    width: 330px;
    height: 132px;
    border-radius: 2px;
    background-color: rgba(244, 244, 244, 1);
  }

  .cart-title{
    height: 42px;
    line-height: 42px;
    color: rgba(51, 51, 51, 1);
    font-size: 30px;
    text-align: left;
    font-family: PingFangSC-Semibold;
  }

  .cart-back{
    width: 128px;
    height: 40px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(230, 230, 230, 1);

  }

  .goods-title{
    text-align: left;
  }

  .goods-pic{
    height: 80px;
    width: 100px;
  }

  .goods-subtitle{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .align-left{
    text-align: left;
  }

  .font-14{
    color: rgba(102, 102, 102, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-Regular;

  }

  .font-18{
    color: #333333;
    font-size: 18px;
    text-align: left;
    font-family: PingFangSC-Regular;

  }
  .button-contain{
    margin: 30px 0 0 0;
  }

  .submit{
    width: 330px;
    height: 50px;
    border-radius: 4px;
    color: #ffffff;
    background-color: rgba(215, 178, 90, 1);
  }

  .total-contain{
    margin-top:8px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  .total{
    width: 48px;
    height: 21px;
    line-height: 21px;
    color: rgba(51, 51, 51, 1);
    font-size: 16px;
    text-align: left;
    font-family: MicrosoftYaHei-Bold;
  }
  .total-num{
    width: 76px;
    height: 28px;
    line-height: 28px;
    color: rgba(190, 65, 65, 1);
    font-size: 20px;
    text-align: right;
    font-family: PingFangSC-Semibold;
  }
  .desc-text{
    margin-top:13px;
    margin-bottom:29px;
    width: 94px;
    height: 16px;
    line-height: 16px;
    color: rgba(102, 102, 102, 1);
    font-size: 12px;
    text-align: left;
    font-family: MicrosoftYaHei;

  }
</style>
