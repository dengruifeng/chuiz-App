<template>
  <div class="fenlei">
    <navhead></navhead>
    <phonelist></phonelist>

  </div>
</template>

<script>
import Axios from "axios";
import navhead from "../components/navhead";
import phonelist from "../components/phonelist";
export default {
  // data() {
  //   return {
  //     //分类数据
  //     fenleiData: [],
  //     //获取id的数据
  //     dataid:[],
  //   };
  // },
  // created() {
  //   this.getdata();
  //   this.getdataid();
  // },
  // methods: {
  //   getdata() {
  //     Axios.get(
  //       "/api/marketing/mobile/category_9ece7f9260dbe582eca6a5cbf26981b2.json"
  //     ).then(res => {
  //       let data = res.data;
  //       this.fenleiData = data; //赋值
  //       console.log(this.fenleiData);
  //     });
  //   },
  //   getdataid() {
  //     Axios.get(
  //       "/test/product/skus?ids=100051704,100046411,100052101,100051801,100042101,100035203,100052901,100047701,100047401,100047001,100053001,100023501,100047101,100026701,100042201,100052801,100047302,100037801,100027001,100042803,100035801,100055701,100055801,100036303,100035702,100036401,100036501,100053202,100053302,100054011,100053611,100052531,100040142,100039731,100040907,100025103,100032901,100054501,100054601,100055402,100050301,100050901,100050601,100045803,100040401,100042301,100053101,100032201,100022201,100022901&with_stock=true&with_spu=true"
  //             ,{
  //           headers:{
  //               'content-type': 'application/json,text/plain'
  //           }
  //       }
  //     ).then(res => {
  //       console.log(res.data.data.list);
  //       this.dataid=res.data.data.list
  //     });
  //   }
  // },
  // computed: {
  //   //分类数据处理
  //   computedData() {
  //     let data1 = this.fenleiData;
  //     if (data1) {
  //       data1.forEach(x => {
  //         let data001 = x.image.linkUrl.split("/");
  //         console.log(data001[data001.length - 1]);
  //         //地址商品编号重写
  //         x.image.linkUrl = data001[data001.length - 1];
  //       });
  //       return data1;
  //     }
  //   },
  //   //id分类数据
  //   computedId() {
  //     let data2 = this.dataid
  //      let dataids = []
  //     if (data2) {
  //       data2.forEach(x => {
  //         //id
  //          let data004 = x.id;
  //         //图片地址
  //         let data002 = x.shop_info.ali_image;
  //         //图片说明文字
  //         let data003 = x.shop_info.title;
  //         let obj={
  //            id:data004,
  //           imgUrl:data002,
  //           imgData:data003
  //          }
  //       dataids.push(obj)
  //       });
  //       return dataids;
  //     }
  //   },
  // //分类数据与id分类数据对比
  //   computedIdData(){
  //     let data33 = this.computedData
  //     let data32 = this.computedId
  //     for(let i = 0 ; i < data32.length;i++){    
  //       for (let index = 0; index < data33.length; index++) {
  //         var hhdata = data33[index].layout.dataList;
  //         for (let key = 0; key < hhdata.length; key++) {
  //           //呵呵 删我啊！
  //           if(hhdata[key].sku == data32[i].id){
  //             hhdata[key].TMDdata=data32[i]
  //           }
  //         }
  //       }
  //     }
  //     console.log(data33)
  //   }
  // },
  components: {
    navhead,
    phonelist
  }
}
</script>

<style lang="less">
.fenlei {
  position: fixed;
  width: 100%;
  top: 50px;
  bottom: 53px;
  overflow-x: hidden;
  background-color: white;
}
</style>