<template>
  <div class="app-cart">
    <div class="hot_center">购物车</div>
    <ul class="cartlist_wrapper">
      <li class="orderline" v-for="item in list" :key="item.id">
        <div class="pic">
          <img :src="item.img_url">
        </div>
        <div class="cartlist_right">
          <div class="title">
            <a>{{item.title}}</a>
          </div> 
          <div class="info">
            <span class="price">¥{{item.price}} </span> 
            <span>容量：</span> 
            <span class="quantity">{{item.capacity}}ml</span>
          </div>
          <div class="activity">
            <p class="qty">
              <span>数量：</span>
              <button  @click="goodSub">-</button>
              <input class="select-val" v-model="val"></input>  <!-- type="number" :value="item.content"-->
              <button  @click="goodAdd">+</button>
            </p>
            <p class="cancel_wrapper">
              <a class="cancel">移除</a>
            </p>
          </div>
        </div>
      </li> 
    </ul>
    <hot-box></hot-box>
    <div class="fixed">
      <div class="cart_footer">
        <div class="total-amount font24">
          <span>总计</span>：
          <span class="price">¥1360 </span>&nbsp;
          <span class="font22">( 免邮 )</span>
        </div> 
        <a class="go-home">继续购物</a>
        <a class="btn-checkout">
          <span>去结算</span>(
          <span>5</span>
          <span class="num">件</span>)
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import hot from '../sub/hot.vue';
  export default{
    data(){
      return{
        list:[
          {id:1,img_url:"http://127.0.0.1:3000/img/common-sprite.png"},
        ],
        val:1,
      }
    },
    methods:{
      getCart(){
        var url="http://127.0.0.1:3000/cartlist";
        this.$http.get(url).then(result=>{
          //console.log(result);
          this.list=result.body;
        })
      },
			goodAdd(){
				 if(this.val<=98){
					this.val++;
				 }
			},
			goodSub(){
				 if(this.val>1){
					this.val--;
				 }
			},
    },
    created(){
      this.getCart();
    },
    components:{
        "hot-box":hot
    }
  }
</script>
<style>
  .app-cart .hot_center {
    font-size: 19px;
    text-align: center;
    color: #000;
    margin-top: 12.5px;
    padding: 12.5px 0;
  }
  .app-cart .cartlist_wrapper, .app-cart .trylist_wrapper {
    width: 100%;
    padding: 0 12.5px;
    display: block;
    margin-bottom: 10px;
  }
  .app-cart .cartlist_wrapper li {
    width: 100%;
    display: block;
    padding: 12.5px;
    border-bottom: 1px solid #dddddd;
    display: flex;
    justify-content: space-between;
  }
  .orderline .pic {
    height: 90px;
    width: 90px;
    display: block;
  }
  .orderline img {
    height: 100%;
    border: 1px solid #dedede;
    margin: 0 auto;
    display: block;
    vertical-align: middle;
  }
  .orderline .cartlist_right {
    width: 210px;
    padding-left: 10px;
    height: 100%;
    display: block;
    float: right;
    color: #323232;
    font-size: 12px;
  }
  .orderline .cartlist_right .title {
    font-size: 14px;
    padding: 10px 0;
  }
  .orderline .cartlist_right .title a {
    color: #000;
  }
  .checkout .cartlist_right .info {
    display: block;
    margin: 14px 0;
  }
  .orderline .cartlist_right .activity {
    margin-top: 10px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
  .orderline .cartlist_right .activity button{
    width: 20px;
    height: 20px;
    padding: 0;
  }
  .orderline .cartlist_right .activity input{
    width: 20px;
    height: 20px;
    border: 0;
    text-align: center;
    margin: 0 5px;
  }
  .orderline .cartlist_right .activity a {
    color: #000;
    font-size: 12px;
  }
  .orderline .cartlist_right .activity a:before {
    background: url(http://127.0.0.1:3000/img/common-sprite.png) no-repeat;
    background-size: 450px;
    content: '';
    display: inline-block;
    background-position: -265px -10px;
    width: 10px;
    height: 10px;
    display: block;
    float: left;
    margin: 6.5px 3px;
  }

  /*结算*/
  .app-cart .fixed {
    position: fixed;
    width: 375px;
    background: #fff;
    bottom: 0;
    z-index: 1000;
    height: 45px;
  }
  .app-cart .cart_footer {
    border-top: 1px solid #cfcfcf;
    position: relative;
    padding-left: 12px;
    line-height: 45px;
    display: flex;
    justify-content: space-between;
  }
  .app-cart .total-amount{
    font-size: 12px;
  }
  .app-cart .total-amount .price{
    font-size: 18px;
  }
  .app-cart .go-home {
    position: absolute;
    display: inline-block;
    color: #060a30;
    font-size: 10px;
    right: 125px;
  }
  .app-cart .btn-checkout {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    background: #040a2c;
    font-size: 14px;
    padding: 0 16px;
    color: #fff;
  }
</style>