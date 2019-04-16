<template>
  <div v-if="item ? item=item : item=item1 ">
    <div class="rui-phone">
      <h2>{{item.name}}</h2>
    </div>
    <div class="rui-ban">
      <router-link :to="item.image.linkUrl">
        <img :src="item.image.src" alt="手机">
      </router-link>
    </div>
    <!-- 样式1 -->
    <div v-if="item.layout.type==='productLayoutCategoryOneOne'">
      <div class="rui-sj">
        <a href>
          <img src="../style/img/rui-sj.webp">
          <span>坚果 Pro 2S</span>
          <i class="iconfont icon-youjiantou"></i>
        </a>
      </div>
      <div class="rui-sj1">
        <a href>
          <img src="../style/img/rui-sj1.webp">
          <span>坚果 R1</span>
          <i class="iconfont icon-youjiantou"></i>
        </a>
      </div>
    </div>
    <!-- 样式2 -->
    <div v-else-if="item.layout.type==='productLayoutCategoryOneTwo'">
        <div class="rui-sj2">
            <div>
                <a href>
                <img src="../style/img/rui-sj2.webp">
                <span>迈克尔·杰克逊出生</span>
                <i class="iconfont icon-youjiantou"></i>
                </a>
            </div>
        </div>
    </div>
 <!-- 样式3 -->
    <div v-else-if="item.layout.type==='productLayoutCategoryOneThree'">
        <div class="rui-style3">
            <div class="rui-img11">
                <div>
                <a href>
                    <img src="../style/img/zpg.webp" alt>
                    <br>
                </a>
                </div>
                <span>坚果三脚架自拍杆</span>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object
    },
    item1: {
      name: "",
      image: { linkUrl: "", src: "" }
    }
  }
};
</script>

<style lang="less">
.rui-phone {
  height: 40px;
  width: 100%;
  line-height: 40px;
  h2 {
    font-size: 18px;
    font-weight: 700;
    padding-left: 10px;
  }
}
.rui-ban {
  width: 100%;
  height: 132px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ebebeb;
  img {
    display: block;
    width: 387px;
    height: 99px;
  }
}
// <!-- 样式1 -->
.rui-sj a {
  width: 100%;
  height: 69px;
  display: flex;
  line-height: 69px;
  text-align: left;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  border-top: 1px solid #ebebeb;
  position: relative;
  img {
    display: inline-block;
    width: 41px;
    height: 41px;
    padding: 0 13px 0 13px;
  }
  span {
    font-size: 16px;
    font-weight: 700;
  }
  i {
    position: absolute;
    right: 12px;
  }
}
.rui-sj1 a {
  width: 100%;
  height: 69px;
  display: flex;
  line-height: 69px;
  text-align: left;
  align-items: center;
  position: relative;
  box-shadow: 0 5px 13px rgba(0, 0, 0, 0.1);
  margin-bottom: 6px;
  background: #fff;
  img {
    display: inline-block;
    width: 41px;
    height: 41px;
    padding: 0 13px 0 13px;
  }
  span {
    font-size: 16px;
    font-weight: 700;
  }
  i {
    position: absolute;
    right: 12px;
  }
}
// <!-- 样式2 -->
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
// <!-- 样式3 -->
.rui-style3 {
  display: flex;
  flex: auto;
  flex-wrap: wrap;
  padding: 20px 13px 0px 13px;
  .rui-img11 {
    width: 33.33%;
    div {
      width: 122px;
      height: 122px;
      border-radius: 6px;
      border: 1px solid #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        display: inline-block;
        width: 76px;
        height: 76px;
      }
    }
    span {
      display: block;
      width: 100%;
      margin: 6px 0 12px;
      font-size: 0.5rem;
      font-weight: 700;
      line-height: 1.2;
      text-align: center;
      color: rgba(0, 0, 0, 0.8);
      overflow: hidden;
      word-break: break-word;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
