/*
 * @Description: Stay hungry，Stay foolish
 * @Author: lianbinghua
 * @Date: 2023-09-19 17:41:54
 * @LastEditors: lianbinghua
 * @LastEditTime: 2023-09-19 17:48:44
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './routes'

let router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
