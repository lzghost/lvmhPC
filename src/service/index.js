import request from '../utils/request'
import api from '../utils/config'

export function login(param){
    return request(api.login, param, 'GET')
}