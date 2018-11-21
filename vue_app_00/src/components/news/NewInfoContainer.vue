<template>
    <div class="newinfo">
        <h3>{{info.title}}</h3>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;{{info.content}}</div>
        <!--保存评论子组件 3.调用子组件-->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
    //1.引入子组件
    import comment from '../sub/comment.vue'
    export default{
        data(){
            return{
                info:{},
                id:this.$route.query.id
            }
        },
        created() {
            this.getNewsInfo();
        },
        methods:{
            getNewsInfo(){
                var url="http://127.0.0.1:3000/newsinfo";
                this.$http.get(url).then(result=>{
                   this.info = result.body;
                })
            }
        },
        components:{//2.注册子组件
            "comment-box":comment
        }
    }
</script>
<style>
    .newinfo>h3,.newinfo>div{
        padding: 2%;
    }
</style>