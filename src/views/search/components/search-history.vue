<template>
   <div class="search-history">
     <van-cell title="历史搜索">
       <div v-show="!isShowDelete">
         <span @click="$emit('deletAll')">全部删除&nbsp;</span>
         <span @click="successClick">完成</span>
       </div>
       <van-icon name="delete-o" v-show="isShowDelete" @click="isShowDelete = false" />
     </van-cell>
     <van-cell v-for="(item, index) in searchHistories" :key="index" :title="item" @click="hisClick(item)">
       <van-icon v-show="!isShowDelete" name="close" @click="deleteOne(index)" />
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
     * 单条删除
     */
    deleteOne (index) {
      console.log(index)
      this.$emit('deleteOne', index)
    },
    /**
     * 点击某条历史搜索
     */
    hisClick (item) {
      // 若此时非编辑状态，则跳转搜索结果
      if (this.isShowDelete) {
        this.$emit('hisClick', item)
      }
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
