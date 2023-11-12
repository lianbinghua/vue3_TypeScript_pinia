/*
 * @Description: Stay hungry，Stay foolish
 * @Author: lianbinghua
 * @Date: 2023-09-20 21:42:14
 * @LastEditors: lianbinghua
 * @LastEditTime: 2023-09-21 20:54:48
 */
import { defineStore } from 'pinia'

let useLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      isCollapse: false,
      refsh: false,
    }
  },
})

export default useLayOutSettingStore
