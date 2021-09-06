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
/**
 * 获取当前用户频道列表
 */
export function getUserChannels () {
  return request({
    url: '/app/v1_0/user/channels',
    method: 'get'
  })
}
/**
 * 添加当前用户的频道
 */
export function addChannel (data) {
  return request({
    url: '/app/v1_0/user/channels',
    method: 'PATCH',
    data
  })
}
/**
 * 删除当前用户指定的频道
 */
export function deleteChannel (channelId) {
  return request({
    url: `/app/v1_0/user/channels/${channelId}`,
    method: 'DELETE'
  })
}
