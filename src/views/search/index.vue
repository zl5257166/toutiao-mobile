<template>
  <div class="search-index">
    <!-- 搜索框 -->
    <div class="search-box">
      <van-search
        v-model="value"
        shape="round"
        background="#3196fa"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="$router.back(-1)"
      />
    </div>
    <!-- 历史记录 -->
      <search-history />
    <!-- 联想建议 -->
      <search-suggestion />
    <!-- 搜索结果 -->
      <search-result />
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
      value: '' // 搜索关键字
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
      this.$toast(val)
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
