import request from '../utils/request'
import Api from '../utils/config'

/**
 * 登录，使用get在url中加入参数
 * @param param
 * @returns {Object}
 */
export function login (param) {
  return request(Api.login, 'GET', param)
}

export function activityList () {
  return request(Api.campaign, 'GET')
}

export function campaignInfo (campaignId) {
  return request(Api.campaignInfo(campaignId), 'GET')
}

export function campaignMenu (campaignId) {
  return request(Api.categories(campaignId), 'GET')
}

export function campaignGoods (campaignId) {
  return request(Api.campaignGoods(campaignId))
}

export function getGoodsByType (typeId) {
  return request(Api.typeGoods(typeId))
}

export function getGoodsByCat (catId) {
  return request(Api.catGoods(catId))
}

export function categorieInfo (typeId) {
  return request(Api.typeGoods(typeId), 'GET')
}

export function goodDetail (goodId) {
  return request(Api.goodDetail(goodId), 'GET')
}

export function goodProduct (goodId) {
  return request(Api.goodProduct(goodId))
}

export function getProductPic (goodId) {
  return request(Api.goodPic(goodId))
}

export function addCart (campaignId, param) {
  return request(Api.addCartProduct(campaignId), 'POST', param)
}

export function getCartNum (campaignId) {
  return request(Api.cartNum(campaignId))
}

// 查询所有订单
export function orderList () {
  return request(Api.orderList(), 'GET')
}

// 查询订单详情
export function orderDetail (orderId) {
  return request(Api.orderInfo(orderId), 'GET')
}

// 查询购物车详情
export function cartInfo (campaignId) {
  return request(Api.cartInfo(campaignId), 'GET')
}


// 查询购物车详情
export function orderPlace (campaignId,goodList) {
  return request(Api.orderPlace(campaignId), 'post',goodList)
}

//查询商品
export function searchGoods (campaignId, param) {
  return request(Api.search(campaignId), 'POST', param)
}
