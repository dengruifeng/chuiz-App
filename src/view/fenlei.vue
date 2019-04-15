<template>
    <div class="fenlei">
        <navhead></navhead>
        <div class="rui-phone">
            <h2>手机</h2>
        </div>
        <div class="rui-ban">
            <a href=""><img src="../style/img/rui-ban.webp" alt="手机"></a>
        </div>
        <div class="rui-sj">
            <a href=""></a>
            <img src="../style/img/rui-sj.webp">
            <span>坚果 Pro 2S</span>
            <i class="iconfont icon-jiantou"></i>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
import navhead from '../components/navhead'
export default {
    dada(){
        return{

        }
    },
    created() {
        this.getdata();
    },
    methods: {
        getdata(){
           Axios.get('/api/resource.smartisan.com/marketing/mobile/category_9ece7f9260dbe582eca6a5cbf',
            ).then(res =>{
               console.log(res.data)
           })
        }
    },
components:{
    navhead
}
}
</script>

<style lang="less">
.fenlei{
    .rui-phone{
        height: 40px;
        width: 100%;
        margin-top: 50px;
        line-height: 40px;
        h2{
            font-size: 18px;
            font-weight: 700;
            padding-left: 10px;
        }
    }
    .rui-ban{
        width: 100%;
        height: 132px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid  #ebebeb;
        img{
            display: block;
            width: 387px;
            height: 99px;
        }
    }
    .rui-sj{
        width: 100%;
        height: 69px;
        line-height: 69px;
        text-align: left;
        img{
            display: inline-block;
            width: 41px;
            height: 41px;
            flex: 0 0 auto;
        }
    }
}
</style>
