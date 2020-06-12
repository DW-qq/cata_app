<template>
    <div>
        <!--轮播图-->
        <div class="block" >
            <el-carousel trigger="click" height="11rem">
                <el-carousel-item v-for="item in banners" :key="item.url">
                    <img :src="item.url" style="height: 11rem;width: 106%">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Slideshow",
        data(){
            return{
                banners:[
                    {url:require("../../../assets/img/banner1.png")},
                    {url:require("../../../assets/img/banner2.png")},
                    {url:require("../../../assets/img/banner3.png")}
                ]
            }
        }
    }
</script>

<style scoped>
.block{
    border-radius: 1rem;overflow: hidden;margin: 0.7rem
}
</style>