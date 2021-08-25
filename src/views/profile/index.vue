<template>
   <div class="profile-box">
      <van-cell-group class="user-info">
        <van-cell center :border="false" class="user-top">
            <van-image
              class="avatar"
              slot="icon"
              round
              fit="cover"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <div slot="title" class="nick-name">昵称</div>
            <van-button
              class="update-btn"
              size="mini"
              round
            >编辑资料</van-button>
        </van-cell>
        <van-grid :border="false" class="user-btm">
          <van-grid-item>
            <div slot="text">
              <div class="num">101</div>
              <div class="text">头条</div>
            </div>
          </van-grid-item>
          <van-grid-item>
            <div slot="text">
              <div class="num">101</div>
              <div class="text">关注</div>
            </div>
          </van-grid-item>
          <van-grid-item>
            <div slot="text">
              <div class="num">101</div>
              <div class="text">粉丝</div>
            </div>
          </van-grid-item>
          <van-grid-item>
            <div slot="text">
              <div class="num">101</div>
              <div class="text">获赞</div>
            </div>
          </van-grid-item>
        </van-grid>
      </van-cell-group>
      <van-grid :column-num="2" class="coll-his mb-4">
        <van-grid-item icon-prefix="icon" icon="shoucang" text="收藏" />
        <van-grid-item icon-prefix="icon" icon="lishi" text="历史" />
      </van-grid>
      <van-cell title="消息通知" is-link url="" />
      <van-cell title="小智同学" is-link to="" class="mb-4" />
      <van-cell class="log-out" title="退出登录" center />
   </div>
</template>

<script>
export default {
  name: 'profileIndex',
  components: {},
  props: {},
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
  .profile-box {
    .user-info {
      background: url('~@/assets/images/banner.png') no-repeat;
      background-size: cover;
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
