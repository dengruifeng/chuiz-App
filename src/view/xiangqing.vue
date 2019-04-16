<template>
  <div id="xq">
    <div id="xq-header">
      <a href="#" class="nav-back">
        <i class="iconfont icon-xiazai6"></i>
        返回
      </a>
      <h1> 坚果 Pro 2S </h1>
    </div>
    <div id="xq-main">
      <div class="header-tabbox">
        <ul>
          <li class="active"><a href="#">商品</a></li>
          <li><a href="#">详情</a></li>
          <li><a href="#">参数</a></li>
          <li><a href="#">推荐</a></li>
        </ul>
      </div>
      <div class="floor-banner">
        <img src="https://resource.smartisan.com/resource/b07b9765e272f866da6acda4ee107d88.png?x-oss-process=image/format,webp">
      </div>
      <div class="floor-item">
        <div class="floor-item-top">
          <div class="floor-item-top-header">
            <h2>商品信息</h2>
          </div>
          <div>
            <h4>坚果 Pro 2S</h4>
            <p>双系统，无限屏，骁龙 ™ 710 处理器 · 前置 1600 万像素摄像头 · 6.01 英寸全高清全面屏 · AI 通话降噪 · 人脸解锁 + 指纹解锁 </p>
            <span>
              <i>¥</i>
              <p>1,798.00</p>
            </span>
          </div>
        </div>
        <div class="floor-item-bot">
          <div class="floor-item-bot-1">
            <h6>已选版本</h6>
            <div>
              <p>
                <span>颜色：</span>
                <span>碳黑色（细红线版）</span>
              </p>
              <p>
                <span>容量：</span>
                <span>4G + 64GB </span>
              </p>
              <p>
                <span>数量：</span>
                <span>1</span>
              </p>
            </div>
          </div>
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </div>
      <div class="floor-detail">
        <div class="detail-title">
          <h2>商品详情</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../style/css/reset.css'; 
body,html{
  width: 100%;
  background: #6c6c6c;
  height: 100%;
}
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
#xq-main{
  position: fixed;
  top: 50px;
  .header-tabbox{
    box-sizing: border-box;
    padding: 10px 6px;
    width: 100%;
    height: 51px;
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
      border-color: #d5d5d5;
      li:first-child{
        border-radius: 5px 0 0 5px;
      }
      li{
        flex-basis: 25%;
        padding: 8px 0;
        position: relative;
        color: #606060;
        border:.5px solid #ccc;
      }
    }
  }
  .active{
    background: #bfbfbf;
    background-image: linear-gradient(#aeaeae,#b3b3b3);
    box-shadow: inset 0 1px 3px rgba(0,0,0,.15);
    color: #fff;
  }
  .floor-banner{
    box-shadow: 0 5px 13px rgba(0,0,0,.1);
    margin-bottom: 6px;
    width: 100%;
    height:300px;
    background: #fff;
    margin-bottom: 8px;
    img{
      width: 100%;
      height: 300px;
    }
  }
  .floor-item{
    height: 314px;
    .floor-item-top{
      background: #fff;
      margin-bottom: 6px;
      .floor-item-top-header{
        padding: 0 12px;
        border-bottom: 1px solid #efefef;
        h2{
          height: 40px;
          line-height: 40px;
          font-size: 18px;
          font-weight: 700;
          color: #666;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      div{
        padding: 16px 18px;
        h4{
          font-size: 18px;
          margin-bottom: 8px;
          font-weight: 700;
          color: #333;
        }
        p{
          font-size: 12px;
          color: #7f7f7f;
          margin-bottom: 8px;
          line-height: 1.5;
          font-weight: 700;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
        span{
          color: #d44d44;
          font-weight: 700;
          display: inline-block;
          white-space: nowrap;
          i{
            margin-right: 4px;
            font-size: 14px;
            
          }
          p{
            display: inline;
            font-size: 14px;
            color: #d44d44;
          }
        }
      }
    }
    .floor-item-bot{
      height: 122px;
      margin-bottom: 6px;
      .floor-item-bot-1{
        padding: 16px 30px 12px 16px;
        h6{
          font-size: 12px;
          font-weight: 700;
          line-height: 1.2;
          padding: 0 0 6px;
          color: #999;
        }
        div{
          font-size: 14px;
          p{
            line-height: 1.8;
            color: #333;
            display: table;
            span{
              display: table-cell;
              font-size: 14px;
              word-break: keep-all;
              font-weight: 100;
            }
            span{
              display: table-cell;
              font-size: 14px;
              font-weight: bold;
              font-weight: bolder;
            }
          }
        }
      }
      i{
        position: relative;
        top:-75px;
        left:353px;
        font-size: 12px;
      }
    }
  }
  .floor-detail{
    margin-top: 8px;
    background:#fff;
    .detail-title{
      padding: 0 12px;
    }
  }
}
</style>
