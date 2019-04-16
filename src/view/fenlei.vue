<template>
  <div class="fenlei">
    <navhead></navhead>
    <div v-for="(item,index) in computedData" :key="index">
      <phonelist :item="item"></phonelist>
     
    </div>
  </div>
</template>

<script>
import Axios from "axios"
import navhead from "../components/navhead"
import phonelist from "../components/phonelist"
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
  computed:{
      //数据处理
      computedData(){
        let data1=this.fenleiData
        if(data1){
          data1.forEach(x=>{
            let data001=x.image.linkUrl.split('/')
            console.log(data001[data001.length-1])
            //地址商品编号重写
            x.image.linkUrl=data001[data001.length-1]
          })
        return data1
        }
        
      }
  },
  components: {
    navhead,
    phonelist,
  }
};
</script>

<style lang="less">
.fenlei {
    position: fixed;
    width: 100%;
    top: 50px;
    bottom: 53px;
    overflow-x:hidden;
    background-color: white;
}
</style>