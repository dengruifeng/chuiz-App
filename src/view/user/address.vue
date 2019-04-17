<template>
  <div class="l-ad">
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>
<script>
export default {
     data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '广东省深圳市宝安区西乡大道 138 号 西部硅谷  6楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '广东省深圳市宝安区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },

  methods: {
    onAdd() {
      
    },

    onEdit(item, index) {
      this.$toast('编辑地址:' + index);
    }
  }
};
</script>
