<template>
  <div class="search-index">
    <!-- 搜索框 -->
    <div class="search-box">
      <van-search
        v-model="searchValue"
        shape="round"
        background="#3196fa"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="$router.back(-1)"
        @focus="isShowResult = false"
      />
    </div>
    <!-- 搜索结果 -->
    <search-result v-if="isShowResult" :search-text="searchValue" />
    <!-- 联想建议 -->
    <search-suggestion v-else-if="searchValue" :search-text="searchValue" @sugClick="onSearch" />
    <!-- 历史记录 -->
    <search-history v-else :search-histories="searchHistories" />
  </div>
</template>

<script>
import { setItem, getItem } from '@/utils/storage'

import SearchHistory from './components/search-history.vue'
import SearchResult from './components/search-result.vue'
import SearchSuggestion from './components/search-suggestion.vue'
export default {
  name: 'searchIndex',
  components: { SearchSuggestion, SearchHistory, SearchResult },
  props: {},
  data () {
    return {
      searchValue: '', // 搜索关键字
      isShowResult: false, // 是否显示搜索结果
      searchHistories: getItem('search-histories') || [] // 历史记录
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    /**
     * 确定搜索
     */
    onSearch (val) {
      // 1传递搜索关键字
      this.searchValue = val
      // 2添加历史搜索
      // 方案1
      const index = this.searchHistories.indexOf(val)
      if (index !== -1) {
        // 去除重复项
        this.searchHistories.splice(index, 1)
      }
      // 将最新的搜索记录放到顶部
      this.searchHistories.unshift(val)
      // 方案2 通过Set去重
      // let newList = [val, ...this.searchHistories]
      // newList = Array.from(new Set(newList))
      // this.searchHistories = newList
      // 历史搜索记录持久化
      // 若登录，搜索时后端会自动记录；未登录，存本地
      setItem('search-histories', this.searchHistories)
      // 3展示搜索结果
      this.isShowResult = true
    }
  }
}
</script>
<style lang='scss' scoped>
  .search-index {
    .search-box {
      .van-search__action {
        color: rgb(240, 238, 238);
      }
    }
  }
</style>
