<template>
  <div class="fenlei">
    <navhead></navhead>
    <div v-for="(item,index) in fenleiData" :key="index">
      <phonelist :item="item"></phonelist>
      <!-- <phonestyle1></phonestyle1>
      <phonelist></phonelist>
      <phonestyle2></phonestyle2> -->
      <phonelist></phonelist>
      <phonestyle3></phonestyle3>
    </div>
  </div>
</template>

<script>
import Axios from "axios"
import navhead from "../components/navhead"
import phonelist from "../components/phonelist"
import phonestyle1 from '../components/phonestyle1'
import phonestyle2 from '../components/phonestyle2'
import phonestyle3 from '../components/phonestyle3'
export default {
  data() {
    return {
      //分类数据
      fenleiData: []
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      Axios.get(
        "/api/marketing/mobile/category_9ece7f9260dbe582eca6a5cbf26981b2.json"
      ).then(res => {
        let data = res.data;
        this.fenleiData = data; //赋值
        console.log(this.fenleiData);
      });
    }
  },
  components: {
    navhead,
    phonelist,
    phonestyle1,
    phonestyle2,
    phonestyle3
  }
};
</script>

<style lang="less">
.fenlei {
    position: fixed;
    top: 50px;
    bottom: 53px;
    overflow-x:hidden;
}
</style>
