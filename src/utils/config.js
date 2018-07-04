const host = '/is-dev/';
const hostStore = '/is-dev/store/'

const Api = {
  login: `${host}auth/loginRequestInternalDebug`,//登录
  campaign: `${hostStore}campaigns`,//活动列表
  campaignInfo: campaignId => `${hostStore}campaign/${campaignId}/info`,//活动详细信息
  userInfo: campaignId => `${hostStore}campaign/${campaignId}/userinfo`,//用户详细信息
  categories: campaignId => `${hostStore}campaign/${campaignId}/categories`,//活动下分类信息
  typeGoods: (typeId, id) => `${hostStore}${typeId}/${id}/goods`,//类型下所有商品
  catGoods: campaignId => `${hostStore}${campaignId}/goods`,//类型下所有商品
  goodDetail: goodId => `${hostStore}good/${goodId}`, //商品信息
  goodProduct: goodId => `${hostStore}good/${goodId}/products`, //宝贝下不同商品
  goodStock: goodId => `${hostStore}good/${goodId}/stock`, //宝贝下不同商品库存
  goodPic: goodId => `${hostStore}good/${goodId}/pictures`, //宝贝下不同商品图片
  cart: campaignId => `${hostStore}cartNum/${campaignId}`, //购物车数量
  cartInfo : campaignId => `${hostStore}cart/${campaignId}`,//获取购物车详情
  defaultCartProduct: campaignId => `${hostStore}cart/${campaignId}/modify`,//添加商品 POST
  addCartProduct: campaignId => `${hostStore}cart/${campaignId}/add`,//添加商品 POST
  ordersStats: `${hostStore}order/stats`,//订单状态
  orderList: campaignId => `${hostStore}order/${campaignId}/list`,//所有订单
  orderInfo: campaignId => `${hostStore}order/${campaignId}/info`,//订单详情
  orderPlace: campaignId => `${hostStore}campaign/${campaignId}/placeOrder`,//下单
  campaignRule: campaignId => `${hostStore}campaign/${campaignId}/rule`,//
  search: campaignId => `${hostStore}campaign/${campaignId}/search`,//搜索
}
export default Api
