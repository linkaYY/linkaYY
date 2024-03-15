<!--
 * @Author: linkayy
 * @Date: 2024-01-02 13:07:30
 * @LastEditors: linkayy
 * @LastEditTime: 2024-03-11 17:37:59
 * @Description: 
-->
<template>
  <el-table ref="table" :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  <el-button @click="getTableRef">获取table实例方法</el-button>
  <div class="test-scss">
    <div class="test-scss-item">测试SCSS</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
const table = ref(null)
function getTableRef() {
  console.log(table.value.getSelectionRows)
}
onMounted(() => {
  console.log(table.value.getSelectionRows)
})
</script>
<style lang="scss">
.test-scss {
  background-color: red;
  color: white;
}
</style>
