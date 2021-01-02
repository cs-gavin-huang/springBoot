/*
 * @Author: geekli
 * @Date: 2020-12-21 09:03:59
 * @LastEditTime: 2021-01-02 16:14:35
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/utils/global.js
 */
/**
 * 全局常量、方法封装模块
 * 通过原型挂载到Vue属性
 * 通过 this.Global 调用
 */

 // 后台管理系统服务器地址
export const baseUrl = 'http://localhost:8001'
 // 系统数据备份还原服务器地址
export const backupBaseUrl = 'http://localhost:8002'

export default {
    baseUrl,
    backupBaseUrl
}
