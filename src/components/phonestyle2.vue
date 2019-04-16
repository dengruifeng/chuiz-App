<template>
    <div class="rui-sj2">
      <div>
        <a href>
          <img src="../style/img/rui-sj2.webp">
          <span>迈克尔·杰克逊出生</span>
          <i class="iconfont icon-youjiantou"></i>
        </a>
      </div>
      <div>
        <a href>
          <img src="../style/img/rui-sj2.webp">
          <span>迈克尔·杰克逊出生</span>
          <i class="iconfont icon-youjiantou"></i>
        </a>
      </div>
      <div>
        <a href>
          <img src="../style/img/rui-sj2.webp">
          <span>迈克尔·杰克逊出生</span>
          <i class="iconfont icon-youjiantou"></i>
        </a>
      </div>
      <div>
        <a href>
          <img src="../style/img/rui-sj2.webp">
          <span>迈克尔·杰克逊出生</span>
          <i class="iconfont icon-youjiantou"></i>
        </a>
      </div>
    </div>
</template>


<style lang="less">
.rui-sj2 {
    width: 100%;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    position: relative;
    box-shadow: 0 5px 13px rgba(0, 0, 0, 0.1);
    margin-bottom: 6px;
    background: #fff;
    div {
      a {
        height: 69px;
        line-height: 69px;
        display: flex;
        text-align: center;
        align-items: center;
        position: relative;
        :after {
          content: "";
          width: 100%;
          height: 1px;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          background: #ebebeb;
          transform: scaleY(0.667);
          transform-origin: 0 100%;
        }
        img {
          display: inline-block;
          width: 41px;
          height: 41px;
          padding: 0 13px 0 13px;
        }
        span {
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-word;
          line-height: 1.2;
          font-size: 14px;
          font-weight: 700;
          color: #666;
          white-space: nowrap;
          padding-right: 10px;
          width: 108px;
        }
        i {
          font-size: 12px;
          padding-right: 9px;
        }
      }
      :after {
        content: "";
        width: 1px;
        height: 100%;
        top: 0;
        left: auto;
        right: 0;
        bottom: 0;
        background: #ebebeb;
        transform: scaleX(0.667);
        transform-origin: 100% 0;
      }
    }
    :after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      left: 0;
      right: 0;
      bottom: 0;
      background: #ebebeb;
      transform-origin: 100% 0;
    }
  }
</style>
