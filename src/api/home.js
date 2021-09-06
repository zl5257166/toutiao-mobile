/**
 * 首页相关请求模块
 */
import request from '@/utils/request'

/**
 * 获取频道文章列表
 */
export const getArticleList = (params) => {
  return request({
    url: '/app/v1_1/articles',
    method: 'get',
    params
  })
}
/**
 * 获取所有频道列表
 */
export const getAllChannels = () => {
  return request({
    url: '/app/v1_0/channels',
    method: 'get'
  })
}
