<template>
  <div class='movie-list'>

      <div class="movie-img">
        <img :src="img" alt="">
      </div>
      <div class="movie-title">
        <span>{{title}}</span>
        <p>
          观众评分&nbsp;{{avg}}<br>
          ({{year}})
             <span>
                 {{desc}}
             </span>
        </p>
      </div>

  </div>
</template>
<script>
  export default {
    props: ['title','desc','year','avg','img'],
    data () {
      return {

      }
    }
  }
</script>
<style scoped>
  .movie-list{
    padding: 0.3rem;
    height       : 1.6rem;
  }
  .movie-img{
    float : left;
    width : 1.1rem;
    height: 1.5rem;
    /*margin-bottom: 0.2rem;*/
  }
  .movie-img img{
    width : 100%;
    height: 100%;
  }
  .movie-title{
    float        : right;
    width        : 4rem;
    /*margin-left  : 0.6rem;*/
    border-bottom: 1px solid #ccc;
    font-size: 14px;
  }
</style>
