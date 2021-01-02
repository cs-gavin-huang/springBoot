/*
 * @Author: geekli
 * @Date: 2020-12-31 17:58:35
 * @LastEditTime: 2021-01-01 01:33:08
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/http/config.js
 */
import { baseUrl } from '@/utils/global'

export default {
  method: 'get',
  //基础url前缀
  baseUrl: baseUrl.baseUrl,
  //请求头信息
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  //参数
  data: {},
  //设置超时时间
  timeout: 10000,
  //凭证携带
  withCredentials: true,
  //返回数据类型
  responseType: 'json'
}
