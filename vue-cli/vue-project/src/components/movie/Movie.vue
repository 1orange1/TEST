<template>
  <div class='movie'>
      <common-header title="movie" nav="首页" bgColor ='rgb(33,150,243)'>
        <button>首页</button>
      </common-header>
      <movie-nav></movie-nav>
      <router-view></router-view>
      <div class="loading" v-show="isShow">
        <img src="/static/img/loading.gif" alt="">
      </div>
      <common-footer bgColor ='rgb(33,150,243)'></common-footer>
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
                ],
              isShow   : false
            }
//        },
//      mounted(){
//
//        Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&offset="+this.movieList.length+"&limit=10")
//          .then((res)=>{
//            this.movieList = res.data.data.movies;
//
//          });
    let _this = this;
        window.onscroll = function () {
          let clientHeight = document.documentElement.clientHeight;
          let scrollTop = document.documentElement.scrollTop;
          let scrollHeight = document.documentElement.scrollHeight;
          if(clientHeight + scrollTop >= scrollHeight){
              _this.isShow = true;
              Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&offset="  + _this.movieList.length+'&limit = 10')
                .then((res)=>{
                  _this.movieList = _this.movieList.concat(res.data.data.movies);
                  _this.isShow    = false;
                })
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
