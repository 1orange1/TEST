<template>
  <div class='lis'>
    <movie-list v-for="(obj,index) in movieList" :key="index" :title="obj.nm" :star="obj.star"
                :avg = "obj.sc" :img = "obj.img" :desc = "obj.dir" :ver="obj.ver"
    ></movie-list>
  </div>
</template>
<script>
  import MovieList from './MovieList'
  import Axios from 'axios'
  export default {
    data () {
      return {
        movieList: [],
      }
    },
    mounted(){
      let _this           = this;
      window.onscroll = function(){
        let scrollTop    = document.documentElement.scrollTop;
        let clientHeight = document.documentElement.clientHeight;
        let htmlHeight   = document.documentElement.scrollHeight;
        if(scrollTop + clientHeight >= htmlHeight){
//            console.log(11111);
          _this.isShow = true;
          _this.loadData();
        }
      };
      //https://api.douban.com/v2/movie/top250?count=10&start=10
      this.loadData();
    },
    methods:{
      loadData(){
        Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&offset="+this.movieList.length+"&limit=10")
          .then((res)=>{
//            console.log(this.movieList.concat(res.data.data.movies));
            this.movieList = this.movieList.concat(res.data.data.movies);
            this.isShow    = false;
          });
      }
    },
    components:{
      MovieList
    }
  }
</script>
<style scoped>
  .lis{
    margin-bottom: 2rem;
  }
</style>
