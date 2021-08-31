<template>
    <van-cell class="atc-item">
      <div slot="title" class="title van-multi-ellipsis--l2">{{ article.title }}</div>
      <div slot="label">
        <div class="three-box" v-if="article.cover.type === 3">
          <van-image
            v-for="(item, index) in article.cover.images"
            :key="index"
            class="three-img"
            fit="cover"
            :src="item"
          />
        </div>
        <div class="atc-bottom">
          <span>{{ article.aut_name }}</span>
          <span>{{ article.comm_count }}评论</span>
          <span>{{ article.pubdate | relativeTime }}</span>
        </div>
      </div>
      <div slot="default" v-if="article.cover.type === 1">
        <van-image
          class="atc-img"
          fit="cover"
          :src="article.cover.images[0]"
        />
      </div>
    </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang='scss' scoped>
  .atc-item {
    .title {
      font-size: 16px;
      color: #3a3a3a;
    }
    .van-cell__value {
      flex: unset;
      width: 116px;
      height: 73px;
      margin-left: 12px;
    }
    .atc-img {
      width: 116px;
      height: 73px;
    }
    .three-box {
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      .three-img {
        // 除了最后一个
        &:not(:last-child) {
          padding-right: 4px;
        }
        flex: 1;
        height: 73px;
      }
    }
    .atc-bottom {
      font-size: 11px;
      color: #b4b4b4;
      span {
        margin-right: 12px;
      }
    }
  }
</style>
