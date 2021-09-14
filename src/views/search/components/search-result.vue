<template>
   <div class="search-result">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in resultList" :key="item.art_id" :title="item.title" />
      </van-list>
   </div>
</template>

<script>
import { getSearchResult } from '@/api/search'
export default {
  name: 'SearchResult',
  components: {},
  props: {
    searchText: { // 搜索关键字
      type: String,
      default: ''
    }
  },
  data () {
    return {
      resultList: [],
      loading: false,
      finished: false,
      page: 1, // 页码
      pageSize: 10 // 每页大小
    }
  },
  computed: {},
  watch: {
  },
  created () {},
  mounted () {},
  methods: {
    async onLoad () {
      // 1.请求数据
      const { data } = await getSearchResult({
        page: this.page,
        per_page: this.pageSize,
        q: this.searchText
      })
      const result = data.data.results
      this.resultList.push(...result)
      // 2. 设置本次加载结束,组件会自动判断是否需要再次执行onload,若当前列表未占满div article-list,会再次执行。
      this.loading = false
      // 3. 判断搜索结果是否全部加载完成
      if (result.length) { // 返回的数据长度存在，则可继续请求，将下一页的timestamp赋值
        this.page++
      } else {
        this.finished = true
      }
    }
  }
}
</script>
<style lang='scss' scoped>
  .search-result {
    position: fixed;
    left: 0;
    right: 0;
    top: 54px;
    bottom: 0;
    overflow-y: auto;
  }
</style>
