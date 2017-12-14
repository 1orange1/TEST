<template>
  <div class='footer'>
    <ul>
      <li>
        <router-link to ='/movie'>
          <i class="fa fa-video-camera" aria-hidden="true"></i><br>
          电影</router-link>
      </li>
      <li>
        <router-link to ='/cinema'> <i class="fa fa-codepen" aria-hidden="true"></i><br>
          影院</router-link>
      </li>
      <li>
        <router-link to ='/discover'> <i class="fa fa-bandcamp" aria-hidden="true"></i><br>
          发现</router-link>
      </li>
      <li>
        <router-link to ='/user'>
          <i class="fa fa-user-circle-o" aria-hidden="true"></i><br>
          我的</router-link ></li>
    </ul>
  </div>
</template>
<script>

  export default{
    props:[''],
  }

</script>
<style scoped>
  @import "../../assets/css/reset.css";
  .footer{
    height    : 1rem;
    background: #ffffff;
    position  : fixed;
    bottom    : 0;
    right: 0;
    width: 100%;
  }
  .footer ul{
    display: flex;
    border-top: #d2d2d2 solid 0.1px;
  }
  .footer li{
    flex       : 1;
    text-align : center;
    /*color      : #fff;*/
    margin-top: 8px;
    font-size: 8px;
  }
  .footer li i{
    font-size: 0.3rem;
    color: #7e7c7c;
    /*color: #ffffff;*/
  }
  .footer li a{
    color: #333333;
  }
  .footer li a.router-link-active{
    color: #fd5c6f;
  }
</style>
