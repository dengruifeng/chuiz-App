<template>
  <div>
    <div v-for="(item,index) in computedIdData" :key="index">
     
      <div class="rui-phone">
        <h2>{{item.name}}</h2>
      </div>
      <div class="rui-ban">
        <!-- :to="{ name: 'detail', params: { id: film.filmId } }" -->
        <router-link :to="{name: 'detail', params:{id:item.image.linkUrl}}">
          <img :src="item.image.src" alt="手机">
        </router-link>
      </div>
      <!-- 样式1 -->
      <div v-if="item.layout.type==='productLayoutCategoryOneOne'" class="rui-sjj">
        <div class="rui-sj" v-for="(item1) in item.layout.dataList" :key="item1.sku">
          <router-link :to="{name: 'detail', params:{id:item1.sku}}">
            <img :src="item1.TMDdata && item1.TMDdata.imgUrl">
            <span>{{item1.TMDdata && item1.TMDdata.imgData}}</span>
            <i class="iconfont icon-youjiantou"></i>
          </router-link>
        </div>
      </div>
      <!-- 样式2 -->
      <div v-else-if="item.layout.type==='productLayoutCategoryOneTwo'">
        <div class="rui-sj2">
          <div v-for="item2 in item.layout.dataList" :key="item2.sku">
            <router-link :to="{name: 'detail', params:{id:item2.sku}}">
              <img :src="item2.TMDdata && item2.TMDdata.imgUrl">
              <span>{{item2.TMDdata && item2.TMDdata.imgData}}</span>
              <i class="iconfont icon-youjiantou"></i>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 样式3 -->
      <div v-else-if="item.layout.type==='productLayoutCategoryOneThree'">
        <div class="rui-style3">
          <div class="rui-img11" v-for="item3 in item.layout.dataList" :key="item3.sku">
            <div>
              <router-link :to="{name: 'detail', params:{id:item3.sku}}">
                <img :src="item3.TMDdata && item3.TMDdata.imgUrl" alt>
                <br>
              </router-link>
            </div>
            <span>{{item3.TMDdata && item3.TMDdata.imgData}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios"
export default {
  data() {
    return {
      //分类数据
      fenleiData: [],
      //获取id的数据
      dataid: []
    };
  },
  created() {
    this.getdata();
    this.getdataid();
  },
  methods: {
    getdata() {
      Axios.get(
        "/api/marketing/mobile/category_9ece7f9260dbe582eca6a5cbf26981b2.json"
      ).then(res => {
        let data = res.data;
        this.fenleiData = data; //赋值
        // console.log(this.fenleiData);
      });
    },
    getdataid() {
      Axios.get(
        "/test/product/skus?ids=100051704,100046411,100052101,100051801,100042101,100035203,100052901,100047701,100047401,100047001,100053001,100023501,100047101,100026701,100042201,100052801,100047302,100037801,100027001,100042803,100035801,100055701,100055801,100036303,100035702,100036401,100036501,100053202,100053302,100054011,100053611,100052531,100040142,100039731,100040907,100025103,100032901,100054501,100054601,100055402,100050301,100050901,100050601,100045803,100040401,100042301,100053101,100032201,100022201,100022901&with_stock=true&with_spu=true",
        {
          headers: {
            "content-type": "application/json,text/plain"
          }
        }
      ).then(res => {
         if(res.data){
           this.dataid = res.data.data.list;
         }else{
           alert("商品已下架")
         }
      });
    }
  },
  computed: {
    //分类数据处理
    computedData() {
      let data1 = this.fenleiData;
      if (data1) {
        data1.forEach(x => {
          let data001 = x.image.linkUrl.split("/");
          // console.log(data001[data001.length - 1]);
          //地址商品编号重写
          x.image.linkUrl = data001[data001.length - 1];
        });
        return data1;
      }
    },
    //id分类数据
    computedId() {
      let data2 = this.dataid;
      let dataids = [];
      if (data2) {
        data2.forEach(x => {
          //id 
          //图片地址
          //图片说明文字
          
          let obj = {
            id: x.id,
            spu_id:x.spu_id,
            imgUrl: x.shop_info.ali_image,
            imgData: x.shop_info.title

          };
          dataids.push(obj);
        });
        return dataids;
      }
    },
    //分类数据与id分类数据对比
    computedIdData() {
      let data33 = this.computedData;
      let data32 = this.computedId;
      for (let i = 0; i < data32.length; i++) {
        for (let index = 0; index < data33.length; index++) {
          var hhdata = data33[index].layout.dataList;
          for (let key = 0; key < hhdata.length; key++) {
            //呵呵 删我啊！
            if (hhdata[key].sku == data32[i].id) {
              hhdata[key].TMDdata = data32[i]
              hhdata[key].sku=data32[i].spu_id
            }
          }
        }
      }
        console.log(data33);
      return data33;
    }
  },
  mounted() {
    // console.log(this.item);
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
.rui-sjj {
  box-shadow: 0 5px 13px rgba(0, 0, 0, 0.1);
  margin-bottom: 6px;
  background: #fff;
  .rui-sj a {
    width: 100%;
    height: 69px;
    display: flex;
    line-height: 69px;
    text-align: left;
    align-items: center;
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
      font-size: 14px;
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
