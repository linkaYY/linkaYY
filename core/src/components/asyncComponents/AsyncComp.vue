<!--
 * @Author: linkayy
 * @Date: 2024-03-15 21:24:49
 * @LastEditors: linkayy
 * @LastEditTime: 2024-03-15 23:04:24
 * @Description: 
-->
<template>
  <div>
    <button @click="showAsyncComp">show AsyncComp</button>
    <Suspense v-if="show">
      <div>
        <div>Vue3 Async Component</div>
        <AsyncComp />
      </div>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>
<script setup lang="ts">
  import { defineAsyncComponent, ref } from 'vue'
  import type { Component } from 'vue'
  const AsyncComp: Component = defineAsyncComponent(
    () => import('./RenderComp.vue')
  )
  const show = ref<boolean>(false)
  const showAsyncComp = (): void => {
    show.value = true
  }
</script>
