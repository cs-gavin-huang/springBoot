/*
 * @Author: geekli
 * @Date: 2020-12-31 17:59:49
 * @LastEditTime: 2020-12-31 18:28:10
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/http/modules/user.js
 */
import axios from '../axios';
/* 用户管理模块 */
//保存
export const save = (data) => {
  return axios({ url: 'user/save', method:'post',data})
}
//删除
export const batchDelete = (data) => {
  return axios({ url: 'user/delete',method:'post',data})
}
//分页查询
export const findPage = (data) => {
  return axios({ url: 'user/findPage', method:'post', data })
}
//查找用户的菜单权限标示集合
export const findPermissions = (params) => {
  return axios({ url: 'user/findPermissions',method:'get',params})
}
