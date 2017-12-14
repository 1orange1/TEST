<template>
  <div class="cinema-header" >
    <div class="add">
      <span>定位&nbsp;</span>
      <i class="fa fa-sort-desc" aria-hidden="true"></i>
    </div>
    <div class="cinema">影院</div>
    <div class="icon">
      <i class="fa fa-map-marker one" aria-hidden="true"></i>
      <i class="fa fa-search-minus two" aria-hidden="true"></i>
    </div>
  </div>
</template>
<script>

</script>
<style>
  .cinema-header{
    height    : 0.8rem;
    display   : flex;
    position  : fixed;
    top       : 0;
    width     : 100%;
    font-size: 0.26rem;
    line-height: 0.8rem;
    text-align: center;
    background-color: #ffffff;
    z-index: 1;
    border-bottom: 0.4px #e8e8e8 solid;
  }
  .cinema-header i{
    position: absolute;
    top: 0.2rem;

  }
  .cinema-header .add{
    width: 18%;
    color: #000000;
  }
  .cinema-header .cinema{
    width: 70%;
    text-align: center;
    /*background-color: blue;*/
  }

  .cinema-header .icon{
    float: right;
    width: 12%;
    font-size: 20px;
    color: #000000;
  }
  .cinema-header .i{
    color:#333333 ;
  }
  .one{
    position: absolute;
    top: 0.1rem;
    right: 0.6rem;
  }
  .two{
    position: absolute;
    top: 0.1rem;

  }

</style>
