<template>
    <div class="app-comment">
        <h1>评论子组件</h1>
        <hr />
        <textarea placeholder="请吐槽! 最多120字" maxlength="120" v-model="msg"></textarea>
        <mt-button size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="item in list" :key="item.id">
                <div class="cmt-info">
                    <div>{{item.user_name}}</div>
                    <span class="layer">第{{item.id}}楼 {{item.ctime | dateFilter}}</span>
                </div>
                <div class="cmt-body">{{item.content}}</div>
            </div>
        </div>
        <mt-button size="large" @click="getMore">加载更多···</mt-button>
    </div>
</template>
<script>
    //单独引入Toast组件
    import {Toast} from 'mint-ui'
    export default{
        data(){
            return{
                msg:"",         //双向绑定用户评论
                pageIndex:0,    //当前页码
                pageSize:5,     //页大小
                list:[]         //分页数据
            }
        },
        created() {
            this.getMore();
        },
        methods:{
            getMore(){
                this.pageIndex++;
                var p = this.pageIndex;
                var s = this.pageSize;
                var id = this.id;
                var url = "getComment?id="+id+"&pno="+p+"&pageSize="+s;
                this.$http.get(url).then(result=>{
                    this.list = this.list.concat(result.body.data);
                })
            },
            postComment(){
                var nid = this.id;          //1.获取新闻编号
                var pmsg = this.msg;        //2.获取评论内容
                if(pmsg.trim().length==0){  //3.判断新闻评论内容不能为空res
                    Toast("评论内容不能为空!");
                    return;
                }
                var url = "http://127.0.0.1:3000/postcomment";//4.发送post请求
                this.$http.post(url,{nid:nid,msg:pmsg}).then(result=>{
                    Toast("发表成功");
                    this.msg = "";
                    this.pageIndex = 0;
                    this.list=[];
                    this.getMore();
                })
                
                
                //5.获取服务器程序返回
                //6.提示用户 "评论成功"
            }
        },
        props:["id"]
    }
</script>
<style>
    .app-comment h1{
        font-size: 18px;
    }
    .app-comment textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .app-comment .cmt-list{
        margin: 5px 0;
    }
    .app-comment .cmt-list .cmt-item{
        border-bottom: 1px solid #aaa;
    }
    .app-comment .cmt-list .cmt-item .cmt-info {

    }
    .app-comment .cmt-list .cmt-item .cmt-info .layer {
        font-size: 13px;
        color: #999;
    }
    .app-comment .cmt-list .cmt-item .cmt-body {
        line-height: 35px;
        text-indent: 2em;
    }

    .app-comment .end{
        margin-top: 10px;
        text-align: center;
    }
</style>