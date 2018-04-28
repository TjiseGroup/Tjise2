<template>
  <div id="app">
    <header>
      <el-button type="text" v-if="!isLogin">登录</el-button>
      <span v-if="isLogin" class="username">用户名</span>
    </header>
    <nav>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isLogin: false
    };
  },
}
</script>

<style>
body{
  margin: 0;
  background-color: #1f1f1f;
}
header{
  top: 0;
  width: 100%;
  position: fixed;
  text-align: right;
  padding: 4px;
  box-sizing: border-box;
}
.username{
  color: #fff;
}
</style>
