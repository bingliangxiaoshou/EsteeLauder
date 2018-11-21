<template>
 <div class="app-container">
    <!--1:顶部导航栏-->
    <header>
        <div class="header-content">
            <p class="icon-category" @click="getMenu"></p>
            <a href="/customer-care">
                <p class="icon-search"></p>
            </a>
            <router-link to="/" class="logo">
                <img src="http://127.0.0.1:3000/img/logo.png" />
            </router-link>
            <p class="icon-advisory"></p>
            <p class="icon-minicart">
                <router-link to="Cart">
                    <span class="radius12 js-cart-num">{{$store.getters.optCount}}</span>
                </router-link>    
            </p>
        </div>
    </header>
    <!--1.1:菜单栏-->
    <menu-box id="menu" :class="style"></menu-box>
    <!--2:容器显示不同的组件-->
    <router-view></router-view>
    <!--3:底部导航栏-->
    <nav class="mui-bar mui-bar-tab">
        <router-link to="/home" class="mui-tab-item mui-active">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link to="/home/exc" class="mui-tab-item">
            <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
            <span class="mui-tab-label">独享套装</span>
        </router-link>
        <router-link to="/home/trial" class="mui-tab-item">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            </span>
            <span class="mui-tab-label">付款试用</span>
        </router-link>
        <router-link to="/home/coll" class="mui-tab-item" >
            <span class="mui-icon mui-icon-extra mui-icon-extra-heart-filled">
                <!--<span class="mui-badge">{{$store.getters.optCount}}</span>-->
            </span>
            <span class="mui-tab-label">我的收藏</span>
        </router-link>
        <router-link to="/home/login" class="mui-tab-item" >
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">账户</span>
        </router-link>
    </nav>
 </div>
</template>
<script>
    import menu from './components/sub/menu.vue';
    export default{
        data(){
            return{
                list:[
                    {id:1,img_url:"http://127.0.0.1:3000/img/common-sprite.png"},
                    {id:2,img_url:"http://127.0.0.1:3000/img/logo.png"}
                ],
                style:"none"
            }
        },
        methods:{
            getMenu(){
                if(this.style=="none")
                    this.style=""
                else
                    this.style="none"
            }
        },
        created() {

        },
        components:{
            "menu-box":menu
        }
    }
</script>
<style>
    .none{
        display:none;
    }
    .app-container{
        padding-top:50px;
        padding-bottom:50px;
        overflow-x:hidden;
    }

    .app-container header{
        /**/
        width: 100%;
        height: 50px;
        position: fixed;
        top: 0;
        background: #fff;
        border: 1px solid #cfcfcf;
        z-index: 100
    }
    .app-container .header-content{
        display: flex;
        justify-content: space-around;
    }
    .app-container .header-content p{
        margin: 0;
        background: url(http://127.0.0.1:3000/img/common-sprite.png) no-repeat;
        background-size: 450px;
        display: inline-block;
    }
    .app-container .header-content .icon-category {  
        width: 21px;
        height: 21px;
        background-position: -309px -37px;
        position: relative;
        top: 15px;
        left: 0px;
    }
    .app-container .header-content .icon-search{
        width: 21px;
        height: 21px;
        background-position: -334px -37px;
        position: relative;
        top: 15px;
        left: 0px;
    }
    .app-container .logo{
        width: 45%;
        height: 50px;
        line-height: 50px;
    }
    .app-container .logo img{
        margin-top: 15px;
        width: 100%;
    }
    .app-container .header-content .icon-advisory{
        width: 21px;
        height: 21px;
        background-position: -360px -37px;
        position: relative;
        top: 15px;
        left: -10px;
    }
    .app-container .header-content .icon-minicart{
        width: 21px;
        height: 21px;
        background-position: -385px -37px;
        position: relative;
        top: 15px;
        left: -10px;
        position: relative;
    }
    .app-container .header-content .icon-minicart span{
        background: #040A2B;
        border-radius: 50%;
        width: 50%;
        height: 70%;
        line-height: 120%;
        font-size: 12px;
        color: #fff;
        text-align: center;
        position: absolute;
        top: -15%;
        right: -15%;
    }

    .mui-bar-tab .mui-tab-item-tao {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item-tao .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
        font-size:11px;
        display:block;
        overflow:hidden;
        text-overflow:ellipsis;

    }
</style>
