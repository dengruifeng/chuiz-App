<template>
  <div>
    <div class="l-lg">
      <h2>登录官网</h2>
    </div>
    <div class="l-lg-main">
      <div class="l-lg-srk">
        <ul>
          <li>
            <input type="text" placeholder="手机号/邮箱" name="username">
            <input type="password" placeholder="密码" name="password">
          </li>
        </ul>
        <ul>
          <li>忘记密码</li>
          <li>注册</li>
        </ul>
        <ul>
          <li>
            <input type="submit">
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

<style lang="less">
@import "../style/css/reset.css";
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
  height: 100%;
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
	.l-lg-dlfs{
		position: absolute;
		bottom: 50px;
		left: 50%;
		 transform: translate(-50%);
		ul{
			 display: flex;
			 justify-content: space-around;
			 width: 100%;
		
			li{
					 font-size: 40px;
					 margin-right: 20px;
				

			}
		}
	}
	
}
</style>
