import fetch from 'isomorphic-fetch';
import qs from 'qs'
import { NetErrorMsg } from './config'


function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    // notification.error({
    //   message: `请求错误 ${response.status}: ${response.url}`,
    //   description: response.statusText,
    // });
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
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
    method: method,
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
    .catch((error) => {
      if (error.code) {
        // Toast.fail(error.message, 3, null, true)
      }else if ('stack' in error && 'message' in error) {
        // Toast.fail(`${NetErrorMsg}`, 3, null, true)
      }
      return error.response;
    });
}
