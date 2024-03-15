<!--
 * @Author: linkayy
 * @Date: 2024-02-28 15:08:36
 * @LastEditors: linkayy
 * @LastEditTime: 2024-03-01 18:08:59
 * @Description: 
-->
<script setup>
import { onMounted, ref, getCurrentInstance } from 'vue'
const count = ref('setup 语法糖')
const { appContext } = getCurrentInstance()
console.log(appContext.config.globalProperties.$wlk)
onMounted(() => {
  console.log('这是setup语法糖组件')
})
</script>
<template>
  <div>{{ count }}</div>
</template>
