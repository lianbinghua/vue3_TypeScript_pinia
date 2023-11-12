<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: lianbinghua
 * @Date: 2023-09-17 14:32:02
 * @LastEditors: lianbinghua
 * @LastEditTime: 2023-09-21 14:01:31
-->
<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { ref } from 'vue';

const locale = ref(zhCn)
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped lang="scss">
h1 {
  color: $color;
}
</style>
