<template>
  <div class="app-menu" id="menu">
    <!--<p class="close"></p>-->
    <div class="menu-list">
      <ul class="main-item">
        <li v-for="(items,i) in menulist" :key="items.id">
          <p @click="showToggle(i,items.id)"><a>{{items.title}}</a></p>
          <ul v-if="isSubShow==items.id" class="sub-item">
            <li v-for="item in items.child" v-if="items.child.length>0">
              <p><a>{{item.title}}</a></p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        list:[
          {id:1,img_url:"http://127.0.0.1:3000/img/common-sprite.png"},
        ],
        menulist:[],
        isSubShow: 0,
        id:0
      }
    },
    methods:{
      showToggle:function(i,id){
				console.log(i,id-1)
        this.isSubShow=i+1
			},
      getMenu(){
        var url="http://127.0.0.1:3000/menulist";
        this.$http.get(url).then(result=>{
          this.menulist=result.body;
        })
      },
    },
    created(){
      this.getMenu();
    },
  }
</script>
<style>
  .app-menu p{
    margin: 0;
    padding: 0;
  }
  .app-menu{
    position: fixed;
    top: 0;
    z-index: 99;
  }
  .app-menu .close {
    width: 40px;
    height: 50px;
    background: #050a29;
    position: relative;
  }
  .app-menu .close:before, .app-menu .menu-list p:after {
    background: url(http://127.0.0.1:3000/img/common-sprite.png) no-repeat;
    background-size: 450px;
    content: '';
    display: inline-block;
  }
  .app-menu .close:before {
    width: 17px;
    height: 17px;
    background-position: -224px -78px;
    position: absolute;
    top: 13px;
    left: 10px;
  }
  .app-menu .menu-list p:after{
    width: 15px;
    height: 27px;
    background-position: -255px -75px;
    position: absolute;
    top: 13px;
    right: 25px;
  }
  .app-menu .menu-list {
    width: 250px;
    height: 100%;
    overflow-y: auto;
    background: #050a29;
    margin-top: 50px; 
  }
  .app-menu .sub-item {
    background: #1e2341;
  } 
  .app-menu .main-item li p {
    height: 55px;
    padding-left: 40px;
    border-top: 1px solid #9EAFFF;
    position: relative;
  }
  .app-menu .main-item li p a {
    line-height: 56px;
  }
  .app-menu a {
    color: #9eafff;
    font-size: 15px;
    display: block;
    font-weight: 700;
  }
</style>