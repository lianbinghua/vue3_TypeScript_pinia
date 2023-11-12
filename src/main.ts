/*
 * @Description: Stay hungry，Stay foolish
 * @Author: lianbinghua
 * @Date: 2023-09-17 14:32:02
 * @LastEditors: lianbinghua
 * @LastEditTime: 2023-09-22 22:08:06
 */
import App from '@/App.vue'
import { createApp } from 'vue'
// svg插件需要配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components/index'
import '@/styles/index.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/theme-chalk/el-notification.css'
import { isHasButton } from './directive/has'
import './permission'
import router from './router'
import pinia from './store'

const app = createApp(App)
isHasButton(app)
app.use(globalComponent)
app.use(router)
app.use(pinia)
app.mount('#app')
