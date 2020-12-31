/*
 * @Author: geekli
 * @Date: 2020-12-31 17:58:30
 * @LastEditTime: 2020-12-31 18:15:56
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/http/axios.js
 */
import axios from 'axios';
import config from './config';
import Cookie from "js-cookie";
import router from '@/router';

export default function $axios(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseUrl: options.baseUrl,
      headers: options.headers,
      timeout: options.timeout,
      withCredentials: options.withCredentials
    })
    //request 请求拦截器
    instance.interceptors.request.use(
      config => {
        let token = Cookies.get('token')
        if (token) {
          config.headers.token = token
        } else {
          router.push('/login')
        }
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    // response 响应拦截器
    instance.interceptors.response.use(
      response => {
        return response.data
      },
      err => {
        return Promise.reject(err)
      }
    )
    //请求处理
    instance(options).then(res => {
      resolve(res)
      return false
    }).catch(error => {
      reject(error)
    })
  })
}
