<template>
    <div class="goods">
        <div class="bd"  v-if="currentType=='cake'">
                    <div class="cake_info" v-for="item in goods" :key="item.cakeId">
                        <a href="">
                            <img :src="require('assets/img/cate/'+item.cakePhoto)" v-if="item.cakePhoto != undefined">
                            <p class="cate_title">{{item.cakeName}}</p> <span class="cate_count" v-if="item.cakesells != undefined">已销售:{{item.cakesells[0].csellNum}}</span><br>
                            <span class="cate_price">{{item.cakePrice}}元/份</span>
                            <input value="立即购买" type="button" class="btn">
                        </a>
                    </div>
        </div>
        <div class="bd"  v-else-if="currentType=='grang'">
                    <div class="cake_info" v-for="item in goods" :key="item.grangId">
                        <a href="">
                            <img :src="require('assets/img/cate/'+item.grangPhoto)" v-if="item.grangPhoto != undefined">
                            <p class="cate_title">{{item.grangName}}</p> <span class="cate_count" v-if="item.grangsells!= undefined">已销售：{{item.grangsells[0].gsellNum}}</span><br>
                            <span class="cate_price">{{item.grangPrice}}元/份</span>
                            <input value="立即购买" type="button" class="btn">
                        </a>
                    </div>
        </div>

        <div class="bd"  v-else-if="currentType=='wine'">
                    <div class="cake_info" v-for="item in goods" :key="item.wineId">
                        <a href="">
                            <img :src="require('assets/img/cate/'+item.winePhoto)" v-if="item.winePhoto != undefined">
                            <p class="cate_title">{{item.wineName}}</p> <span class="cate_count" v-if="item.wines!= undefined">已销售：{{item.wines[0].wsellNum}}</span><br>
                            <span class="cate_price">{{item.winePrice}}元/份</span>
                            <input value="立即购买" type="button" class="btn">
                        </a>
                    </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsList",
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            },
            currentType:{
                type: String,
                default() {
                    return 'cake'
                }
            }
        }
    }
</script>

<style scoped>

    .bd{

        height: 700px;
    }
    .cake_info{
        background-color: #fcfbfb;border-radius: 0.7rem;
        width: 12rem;
        height: 12.5rem;
        float: left;
        box-shadow: 0px -3px 1px rgba(100,100,100,0.05);
        margin-left: 0.6rem;
      margin-bottom: 1rem;

    }
    .bd .cake_info img{
        width: 100%;
        height:8rem;
        border-radius: 0.7rem;
    }
    .bd .cake_info .btn {
        border: 0;
        font-size: 0.8rem;
        color: white;
        background-color: #fdce41;
        border-radius: 0.4rem;
        width: 4rem;
        height: 2rem;
        outline: none;
        margin-left: 3.5rem;
    }
    .bd .cake_info .cate_title{
        color: black;
        font-size: 0.8rem;
        overflow: hidden;
        width: 5rem;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .bd .cake_info .cate_price{
        font-size: 1rem;
        color: red;
        width: 4rem;
    }
    .bd .cake_info .cate_count{
        color: #d2d2d5;
        margin-left: 2rem;
        font-size: 0.8rem;
        position: relative;
        bottom: 0rem;
        top: -1rem;
        left: 4.6rem;
    }

</style>