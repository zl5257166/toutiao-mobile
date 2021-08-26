import axios from 'axios'
import store from '@/store/index.js'

const service = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})

// 请求拦截器
service.interceptors.request.use((config) => {
  const { user } = store.state
  // 若用户已经登录，则注入token
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, (err) => {
  return Promise.reject(err)
})
// 响应拦截器

export default service
