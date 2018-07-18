<template>
  <div>
    <div  class="checklist-mb-wrapper">
      <el-row
        v-for="(one, index) in cartInfoList"
        v-bind:key="index"
        class="list"

      >
        <div  @click="handleSelectionChange(one,index)">
          <el-col :span="3">
            <check-icon :value.sync="one.checked" style="margin-top:20px;"></check-icon>
          </el-col>
          <el-col :span="6">
            <img :src="one.pic" width="70" height="70">
          </el-col>
          <el-col :span="14" style="margin-left:5px;">
            <div class="good-name">  {{one.name}} </div>
            <div class="good-norm"> {{one.spec1}}ml；{{one.spec2}} </div>
            <el-row>
              <el-col :span="9">
                <div class="good-price">{{one.qty}}</div>
              </el-col>
              <el-col :span="15">
                <div class="good-num" > {{one.price}} </div>
              </el-col>
            </el-row>
          </el-col>
        </div>
      </el-row>
    </div>
    <el-row class="nav-good">
      <el-col :span="7" style="height:100%">
        <check-icon :value.sync="chooseAll" style="margin-top:13px;">全选</check-icon>
      </el-col>
      <el-col :span="7" style="height:100%">
        <div class="total">
          ￥{{ total }}
        </div>
      </el-col>
      <el-col :span="9" :offset="1">
        <div @click="submitData" class="cart">立即购买</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import { CheckIcon } from "vux";
  import {cartInfo,orderPlace} from '@/service/index'
  import CheckListMb from "../../components/cart/CheckList.vue";
  import { Toast } from 'mint-ui';

export default {
  name: 'cartMb',
  data() {
    return {
      multipleSelection: [],
      total: 0,
      cartInfoList: [
        {
          campaignId: 8,
          campaignType: 1,
          enName:
            "XMAS JAD EDP JEWEL BOX 100ML INT16",
          goodId: 659,
          id: 56044,
          name: "克丽丝汀迪奥真我香水套装 F918501000",
          originPrice: 1500,
          pic: "http://yimtest.oss-cn-shanghai.aliyuncs.com/3061e713-c3ad-477c-86d0-e8d0bee3143d.png?x-oss-process=image/resize,w_320,h_320,m_pad",
          price: 600,
          productCategoryId: 72,
          productId: 653,
          productTypeId:19,
          qty: 3,
          spec1: "200",
          spec2: "1",
          userId: "et6Eu6FZ"
        }
      ],
      chooseAll:false,
    }
  },
  components: {
    CheckListMb,
    CheckIcon,
  },
  methods: {
    ...mapState([
      'global','categories','campaign', 'bread', 'goods'
    ]),
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val,index) {
      val={
        ...val,
        key:index,
      }
      console.log(val.checked);
      if(val.checked){
        this.multipleSelection.push(val);
      }else{
        this.multipleSelection=this.multipleSelection.filter(item=>{
         return item.key!==index
         }
       )||[];
      }
      this.total=0;
      this.multipleSelection.forEach(item => {
        this.total = this.total + parseInt(item.price);
      })
      val.checked=! val.checked;
      console.log( this.multipleSelection,val.checked,this.total);
    },
    submitData() {
      const id =this.orderPlace(this.multipleSelection);
      this.$router.push({
        name: 'cartmb',
        query:{id:id }
      })
    },
    submitFilter(data){
      return data/1===0;
    },
    goBack(){
//        goback可能不存在
      this.$router.push('/home');
    },
    async getCartInfo() {
      const res = await cartInfo(this.campaign.id);
      console.log('cartInfoList', res);
      if (res.status === 0) {
        this.cartInfoList = res.data
      }
    },
    async orderPlace(list) {
      const res = await orderPlace(this.campaign.id,list);
      console.log('cartInfoList', res);
      if (res.status === 0) {
        return res.data
      }
    },
  },
  mounted() {
    this.getCartInfo();
  },
  watch: {
    chooseAll: function (val) {
      if(this.chooseAll){
        this.cartInfoList.map((item,index)=>{
          return {
            ...item,
            checked:true,
            key:index,
          }
        })
        this.multipleSelection = this.cartInfoList;
        this.total=0;
        this.multipleSelection.forEach(item => {
          this.total = this.total + parseInt(item.price);
        })
      }else{
        this.multipleSelection = [];
        this.total=0;
      }
    },
  }

}
</script>

<style scoped>
.nav-good {
  height: 49px;
  background-color: rgba(255, 255, 255, 1);
  position: fixed;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#d9d9d9), color-stop(50%, #d9d9d9), color-stop(50%, transparent));
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    background-color: #fafafa;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    right: 0;
    bottom: 55px;
    left: 0;
    text-align: center;
    z-index: 999;
}
.cart {
  height: 49px;
  background-color: rgba(215, 178, 90, 1);
  line-height: 49px;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  text-align: center;
}
.total{
line-height: 49px;
color: rgba(185, 142, 43, 1);
font-size: 18px;
text-align: right;
height: 100%;
}
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

.good-num {
  line-height: 20px;
  color: rgba(185, 142, 43, 1);
  font-size: 14px;
}


</style>
