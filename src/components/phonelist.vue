<template>
    <div v-if="item ? item=item : item=item1 ">
        <div class="rui-phone">
            <h2>{{item.name}}</h2>
        </div>
        <div class="rui-ban">
            <router-link :to="item.image.linkUrl"><img :src="item.image.src" alt="手机"></router-link>
            <!-- <a href=""><img src="../style/img/rui-ban.webp" alt="手机"></a> -->
        </div>
    </div>
</template>
<script>
 
export default {
    props:{
        item:{
            type:Object
        },
        item1:{
            name:'',
            image:{linkUrl:'',
            src:""
            }
        },
    }
}
</script>

<style lang="less">
.rui-phone{
        height: 40px;
        width: 100%;
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
</style>
