<template>
   <div class="login-box">
     <!-- 顶部导航 -->
     <van-nav-bar
        class="app-nav-bar"
        title="注册 / 登录"
        left-arrow
        @click-left="$router.back()"
      />
      <!-- 表单 -->
      <van-cell-group>
        <van-field
          v-model="mobile"
          icon-prefix="icon"
          left-icon="shouji"
          placeholder="输入手机号"
        />
        <van-field
        v-model="code"
          icon-prefix="icon"
          left-icon="yanzhengma"
          placeholder="输入验证码"
        >
        <template #button>
          <van-button class="send-btn" size="small" round>发送验证码</van-button>
        </template>
        </van-field>
      </van-cell-group>
      <div class="login-btn-box">
        <van-button class="login-btn" type="info" color="#6db4fb" block>登录</van-button>
      </div>
   </div>
</template>

<script>
export default {
  name: 'loginIndex',
  components: {},
  props: {},
  data () {
    return {
      mobile: '', // 手机号
      code: '' // 验证码
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
  .login-box{
    .login-btn-box{
      padding: 26px 16px;
    }
    .send-btn {
      width: 80px;
      height: 23px;
      background: #ededed;
      .van-button__text {
        font-size: 11px;
        color: #666666;
      }
    }
  }
</style>
