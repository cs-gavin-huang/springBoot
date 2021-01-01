<!--
 * @Author: geekli
 * @Date: 2020-12-31 09:35:19
 * @LastEditTime: 2021-01-01 10:36:01
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/views/Login.vue
-->
<template>
  <div class="page">
    <h2>Login Page</h2>
    <el-button type="primary" @click="login()">登录</el-button>
  </div>
</template>

<script>
  import mock from '@/mock/index.js'
  import Cookies from "js-cookie"
  import router from '@/router'
  export default {
    name: 'Login',
    methods: {
      login() {
        this.$api.login.login().then(function(res) {
　　　　　　 alert(res.token)
            Cookies.set('token', res.token) // 放置token到Cookie
            router.push('/')  // 登录成功，跳转到主页
          }).catch(function(res) {
            alert(res);
          });
      }
    }
  }
</script>
