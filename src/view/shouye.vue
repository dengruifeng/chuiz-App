<template>
  <div id="shouye">
    <div id="wheader">
      <div class="wheader">
        <a href="#" class="iconfont icon-caidan1"></a>
        <a href="#" class="iconfont icon-chuizi"></a>
        <a href="#" class="iconfont icon-shousuo"></a>
      </div>
    </div>
    <div id="main">
      <div id="wbanner">
        <div class="wbanner">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(item,index)  in shouye.banner && shouye.banner.dataList"
                :key="index"
              >
                <img :src="item.src" alt>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="wnav">
          <a href="#">
            <i class="iconfont icon-xinpin1"></i>新品发布
          </a>
          <a href="#">
            <i class="iconfont icon-shouji1"></i>手机
          </a>
          <a href="#">
            <i class="iconfont icon-shouji"></i>畅呼吸系列
          </a>
          <a href="#">
            <i class="iconfont icon-peijianjingpin_huaban"></i>官方配件
          </a>
          <a href="#">
            <i class="iconfont icon-yifupifu"></i>品牌周边
          </a>
        </div>
      </div>
      <div id="whot">
        <div class="whot">
          <h2>热销商品</h2>
          <a class="iconfont icon-youjiantou"></a>
        </div>
        <div class="whot-nav">
          <ul>
            <li v-for="item in rxsp" :key="item.id">
              <div class="wmask">
                <a href="#">
                  <img :src="item.shop_info.ali_image">
                </a>
              </div>
              <div class="item-w">
                <h4>{{item.shop_info.sku_mobile_sub_title}}</h4>
                <P>{{item.shop_info.sku_mobile_title}}</P>
                <span>
                  <i></i>
                  <p>￥ {{item.spu.price}} .00</p>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="layout-image">
        <div class="layout-left">
          <a href="#">
            <span class="top-img">
              <img
                src="https://resource.smartisan.com/resource/479db74bf6f0404649c564afa8be5357.png?x-oss-process=image/resize,w_495/format,webp"
              >
            </span>
          </a>
          <a href="#">
            <span class="main-img">
              <img
                src="https://resource.smartisan.com/resource/16b8f40fbf0a6c4ff36b277663eb76db.png?x-oss-process=image/resize,w_495/format,webp"
              >
            </span>
          </a>
          <a href="#">
            <span class="bot-img">
              <img
                src="https://resource.smartisan.com/resource/6ec05c65c0d08c1b83c346f4b779a8c3.png?x-oss-process=image/resize,w_495/format,webp"
              >
            </span>
          </a>
        </div>
        <div class="layout-right">
          <a href="#" class="clearfix">
            <img
              src="https://resource.smartisan.com/resource/ea18e93a7a26621cf77ec7fb977fccf8.png?x-oss-process=image/resize,w_495/format,webp"
            >
          </a>
        </div>
      </div>
      <div id="phone-w">
        <div class="phone-w">
          <div class="phone-w-top">
            <h2>坚果系列手机及配件</h2>
            <i class="iconfont icon-youjiantou"></i>
          </div>
          <div class="column-w">
            <ul class="column-w-1">
              <li  v-for="item in sj" :key="item.id">
                <div class="column-item">
                  <a href="#">
                    <img
                      :src="item.shop_info.ali_image"
                    >
                  </a>
                  <div class="item-con">
                    <h4>{{item.shop_info.title}}</h4>
                    <p> {{item.shop_info.sub_title}} </p>
                    <span>
                      <i>￥</i>
                      <p> {{item.price}} </p>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="periphery">
        <div class="periphery">
          <div class="periphery-top">
            <h4>品牌周边</h4>
            <i class="iconfont icon-youjiantou"></i>
          </div>
          <div class="periphery-nav">
            <ul>
              <li v-for="item in pp" :key="item.id">
                <a href="#">
                  <img
                    :src="item.shop_info.ali_image"
                  >
                  <div class="per-nav-right">
                    <h5>{{item.shop_info.sku_mobile_title}} </h5>
                    <p>{{item.shop_info.sku_mobile_sub_title}} </p>
                    <div class="attr-con">
                      <span class="box-border">
                        <i> {{item.attr_info.value}} </i>
                      </span>
                      <ul class="color-switch">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                      <span class="per-nav-span">
                        <i>￥</i>
                        <p> {{item.price}}</p>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      //首页数据
      shouye: [],
      rexiao: [],
      rexiao1: [],
      rxsp: [],
      shouji: [],
      sj: [],
      pingpai:[],
      pp:[]
    };
  },
  methods: {
    getshouye() {
      axios
        .get(
          "/api/marketing/mobile/index_0c7224a47d50b15665c10f9c112f916b.json"
        )
        .then(res => {
          let data = res.data;
          this.shouye = data;
          this.rexiao1 = data.floors[0].dataList;
          this.shouji = data.floors[2].dataList;
          this.pingpai = data.floors[6].dataList;
          console.log(this.pingpai);
          console.log(this.shouye);
        });
    },
    getrexiao() {
      axios
        .get(
          "/test/product/skus?ids=100055701,100051701,100046411,100053302,100033802,100040501,100040603,100053911,100046409,100046411,100051701,100051704,100047903,100040605,100046702,100042101,100041701,100045201,100052001,100052101,100052201,100052301,100052401,100050001,100049501,100049401,100049301,100049101,100048901,  100048801,100045201,100045101,100045001,100044901,100052901,100047301,100042803,100042201,100023501,100055301,100052803,100047701,100037801,100047001,100047101,100042601,100049901,100049801,100033802,100040501,100055701,100055801,100036501,100036401,100036301,100036302,100035704,100056001,100034139,100052533,100040140,100054908,100054004,100054803,100053610,100039708,100043313,100043805,100025426,100053302,100053202,100050601,100042301,100054601,100050403,100050301,100022201,100054301,100053101,100055403,100054501,100032201,100022901,100050901,100045803,100050405,100040401,100041601,100032401&with_stock=true&with_spu=true",
          {
            headers: {
              "content-type": "application/json,"
            }
          }
        )
        .then(res => {
          let data = res.data;
          this.rexiao = data.data.list;
          // console.log(this.rexiao);
          this.$nextTick(() => {
            for (let i = 0; i < this.rexiao1.length; i++) {
              for (let k = 0; k < this.rexiao.length; k++) {
                if (this.rexiao1[i] == this.rexiao[k].id) {
                  this.rxsp.push(this.rexiao[k]);
                }
              }
            }
            //console.log(this.rxsp)
          }),
            this.$nextTick(() => {
              for (let i = 0; i < this.shouji.length; i++) {
                for (let k = 0; k < this.rexiao.length; k++) {
                  if (this.shouji[i] == this.rexiao[k].id) {
                    this.sj.push(this.rexiao[k]);
                  }
                }
              }
             // console.log(this.sj)
            });
             this.$nextTick(() => {
              for (let i = 0; i < this.pingpai.length; i++) {
                for (let k = 0; k < this.rexiao.length; k++) {
                  if (this.pingpai[i] == this.rexiao[k].id) {
                    this.pp.push(this.rexiao[k]);
                  }
                }
              }
              console.log(this.pp)
            });
          // setTimeout(() => {
          //    var obj={};
          //        for(let i=0;i<this.rexiao1.length;i++){
          //           for(let k=0;k<this.rexiao.length;k++){
          //             if(this.rexiao1[i]==this.rexiao[k].id){
          //                 obj=this.rexiao[k];
          //                 break;
          //               }
          //               }
          //               }
          //             console.log(obj)
          //             // return obj
          // }, 2000);
        });
    }
    // fn(rexiao1,rexiao){
    //     console.log(rexiao1)
    //  var obj={};
    //     for(let i=0;i<rexiao1.length;i++){
    //       for(let k=0;k<rexiao.length;k++){
    //         if(rexiao1[i]==rexiao[k].id){
    //           obj=rexiao[k];
    //           break;
    //         }
    //       }
    //     }
    //     console.log(obj)
    //     return obj
    // }
  },
  created() {
    this.getshouye();
    this.getrexiao();
  },
  updated() {
    if (!this.swiper) {
      this.swiper = new Swiper(".swiper-container", {
        loop: true, // 无缝连续轮播
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  }
};
</script>
<style scoped>
@import "../style/css/home.css";
@import "../style/css/reset.css";
</style>

