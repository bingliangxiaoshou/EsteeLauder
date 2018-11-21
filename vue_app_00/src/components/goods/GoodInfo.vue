<template>
    <div class="app-goodsinfo">
        
        <!--1.商品轮播区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner my-swipe">
                    <!--3.调用子组件-->
                    <swiper-box :list="imglist"></swiper-box>
                </div>
            </div>
        </div>
        <!--2.商品购买区域-->
        <div class="mui-card">
            <div class="mui-card-header">{{info.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价: <del>¥{{info.old}}</del>
                        销售价: <span class="now">¥{{info.now}}</span>
                    </p>
                    <p>
                        购买数量:
                        <div class="mui-numbox">
                            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub">-</button>
                            <input id="test" class="mui-input-numbox" type="number" value="1" v-model="count" />
                            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd">+</button>
                        </div>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addCartTo">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <!--1.商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号: {{info.pid}}</p>
                    <p>商品颜色: 山里红</p>
                    <p>商品尺寸: 14.6英寸</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button size="small">图文介绍</mt-button>
                <mt-button size="small">商品评论</mt-button>
            </div>
		</div>
    </div>
</template>
<script>
    //1.引入子组件
    import swiper from '../sub/swiper.vue';
    //import mui from '../../lib/mui/js/mui.js';
    import {Toast} from 'mint-ui';
    export default{
        data(){
            return{
                imglist:[],
                count:1,
                info:{}
            }
        },
        methods:{
            addCartTo(){
                //1:将商品编号和数量保存服务器
                //1.1:获取商品的编号
                var id = this.$route.params.id;
                //1.2:获取商品的数量
                var count = this.count;
                //1.3发送请求
                this.$http.get("addCart?pid="+id+"&count="+count).then(result=>{
                    if(result.body.code == 1){
                        //1.4:更新购物车中商品数量
                        //修改  Vuex共享数据
                        this.$store.commit("increment",count);
                        Toast(result.body.msg);
                    }else{
                        Toast(result.body.msg);
                    }
                })
                //2:更新App.vue 组件购物车的数量
            },
            getGoodInfo(){
                var id = this.$route.params.id;
                this.$http.get("goodsinfo?id="+id).then(result=>{
                    this.info = result.body;
                    console.log(this.info);
                })
            },
            getImage(){
                this.$http.get("imagelist").then(result=>{
                    this.imglist=result.body;
                })
            },
            goodAdd:function(count){
                if (this.count<=98){
                    this.count++;
                }
            },
            goodSub:function(count){
                if (this.count>1){
                    this.count--;
                }
            },
        },
        created(){
            this.getGoodInfo();
            this.getImage();
        },
        components:{
            //2.注册子组件
            "swiper-box":swiper
        }
    }
</script>
<style>
    .app-goodsinfo .my-swipe{
        padding: 0;
    }
    .app-goodsinfo .now{
        color: red;
    }
</style>