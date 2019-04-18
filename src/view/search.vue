<template>
  <div id="search">
    <div class="search">
      <div>
        <i class="iconfont icon-shousuo"></i>
        <input type="text" placeholder="请输入要搜索的内容">
      </div>
      <span @click="onleft">返回</span>
    </div>
    <div class="hot-list">
      <h4>热门搜索</h4>
      <ul>
        <li
        v-for="item in mx.hot"
        :key="item"
        :style="{
          backgroundColor:styleBcolor(),
          color:styleColor()
        }"
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
body,
html {
  background: #ededed;
}
.search {
  box-sizing: border-box;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 10px 6px;
  z-index: 205;
  background-color: #f5f5f5;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
  div {
    width: 80%;
    height: 31px;
    border-radius: 16px;
    box-shadow: inset 0 0.05px 5px rgba(0, 0, 0, 0.02),
      inset 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 0 0 0.05px rgba(0, 0, 0, 0.1),
      0 0.05px 0.05px 0 hsla(0, 0, 100%, 0.1);
    color: #333;
    background: #fff;
    overflow: hidden;
    flex: 1;
    position: relative;
    input {
      font-size: 14px;
      height: 100%;
      padding-left: 30px;
      outline: none;
      padding: 0 18px;
      background-color: transparent;
      border: none;
      border-radius: 5px;
    }
    i {
      position: relative;
      left: 10px;
    }
  }
  span {
    position: relative;
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    width: 63px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    margin-left: 14px;
    color: #626262;
    top: -33px;
    left: 285px;
    border: 1px solid #d7d7d7;
    border-radius: 6px;
  }
}
.hot-list {
  padding: 0 20px;
  h4 {
    font-size: 16px;
    line-height: 14px;
    color: #8e8e8e;
    font-weight: 400;
    padding: 25px 0 14px 7px;
  }
  li {
    position: relative;
    font-size: 13.5px;
    font-weight: 700;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    padding: 0 16px;
    text-align: center;
    border-radius: 16px;
    margin: 0 4.16px 8.33px 0;
    border: 1px solid #f1948c;
  }
}
</style>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      mx: []
    }
  },
  methods: {
    onleft(){
      this.$router.back();
      //console.log(1);
    },
    getsearch() {
      Axios.get("/wowo/v1/search/hot-words", {
        // headers: {
        //   "content-type": "application/json",
        // }
      }).then(res => {
        let data = res.data;
        this.mx = data;
        //console.log(this.mx);
      });
    },
    styleBcolor(){
      let r, g, b,a;
				r = Math.floor(Math.random() * 256);
				g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        a = 0.3;
        //console.log(r,g,b,a);
				return "rgba(" +r + ',' +g+ ',' +b+ ',' +a+ ")"
    },
    styleColor(){
      let r, g, b,a;
				r = Math.floor(Math.random() * 100);
				g = Math.floor(Math.random() * 100);
        b = Math.floor(Math.random() * 100);
        a = 1;
        //console.log(r,g,b);
				return "rgba(" +r + ',' +g+ ',' +b+ ',' +a+ ")"
    }
  },
  created() {
    this.getsearch();
  }
};
</script>
