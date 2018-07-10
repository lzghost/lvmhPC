/**
 * Created by lizheng on 2018/6/23.
 */
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
}


//设备检测  是移动端返回true；PC端返回false
export function detect() {
  if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  ){
    return false;
  }
  return true;
}

export function pushChildren(parent, children){
  children.map((child) => {
    parent.map((parent) => {
      if(!parent.children) {
        parent.children = [];
      }
      if(child.productTypeId === parent.id){
        parent.children.push(child)
      }
    })
  })
}

export function productCombine(data = []){
  const norm = {};
  data.map(item => {
    if(item.spec1){
      if(!norm.spec1){
        norm.spec1 = []
      }
      norm.spec1.push(item.spec1)
    }
    if(item.spec2){
      if(!norm.spec2){
        norm.spec2 = []
      }
      norm.spec2.push(item.spec2)
    }
  })
  return norm;
}
