<template>
    <div class="app-goodslist">
        <div v-for="item in list" :key="item.id" class="goods-item">
            <img @click="getDetail(item.id)" src="http://127.0.0.1:3000/img/banner1.png" />
            <h3 class="title">{{item.title}}</h3>
            <div class="info">
                <p class="price">
                    <span class="now">¥{{item.now}}</span>
                    <span class="old">¥{{item.old}}</span>
                </p>
                <p>
                    <span>热卖中···</span>
                    <span>仅剩 {{item.q}}件</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data (){
            return{
                list:[
                    {id:1,title:"华为",now:"3699.99",old:"9999",q:2},
                    {id:2,title:"小米",now:"1999.99",old:"9999",q:1},
                    {id:3,title:"苹果",now:"5999.99",old:"9999",q:2}
                ]
            }
        },
        methods:{
            getDetail(id){
                //console.log(id);
                this.$router.push("/home/goodsinfo/"+id);
            }
        }
    }
</script>
<style>
    .app-goodslist{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 2%;
    }
    .app-goodslist .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;  
    }
    .app-goodslist .goods-item img{
        width: 100%;
    }
    .app-goodslist .goods-item .now{
        color: red;
        font-weight: bold;
        font-size: 16px;
    }
    .app-goodslist .goods-item .old{
        font-size: 12px;
        text-decoration: line-through;
        margin-left:10px;
    } 
</style>