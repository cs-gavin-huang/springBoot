/*
 * @Author: geekli
 * @Date: 2021-01-01 10:55:52
 * @LastEditTime: 2021-01-01 10:56:10
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/i18n/index.js
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// 注册i18n实例并引入语言文件
const i18n = new VueI18n({
  locale: 'zh_cn',
  messages: {
    'zh_cn': require('@/assets/languages/zh_cn.json'),
    'en_us': require('@/assets/languages/en_us.json')
  }
})

export default i18n
