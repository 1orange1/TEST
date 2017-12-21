<template>
  <div class="discover">
    <ul class='discover-list'>

      <li v-for='obj in discoverlist' :key="obj.id">
          <p class="discover-list-title">
            {{obj.title}}<br>
            <span class="d-read">阅读&nbsp;{{obj.read}}</span>
          </p>
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
      Axios.get('/static/discoverlist.json')
        .then((res)=>{
          this.discoverlist = res.data.discoverList;
//          console.log(res.data.discoverList);
        })
    },
  }
</script>
<style>
  .discover-list{
    position: absolute;
    top     : 5.2rem;
    bottom  : 1rem;
    width   : 100%;

  }
  .discover-list li{
    width : 90%;
    height: 1.5rem;
    margin: 0 auto;
    display: block;
    padding: 0.4rem 0;
    border-bottom:#ededed 1px solid;
  }
  .discover-list li .discover-list-title{
    font-size: 0.25rem;
    color: #333333;
    width: 62%;
    float: left;
    margin-right: 5%;
  }
  .discover-list li .d-read{
    font-size: 0.22rem;
    color: #cecece;
  }
  .discover-list li img{
    width : 33%;
  }
</style>
