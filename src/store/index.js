import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'

Vue.use(Vuex)

// 定义常量
const USER_KEY = 'toutiao-user'

export default new Vuex.Store({
  state: {
    user: getItem(USER_KEY) // 登录用户数据（token ...
  },
  mutations: {
    // 设置token信息
    setToken (state, data) {
      state.user = data
      setItem(USER_KEY, data)
    }
  },
  actions: {
  },
  modules: {
  }
})
