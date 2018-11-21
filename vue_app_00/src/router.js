import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//1.引入自定义组件
import TestContainer from "./components/testContainer.vue"
import ListContainer from "./components/listContainer.vue"
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import NewsListContainer from "./components/news/NewsListContainer.vue"
import NewInfoContainer from "./components/news/NewInfoContainer.vue"
import CartContainer from "./components/tabbar/CartContainer.vue"
import GoodsList from "./components/goods/GoodList.vue"
import GoodsInfo from "./components/goods/GoodInfo.vue"
import PhotoContainer from "./components/photo/PhotoContainer.vue"
import LoginContainer from './components/tabbar/LoginContainer.vue'
import CollContainer from './components/tabbar/CollContainer.vue'
import TrialContainer from './components/tabbar/TrialContainer.vue'
import ExcContainer from './components/tabbar/ExcContainer.vue'

Vue.use(Router)

//2.配置访问自定义组件路径
//  {path访问路径 component:组件名称}
export default new Router({
  routes: [
    {path:'/',redirect:"/home"},
    {path:'/test',component:TestContainer},
    {path:'/list',component:ListContainer},
    {path:'/home',component:HomeContainer},
    {path:'/home/newslist',component:NewsListContainer},
    {path:'/home/newsinfo',component:NewInfoContainer},
    {path:'/cart',component:CartContainer},
    {path:'/home/goodslist',component:GoodsList},
    {path:'/home/goodsinfo/:id',component:GoodsInfo},
    {path:'/home/photo',component:PhotoContainer},
    {path:'/home/login',component:LoginContainer},
    {path:'/home/coll',component:CollContainer},
    {path:'/home/trial',component:TrialContainer},
    {path:'/home/exc',component:ExcContainer},
  ]
})
