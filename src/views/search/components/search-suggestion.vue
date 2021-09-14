<template>
   <div class="search-suggestion">
     <van-cell v-for="(item, index) in suggestions" :key="index" icon="search" :title="item" />
   </div>
</template>

<script>
import { getSuggestions } from '@/api/search'
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
      async handler () {
        const { data } = await getSuggestions(this.searchText)
        this.suggestions = data.data.options
      },
      immediate: true // 监听开始立即执行handler,若false,只有数据开始变化才执行
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang='scss' scoped>

</style>
