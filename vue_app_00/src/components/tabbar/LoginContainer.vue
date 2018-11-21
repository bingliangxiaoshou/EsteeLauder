<template>
  <div class="app-login">
    <p class="title">会员登录</p>
    <!--基本登录-->
    <div class="info">
      <p class="account">
        <input type="text" v-model="unameval" placeholder="手机号码" maxlength="80">
      </p>
      <p class="password">
        <input type="password" v-model="upwdval" placeholder="输入密码，区分大小写，6-12位字符" maxlength="12">
      </p>
      <a class="login-btn" @click="btnSubmit">登录</a>
    </div>
    <!--其他信息-->
    <div class="other">
      <a class="forget-password fl">忘记密码</a>
      <a class="registered fr">新用户注册</a>
    </div>
    <!--第三方登录-->
    <div class="social">
      <p class="sub-title">第三方登录</p>
      <div class="sub-info">
        <a class="qq-btn" data-type="qq" style="left: 175px;">qq</a>
        <a class="wechat-btn" data-type="wechat" style="display: none;">wechat</a>
        <a class="weibo-btn" id="weibo" data-type="weibo" style="left: 461px;">weibo</a>
      </div>
    </div>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  export default{
    data(){
      return{
        list:[
          {id:1,img_url:"http://127.0.0.1:3000/img/common-sprite.png"},
          {id:2,img_url:"http://127.0.0.1:3000/img/logo.png"}
        ],
        unameval:"",
        upwdval:""
      }
    },
    methods:{
      btnSubmit(){
        var u = this.unameval;
        var p = this.upwdval;
        this.$http.get("login?uname="+u+"&upwd="+p).then(result=>{
          if(result.body.code == 1){
            Toast(result.body.msg);
            this.$router.push("/");
          }else{
            Toast(result.body.msg);
          }
        })
      }
    }
  }
</script>
<style>
  body{
    font-family: STHeiti,"Hiragino Sans GB","Microsoft JhengHei","Microsoft YaHei",sans-serif,Tahoma,arial;
    background: #fff !important;
  }
  p,ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .app-login .title {
    color: #040A2C;
    font-size: 19px;
    text-align: center;
    margin: 30px 0 25px 0;
    width: 100%;
  }
  .app-login .info {
    padding: 0 5%;
  }
  .app-login .info p {
    margin-bottom: 10px;
  }
  .app-login .info input {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 2px 14px;
    border: 1px solid #040a2c;
    font-size: 12px;
    margin: 0;
  }
  .app-login .info a {
    display: block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    background-color: #040a2c;
    text-align: center;
    color: #fff;
    font-size: 15px;
    margin: 7.5px 0 7.5px 0;
  }
  .app-login .other {
    padding: 10px 20px 20px 20px;
    display: flex;
    justify-content: space-between;
  }
  .app-login .other a {
    text-align: center;
    color: #040a2b;
    font-size: 13px;
    display: inline-block;
  }
  .app-login .sub-title {
    color: #040a2b;
    font-size: 12px;
    text-align: center;
    padding: 0 10px;
    position: relative;
    width: 100%;
    margin: 0;
  }
  .app-login .sub-title:after{
    top: 50%;
    left: 0%;
  }
  .app-login .sub-title:before{
    top: 50%;
    right: 0;
  }
  .app-login .sub-title:after, .app-login .sub-title:before {
    content: "";
    width: 143px;
    height: 1px;
    background-color: #00000c;
    position: absolute;
  }
  .app-login .sub-info {
    padding-top: 5%;
    display: flex;
    justify-content: space-around;
  }
  .app-login .sub-info a.qq-btn {
    background-position: 0px -144px;
  }
  .app-login .sub-info a.weibo-btn {
    background-position: -134px -144px;
  }
  .app-login .sub-info a, .registration .base-input p.birthday:after {
    background: url(http://127.0.0.1:3000/img/common-sprite.png) no-repeat;
    background-size: 450px;
    content: '';
    display: inline-block;
  }
  .app-login .sub-info a {
    text-indent: -9999px;
    width: 58px;
    height: 58px;
  }
</style>