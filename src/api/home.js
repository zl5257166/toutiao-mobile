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
