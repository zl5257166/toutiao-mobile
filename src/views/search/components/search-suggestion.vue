<template>
   <div class="search-suggestion">
     <van-cell v-for="(item, index) in suggestions" :key="index" icon="search">
       <div slot="title" v-html="hightLight(item)"></div>
     </van-cell>
   </div>
</template>

<script>
import { getSuggestions } from '@/api/search'
import { debounce } from 'lodash'
export default {
  name: 'SearchSuggestion',
  components: {},
  props: {
    searchText: { // 搜索关键字
      type: String,
      default: ''
    }
  },
  data () {
    return {
      suggestions: [] // 建议列表
    }
  },
  computed: {},
  watch: {
    searchText: {
      handler: debounce(async function () {
        const { data } = await getSuggestions(this.searchText)
        this.suggestions = data.data.options
      }, 300),
      immediate: true // 监听开始立即执行handler,若false,只有数据开始变化才执行
    }
  },
  created () {},
  mounted () {},
  methods: {
    /**
     * 处理高亮字符
     */
    hightLight (str) {
      const reg = new RegExp(this.searchText, 'gi')
      return str.replace(reg, `<span style="color: red">${this.searchText}</span>`)
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
