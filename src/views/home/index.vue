<template>
   <div class="home-box">
     <van-nav-bar class="app-nav-bar">
       <van-button slot="title" icon="search" round class="sear-box">搜索</van-button>
     </van-nav-bar>
     <van-tabs v-model="active" swipeable>
      <van-tab v-for="item in channels" :key="item.id" :title="item.name">
        <article-list :channel="item" />
      </van-tab>
      <div slot="nav-right" class="wap-nav" @click="showEditBox">
        <van-icon name="wap-nav" />
      </div>
    </van-tabs>
    <van-popup
      v-model="isShowEdit"
      position="bottom"
      :style="{ height: '100%' }"
      closeable
      get-container="body"
    />
   </div>
</template>

<script>
import { getUserChannels } from '@/api/user'

import articleList from './components/articleList.vue'
export default {
  name: 'HomeIndex',
  components: {
    articleList
  },
  props: {},
  data () {
    return {
      active: 0,
      channels: [], // 频道列表
      isShowEdit: false // 是否展示编辑频道弹出层
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getMychannels()
  },
  mounted () {},
  methods: {
    /**
     * 获取当前用户频道列表
     */
    async getMychannels () {
      const { data } = await getUserChannels()
      this.channels = data.data.channels
    },
    /**
     * 点击出现编辑频道弹出层
     */
    showEditBox () {
      this.isShowEdit = true
    }
  }
}
</script>
<style lang='scss' scoped>
  .home-box{
    .app-nav-bar {
      /deep/.van-nav-bar__title {
        max-width: 100%;
      }
      .sear-box {
        border: none;
        width: 277px;
        height: 32px;
        color: #ffffff;
        font-size: 14px;
        background: #5babfb;
      }
    }
    /deep/.van-tab {
      border: 1px solid #edeff3;
    }
    /deep/.van-tabs__nav {
      padding-right: 33px;
      padding-left: 0;
      .van-tabs__line {
        bottom: 20px;
        width: 20px;
        height: 2px;
        background: #3296fa;
      }
    }
    .wap-nav {
      position: fixed;
      right: 0px;
      width: 33px;
      height: 43px;
      line-height: 50px;
      background: #ffffff;
      opacity: .9;
      text-align: center;
    }
    .wap-nav::before {
      content: '';
      position: absolute;
      left: 0;
      top: 6px;
      height: 33px;
      width: 1px;
      background: linear-gradient(to top, #eae8e8 0%, #cbcbcb 50%, #eae8e8 100%);
    }
  }
</style>
