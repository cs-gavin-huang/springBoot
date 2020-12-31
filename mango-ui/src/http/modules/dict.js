/*
 * @Author: geekli
 * @Date: 2020-12-31 17:59:09
 * @LastEditTime: 2021-01-01 01:24:57
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/http/modules/dict.js
 */
import axios from '../axios'

/*
 * 字典管理模块
 */

// 保存
export const save = (data) => {
    return axios({
        url: '/dict/save',
        method: 'post',
        data
    })
}
// 删除
export const batchDelete = (data) => {
    return axios({
        url: '/dict/delete',
        method: 'post',
        data
    })
}
// 分页查询
export const findPage = (data) => {
    return axios({
        url: '/dict/findPage',
        method: 'post',
        data
    })
}
