<template>
    <div class="app-list">
        <h1>用户列表</h1>
        <ul>
            <li v-for="item in list">
                {{item.id}}:{{item.name}}:{{item.age}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                list:[
                    { id:1,name:"dangdang",age:19 },
                    { id:2,name:"yangyang",age:21 },
                    { id:3,name:"yingying",age:23 },
                    { id:4,name:"tingting",age:16 },
                    { id:5,name:"kingking",age:18 },
                    { id:6,name:"fangfang",age:25 },
                    { id:7,name:"lingling",age:19 },
                    { id:8,name:"dingding",age:22 },
                    { id:9,name:"dongdong",age:26 }
                ]
            }
        }
    }
</script>
<style>
    
</style>