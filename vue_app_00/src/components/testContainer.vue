<template>
    <div class="app-testContainer">
        <h1>testContainer.vue</h1>
        <h1>生命周期</h1>
        <h1>当前vue 实例创建后自动触发事件</h1>
        <h1>事件调用一些函数(钩子函数)</h1>
        <input type="button" value="修改" @click="msg='ok'"></input>
        <p id="h3">{{msg}}</p>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                msg:"脚手架"
            }
        },
        methods:{
            show(){
                console.log("执行 show 方法")
            }
        },
        beforeCreate() {
            //this.show();  //报错
            //console.log(this.msg);    //undefined
        },
        created() {
            this.show();
            console.log(this.msg);
        },
        beforeMount() {
            //var h3 = document.getElementById("h3");
            //console.log(h3);    //报错
            //console.log(h3.innerText);//报错
        },
        mounted() {
             var h3 = document.getElementById("h3");
            console.log("4" + h3.innerText);
        },
        beforeUpdate() {
            console.log("内存中DATA变量"+this.msg);
            var h3 = document.getElementById("h3");
            console.log("5.模板中数据: " + h3.innerText)
        },
        updated() {
            console.log("6. 内存的Data: "+this.msg);
            var h3 = document.getElementById("h3");
            console.log("6:"+h3.innerText);
        },
    }
</script>
<style>
    
</style>