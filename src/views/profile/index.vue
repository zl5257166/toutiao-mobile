<template>
   <div class="profile-box">
     <div class="info-box">
        <van-cell-group v-if="user" class="user-info">
          <van-cell center :border="false" class="user-top">
              <van-image
                class="avatar"
                slot="icon"
                round
                fit="cover"
                :src="userInfo.photo"
              />
              <div slot="title" class="nick-name">{{ userInfo.name }}</div>
              <van-button
                class="update-btn"
                size="mini"
                round
              >编辑资料</van-button>
          </van-cell>
          <van-grid :border="false" class="user-btm">
            <van-grid-item>
              <div slot="text">
                <div class="num">{{ userInfo.art_count }}</div>
                <div class="text">头条</div>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div slot="text">
                <div class="num">{{ userInfo.follow_count }}</div>
                <div class="text">关注</div>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div slot="text">
                <div class="num">{{ userInfo.fans_count }}</div>
                <div class="text">粉丝</div>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div slot="text">
                <div class="num">{{ userInfo.like_count }}</div>
                <div class="text">获赞</div>
              </div>
            </van-grid-item>
          </van-grid>
        </van-cell-group>
        <div v-else class="nolog-box" @click="$router.push('/login')">
          <img src="@/assets/images/no-lg.png" alt="">
          <div class="no-lg-text">登录 / 注册</div>
        </div>
     </div>
      <van-grid :column-num="2" class="coll-his mb-4">
        <van-grid-item icon-prefix="icon" icon="shoucang" text="收藏" />
        <van-grid-item icon-prefix="icon" icon="lishi" text="历史" />
      </van-grid>
      <van-cell title="消息通知" is-link url="" />
      <van-cell title="小智同学" is-link to="" class="mb-4" />
      <van-cell v-if="user" class="log-out" title="退出登录" center @click="logOut" />
   </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'
export default {
  name: 'profileIndex',
  components: {},
  props: {},
  data () {
    return {
      userInfo: {}
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  created () {
    if (this.user) {
      this.loadUserInfo()
    }
  },
  mounted () {},
  methods: {
    async loadUserInfo () {
      // 获取用户信息
      const { data } = await getUserInfo()
      this.userInfo = data.data
    },
    /**
     * 退出
     */
    logOut () {
      this.$dialog.confirm({
        title: '退出登录',
        message: '确认退出吗？'
      }).then(() => {
        // on confirm
        this.$store.commit('setToken', null)
      }).catch(() => {
        // on cancel
      })
    }
  }
}
</script>
<style lang='scss' scoped>
  .profile-box {
    .info-box{
      height: 180px;
      background: url('~@/assets/images/banner.png') no-repeat;
      background-size: cover;
      .user-info {
        background: unset;
        .user-top {
          padding-top: 38px;
          padding-bottom: 11px;
          height: 115px;
          box-sizing: border-box;
          background: unset;
          .avatar {
            height: 66px;
            width: 66px;
            box-sizing: border-box;
            border: 1px solid #ffffff;
          }
          .nick-name{
            margin-left: 10px;
            color: #ffffff;
          }
          .update-btn {
            height: 22px;
            font-size: 16px;
            color: #666666;
          }
        }
        .user-btm {
          /deep/.van-grid-item__content {
            height: 65px;
            text-align: center;
            color: #ffffff;
            .num {
              font-size: 18px;
            }
            .text {
              font-size: 11px;
            }
          }
        }
        /deep/.van-grid-item__content {
          background: unset;
        }
      }
      .nolog-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 180px;
        width: 100%;
        img{
          height: 66px;
          width: 66px;
        }
        .no-lg-text {
          margin-top: 10px;
          font-size: 14px;
          color: #ffffff;
        }
      }
    }
    .coll-his {
      height: 70px;
      /deep/.icon {
        font-size: 22px;
      }
      /deep/ .icon-shoucang {
        color: #eb5253;
      }
      /deep/ .icon-lishi {
        color: #ff9d1d;
      }
      /deep/.van-grid-item__text {
        font-size: 14px;
        color: #333333;
      }
    }
    .log-out {
      text-align: center;
      color: #d86262;
    }
    .mb-4 {
      margin-bottom: 4px;
    }
  }
</style>
