<template>
  <div class='movie'>
      <common-header></common-header>
      <movie-nav></movie-nav>
      <div class="list-box">
        <movie-list v-for="(obj,index) in movieList" :key=index :title="obj.title"
                    :year = "obj.year" :img = "obj.images.large" :avg = "obj.rating.average" :desc = "obj.genres">
        </movie-list>
      </div>
      <common-footer></common-footer>
  </div>
</template>
<script>
import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
import MovieNav from './MovieNav'
import MovieList from './MovieList'
import Axios from 'axios'
    export default {
        data () {
            return {
                movieList:[
//                {
//                    title:'霸王别姬',
//                    year : "1994",
//                    avg  : '9.6',
//                    desc : ["爱情",'同性','悬疑']
//                },
//                {
//                    title: '正义联盟',
//                    year : "2017",
//                    avg  : '0',
//                    desc : ["动作",'科幻']
//                },
//                {
//                    title: '唯创网讯',
//                    year : "2012",
//                    avg  : '10.0',
//                    desc : ["IT",'教育','交友']
//                }
                ]
            }
        },
      mounted(){

        Axios.get(API_PROXY + "https://api.douban.com/v2/movie/top250?count=3&start=0")
          .then((res)=>{
            this.movieList = res.data.subjects;
            console.log(res.data.subjects);
          });

        window.onscroll = function () {
          let clientHeight = document.documentElement.clientHeight;
          let scrollTop = document.documentElement.scrollTop;
          let scrollHeight = document.documentElement.scrollHeight;
          if(clientHeight + scrollTop >= scrollHeight){

          }

        }
      },
        components:{
            CommonHeader,
            CommonFooter,
            MovieNav,
            MovieList
        }
    }
</script>
<style>
.list-box{
  margin-top:2rem;
}
</style>
