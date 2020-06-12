<template>
    <div class="Home">
        <nav-tab class="home-nav">
            <div slot="center">首页</div>
        </nav-tab>
        <tab-control :title="['甜点','奶茶' ,'红酒']" @tabClick="tabClick" ref="tabControl" class="tab-control" v-show="isTabFixed"></tab-control>

        <scroll class="scroll" ref="scroll"
            :probe-type="3"
                @scroll="contentScroll"
                :pull-up-load="true"
                @pullUpLoad = "loadMore"
        >

        <!--主题-->
            <div class="main_body">
            <!--轮播图-->
            <Slideshow/>
            <home-swiper/>
            <!--今日新品-->
            <HomeNews :cake="cake" @NewsImgLoad="NewsImgLoad"/>
            <tab-control :title="['甜点','奶茶' ,'红酒']" @tabClick="tabClick" ref="tabControl2" class="tab-control"></tab-control>
            <GoodsList :goods="goods" :currentType="currentType"/>
            </div>
        </scroll>
        <back-top @click.native="backClick" v-show="isbackTop"/>
    </div>
</template>

<script>

    import navTab from "../../components/common/navTabBar/navTab";
    import Slideshow from "./childComps/Slideshow";
    import HomeSwiper from "./childComps/HomeSwiper";
    import HomeNews from "./childComps/HomeNews";
    import TabControl from "../../components/content/tabControl/TabControl";

    import GoodsList from "../../components/content/goods/GoodsList";
    import Scroll from "../../components/content/scroll/Scroll";
    import backTop from "../../components/content/backTop/backTop";

    import {getFindAll,getFindType} from "../../network/home";
    import {backTopMixin} from "../../common/mixin";

    export default {
        name: "Home",
        data(){
            return{
                currentType:'cake',
                cake:[],
                goods:[],
                pageIndex:1,
                isTabFixed:false,
                tabOffseTop:0,
                isbackTop:false
            }
        },
        components:{
            navTab,
            Slideshow,
            HomeSwiper,
            HomeNews,
            TabControl,
            GoodsList,
            Scroll,
            backTop
        },
        created() {
            this.getFindAll();
            this.getFindType('cake')

        },
        mixins:[backTopMixin],
        activated() {
            console.log("你好");
            console.log(this.$refs.scroll.scrollTo(0, this.saveY, 0));
        },
        methods:{
            /* 事件监听相关方法 */
            tabClick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'cake'
                        break
                    case 1:
                        this.currentType = 'grang'
                        break
                    case 2:
                        this.currentType = 'wine'
                }
                //保存当前状态
                this.$refs.tabControl2.currentIndex = index
                this.$refs.tabControl.currentIndex = index
                this.getFindType(this.currentType)
            },
            contentScroll(position){
                //1.判断BackTop是否显示
                this.listenShowBackTop(position)
              //决定tab-control是否吸顶（position:fixed）
                /*console.log("aaa:"+position);*/
                this.isTabFixed = -(position.y) > this.tabOffseTop
                console.log(this.tabOffseTop);
            },
            loadMore() {
                console.log("加载更多");
                this.getFindType(this.currentType);
            },
            NewsImgLoad(){
                console.log("bb"+this.$refs.tabControl2.$el.offsetTop);
                this.tabOffseTop = this.$refs.tabControl2.$el.offsetTop

            },
            getFindAll(){
                getFindAll().then(res => {
                    this.cake = res
                })
            },
            getFindType(type){
                const pageIndex = this.pageIndex;
                console.log(pageIndex);
                getFindType(type,pageIndex).then(res =>{
                    console.log(res);
                    console.log(type);
                    this.goods=res
                    this.pageIndex +=1 ;
                   /*this.$refs.scroll.finishPullUp()*/
                })
            }
        }
    }
</script>

<style scoped>

.home-nav{
    background-color: #ffcc3e;
    color: white;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 9;
}

.tab-control{
    margin-top: 2.4rem;
    position: relative;
    z-index: 9;
}
    .main_body{
    }
    .scroll{
        height: 690px;
        overflow: hidden;
        position: absolute;
        top:3rem;
    }
</style>