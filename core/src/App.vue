<!--
 * @Description: 
 * @Author: wanglingkai
 * @Date: 2023-12-30 21:46:49
 * @LastEditors: linkayy
 * @LastEditTime: 2024-03-15 21:51:57
-->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import SetupAttr from './components/setupComp/setupAttr.vue'
import SetupFn from './components/setupComp/setupFn.vue'
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

const setupAttr = ref(null)
const setupFn = ref(null)
console.log('setupAttr实例--->', setupAttr)
console.log('setupFn--->', setupFn)

// pinia
const count = useCounterStore()
console.log('count--->', count.count)
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <SetupAttr ref="setupAttr" />
      <SetupFn ref="setupFn" />
      <!-- <el-button>我是 ElButton</el-button> -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    /* display: flex; */
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    /* display: flex; */
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
.show-box {
  display: flex;
}
</style>
