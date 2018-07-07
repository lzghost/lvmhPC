import request from '../utils/request'
import Api from '../utils/config'

/**
 * 登录，使用get在url中加入参数
 * @param param
 * @returns {Object}
 */
export function login(param){
  return request(Api.login, param, 'GET')
}


export function activityList(){
  return request(Api.campaign, null, 'GET')
}


export function campaignInfo(campaignId){
  return request(Api.campaignInfo(campaignId), null, 'GET')
}

export function campaignMenu(campaignId){
  return request(Api.categories(campaignId), null, 'GET')
}
