/*
 * @Description: Stay hungry，Stay foolish
 * @Author: lianbinghua
 * @Date: 2023-09-17 20:10:16
 * @LastEditors: lianbinghua
 * @LastEditTime: 2023-09-21 13:57:55
 */
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App } from 'vue'
import * as components from './components'
const install = function (app: App) {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export default install
export * from './components'
