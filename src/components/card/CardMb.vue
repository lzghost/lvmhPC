<template>
    <card>
      <img slot="header" src="../../assets/fragrance-3.png" style="width:153px;height:100px;display:block;border: 1px solid rgba(230, 230, 230, 1);">
      <div slot="content" class="card-padding">
        <el-row :gutter="0" class="pro">
            <el-col :span="24">
                <div>
                克丽丝汀迪奥真我情柔淡香氛 100ml
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="0" class="priceCard">
            <el-col :span="8">
                <div class="priceNow">
                ￥300
                </div>
            </el-col>
            <el-col :offset="1" :span="6" style="height: 100%;">
                <div class="original">
                ¥2,100
                </div>
            </el-col>
        </el-row>
      </div>
    </card>
</template>

<script>
import { Card } from 'vux'
export default {
  data() {
    return {};
  },
  async beforeMount() {},
  mounted() {},
  components: {
      Card
  },
  computed: {},
  methods: {},
  watch: {}
};
</script>

<style scoped>
  .pro{
    line-height: 17px;
    color: rgba(51, 51, 51, 1);
    font-size: 12px;
    text-align: left;
  }
  .priceCard{
    margin-top: 7px;
    height: 22px;
  }
  .priceNow{
    line-height: 17px;
    color: rgba(185, 142, 43, 1);
    font-size: 12px;
    text-align: left;
  }
  .original{
    line-height: 17px;
    color: rgba(153, 153, 153, 1);
    font-size: 12px;
    text-align: left;
    text-decoration:line-through;
  }
</style>
