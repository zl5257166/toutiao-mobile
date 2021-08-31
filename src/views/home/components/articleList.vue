<template>
   <div class="article-list">
     <van-pull-refresh v-model="isRefreshLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <van-cell v-for="item in articles" :key="item.art_id" :title="item.title" /> -->
        <article-item v-for="item in articles" :key="item.art_id" :article="item" />
      </van-list>
    </van-pull-refresh>
   </div>
</template>

<script>
import { getArticleList } from '@/api/home'
import ArticleItem from '@/components/article-item/article-item'
export default {
  name: 'article-list',
  components: {
    ArticleItem
  },
  props: {
    channel: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      articles: [], // 文章列表
      loading: false, // 加载
      finished: false, // 加载完成
      timestamp: null, // 获取文章列表所需传递的时间戳（起始为当前时间戳，后续由接口返回
      isRefreshLoading: false // 是否上拉刷新加载中
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLoad () {
      // 获取数据
      const { data } = await getArticleList({
        channel_id: this.channel.id,
        timestamp: this.timestamp || Date.now(),
        with_top: 1
      })
      const { results } = data.data
      this.articles.push(...results)
      // 设置本次加载结束,组件会自动判断是否需要再次执行onload,若当前列表未占满div article-list,会再次执行。
      this.loading = false
      // 判断数据加载完成
      if (results.length) { // 返回的数据长度存在，则可继续请求，将下一页的timestamp赋值
        this.timestamp = data.data.pre_timestamp
      } else {
        this.finished = true
      }
    },
    // 上拉刷新数据
    async onRefresh () {
      const { data } = await getArticleList({
        channel_id: this.channel.id,
        timestamp: Date.now(),
        with_top: 1
      })
      const { results } = data.data
      // 往前添加数据
      this.articles.unshift(...results)
      this.$toast(`更新了${results.length}条数据`)
      this.isRefreshLoading = false
    }

  }
}
</script>
<style lang='scss' scoped>
  .article-list {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 50px;
    top: 90px;
    overflow-y: auto;
  }
  /* 隐藏滚动条 */
  ::-webkit-scrollbar{
    width: 0;
    height: 0;
    color: transparent;
  }
</style>
