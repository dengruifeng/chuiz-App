<template>
    <div>
        <div class="fenlei-top">
            <a href=""><i class="iconfont icon-xiazai6"></i></a>
            <h2>分类</h2>
            <a href=""><i class="iconfont icon-shousuo"></i></a>
        </div>
    </div>
</template>

<script>
export default {
    dada(){
        return{

        }
    },
    methods: {
        getdata(){
            
        }
    },
}
</script>

<style lang="less">
.fenlei-top{
    position: fixed;
    top: 0;
    color: #666;
    background: #f2f2f2;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
        .iconfont{
        font-size: 22px;
        padding: 18px;
        }
    }
    h2{
        font-size: 20px;
    }
}

</style>
