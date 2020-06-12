<template>
    <div>
        <!--导航-->
        <div class="nav-bar">
            <div><img src="../../../assets/home/home1.png"/><p>品好茶</p></div>
            <div><img src="../../../assets/home/home2.png"/><p>寻好物</p></div>
            <div><img src="../../../assets/home/home3.png"/><p>挑好酒</p></div>
            <div><img src="../../../assets/home/home4.png"/><p>尝美味</p></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",

    }
</script>

<style scoped>
    .nav-bar{
        display: flex;
        line-height: 1rem;
        align-content: center;
        text-align: center;
        margin: 1.5rem 0.5rem;
    }
    .nav-bar img{
        vertical-align: middle;
        width: 2rem;
        height: 2rem;
    }
    .nav-bar div{
        flex: 1;
    }
    .nav-bar div p{
        font-size: 0.7rem;
    }
</style>