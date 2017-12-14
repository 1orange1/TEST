<template>
  <div class="music-list">
    <ul class='albums'>

      <li v-for='obj in discoverlist' :key="obj.id">

          <img :src="obj.img" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
  import Axios from 'axios'
  export default {
    data(){
      return {
        discoverlist: []
      }
    },
    mounted(){
      Axios.get('/static/musiclist.json')
        .then((res)=>{
          this.discoverlist = res.data.discoverList;
        })
    },
  }
</script>
<style>
  .albums{
    position: absolute;
    top     : 1rem;
    bottom  : 1rem;
    width   : 100%;
  }
  .albums li{
    width : 50%;
    height: 33.33%;
    float : left;
  }
  .albums li img{
    width : 100%;
    height: 100%;
  }
</style>
