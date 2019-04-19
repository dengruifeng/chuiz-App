<template>
  <div>
    <div class="l-lg">
      <h2>登录官网</h2>
    </div>
    <div class="l-lg-main">
      <div class="l-lg-srk">
        <ul>
          <li>
            <input type="text" placeholder="手机号/邮箱" v-model="username">
            <input type="password" placeholder="密码" v-model="password">
          </li>
        </ul>
        <ul>
          <li>忘记密码</li>
          <router-link tag="li" to="register">注册</router-link>
        </ul>
        <ul>
          <li>
            <input type="submit" value="登录" @click="handleLogin" v-if="this.flagName">
            <input type="submit" value="登录" v-else class="yanz">
          </li>
        </ul>
        <ul>
          <li>
            国际手机号登录
            <i class="iconfont icon-youjiantou"></i>
          </li>
        </ul>
      </div>
      <div class="l-lg-dlfs">
        <ul>
          <li class="iconfont icon-weibo"></li>
          <li class="iconfont icon-QQ"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
 <script>
 import { mapState,mapMutations} from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  computed: {
     ...mapState( [ 'LoginData' ] ),
    flagName () {
      var phoneReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;

      if (phoneReg.test(this.username)) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
     ...mapMutations(["getuserName"]),
    handleLogin() {
      window.isLogin = true;
      // 假设这块登录成功。我们需要做的事情是：跳转回去
      // 1. 不管如何都跳转首页
      
      // this.$router.push('/');
      // 2. 用户本来是想要进入哪里，就让他回答哪里
      var redirect = this.$route.query.redirect || "/";
      // console.log(redirect)
      this.$router.replace(redirect);
      localStorage.setItem('LoginData', JSON.stringify(this.username))
      //localStorage.setItem('LoginData', JSON.stringify(this.password))
    }
  },
  watch: {
  }
};
</script>

 <style lang="less"  scoped>
@import "../../style/css/reset.css";
body,
html {
  height: 100%;
  background: #e3e3e3;
}

.l-lg {
  width: 100%;
  color: #ffffff;
  background: #000000;
  text-align: center;
  height: 50px;
  font-size: 20px;
  font-weight: 700;
  line-height: 50px;
}
.l-lg-main {
  background: #e3e3e3;
  height: 667px;
  width: 100%;
  padding-top: 10px;
  ul:nth-child(1) {
    margin-left: 10%;
    li {
      width: 90%;
      box-sizing: border-box;
      input:nth-child(1) {
        padding-left: 8px;
        box-sizing: border-box;
        width: 100%;
        height: 44px;
        border: 0;
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
        border: 1px solid #cccccc;
      }
      input:nth-child(2) {
        padding-left: 8px;
        box-sizing: border-box;
        width: 100%;
        height: 44px;
        border: 0;
        border: 1px solid #cccccc;
        border-top: 0;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
      }
    }
  }
  ul:nth-child(2) {
    margin-right: 12%;
    margin-top: 8px;
    li {
      float: right;
      margin-left: 15px;
    }
  }
  ul:nth-child(3) {
    margin-top: 40px;
    width: 100%;
    input {
      border: 0;
      margin-left: 10%;
      background: #97aee7;
      height: 50px;
      border-radius: 4px;
      text-align: center;
      line-height: 50px;
      width: 80%;
      color: #ffffff;
      font-size: 20px;
    }
    .yanz {
      background: #cccccc;
    }
  }
  ul:nth-child(4) {
    margin-right: 12%;
    margin-top: 8px;
    float: right;
    margin-left: 12px;
    i {
      margin-left: 6px;
      font-size: 12px;
    }
  }
  .l-lg-dlfs {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%);
    ul {
      display: flex;
      justify-content: space-around;
      width: 100%;

      li {
        font-size: 40px;
        margin-right: 20px;
      }
    }
  }
}
</style>
