<template>
    <div class="l-user">
        <div class="l-top">
            <h2> 个人中心</h2>
        </div>
        <div l-main-inner>
            <div class="l-main">
                <router-link tag="div" to="login" class="l-denglu">
                    <div class="l-dl">
                    <div class="l-img">
                            <img src="../style/img/touxiang.png" alt="">
                    </div>
                    <div class="l-zc">
                        <ul>
                            <li>登录/注册</li>
                            <li class="iconfont icon-youjiantou"></li>
                        </ul>
                    </div>
                    </div>
                    <div class="l-roder">
                        <ul>
                            <li>
                                <span class="iconfont icon-dingwei-"></span>
                                <span>全部订单</span>
                            </li>
                            <li>
                                <span class="iconfont icon-dfk"></span>
                                <span>代付款</span>
                            </li>

                            <li >
                                <span class="iconfont icon-daishouhuo"></span>
                                <span>待收货</span>
                            </li>
                            <li>
                                <span class="iconfont icon-shouhou"></span>
                                <span>售后</span>
                            </li>
                        </ul>
                    </div>
                </router-link>
                <div class="l-address">
                    <ul>
                        <li>
                            <span>地址管理</span>
                            <span class="iconfont icon-youjiantou"></span>
                        </li>
                        <li>
                            <span>我的优惠卷</span>
                            <span class="iconfont icon-youjiantou"></span>
                        </li>
                        <li>
                            <span>优先购买</span>
                            <span class="iconfont icon-youjiantou"></span>
                        </li>
                        <li>
                            <span>提货兑换码</span>
                            <span class="iconfont icon-youjiantou"></span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span>常见问题</span>
                            <span class="iconfont icon-youjiantou"></span>
                        </li>
                        <li>
                            <span>服务支持</span>
                            <span class="iconfont icon-youjiantou"></span>
                        </li>
                       
                    </ul>
                    <ul>
                        <li>
                            <span>意外碎屏保修服务</span>
                            <span class="iconfont icon-youjiantou"></span>
                        </li>
                        <li>
                            <span>延长保修服务</span>
                            <span class="iconfont icon-youjiantou"></span>
                        </li>
                       
                    </ul>


                </div>
            </div>
       </div>
    </div>

</template>
<style lang="less" scoped>
@import '../style/css/reset.css'; 
@import '../style/css/user.less'; 
</style>
