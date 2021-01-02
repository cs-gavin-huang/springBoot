/*
 * @Author: geekli
 * @Date: 2021-01-01 13:19:14
 * @LastEditTime: 2021-01-01 13:21:37
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/store/modules/menu.js
 */
export default{
  state: {
    navTree: [],
  },
  getters: {

  },
  mutations: {
    setNavTree(state, navTree){
      state.navTree = navTree;
    }
  },
  actions: {

  }
}
