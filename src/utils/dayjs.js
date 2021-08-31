// 初始化 dayjs 相关配置
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
import Vue from 'vue'
// 配置使用处理相对时间
// https://dayjs.gitee.io/docs/zh-CN/display/from
dayjs.extend(relativeTime)

// 配置使用中文语言包
dayjs.locale('zh-cn')

// 配置全局过滤器
Vue.filter('relativeTime', value => {
  return dayjs(value).from(dayjs())
})
