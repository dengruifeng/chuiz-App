<template>
  <div>
    <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      :title="title"
      :thumb="imageURL"
      origin-price="10.00"
    >
      <div slot="tags" class="card__tags">
        <van-tag plain type="danger">标签1</van-tag>
        <van-tag plain type="danger">标签2</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini">-</van-button>
        <van-button size="mini">+</van-button>
      </div>
     
    </van-card>
     <van-submit-bar :price="8050" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
        <span slot="tip">
          你的收货地址不支持同城送,
          <span>修改地址</span>
        </span>
      </van-submit-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageURL:
        "//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg",
      title: "2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男",
      checked: true,
      onSubmit:true
    };
  },
  methods:{
     
  }
};
</script>
<style lang="less">
  .van-submit-bar{
      bottom: 53px;
  }
</style>
