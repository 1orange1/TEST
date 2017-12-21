<template>
  <div class='movie-list'>

      <div class="movie-img">
        <img :src="img" alt="">
      </div>
      <div class="movie-title">
        <div class="movie-list-desc">
          <div class="movie-list-title">{{title}}<span></span></br>
          观众评分&nbsp;<span class="avg">{{avg}}</span>
          </div>
          <div>导演：{{desc}}
             <p>
                 主演：{{star}}
             </p>
          </div>
        </div>
        <div class="buy-ticket">
          <img src="../../../static/img/buy-ticket.png" alt="">
        </div>
      </div>

  </div>
</template>
<script>
  export default {
    props: ['title','desc','star','avg','img',"ver",],
    data () {
      return {

      }
    }
  }
</script>
<style scoped>
  .movie-list{
    padding: 0.3rem;
    height       : 1.7rem;
  }
  .movie-img{
    float : left;
    width : 1.2rem;
    height: 1.6rem;
  }
  .movie-img img{
    width : 100%;
    height: 100%;
  }
  .movie-title{
    margin-left: 1.5rem;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    overflow: hidden;
    padding-bottom: 0.3rem;
  }
  .movie-title div{
    position: relative;
    color: #777;
    font-size: 0.2rem;
  }
  .movie-title .movie-list-title{
    font-size: 0.24rem;
    color: #000000;
  }
  .movie-title .avg{
    color: #fea54c;
  }
  .movie-title .movie-list-desc{
    width: 65%;
    float: left;
  }
  .movie-title .buy-ticket{
    width: 0.8rem;
    height: 0.28rem;
    float: right;
    margin-top: 0.4rem;
  }
</style>
