<template>
  <div class="movie-header" >

    <div class="add">
      <span>定位&nbsp;</span>
      <i class="fa fa-sort-desc" aria-hidden="true"></i>
    </div>
    <div class="ipt">
    <input value="搜影片，影院，影人" style="border-radius:10px">
    </div>
    <div class="icon">
        <i class="fa fa-plus-square-o" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
  export default {


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .movie-header{
    height    : 0.8rem;
    display   : flex;
    position  : fixed;
    top       : 0;
    right     : 0;
    width     : 100%;
    font-size: 0.26rem;
    line-height: 0.8rem;
    text-align: center;
    background-color: #fff;
    z-index: 1;
  }
  .movie-header i{
    position: absolute;
    top: 0.2rem;

  }
  .movie-header .add{
    width: 18%;
    color: #000000;
    padding-left: 0.1rem;
  }
  .movie-header .ipt{
    width: 70%;
  }
  .movie-header input{
    height: 0.4rem;
    background-color: #e8e8e8;
    width: 58%;
    margin: 0 auto;
    padding-left:20%;
    margin-top: 0.24rem;
    font-size: 0.18rem;
    border: none;
  }
  .movie-header span{
    width: 18%;
    color: #000000;
  }
  .movie-header .icon{
    /*text-align: center;*/
    margin-right: 0.2rem;
    float: right;
    width: 12%;
    font-size: 0.4rem;
    color: #000000;
  }

</style>
