import fetch from 'isomorphic-fetch';
import Vue from 'vue'
import qs from 'qs'
import { device } from './storage'
import { NetErrorMsg } from './config'

let jumpFlag = true;
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    if (response.status >= 400 && response.status <500){
      Vue.router.push('/login')
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  function checkLogin(response){
    console.log(response)
    if (response.status == -100 && !device ) {
      var url = encodeURIComponent(window.location)
      if (jumpFlag) {
        jumpFlag = false
        var cid = 0
        if (!!Vue.router.currentRoute.params.cid){
          cid = Vue.router.currentRoute.params.cid
        }

        window.location = '/is-dev/auth/entrance/' + (cid) + '?jumpUrl=' + url
        return response;
      }
      return response
    }
    return response
  }
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, method, param) {
  const newOptions = {
    credentials: 'include',
    cache: 'no-cache',
    method: method ? method : 'GET',
  };
  newOptions.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Credentials': true,
    "If-Modified-Since":"0",
    "Cache-Control":"no-cache",
  };
  param = param ? param : '';
//   const newOptions = { ...defaultOptions};
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {

    console.log(newOptions.body)
    newOptions.body = JSON.stringify(param);//转成json字符串，看需要
    // newOptions.body = param;
  }else if(newOptions.method === 'GET'){
    url = `${url}?${qs.stringify(param)}`
  }
  // return fetch(`${"http://10.4.3.11:9084"}${url}`, newOptions)
  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => response.json())
    .then(checkLogin)
    .catch((error) => {
      if (error.code) {
        // Toast.fail(error.message, 3, null, true)
      }else if ('stack' in error && 'message' in error) {
        // Toast.fail(`${NetErrorMsg}`, 3, null, true)
      }
      return error.response;
    });
}
