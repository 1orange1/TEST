<template>
<div class="d-nav">
  <ul>
    <li>
        <i class="fa fa-file-text-o" aria-hidden="true"></i><br>
        台词
    </li>
    <li>
      <i class="fa fa-commenting-o" aria-hidden="true"></i><br>
        话题
    </li>
    <li>
      <i class="fa fa-bar-chart" aria-hidden="true"></i><br>
        票房
    </li>
    <li>
        <i class="fa fa-bullseye" aria-hidden="true"></i><br>
        演出
    </li>
  </ul>
</div>
</template>
<script>

</script>
<style>
  .d-nav{
    height    : 1rem;
    background: #ffffff;
    position  : fixed;
    width: 100%;
  }
  .d-nav ul{
    color: #333333;
    display: flex;
    width: 90%;
    margin: 0 auto;
    padding: 0.1rem 0;
    border-bottom: #e8e8e8 solid 1px;
  }
  .d-nav li{
    flex       : 1;
    text-align : center;
    margin-top: 8px;
    font-size: 8px;
  }
  .d-nav li i{
    font-size: 0.3rem;
    /*color: #7e7c7c;*/
  }
</style>
