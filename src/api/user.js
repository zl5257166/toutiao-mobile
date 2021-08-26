/**
 * 用户相关请求模块
 */

import request from '@/utils/request'

/**
 * 登录注册
 */
export function Login (data) {
  return request({
    url: '/app/v1_0/authorizations',
    method: 'post',
    data
  })
}
/**
 * 获取验证码
 */
export function getCode (mobile) {
  return request({
    url: `/app/v1_0/sms/codes/${mobile}`,
    method: 'get'
  })
}
/**
 * 获取用户信息
 */
export function getUserInfo () {
  return request({
    url: '/app/v1_0/user',
    method: 'get'
  })
}
