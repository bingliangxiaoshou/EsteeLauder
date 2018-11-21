<template>
    <div class="app-home">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url"/>
            </mt-swipe-item>
        </mt-swipe>
        <hot-box></hot-box>
        <div class="proIntroduce cf">
            <p>
                <a href="/trial">
                    <img src="http://127.0.0.1:3000/img/hp_xian.jpg">
                </a>
            </p>
            <p class="video">
                <img src="http://127.0.0.1:3000/img/video_bg.jpg">
            </p>
            <div class="video_zoom">
                <div class="layer_bg">
                </div>
                <div class="layer_content">
                    <!-- autoplay controls loop muted poster preload="none" -->
                    <!-- 自动播放    控件   循环  静音   封面 -->
                    <video id="video1" controls width="100%" height="235" >
                        <source src="http://127.0.0.1:3000/video/video1.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
        <ul class="productlist">
            <a href="/products/19467" v-for="item in prolist" :key="item.id">
                <li>
                    <img :src="item.proimg_url"/>
                    <p lg="emails_skin_care_text">护肤</p>
                </li>
            </a>
        </ul>
        <footer-box></footer-box>
    </div>
</template>
<script>
    import footer from '../sub/footer.vue';
    import hot from '../sub/hot.vue';
    export default{
        data(){
            return {
                list:[],
                plist:[],
                prolist:[]
            }
        },
        methods:{
            getImage(){
                var url="http://127.0.0.1:3000/imagelist";
                this.$http.get(url).then(result=>{
                    //console.log(result);
                    this.list=result.body;
                })
            },
            getImg(){
                var url="http://127.0.0.1:3000/imglist";
                this.$http.get(url).then(result=>{
                    this.plist=result.body;
                })
            },
            getProImg(){
                var url="http://127.0.0.1:3000/proimglist";
                this.$http.get(url).then(result=>{
                    this.prolist=result.body;
                })
            },
            jumShop(){
                //编程跳转方式
                //this.$router.push("/home/shop?id=15");
                this.$router.push("/home/shop/19");//这种方式需在router.js的路由上加上/:id
            }
        },
        created(){
            this.getImage();
            this.getImg();
            this.getProImg();
        },
        components:{
            "footer-box":footer,
            "hot-box":hot
        }
    }
</script>
<style>
    body{
        font-family: STHeiti,"Hiragino Sans GB","Microsoft JhengHei","Microsoft YaHei",sans-serif,Tahoma,arial;
        background: #fff;
    }
    p,ul,li{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .app-home{
        /*background-color: #F8F7FC;*/
    }
    /*图片轮播设置高度*/
    .app-home .mint-swipe{
        height: 250px;
    }
    .app-home .mint-swipe img{
        width: 100%;
    }
    .app-home .hot_recommend {
        margin-top: 10px;
        margin-bottom: 35px;
    }
    
    /*大图海报*/
    .app-home .proIntroduce{
        position: relative;
    }
    .app-home .proIntroduce img{
        width: 100%;
    }
    .app-home .video {
        text-align: center;
        padding: 15px 0 15px;
    }
    .app-home .video_zoom {
        width: 100%;
        height: auto;
        position: absolute;
        z-index: 100;
        left: 0;
        top: 273px;
        display: none;
        background: #F8F7FC;
    }
    /*商品列表*/
    .app-home .productlist{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .app-home .productlist a{
        width: 46%;
        text-align: center;
    }.app-home .productlist li img{
        width: 100%;
    }
</style>