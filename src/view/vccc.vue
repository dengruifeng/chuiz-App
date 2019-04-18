<template>
  <div>
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
</template>


<script>
export default {
  data() {
    return {
      showBase: true,
      showaddcartbtn: true,
      closeonclickoverlay: true,
      goodsId: 2222,
      quota: 10,
      quotaUsed: 0,
      initialSku: {
        id: 2259, // skuId，下单时后端需要
        price: 100, // 价格（单位分）
        s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
        s2: "1219", // 规格类目 k_s 为 s2 的对应规格值 id
        s3: "0", // 最多包含3个规格值，为0表示不存在该规格
        stock_num: 110 // 当前 sku 组合对应的库存
      },
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色选择", // skuKeyName：规格类目名称
            v: [
              {
                id: "1215", // skuValueId：规格值 id
                name: "碳黑色（细红线版）", // skuValueName：规格值名称
                imgUrl: "https://img.yzcdn.cn/2.jpg" // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: "1216",
                name: "炫光蓝",
                imgUrl: "https://img.yzcdn.cn/2.jpg"
              },
              {
                id: "1217",
                name: "炫光红",
                imgUrl: "https://img.yzcdn.cn/2.jpg"
              },
              {
                id: "1218",
                name: "纯白色",
                imgUrl: "https://img.yzcdn.cn/2.jpg"
              }
            ],
            k_s: "s1"
          },
          {
            k: "容量选择", // skuKeyName：规格类目名称
            v: [
              {
                id: "1219", // skuValueId：规格值 id
                name: "4G + 64GB", // skuValueName：规格值名称
                imgUrl: "https://img.yzcdn.cn/2.jpg" // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: "1220",
                name: "6G + 64GB",
                imgUrl: "https://img.yzcdn.cn/2.jpg"
              },
              {
                id: "1221",
                name: "6G + 164GB",
                imgUrl: "https://img.yzcdn.cn/2.jpg"
              }
            ],
            k_s: "s2" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1219", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            // 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
            // 值：skuValueId（规格值 id）
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215",
            s2: "1220",
            // 初始选中数量
            selectedNum: 1,
            stock_num: 110
          },
          {
            // 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
            // 值：skuValueId（规格值 id）
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215",
            s2: "1221",
            // 初始选中数量
            selectedNum: 1,
            stock_num: 110
          },
          {
            id: 2259, 
            price: 100, 
            s1: "1216",
            s2: "1219",
            selectedNum: 1,
            stock_num: 110
          },
          {
            id: 2259, 
            price: 100, 
            s1: "1216",
            s2: "1220",
            selectedNum: 1,
            stock_num: 110
          },
          {
            id: 2259, 
            price: 100, 
            s1: "1216",
            s2: "1221",
            selectedNum: 1,
            stock_num: 110
          },
          {
            id: 2259, 
            price: 100, 
            s1: "1217",
            s2: "1219",
            selectedNum: 3,
            stock_num: 110
          },
          {
            id: 2259, 
            price: 100, 
            s1: "1217",
            s2: "1220",
            selectedNum: 3,
            stock_num: 110
          },
          {
            id: 2259, 
            price: 100, 
            s1: "1217",
            s2: "1221",
            selectedNum: 3,
            stock_num: 110
          },
          {
            id: 2259, 
            price: 100, 
            s1: "1218",
            s2: "1219",
            selectedNum: 3,
            stock_num: 110
          },
          ,
          {
            id: 2259, 
            price: 100, 
            s1: "1218",
            s2: "1220",
            selectedNum: 3,
            stock_num: 110
          },
          {
            id: 2259, 
            price: 100, 
            s1: "1218",
            s2: "1221",
            selectedNum: 3,
            stock_num: 110
          }
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false // 是否无规格商品
      },
      goods: {
        // 商品标题
        title: "测试商品",
        // 默认商品 sku 缩略图
        picture: "../style/img/gggh.webp"
      }
    };
  },
  methods: {
    onBuyClicked() {
      alert("tttmmm");
    },
    onAddCartClicked() {
      alert("++++");
    },
    skuSelected() {
      alert("++++");
    },
    getSkuData() {
      alert(skuData);
    }
  }
};
</script>


<style lang="less">
.van-sku-body {
  max-height: 293px;
}
</style>
