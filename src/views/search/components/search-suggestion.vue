<template>
   <div class="search-suggestion">
     <van-cell icon="search" title="hello" />
     <van-cell icon="search" title="hello 11" />
     <van-cell icon="search" title="hello 22" />
   </div>
</template>

<script>
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

    }
  },
  computed: {},
  watch: {
    searchText: {
      handler (e) {
        console.log(e)
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
