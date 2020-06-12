<template>
    <div>
        <h2>热门</h2>
        <div class="wrapper">
            <ul class="content">
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li>

                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>


                <li>1</li><li>1</li>



                <li>1</li>
                <li>1</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Hot",
        components:{
        },
        data(){
          return{
              scroll:null
          }
        },
        /*methods:{
            contentScroll(position){
                //决定tab-control是否吸顶（position:fixed）
                console.log("y:"+position.y);

            },
        },*/
        mounted() {
            this.scroll = new BScroll(document.querySelector('.wrapper'),{
                probeType:3
            })

            this.scroll.on('scroll',(position) => {
                console.log(position);
            })
        }


    }
</script>

<style scoped>
.wrapper{
    height: 500px;
    background-color: red;
    overflow: hidden;
}
</style>