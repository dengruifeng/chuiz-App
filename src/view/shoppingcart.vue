<template>
  <div class="my-cat">
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="$router.back()"/>

    <van-card
      v-for="item in catData"
      :key="item.goodsId"
      :price="item.selectedSkuComb  &&  item.selectedSkuComb.price/100 * item.selectedNum + '.00'"
      :desc="item.selectedSkuComb  && item.selectedSkuComb.show_name  "
      :title="item.selectedSkuComb && item.selectedSkuComb.title"
      :thumb="item.selectedSkuComb && item.selectedSkuComb.imgUrl"
    >
    <!-- <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      :thumb="imageURL"
      origin-price="10.00"
    > -->
      <div slot="footer">
        <van-button size="mini" @click="catReduce(item)">-</van-button>
        <span> {{ item.selectedNum }} </span>
        <van-button size="mini" @click="catAdd(item)">+</van-button>
      </div>
    </van-card>
    <van-goods-action class="bottom">
      <van-goods-action-mini-btn
        v-if="goodCatNums"
        icon="cart-o"
        text="购物车"
        :info="goodCatNums"
        @click="show = !show"
      />
      <van-goods-action-mini-btn v-else icon="cart-o" text="购物车" @click="show = !show"/>
      <van-goods-action-big-btn primary text="立即支付"/>
    </van-goods-action>
    <van-popup 
      v-model="show"
      position="bottom"
      >
      <ul class="hello">
        <li
          v-for="good in catData"
          :key="good.goodsId">
          <img :src="good.selectedSkuComb.imgUrl" >
          
          {{ good.selectedSkuComb.title }}

          数量为：{{ good.selectedNum }}
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
// import axios from "axios";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      show: false,
      info: {},
    };
  },
  computed: {
    ...mapState( [ 'catData' ] ),
    ...mapGetters(["goodCatNums"])
  },
  methods: {
    ...mapMutations(["catAdd", "catReduce"]),
    // showNum(goodId) {
    //   var data = null;
    //   data = this.$store.state.catData.find(item => item.goodId === goodId);
    //   return data ? data.num : "";
    // }
  },
  created() {
    //console.log(catData);
   // this.getDetailData();
  }
};
</script>
<style lang="less" scoped>
.van-popup--bottom{
 bottom: 50px;
 z-index: 9;
}
.van-goods-action{
  z-index: 99999;
}
 .hello{
   li{
     img{
       width: 60px;
       height: 70px;
     }
   }
 }
</style>
