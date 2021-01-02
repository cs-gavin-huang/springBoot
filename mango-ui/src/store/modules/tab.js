/*
 * @Author: geekli
 * @Date: 2021-01-01 14:07:12
 * @LastEditTime: 2021-01-01 14:07:13
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/store/modules/tab.js
 */
export default {
  state: {
    // 主入口标签页
    mainTabs: [],
    // 当前标签页名
    mainTabsActiveName: ''
  },
  mutations: {
    updateMainTabs (state, tabs) {
      state.mainTabs = tabs
    },
    updateMainTabsActiveName (state, name) {
      state.mainTabsActiveName = name
    }
  }
}
