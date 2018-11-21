<template>
  <div class="app-coll">
    <div class="account-info">
      <div class="info">
        <p>欢迎您</p> 
        <p class="nickname">冰凉小手</p> 
        <a class="account-btn">我的账户</a>
      </div>
      <a class="signout">退出登录</a>
    </div>
    <ul class="account-menu">
      <li class="order cur">
        <a>我的订单</a>
      </li> 
      <li class="collection">
        <a>我的收藏夹</a>
      </li> 
      <li class="coupon">
        <a>我的优惠券</a>
      </li>
    </ul>
    <hot-box></hot-box>
    <footer-box></footer-box>
  </div>
</template>
<script>
  import footer from '../sub/footer.vue';
  import hot from '../sub/hot.vue';
  export default{
    data(){
      return{
        list:[
          {id:1,img_url:"http://127.0.0.1:3000/img/account.jpg"},
          {id:2,img_url:"http://127.0.0.1:3000/img/common-sprite.png"},
        ]
      }
    },
    components:{
      "footer-box":footer,
      "hot-box":hot
    }
  }
</script>
<style>
  body,p,a{
    font-family: STHeiti,"Hiragino Sans GB","Microsoft JhengHei","Microsoft YaHei",sans-serif,Tahoma,arial;
  }
  .app-coll .account-info{
    background: url(http://127.0.0.1:3000/img/account.jpg) no-repeat;
    background-size: 375px;
    width: 100%;
    height: 220px;
  }
  .account-info .info {
    margin: 0 auto;
    width: 145px;
    height: 105px;
    text-align: center;
    padding-top: 65px;
  }
  .account-info .info p {
    color: #fff;
    font-size: 11px;
    padding: 2px 0;
    margin: 0;
  }
  .account-info .info p.nickname {
    font-size: 22px;
    word-wrap: break-word;
    max-height: 47.5px;
    overflow: hidden;
  }
  .account-info .info a {
    width: 82px;
    height: 26px;
    line-height: 26px;
    margin-top: 15px;
    display: inline-block;
    background: #040a2b;
    border: 1px solid #a7affa;
    color: #a7affa;
    font-size: 10px;
  }
  .account-info .signout {
    position: absolute;
    right: 10px;
    top: 58px;
    color: #fff;
    font-size: 12px;
  }
  .account-menu {
    display: flex;
    justify-content: center;
    padding-left: 5%; 
    padding-right: 5%; 
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #040a2c;
  }
  .account-menu li{
    width: 33%;
    position: relative;
  }
  .account-menu li a {
    color: #040a2c;
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 70px;
    line-height: 100px;
    font-size: 12px;
  }
  .account-menu li a::before {
    width: 28px;
    height: 24px;
    position: absolute;
    top: 13px;
    left: 42px;
  }
  .account-menu li a::before {
    background: url(http://127.0.0.1:3000/img/common-sprite.png) no-repeat;
    content: '';
    background-size: 450px;
    display: inline-block;
  }
  .account-menu li:first-child a::before{
    background-position: -148px -252px;
  }
  .account-menu li:nth-child(2) a::before{
    background-position: -176px -252px;
  }
  .account-menu li:last-child a::before{
    background-position: -206px -252px;
  }
  .account-menu li.cur {
    border-bottom: 3px solid #040a2c;
  }
</style>