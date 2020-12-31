<!--
 * @Author: geekli
 * @Date: 2020-12-30 01:36:43
 * @LastEditTime: 2020-12-31 10:05:56
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mango-ui/src/App.vue
-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
