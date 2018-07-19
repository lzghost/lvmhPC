<template>
    <card>
      <img slot="header" :src="goodInfo.pic" class="card-image">
      <div slot="content" class="card-padding">
        <el-row :gutter="0" class="pro">
            <el-col :span="24">
                <div>
                  {{ goodInfo.name }}
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="0" class="priceCard">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                <div class="priceNow">
                  ￥{{ goodInfo.price }}
                </div>
            </el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" style="height: 100%;">
                <div class="original">
                  ¥{{ goodInfo.originPrice }}
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
  props:['goodInfo'],
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
    min-height: 51px;
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
  .card-image{
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    width: 45vw;
    min-height: 100%;
    border: 1px solid rgba(230, 230, 230, 1);
  }
</style>
