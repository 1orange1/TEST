<template>
  <div class="nav">
    <ul>
      <li><router-link to="/cinema/area">
        区域&nbsp;
        <i class="fa fa-sort-desc" aria-hidden="true"></i>
      </router-link></li>
      <li><router-link to="/cinema/close">
        离我最近&nbsp;
        <i class="fa fa-sort-desc" aria-hidden="true"></i>
      </router-link></li>
      <li><router-link to="/cinema/special">
        特色&nbsp;
        <i class="fa fa-sort-desc" aria-hidden="true"></i>
      </router-link></li>
    </ul>
  </div>
</template>
<script>
</script>
<style>
  .nav{
    height    : 0.8rem;
    position  : fixed;
    top       : 0.8rem;
    width     : 100%;
    font-size : 14px;
    z-index   : 1;
    background-color: #fff;
  }
  .nav i{
    position: absolute;
    top: 0.2rem;
  }
  .nav ul{
    display: flex;
  }
  .nav li{
    flex       : 1;
    color      : #fff;
    line-height: 0.8rem;
    text-align : center;
  }
  .nav li a{
    color: #4e4e4e;
  }
</style>
