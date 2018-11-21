<template>
  <div class="app-exc">
    <div class="hero">
      <img src="http://127.0.0.1:3000/img/banner_hero.jpg"/>
    </div>
    <div class="proArray">
      <span class="show_all" @click="sort('id')">查看全部</span>
      <span class="press_volume">按销量</span>
      <span class="press_price" @click="sort('price')">按价格</span>
      <span>浏览模式</span>
      <span><i class="horizontal cur"></i><i class="vertical"></i></span>
    </div>
    <div class="productList">
      <ul>
        <li v-for="item in exclist" :key="item.id">
          <div class="proImg">
            <a>
              <img :src="item.excimg_url">
            </a>
          </div>
          <div class="proName">
            <a>
              <p class="enlish">{{item.ename}}</p>
            </a>
            <a>
              <p>{{item.cname}}</p>
            </a>
            <p class="priceMl">¥{{item.price}} </p>
            <p class="box">
              <i class="js-collection fl"></i>
              <a class="fr addCart">加入购物车</a>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <!-- <excproduct-box></excproduct-box> -->
    <footer-box></footer-box>
  </div>
</template>
<script>
  import footer from '../sub/footer.vue';
  import excproduct from '../sub/excproduct.vue';
  export default{
    data(){
      return{
        list:[
          {id:1,img_url:"http://127.0.0.1:3000/img/common-sprite.png"},
        ],
        exclist:[],
        sortType: 'id'
      }
    },
    methods:{
      sort(type){
        this.sortType = type;
        this.exclist.sort(this.compare(type));
      },
      getImage(){
        var url="http://127.0.0.1:3000/pimglist";
        this.$http.get(url).then(result=>{
          //console.log(result);
          this.list=result.body;
        })
      },
      getImg(){
        var url="http://127.0.0.1:3000/excimglist";
        this.$http.get(url).then(result=>{
          this.exclist=result.body;
        })
      }
    },
    compare(key){
      return function(a,b){
        var val1 = a[key];
        var val2 = b[key];
        return val2 - val1;
      }
    },
    created(){
      this.getImage();
      this.getImg();
    },
    components:{
      "footer-box":footer,
      "excproduct-box":excproduct
    }
  }
</script>
<style>
  .app-exc p{
    margin: 0;
  }
  /*大图海报!important*/
  .app-exc .hero img{
    width: 100%;
  }
  .proArray {
    padding: 12px 30px;
    border-bottom: 1px solid #bebebe;
    display: flex;
    justify-content: space-between;
  }
  .proArray span {
    font-size: 11px;
    display: inline-block;
    border-right: 1px solid #bebebe;
    color: #040A2B;
    width: 20%;
    text-align: center;
  }
  .proArray span:nth-child(4),.proArray span:nth-child(5){
    border-right: none;
  }
  /*图标*/
  .proArray span:nth-child(5) i{
    margin-top: 2px;
  }
  .proArray span i {
    background: url(http://127.0.0.1:3000/img/common-sprite.png) no-repeat;
    background-size: 450px;
    content: "";
    display: inline-block;
  }
  .proArray span .horizontal.cur {
    opacity: 1;
  }
  .proArray span .horizontal {
    background-position: -413px -4.5px;
  }
  .proArray span .vertical {
    background-position: -434px -4.5px;
    margin-left: 5px; 
  }
  .proArray span .horizontal, .proArray span .vertical {
    width: 14px;
    height: 14px;
    opacity: .4;
  }

  /*商品列表*/
  .productList{
    text-align: center;
    padding: 2.6% 8% 0;
    width: 100%;
  }
  .productList ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }
  .productList ul li{
    width: 46%;
    color: #05092e;
    padding: 15px 0; 
  }
  .productList .proImg img{
    width: 100%;
  }
  .productList .proName p{
    color: #040A2B;
    font-size: 15px;
    height: 32px;
    line-height: 16px;
    margin-top: 7.5px;
    font-size: 15px;
    overflow: hidden;
  }
  .productList .proName .enlish{
    font-size: 13px;
    line-height: 17px;
    margin-top: 15px;
    height: 18px;
  }
  .productList ul li .priceMl {
    margin-top: 6px;
    height: 16px;
    font-weight: 700;
    letter-spacing: 2.5px;
    font-size: 12px;
  }
  .productList .proName .box{
    display: flex;
    justify-content: space-around;
  }
  .js-collection {
    background: url(http://127.0.0.1:3000/img/common-sprite.png) no-repeat;
    background-size: 450px;
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-position: -72px -109px;
    margin-top: 5px;
  }
  .productList ul .addCart {
    letter-spacing: 1.5px;
    text-align: center;
    font-size: 10px;
    width: 106px;
    height: 33px;
    line-height: 33px;
    color: #fff;
    background: #040a2c;
    display: inline-block;
  }
</style>