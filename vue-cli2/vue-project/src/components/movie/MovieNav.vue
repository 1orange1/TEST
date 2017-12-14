<template>
  <div class="nav">
      <ul>
        <li><router-link to="/movie/hot">正在热映</router-link></li>
        <li><router-link to="/movie/coming">即将上映</router-link></li>
        <li><router-link to="/movie/video">小视频</router-link></li>
        <li><router-link to="/movie/dyphbb">排行榜</router-link></li>
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
       .nav li a.router-link-active{
         color:#fd5c6f;
       }


</style>
