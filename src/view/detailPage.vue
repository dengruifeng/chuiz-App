<template>
  <div id="xq">
    <div id="xq-header">
      <a href="#" class="nav-back">
        <i class="iconfont icon-xiazai6"></i>
        返回
      </a>
      <h1>{{phoneData[0] && phoneData[0].name}}</h1>
    </div>
    <div id="xq-main">
      <div class="header-tabbox">
        <ul>
          <li class="active">
            <a href="#">商品</a>
          </li>
          <li>
            <a href="#">详情</a>
          </li>
          <li>
            <a href="#">参数</a>
          </li>
          <li>
            <a href="#">推荐</a>
          </li>
        </ul>
      </div>
      <P style="overflow: hidden">{{getDataShow}}</P>
      <div class="floor-banner">
        <img
          :src="goods.picture"
        >
      </div>
      <div class="floor-item">
        <div class="floor-item-top">
          <div class="floor-item-top-header">
            <h2>商品信息</h2>
          </div>
          <div>
            <h4>{{phoneData[0] && phoneData[0].name}}</h4>
            <p>{{phoneData[0] && phoneData[0].shop_info.highlights}}</p>
            <span>
              <i>¥</i>
              <p>{{phoneData[0] && phoneData[0].price}}</p>
            </span>
          </div>
        </div>
        <div class="floor-item-bot">
          <div class="floor-item-bot-1" @click="showBase=!showBase">
            <h6>已选版本</h6>
            <div>
              <p>
                <span>颜色：</span>
                <span>碳黑色（细红线版）</span>
              </p>
              <p>
                <span>容量：</span>
                <span>4G + 64GB</span>
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
          <img
            src="https://resource.smartisan.com/resource/a115f37d26c5ce4a99c0b5569cb736ab.jpg?x-oss-process=image/resize,w_1125/indexcrop,y_1440,i_0/format,webp"
          >
        </div>
      </div>
      <div class="xq-footer" @click="showBase=!showBase" v-show="!showBase">
        <div>
          <span>
            <a href="#">我要买</a>
          </span>
        </div>
      </div>
      <van-sku
        v-model="showBase"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :hide-stock="sku.hide_stock"
        :show-add-cart-btn="showaddcartbtn"
        :close-on-click-overlay="closeonclickoverlay"
        :quota="quota"
        :quota-used="quotaUsed"
        :initial-sku="initialSku"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      ></van-sku>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      phoneData: [],
      gouwuData: [],
      showBase: false,
      showaddcartbtn: true,
      closeonclickoverlay: true,
      goodsId: 2222,
      quota: 10,
      quotaUsed: 0,
      initialSku: {},
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [],
        list: [],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227 // 商品总库存
        // collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        // none_sku: false // 是否无规格商品
      },
      goods: {
        // 商品标题
        title: "测试商品",
        // 默认商品 sku 缩略图
        picture: "https://img.yzcdn.cn/1.jpg"
      }
    };
  },
  computed: {
    getDataShow() {
      // console.log(this.phoneData);
      let data = this.phoneData[0] && this.phoneData[0].shop_info;
      let dataList = this.phoneData[0] && this.phoneData[0].sku_info;
      this.goodsId = this.phoneData[0] && this.phoneData[0].id;
      this.sku.price = this.phoneData[0] && this.phoneData[0].price; // 默认价格（单位元）
      this.sku.stock_num = this.phoneData[0] && this.phoneData[0].id; // 商品总库存
      this.goods.title = this.phoneData[0] && this.phoneData[0].name;
      //颜色
      let colorData = {
        v: [],
        k_s: ""
      };
      //容量
      let rolData = {
        v: [],
        k_s: ""
      };
      //颜色容量组合
      let listData = [];
      if (data) {
        data = data.spec_v2;
        if (data) {
          for (let i = 0; i < data.length; i++) {
            if (i == 0) {
              colorData.k = data[i].spec_name + "选择";
              colorData.k_s = "s" + (parseInt(i) + 1);
            }
            if (i == 1) {
              rolData.k = data[i].spec_name + "选择";
              rolData.k_s = "s" + (parseInt(i) + 1);
            }
            let datagg = data[i].spec_values;
            if (datagg) {
              for (let k = 0; k < datagg.length; k++) {
                let obj = {
                  id: datagg[k].id,
                  name: datagg[k].show_name,
                  imgUrl: datagg[k].image ? datagg[k].image : "太靓没图"
                };
                if (i == 0 ) {
                  colorData.v.push(obj);
                }

                if (i == 1) {
                  console.log(i)
                  rolData.v.push(obj);
                }
              }
            }
          }
          this.sku.tree.push(colorData);
          if(rolData.k_s ){
            this.sku.tree.push(rolData);
          }
          // console.log(this.sku.tree);
        }
      }
      if (dataList) {
        this.goods.picture = dataList[0].ali_image;
        let imgUrltt = [];
        for (let j = 0; j < dataList.length; j++) {
          // imgUrltt.push(dataList[j].ali_image)
          let objL = {
            id: dataList[j].sku_id, // skuId，下单时后端需要
            price: dataList[j].price * 100, // 价格（单位分）
            s1: dataList[j].color_id, // 规格类目 k_s 为 s1 的对应规格值 id
            s2: dataList[j].spec_json[1] && dataList[j].spec_json[1].spec_value_id, // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 118 * dataList[j].price, // 当前 sku 组合对应的库存
            imgUrl: dataList[j].ali_image
          };
          listData.push(objL);
        }
        this.initialSku = listData[0];

        this.sku.list.push(...listData);
        // console.log(this.sku.list);
      }
    }
  },
  watch: {
  },
  methods: {
    getdetail() {
      Axios.get("/test/product/spus?ids=" + this.$route.params.id, {
        headers: {
          "content-type": "application/json"
        }
      }).then(res => {
        if(res.data.data.list[0]){
          this.phoneData = res.data.data.list;
        }else{
          alert("商品已下架")
        }
        // console.log(res.data)
      });
    },

    //添加购物车
    onBuyClicked() {
      alert("tttmmm");
    },
    //加入购物车
    onAddCartClicked() {
      alert("++++");
    },
    skuSelected() {
      alert("++++");
    },
    getSkuData() {
      alert(skuData);
    }
  },
  created() {
    this.getdetail();
  }
};
</script>


