<template>
  <div id="photo">
      <common-header title="photo" nav="<" bgColor="rgb(63,81,181)"></common-header>
    <ul>
      <li v-for="(obj,index) in photoData" :key="index">
        <img :src="obj.src" alt="">

      </li>
    </ul>
      <common-footer bgColor="rgb(63,81,181"></common-footer>
  </div>
</template>
<script>
  import CommonHeader from "../common/CommonHeader.vue"
  import CommonFooter from "../common/CommonFooter.vue"
  import Axios from 'axios'
  export default{
      data(){
          return{
              photoData:[]
          }
      },
      mounted(){
        Axios.get('/static/photo-data.json')
        ,then(res=>{
           this.photoData = res.data.photoData;
          });
      },
      components:{
          CommonHeader,
          CommonFooter
      }

  }
</script>
<style>

</style>
