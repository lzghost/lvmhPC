import request from '../utils/request'
import Api from '../utils/config'

/**
 * 登录，使用get在url中加入参数
 * @param param
 * @returns {Object}
 */
export function login(param){
  return request(Api.login, 'GET', param )
}


export function activityList(){
  return request(Api.campaign, 'GET')
}


export function campaignInfo(campaignId){
  return request(Api.campaignInfo(campaignId), 'GET')
}

export function campaignMenu(campaignId){
  return request(Api.categories(campaignId), 'GET')
}

export function campaignGoods(campaignId){
  return request(Api.campaignGoods(campaignId))
}

export function categorieInfo(typeId){
  return request(Api.typeGoods(typeId), 'GET')
}

export function goodDetail(goodId){
  return request(Api.goodDetail(goodId), 'GET')
}

export function goodProduct(goodId){
  return request(Api.goodProduct(goodId))
}
