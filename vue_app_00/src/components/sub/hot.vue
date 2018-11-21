<template>
  <div class="app-hot">
    <p class="title">热门推荐</p>
    <div class="proList">
        <div class="swiper-content">
            <ul class="swiper-wrapper">
                <li class="swiper-slide-active" v-for="item in plist" :key="item.id">
                    <a href="">
                        <img :src="item.img_url">
                    </a>		                    
                    <div class="box">
                        <p class="engname">
                            <a href="">Advanced Night Repair</a>
                        </p>		                        
                        <p class="name">
                            <a href="">特润修护肌透精华露</a>
                        </p>
                        <p class="spec">¥850 /50ml</p>
                        <a class="fl addCart js-cart-pop" @click="addCartTo">加入购物车</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  export default{
    data(){
      return {
        list:[],
        plist:[],
        prolist:[],
        val:1,
        info:{},
        id:1
      }
    },
    methods:{
      getImage(){
        var url="http://127.0.0.1:3000/imagelist";
        this.$http.get(url).then(result=>{
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
      addCartTo(){
          //1:将商品编号和数量保存服务器
          //1.1:获取商品编号
          var id = this.id;
          //1.2:获取商品数量
          var count = this.val;
          //1.3:发送请求
          this.$http.get("addCart?pid="+id+"&count="+count).then(result=>{
            if(result.body.code == 1){
            this.$store.commit("increment",count);
            Toast(result.body.msg);
            console.log(id);
          }else{
            Toast(result.body.msg);
            console.log(id);
          }
        }); 
      },
      getGoodInfo(){
        //商品列表将商器id传递商品详情
        var id = this.$route.params.id;
          this.$http.get("goodsinfo?id="+id).then(result=>{
          this.info = result.body;
          //console.log(this.info);
        })
      },
    },
    created(){
      this.getImage();
      this.getImg();
      this.getProImg();
    },
  }
</script>
<style>
  .app-hot{
    padding-top: 10px;
    margin-bottom: 35px;
  }
  /*热门推荐--标题*/
  .app-hot .title{
    text-align: center;
    margin: 0;
    padding-bottom: 5px;
    font-size: 15px;
    color: #040A2B;
    font-family: STHeiti,"Hiragino Sans GB","Microsoft JhengHei","Microsoft YaHei",sans-serif,Tahoma,arial;
  }
  /*热门推荐--商品列表*/
  .app-hot .proList {
    margin-left: 8%;
    margin-right: 8%;
    /*margin-top: 0;*/
  }
  .app-hot .swiper-content {
    overflow: hidden
  }
  .app-hot .swiper-wrapper {
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
    height: 100%;
    /*z-index: 1;*/
    box-sizing: content-box;
    display: flex;
    justify-content: space-between;
  }
  .app-hot .swiper-slide-active{ 
    /*float: left;*/
    font-size: 12px;
    overflow: hidden;
    width: 30%;
  }
  .app-hot .swiper-slide-active img{
    width: 100%;
  }
  .app-hot .engname{
    height: 16px;
    overflow: hidden;
    margin: 0;
  }
  .app-hot .engname a{
    font-size: 9px;
    color: #040A2B;
  }
  .app-hot .name{
    text-align: center;
    margin: 0;
  }
  .app-hot .name a {
    font-size: 11px;
    color: #040A2B;
  }
  .app-hot .spec{
    font-weight: 700;
    text-align: center;
    font-size: 9px;
    line-height: 12px;
    color: #040A2B;
    margin: 0;
  }
  .app-hot .addCart{
    display: inline-block;
    font-size: 12px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: #040a2c;
    color: #fff;
    text-align: center;
    margin: 10px 0;
  }

</style>