<style lang="less" scoped>
body,
html {
  width: 100%;
  background: #6c6c6c;
  height: 100%;
}
#xq-header {
  background: #1d1d1d;
  background-image: linear-gradient(#1d1d1d, #181818);
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 199;
  .nav-back {
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
  .nav-back:after {
    background: linear-gradient(#2a2a29, #151515);
    box-shadow: inset 0 1px 1px hsla(0, 0%, 100%, 0.1),
      inset 0 0 1px rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    content: " ";
    position: absolute;
    top: 1px;
    bottom: 1px;
    left: 1px;
    right: 1px;
    z-index: -1;
  }
  h1 {
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
#xq-main {
  position: relative;
  top: 50px;
  .header-tabbox {
    box-sizing: border-box;
    padding: 10px 6px;
    width: 100%;
    height: 51px;
    background: #f2f2f2;
    box-shadow: 0 5px 13px rgba(0, 0, 0, 0.12);
    user-select: none;
    ul {
      font-size: 14px;
      font-weight: 700;
      box-sizing: border-box;
      display: flex;
      text-align: center;
      border-radius: 4px;
      border-color: #d5d5d5;
      li:first-child {
        border-radius: 5px 0 0 5px;
      }
      li {
        flex-basis: 25%;
        padding: 8px 0;
        position: relative;
        color: #606060;
        border: 0.5px solid #ccc;
      }
    }
  }
  .active {
    background: #bfbfbf;
    background-image: linear-gradient(#aeaeae, #b3b3b3);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.15);
    color: #fff;
  }
  .floor-banner {
    box-shadow: 0 5px 13px rgba(0, 0, 0, 0.1);
    margin-bottom: 6px;
    width: 100%;
    height: 300px;
    background: #fff;
    margin-bottom: 8px;
    img {
      width: 100%;
      height: 300px;
    }
  }
  .floor-item {
    height: 314px;
    .floor-item-top {
      background: #fff;
      margin-bottom: 6px;
      .floor-item-top-header {
        padding: 0 12px;
        border-bottom: 1px solid #efefef;
        h2 {
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
      div {
        padding: 16px 18px;
        h4 {
          font-size: 18px;
          margin-bottom: 8px;
          font-weight: 700;
          color: #333;
        }
        p {
          font-size: 12px;
          color: #7f7f7f;
          margin-bottom: 8px;
          line-height: 1.5;
          font-weight: 700;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
        span {
          color: #d44d44;
          font-weight: 700;
          display: inline-block;
          white-space: nowrap;
          i {
            margin-right: 4px;
            font-size: 14px;
          }
          p {
            display: inline;
            font-size: 14px;
            color: #d44d44;
          }
        }
      }
    }
    .floor-item-bot {
      height: 122px;
      margin-bottom: 6px;
      .floor-item-bot-1 {
        padding: 16px 30px 12px 16px;
        background: #fff;
        h6 {
          font-size: 12px;
          font-weight: 700;
          line-height: 1.2;
          padding: 0 0 6px;
          color: #999;
        }
        div {
          font-size: 14px;
          p {
            line-height: 1.8;
            color: #333;
            display: table;
            span {
              display: table-cell;
              font-size: 14px;
              word-break: keep-all;
              font-weight: 100;
            }
            span {
              display: table-cell;
              font-size: 14px;
              font-weight: bold;
              font-weight: bolder;
            }
          }
        }
      }
      i {
        position: relative;
        top: -75px;
        left: 353px;
        font-size: 12px;
      }
    }
  }
  .floor-detail {
    margin-top: 8px;
    background: #fff;
    .detail-title {
      padding: 0 12px;
      h2 {
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        font-weight: 700;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      img {
        width: 100%;
        height: 500px;
      }
    }
  }
  .xq-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-content: center;
    justify-content: space-between;
    background: #fff;
    height: 57px;
    padding: 0 0.4%;
    z-index: 202;
    box-shadow: 0 -11px 27px rgba(0, 0, 0, 0.08);
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 100%;
      box-sizing: border-box;
      flex-grow: 1;
      flex-shrink: 1;
      margin: 0 0.7%;
      span {
        background-color: #ffd900;
        color: #fff;
        background-image: none;
        width: 98%;
        height: 40px;
        font-size: 16px;
        font-weight: 700;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          color: inherit;
        }
      }
    }
  }
  .van-sku-body {
    max-height: 400px;
  }
}
</style>
