/*
 * @Author: geekli
 * @Date: 2020-12-31 17:58:43
 * @LastEditTime: 2020-12-31 18:15:47
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/http/index.js
 */
import api from './api'
const install = Vue => {
  if (install.installed)
    return;
  install.installed = true;
  Object.defineProperties(Vue.prototype, {
    //此处挂在在Vue原型的$api对象上
    $api: {
      get() {
        return api
      }
    }
  })
}

export default install
