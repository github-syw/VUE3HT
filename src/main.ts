import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/style/index.scss'
import 'normalize.css'
import '@/mock'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// svg
import 'virtual:svg-icons-register'

// 全局组件
import globalComponents from '@/components'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(globalComponents)
app.use(createPinia())
app.use(ElementPlus)
app.use(router)
app.mount('#app')
