/*
 * @Author: geekli
 * @Date: 2020-12-31 09:52:00
 * @LastEditTime: 2020-12-31 09:55:00
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/mock/mock.js
 */
import Mock from 'mockjs'

Mock.mock('http://localhost:8080/user',{
  'name': '@name',
  'email': '@email',
  'age|1-10':5,
})
Mock.mock('http://localhost:8080/menu',{
  'id': '@increment',
  'name':'menu',
  'order|1-20':5,
})
