<template>
   <div class="layout-box">
     <router-view />

     <!-- 底部导航 -->
     <van-tabbar v-model="active" route>
       <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
       <van-tabbar-item icon="comment-o" to="/qa">问答</van-tabbar-item>
       <van-tabbar-item icon="video-o" to="/video">视频</van-tabbar-item>
       <van-tabbar-item icon="manager-o" to="/profile">我的</van-tabbar-item>
     </van-tabbar>
   </div>
</template>

<script>
export default {
  name: 'layoutIndex',
  components: {},
  props: {},
  data () {
    return {
      active: 0
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang='css' scoped>

</style>
