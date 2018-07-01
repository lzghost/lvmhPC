<template>
  <div class="checklist-mb-wrapper">
    <el-row
    v-for="(one, index) in currentOptions"
    v-bind:key="index"
    class="list"
    >
      <div>
        <el-col :span="3">
        <check-icon :value.sync="demo1" style="margin-top:20px;"></check-icon>
        </el-col>
        <el-col :span="6">
          <img src="" width="70" height="70">
        </el-col>
        <el-col :span="14" style="margin-left:5px;">
          <div class="good-name"> 风中玫瑰（ROSE DES VENTS）香水 </div>
          <div class="good-norm"> 50ml；01 </div>
          <el-row>
          <el-col :span="9">
            <div class="good-price"> ¥300 </div>
          </el-col>
          <el-col :span="15">
            <el-input-number size="mini"></el-input-number>
          </el-col>
          </el-row>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { CheckIcon } from 'vux'

export default {
  props: {
    options: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      demo1: true,
      currentOptions: this.options,
    };
  },
  async beforeMount() {},
  created() {
    this.currentOptions = this.options;
  },
  mounted() {},
  components: {
    CheckIcon,
  },
  computed: {},
  methods: {},
  watch: {}
};
</script>

<style scoped>
.checklist-mb-wrapper{
  width: 100%;
}
.list{
  padding: 18px 10px;
}
.good-name {
  line-height: 17px;
  color: rgba(51, 51, 51, 1);
  font-size: 12px;
  text-align: left;
}

.good-norm {
  line-height: 17px;
  color: rgba(153, 153, 153, 1);
  font-size: 12px;
  text-align: left;
}

.good-price {
  line-height: 20px;
  color: rgba(185, 142, 43, 1);
  font-size: 14px;
  text-align: left;
}
</style>
