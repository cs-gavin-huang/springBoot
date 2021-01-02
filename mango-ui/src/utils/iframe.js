/*
 * @Author: geekli
 * @Date: 2021-01-01 01:27:11
 * @LastEditTime: 2021-01-01 01:28:34
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/utils/iframe.js
 */
/**
 * 嵌套页面IFrame模块
 */

import { baseUrl } from '@/utils/global'

/**
 * 嵌套页面URL地址
 * @param {*} url
 */
export function getIFramePath (url) {
  let iframeUrl = ''
  if(/^iframe:.*/.test(url)) {
    iframeUrl = url.replace('iframe:', '')
  } else if(/^http[s]?:\/\/.*/.test(url)) {
    iframeUrl = url.replace('http://', '')
    if(iframeUrl.indexOf(":") != -1) {
      iframeUrl = iframeUrl.substring(iframeUrl.lastIndexOf(":") + 1)
    }
  }
  return iframeUrl
}

/**
 * 嵌套页面路由路径
 * @param {*} url
 */
export function getIFrameUrl (url) {
  let iframeUrl = ''
  if(/^iframe:.*/.test(url)) {
    iframeUrl = baseUrl + url.replace('iframe:', '')
  } else if(/^http[s]?:\/\/.*/.test(url)) {
    iframeUrl = url
  }
  return iframeUrl
}

