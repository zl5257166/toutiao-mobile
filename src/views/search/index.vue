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
    <search-result v-if="isShowResult" />
    <!-- 联想建议 -->
    <search-suggestion v-else-if="searchValue" />
    <!-- 历史记录 -->
    <search-history v-else />
  </div>
</template>

<script>
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
      isShowResult: false // 是否显示搜索结果
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
