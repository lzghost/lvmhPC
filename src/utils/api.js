import request from './request'
import Api from './config'

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
