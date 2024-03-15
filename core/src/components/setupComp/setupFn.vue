<!--
 * @Author: linkayy
 * @Date: 2024-02-28 15:08:36
 * @LastEditors: linkayy
 * @LastEditTime: 2024-03-01 18:06:08
 * @Description: 
-->
<script>
import { ref, onMounted } from 'vue'
export default {
  setup() {
    const descr = ref('setup 函数')
    onMounted(() => {
      console.log(11111)
    })
    return {
      descr
    }
  }
  // mounted() {
  //   console.log('这是setup函数组件')
  // }
}
</script>
<template>
  <div>{{ descr }}</div>
  <div>{{ $wlk }}</div>
</template>
