<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">订单中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">商品管理</template>
    <el-menu-item index="2-1">商品上传</el-menu-item>
    <el-submenu index="2-2">
      <template slot="title">商品修改</template>
      <el-menu-item index="2-2-1">添加</el-menu-item>
      <el-menu-item index="2-2-2">删除</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" style="float:right">登录</el-menu-item>
</el-menu>
</template>


<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>