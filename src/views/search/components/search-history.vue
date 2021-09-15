<template>
   <div class="search-history">
     <van-cell title="历史搜索">
       <div v-if="!isShowDelete">
         <span @click="allDelete">全部删除&nbsp;</span>
         <span @click="successClick">完成</span>
       </div>
       <van-icon name="delete" v-if="isShowDelete" @click="isShowDelete = false" />
     </van-cell>
     <van-cell v-for="(item, index) in searchHistories" :key="index" :title="item">
       <van-icon name="close" />
     </van-cell>
   </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    searchHistories: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isShowDelete: true // 展示垃圾桶图标
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    /**
     * 点击完成
     */
    successClick () {
      this.isShowDelete = true
    },
    /**
     * 全部删除
     */
    allDelete () {
      console.log(1)
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
