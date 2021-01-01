/*
 * @Author: geekli
 * @Date: 2021-01-01 13:55:55
 * @LastEditTime: 2021-01-01 13:56:09
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/permission/index.js
 */
import store from '@/store'
/**
 * 判断用户是否拥有操作权限
 * 根据传入的权限标识，查看是否存在用户权限标识集合
 * @param perms
 */
export function hasPermission (perms) {
    let hasPermission = false
    let permissions = store.state.user.perms
    for(let i=0, len=permissions.length; i<len; i++) {
        if(permissions[i] === perms) {
            hasPermission = true;
            break
        }
    }
    return hasPermission
}
