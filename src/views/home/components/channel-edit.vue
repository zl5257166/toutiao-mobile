<template>
  <div class="edit-box">
     <!-- 我的频道 -->
    <van-cell center :border="false">
      <div slot="title" class="title">我的频道</div>
      <van-button v-if="!isEdit" type="danger" plain round size="mini" @click="editClick">编辑</van-button>
      <van-button v-else type="danger" plain round size="mini" @click="finishClick">完成</van-button>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item v-for="(item, index) in myChannels" :key="item.id" :icon="(isEdit && index !== 0) ? 'close' : '' " :text="item.name" class="grid-item" :class="[testObj,{'active':activeIndex === index}]" @click="channelClick(item.id,index)" />
    </van-grid>
    <!-- 频道推荐 -->
    <van-cell center :border="false">
      <div slot="title" class="title">频道推荐</div>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item v-for="channel in recommend" :key="channel.id" :text="channel.name" class="grid-item" @click="addChannel(channel)" />
    </van-grid>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getAllChannels } from '@/api/home'
import { addChannel, deleteChannel } from '@/api/user'
import { setItem } from '@/utils/storage'
export default {
  name: 'channelEdit',
  components: {},
  props: {
    // 我的频道
    myChannels: {
      type: Array,
      require: true
    },
    activeIndex: {
      type: Number,
      require: true
    }
  },
  data () {
    return {
      flag: '',
      isEdit: false, // 是否编辑中
      timer: '', // 定时器
      allChannels: [] // 所有频道
    }
  },
  computed: {
    ...mapState(['user']),
    // 计算抖动样式
    testObj () {
      return {
        transformed0: this.flag === 0,
        transformed1: this.flag === 1,
        transformed2: this.flag === 2
      }
    },
    // 推荐频道  = 所有频道列表 - 当前用户频道列表
    recommend () {
      const a = this.allChannels
      const b = this.myChannels
      return a.filter(channel => {
        return !b.find(userChannel => {
          return channel.id === userChannel.id
        })
      })
      // 两个对象数组取补集的方法 filter + find
    }
  },
  watch: {},
  created () {
    this.getAllChannels()
  },
  mounted () {},
  methods: {
    /**
     * 点击编辑
     */
    editClick () {
      this.isEdit = !this.isEdit
      this.flag = 0
      // 加抖动样式
      this.timer = setInterval(() => {
        this.flag++
        if (this.flag > 2) {
          this.flag = 0
        }
      }, 50)
    },
    /**
     * 点击完成
     */
    finishClick () {
      clearInterval(this.timer)
      this.flag = ''
      this.isEdit = !this.isEdit
    },
    /**
     * 获取所有频道
     */
    async getAllChannels () {
      const { data } = await getAllChannels()
      this.allChannels = data.data.channels
    },
    /**
     * 点击 频道推荐 下的频道 将其添加到我的频道
     */
    async addChannel (item) {
      this.myChannels.push(item)
      // 数据持久化
      if (!this.user) { // 1.若未登录，使用本地存储
        console.log('本地')
        setItem('my-channels', this.myChannels)
      } else { // 2.已登录，调用接口存储到服务器
        console.log('服务器')
        await addChannel({
          channels: [
            {
              id: item.id, seq: this.myChannels.length
            }
          ]
        })
      }
    },
    /**
     * 编辑时，点击 我的频道 下的频道，将其移除我的频道，
     * 非编辑时。跳转对应频道内容
     */
    async channelClick (channelId, index) {
      if (this.isEdit && index !== 0) {
        this.myChannels.splice(index, 1)
        // 若移除的是当前激活之前的，相应的，激活下标-1,确保当前激活的频道不变
        this.$emit('toOneChannel', this.activeIndex - 1)
        // 数据持久化
        if (this.user) { // 已经登录，存服务器
          console.log('服务器')
          await deleteChannel(channelId)
        } else { // 未登录，存本地
          console.log('本地')
          setItem('my-channels', this.myChannels)
        }
      } else {
        // 发射事件，关闭弹出层并跳转对应频道
        this.$emit('close')
        this.$emit('toOneChannel', index)
      }
    }
  }
}
</script>
<style lang='scss' scoped>
  .edit-box {
    // background: pink;
    padding-top: 54px;
    .title {
      font-size: 16px;
      color: #333333;
    }
    .grid-item {
      width: 200px;
      height: 43px;
      /deep/.van-grid-item__content {
        background: #f4f5f6;
        .van-grid-item__text {
          font-size: 14px;
          color: #222;
          margin-top: 0;
        }
      }
      /deep/.van-icon {
        position: absolute;
        top: -5px;
        right: -5px;
        font-size: 16px;
        color: red;
      }
    }
    .active {
      /deep/.van-grid-item__text {
        color: rgb(221, 25, 25) !important;
      }
    }
    .test-box {
      width: 100px;
      height: 100px;
      background: pink;
    }
    .transformed0 {
      -webkit-transform: rotate(1deg);
      -moz-transform: rotate(1deg);
      -ms-transform: rotate(1deg);
      transform: rotate(1deg);
    }
    .transformed1 {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    .transformed2 {
      -webkit-transform: rotate(359deg);
      -moz-transform: rotate(359deg);
      -ms-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
</style>
