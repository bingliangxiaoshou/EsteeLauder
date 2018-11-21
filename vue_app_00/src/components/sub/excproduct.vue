<template>
  <div class="app-excproduct">
    <ul>
      <li v-for="item in exclist" :key="item.id">
        <p class="proImg">
          <a>
            <img :src="item.excimg_url">
        </a>
        </p>
        <div class="proName">
          <a>
            <p class="enlish">Nutritious Super-Pomegranate set</p>
          </a>
          <a>
            <p>红石榴三步曲入门体验装</p>
          </a>
          <p class="priceMl">¥220 </p>
          <p class="box cf">
            <i class="js-collection fl"></i>
            <a class="fr addCart">加入购物车</a>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        exclist:[]
      }
    },
    methods:{
      getImg(){
        var url="http://127.0.0.1:3000/excimglist";
        this.$http.get(url).then(result=>{
          this.exclist=result.body;
        })
      },
      created(){
        this.getImg();
      },
    }
  }
</script>
<style>
  
</style>