<template>
  <div class="l-zc">
    <van-cell-group>
      <van-field v-model="username" label="用户名" placeholder="请输入用户名" error/>
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required/>

      <van-field v-model="phone" label="手机号" placeholder="请输入手机号" error-message="手机号格式错误"/>
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
  </div>
</template>
<script>
export default {
   data() {

     return {
       username:'',
       password:'',
       phone:'',
       sms:''
     }
   },
}
</script>
<style lang="less">
</style>


