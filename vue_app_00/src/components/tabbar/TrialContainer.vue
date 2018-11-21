<template>
  <div class="app-trial">
    <div class="banner">
      <a>
        <img src="http://127.0.0.1:3000/img/banner_nl.jpg" />
      </a>
    </div>
    <div class="pdtBlock leftType" v-for="item in trlist" :key="item.id">
      <img :src="item.trimg_url">
      <div class="textPart">
        <p class="pdtTitle">{{item.etitle}}</p>
        <p class="pdtTitle">{{item.ctitle}}</p>
        <a class="pdtBtn noStore">{{item.trial}}</a>
      </div>
    </div>
    <p class="bottomMenu">
      <font>
        您已选择
        <font id="count">0</font>
        个试用装
      </font>
      <a id="cart">加入购物车</a>
    </p>
    <footer-box></footer-box>
  </div>
</template>
<script>
  import footer from '../sub/footer.vue';
  export default{
    data(){
      return{
        list:[],
        trlist:[]
      }
    },
    methods:{
      getImage(){
        var url="http://127.0.0.1:3000/pimglist";
        this.$http.get(url).then(result=>{
          //console.log(result);
          this.list=result.body;
        })
      },
      getTrImg(){
        var url="http://127.0.0.1:3000/trimglist";
        this.$http.get(url).then(result=>{
          this.trlist=result.body;
        })
      },
    },
    created(){
      this.getImage();
      this.getTrImg();
    },
    components:{
      "footer-box":footer
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
  /*banner大图*/
  .banner {
    position: relative;
    height: auto;
    margin-bottom: 46px;
  }
  .banner img{
    width: 100%;
  }
  /*商品列表*/
  .leftType{
    display: flex;
    justify-content: flex-start;
    padding-left: 1%;
    margin-bottom: 2%;
  }
  .leftType img{
    width: 41%;
    height: 41%;
    margin-right: 7%;
  }
  .pdtBlock .textPart {
    display: inline-block;
    vertical-align: top;
    font-size: 11px;
    padding-top: 20px;
    max-width: 41%;
  }
  .pdtBlock .textPart .pdtTitle{
    font-size: 12px;
    line-height: 20px;
    color: #000;
  }
  .pdtBlock .textPart .pdtBtn{
    width: 106px;
    line-height: 33px;
    background: #040a2b;
    color: #fff;
    font-size: 12px;
    text-align: center;
    display: block;
  }
  /*加入购物车*/
  .app-trial .bottomMenu {
    display: flex;
    justify-content: space-around;
    width: 100%;
    line-height: 45px;
    color: #fff;
    background: #040a2b;
    margin-top: 27px;
    margin-bottom: 25px;
    position: relative;
  }
  .app-trial .bottomMenu font{
    font-size: 12px;
  }
  .app-trial .bottomMenu a {
    width: 28%;
    height: 50%;
    margin: 6px 0 6px 0;
    line-height: 33px;
    background: #ccc;
    color: #fff;
    font-size: 12px;
    text-align: center;
    display: block;
 }
</style>