<template>
  <div id="xq">
    <div id="xq-header">
      <a href="#" class="nav-back">
        <i class="iconfont icon-xiazai6"></i>
        返回
      </a>
      <h1> 坚果 Pro 2S </h1>
    </div>
    <div class="header-tabbox">
      <ul>
        <li class="active"><a href="#">商品</a></li>
        <li><a href="#">详情</a></li>
        <li><a href="#">参数</a></li>
        <li><a href="#">推荐</a></li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../style/css/reset.css'; 
#xq-header{
    background: #1d1d1d;
    background-image: linear-gradient(#1d1d1d,#181818);
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 199;
    .nav-back{
      padding: 10px 10px 0 10px;
      left: 6px;
      color: #fff;
      box-sizing: border-box;
      border-radius: 4px;
      font-size: 12px;
      height: 32px;
      line-height: 1;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .nav-back:after{
      background: linear-gradient(#2a2a29,#151515);
      box-shadow: inset 0 1px 1px hsla(0,0%,100%,.1), inset 0 0 1px rgba(0,0,0,.5);
      border-radius: 3px;
      content: " ";
      position: absolute;
      top: 1px;
      bottom: 1px;
      left: 1px;
      right: 1px;
      z-index: -1;
    }
    h1{
      color: #fff;
      font-size: 18px;
      line-height: 20px;
      padding: 16px 0 0;
      text-align: center;
      position: absolute;
      top: 0;
      left: 60px;
      right: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
}
.header-tabbox{
    position: fixed;
    left: 0;
    right: 0;
    box-sizing: border-box;
    padding: 10px 6px;
    top: 50px;
    width: 100%;
    height: 51px;
    z-index: 99;
    background: #f2f2f2;
    box-shadow: 0 5px 13px rgba(0,0,0,.12);
    user-select: none;
    ul{
      font-size: 14px;
      font-weight: 700;
      box-sizing: border-box;
      display: flex;
      text-align: center;
      border-radius: 4px;
      li{
        border-radius: 5px 0 0 5px;
        flex-basis: 25%;
        padding: 8px 0;
        position: relative;
        color: #606060;
      }
    }
}
.active{
  background: #bfbfbf;
  background-image: linear-gradient(#aeaeae,#b3b3b3);
  box-shadow: inset 0 1px 3px rgba(0,0,0,.15);
  color: #fff;
}
</style>
