<template>
   <footer>
       <router-link  
       v-for="item in navlist"
       :key="item.href"
       :to='item.href'
       active-class="active"><i :class='["iconfont", item.icon]'></i>{{item.id}}</router-link>
   </footer>
</template>

<script>
export default {
    data(){
        return{
            navlist:[
                {id:'首页',icon:'icon-fonts-shouye',href:'/home'},
                {id:'分类',icon:'icon-fenlei',href:'/fenlei'},
                {id:'购物车',icon:'icon-xiazai3',href:'/shoppingcart'},
                {id:'我的',icon:'icon-wode',href:'/my'}
            ]
        }
    }
}
</script>

<style lang="less">
   footer{
    position: fixed;
    width: 100%;
    height: 52px;
    z-index: 9999;
    bottom: 0;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #ccc;
     a{
        display: flex;
        flex-direction: column;
        align-items: center;
        .iconfont{
            font-size: 24px;
        }
        &.active{
         color: #ff6700;
     }
     }
     
   } 
</style>
