/*
 * @Description: Stay hungry，Stay foolish
 * @Author: lianbinghua
 * @Date: 2023-09-19 17:16:03
 * @LastEditors: lianbinghua
 * @LastEditTime: 2023-09-23 21:32:17
 */
// 登录接口需要携带参数ts类型
export interface LoginFormData {
  username?: string
  password?: string
}

export interface ResponseData {
  code?: number
  message?: string
  ok?: boolean
}

export interface LoginResponseData extends ResponseData {
  data?: string
}

export interface userInfoResponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}
