<template>
  <div class="app-footer">
    <div class="icon-content">
      <ul class="footerIcon">
        <li v-for="item in plist" :key="item.id">
          <img :src="item.img_url"/>
          <p><span>{{item.title}}</span></p>
        </li>
      </ul>
    </div>
    <div class="map">
      <a href="/customer-care">美丽咨询</a>
      <a href="/contact-us">联系我们</a>
      <a href="/store-finder">专柜导航</a>
      <a href="/customer/customer-service/faqs"> 常见问题</a>
      <a href="http://t.sina.com.cn/esteelauder">官方微博</a>
      <a href="/customer/we-chat">官方微信</a>
      <a href="/customer/privacy-policy">隐私条款</a>
      <a href="/customer/terms-and-conditions">条件条款</a>
    </div>
    <div class="phone">
      <a>
        <span>400-820-7000</span> (<em>点击拨出</em>)
      </a>
    </div>
    <div class="copyright">
      <p>©雅诗兰黛（上海）商贸有限公司版权所有</p>
      <p>沪ICP备08005263号</p>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        plist:[
          {id:1,title:"官方正品保障",img_url:"http://127.0.0.1:3000/img/icon/icon_gf.png"},
          {id:2,title:"7天无理由退换",img_url:"http://127.0.0.1:3000/img/icon/icon_qt.png"},
          {id:3,title:"安全支付方式",img_url:"http://127.0.0.1:3000/img/icon/icon_aq.png"},
          {id:4,title:"顺丰直达",img_url:"http://127.0.0.1:3000/img/icon/icon_sf.png"},
        ],
        hlist:[
          {id:1,img_url:"http://127.0.0.1:3000/img/icon/phone.png"}
        ]
      }
    },
    /*methods:{
      getIcon(){
          var url="http://127.0.0.1:3000/pimglist";
          this.$http.get(url).then(result=>{
              this.plist=result.body;
          })
      },
      created(){
          this.getIcon();
      }
    },*/
  }
</script>
<style>
  .app-footer{
    background: #040A2C;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  /*图标*/
  .app-footer .icon-content{
    height: 100%;
  }
  .app-footer .footerIcon{
    display: flex;
    justify-content: space-around;
  }
  .app-footer .icon-content .footerIcon li{
    text-align: center;
    width: 25%;
  }
  .app-footer .icon-content .footerIcon li p{
    color: #fff;
  }
  .app-footer .icon-content .footerIcon li>span{
    display: inline-block;
    height: 100px;
  }
  .app-footer .icon-content .footerIcon li img{
    width: 50%;
  }
  .app-footer .map {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-top: 1px solid #b4b6c2;
    padding-top: 15px;
    width: 100%;
  }
  .app-footer .map a {
    width: 25%;
    text-align: center;
    color: #fff;
    font-size: 9px;
    display: inline-block;
    margin-bottom: 7.5px;
  }
  .app-footer .phone {
    width: 88%;
    margin: 8px auto 0;
    border: 1px solid #a9affd;
    text-align: center;
    line-height: 25px;
  }
  .app-footer .phone a{
    color: #a9affb;
    font-size: 12px;
  }
  .app-footer .copyright{
    text-align: center;
    margin-top: 15px;
  }
  .app-footer .copyright p {
    color: #fff;
    font-size: 9px;
    margin-bottom: 0px;
  }
</style>
