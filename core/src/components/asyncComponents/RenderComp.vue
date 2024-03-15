<!--
 * @Author: linkayy
 * @Date: 2024-03-15 21:25:04
 * @LastEditors: linkayy
 * @LastEditTime: 2024-03-15 23:02:49
 * @Description: 
-->
<template>
  <div>真正要渲染的组件</div>
  <div>count: {{ count }}</div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  const count = ref<number>(0)

  const getCount = async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    count.value = 100
  }
  // 异步调用
  await getCount()
</script>
