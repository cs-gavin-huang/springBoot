/*
 * @Author: geekli
 * @Date: 2021-01-01 13:19:19
 * @LastEditTime: 2021-01-01 13:22:49
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/store/modules/user.js
 */
export default {
  state:{
    perms: [],
  },
  getters: {

  },
  mutations: {
    setPerms(state,perms) {
      state.perms = perms;
    }
  },
  actions: {

  }
}
