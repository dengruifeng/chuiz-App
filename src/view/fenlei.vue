<template>
    <div class="fenlei">
        <navhead></navhead>
        <div class="fenlei-list">
            <ul>
              <li>新品</li>
              <li>手机</li>
              <li>总裁</li>
            </ul>
        </div>
        <div class="shopping-list">
            <div>
                <div>
                    <a href="">
                        <img src="../style/img/kk500x200.webp" alt="" srcset="">
                    </a>
                </div>
                <div>
                   <span>手机</span>
                </div>
                <div>
                    <div>
                        <img src="../style/img/m9.png" alt="" srcset="">
                        小米9
                    </div>
                    <div></div>
                    <div></div>
                    
                </div>
            </div>

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
    position: relative;
    margin: 0 auto;
    .fenlei-list{
        position: fixed;
        top: 50px;
        bottom: 52px;
        left: 0;
        width: 85px;
        border-right: 1px solid #efefef;
        overflow: hidden;
        ul{
            z-index: 90;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            padding: 12px 0 12px 0;
            background: #fefefe;
            overflow-y: auto;
            width: 100%;
            li{
                font-size: 14px;
                width: 63px;
                height: 38px;
                line-height: 38px;
                overflow: hidden;
                text-align: center;
                margin: 0 auto;
            }
        }
    }
    .shopping-list{
        padding-left: 102px;
        padding-right: 17px;
        padding-top: 50px;
        margin: 0 auto;
        div:nth-child(1){
            a{
                display: block;
                width: 280px;
                height: 110px;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
        div:nth-child(2){
            width: 280px;
            height: 71px;
            line-height: 71px;
            background: #fff;
            font-size: 14px;
            text-align: center;
            margin-top: 2px;
            overflow: hidden;
            
            span{
                position: relative;
            }
            span:before{
                content: "";
                position: absolute;
                top: 50%;
                left: 0;
                width: 24px;
                border-top: 1px solid #e0e0e0;
                transform: translate3d(-150%,-50%,0);
                -webkit-transform: translate3d(-150%,-50%,0);
            }
            span:after{
                content: "";
                left: auto;
                right: 0;
                position: absolute;
                top: 50%;
                width: 24px;
                border-top: 1px solid #e0e0e0;
                transform: translate3d(150%,-50%,0);
                -webkit-transform: translate3d(150%,-50%,0);
            }
        }
        div:nth-child(3){
             width: 280px;
             display: flex;
             justify-content: space-between;
             text-align: center;
             flex-direction: column;
             div{
                 width: 25%;
                img{
                    display: block;
                    width: 56px;
                    margin: 0 auto;
                    margin-bottom: 15px;
                }
             }
        }
    }
}
</style>
