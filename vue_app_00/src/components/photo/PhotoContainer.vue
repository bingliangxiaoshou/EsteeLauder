<template>
  <div class="app-photo">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <ul class="photo-list">
            <li v-for="item in list">
              <img v-lazy="item.img_url" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
          list:[]
      }
    },
    methods:{
        getImage(){
            this.$http.get("imagelist").then(result=>{
                this.list = result.body;
            })
        }
    },
    created(){
        this.getImage();
    }
  }
</script>
<style>
  .photo-list{
    list-style: none;
    margin: 0;
    padding: 0;
    background: #000;
  }
  .app-photo li img{
    width: 100%;
  }
  .photo-list li img[lazy=loading]{
    width: 100%;
    height: 100px;
    margin: auto;
  }
</style>