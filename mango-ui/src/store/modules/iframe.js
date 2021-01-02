/*
 * @Author: geekli
 * @Date: 2021-01-02 14:13:41
 * @LastEditTime: 2021-01-02 14:13:48
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/store/modules/iframe.js
 */
export default {
  state: {
      iframeUrl: [],   // 当前嵌套页面路由路径
      iframeUrls: []   // 所有嵌套页面路由路径访问URL
  },
  getters: {
  },
  mutations: {
      setIFrameUrl(state, iframeUrl){  // 设置iframeUrl
          state.iframeUrl = iframeUrl
      },
      addIFrameUrl(state, iframeUrl){  // iframeUrls
          state.iframeUrls.push(iframeUrl)
      }
  },
  actions: {
  }
}
