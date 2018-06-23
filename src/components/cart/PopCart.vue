<template>
  <el-dialog :visible.sync="isShow" width="500px" top="15vh">
    <div slot="title" class="title">
      <el-row :gutter="0">
        <el-col :span="5">
          <el-row :gutter="0">
            <el-col>
              <img src="../../assets/popcart.png" class="image"/>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="18" :offset="1">
          <el-row :gutter="0">
            <el-col>
              <div class="name">克丽丝汀迪奥真我情柔淡香氛 100ml</div>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col>
              <div class="price"> ¥300</div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="body">
      <div>规格</div>
      <el-row :gutter="20" style="margin-top: 5px;">
        <el-col :span="5">
          <div class="active-capacity">
            50ml
          </div>
        </el-col>
        <el-col :span="5">
          <div class="capacity">
            100ml
          </div>
        </el-col>
      </el-row>
      <div style="margin-top: 15px;">
        型号
      </div>
      <el-row :gutter="20" style="margin-top: 6px;">
        <el-col :span="2">
          <div class="active-type">
            01
          </div>
        </el-col>
        <el-col :span="2">
          <div class="type">
            02
          </div>
        </el-col>
      </el-row>
    </div>
    <el-row :gutter="20" style="margin-top: 20px;height: 28px;">
      <el-col :span="4" style="text-align: left;height: 28px;line-height: 28px;">数量</el-col>
      <el-col :span="12" style="text-align: right;font-size: 12px;color:#999999;height: 28px;line-height: 28px;">
        库存:5000
      </el-col>
      <el-col :span="7">
        <el-input-number size="mini" v-model="count"></el-input-number>
      </el-col>
    </el-row>
    <div slot="footer" class="dialog-footer">
      <el-button type="text">
        <div class="add">
          <img src="../../assets/icon/cart.png" class="cartIcon"/>加入购入车
        </div>
      </el-button>
    </div>
  </el-dialog>

</template>

<script>
  export default {
    name: '',
    data(){
      return {
        count: 1,
      }
    },
    props: ['isShow', 'headTitle', 'goBack'],
    mounted() {

    },
    mounted(){

    },
    methods: {

    }
  }
</script>

<style scoped>
  .title {
    height: 95px;
    border-bottom: 2px solid rgba(230, 230, 230, 1);
  }

  .image {
    width: 80px;
    height: 77px;
    border: 1px solid rgba(230, 230, 230, 1);
  }

  .name {
    height: 20px;
    line-height: 20px;
    color: rgba(51, 51, 51, 1);
    font-size: 14px;
    text-align: left;
    margin-top: 15px;
  }

  .price {
    height: 30px;
    line-height: 30px;
    color: rgba(185, 142, 43, 1);
    font-size: 22px;
    text-align: left;
    margin-top: 5px;
  }

  .body {
    text-align: left;
    height: 147px;
    border-bottom: 2px solid rgba(230, 230, 230, 1);
  }

  .active-capacity {
    width: 90px;
    height: 28px;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(215, 178, 90, 1);
    text-align: center;
    line-height: 28px;
  }

  .capacity {
    width: 90px;
    height: 28px;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(153, 153, 153, 1);
    text-align: center;
    line-height: 28px;
  }

  .active-type {
    width: 31px;
    height: 28px;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(215, 178, 90, 1);
    line-height: 28px;
    text-align: center;
  }
  .type {
    width: 31px;
    height: 28px;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(153, 153, 153, 1);
    line-height: 28px;
    text-align: center;
  }
  .count{
    width: 28px;
    height: 28px;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(230, 230, 230, 1);
  }
  .dialog-footer{
    text-align: center;
  }
  .add{
    width: 290px;
    height: 40px;
    border-radius: 4px;
    background-color: rgba(215, 178, 90, 1);
    line-height: 40px;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    text-align: center;
  }
  .cartIcon{
    width: 21.43px;
    height: 20px;
    vertical-align: middle;
  }
</style>
