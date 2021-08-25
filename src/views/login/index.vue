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
      <van-form
        ref="login-form"
        :show-error="false"
        :show-error-message="false"
        validate-first
        @submit="login"
        @failed="checkErr"
      >
        <van-field
          v-model="user.mobile"
          icon-prefix="icon"
          left-icon="shouji"
          placeholder="输入手机号"
          name="mobile"
          :rules="rules.mobile"
        />
        <van-field
        v-model="user.code"
          icon-prefix="icon"
          left-icon="yanzhengma"
          placeholder="输入验证码"
          :rules="rules.code"
        >
        <template #button>
          <van-button v-if="!showCount" class="send-btn" size="small" round :loading="isSendLoading" @click.prevent="sendCode">发送验证码</van-button>
          <van-count-down v-else :time="1000 * 60" format="ss s" @finish="countEnd" />
        </template>
        </van-field>
        <div class="login-btn-box">
          <van-button class="login-btn" type="info" color="#6db4fb" block>登录</van-button>
        </div>
      </van-form>
   </div>
</template>

<script>
import { Login, getCode } from '@/api/user'
export default {
  name: 'loginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '13911111111', // 手机号
        code: '246810' // 验证码
      },
      showCount: false, // 是否展示并开始倒计时
      isSendLoading: false, // 是否让 发送验证码按钮加载中ing
      rules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    /**
     * 点击登录
     */
    async login () {
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const { data } = await Login(this.user)
        this.$toast.success('登录成功')
        // 存入token
        this.$store.commit('setToken', data.data)
      } catch (err) {
        this.$toast.fail('登录失败，手机号或验证码错误')
      }
    },
    /**
     * 校验表单失败进行提示
     */
    checkErr (err) {
      console.log(err.errors)
      const arr = err.errors
      this.$toast({
        message: arr[0].message,
        position: 'top'
      })
    },
    /**
     * 点击发送验证码
     */
    async sendCode () {
      let message = ''
      try {
        // 先验证手机号
        await this.$refs['login-form'].validate('mobile')
        // 验证成功，按钮进入loading...防止多次点击进行请求
        this.isSendLoading = true
        // 发送验证码
        const res = await getCode(this.user.mobile)
        if (res.status === 200 && res.data.message === 'OK') {
          message = '验证码发送成功'
          this.showCount = true // 隐藏发送按钮，开始倒计时
        }
      } catch (err) {
        if (err.response && err.response.status === 429) { // 发送短信过频繁时的提示
          message = '发送短信过于频繁，稍后再试'
        } else if (err.name === 'mobile') { // 验证手机号错误的提示
          message = err.message
        } else { // 未知错误
          message = '发送失败，稍后再试'
        }
      }
      this.isSendLoading = false
      this.$toast({
        message: message,
        position: 'top'
      })
    },
    /**
     * vant组件Count倒计时结束触发事件
     */
    countEnd (e) {
      this.showCount = false
    }
  }
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
