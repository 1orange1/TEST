<template>
  <div id="music-list">
    <ul class="albums">
      <li v-for='obj in musicList' :key="obj.id" :style="{background:'url('+obj.bg+') no-repeat'}">

      </li>
    </ul>
  </div>
</template>
<script>

  import Axios from 'axios'
  export default{
    data(){
      return{
        musicList:[]
      }
    },
    mounted(){
      Axios.get('/static/musiclist.json')
        .then((res)=>{
        this.musicList = res.data.albums;
    })
    }


  }
</script>
<style>
  .albums{
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    width: 100%;
  }
  .albums li{
    width: 50%;
    height: 33.33%;
    float: left;
    -webkit-background-size:;
    background-size:contain;
  }
</style>
