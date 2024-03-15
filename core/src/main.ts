/*
 * @Author: linkayy
 * @Date: 2024-01-02 13:07:30
 * @LastEditors: linkayy
 * @LastEditTime: 2024-03-03 17:11:58
 * @Description:
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.config.globalProperties.$wlk = 'wanglingkai'

app.mount('#app')
