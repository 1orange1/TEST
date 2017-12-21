<template>
<div class="d-nav">
  <ul>
    <li>
        <i :class="icon1" aria-hidden="true" :style="{color:iconcolor1}"></i><br>
        {{nav1}}
    </li>
    <li>
      <i :class="icon2" aria-hidden="true" :style="{color:iconcolor2}"></i><br>
      {{nav2}}
    </li>
    <li>
      <i :class="icon3" aria-hidden="true" :style="{color:iconcolor3}"></i><br>
      {{nav3}}
    </li>
    <li>
        <i :class="icon4" aria-hidden="true" :style="{color:iconcolor4}"></i><br>
      {{nav4}}
    </li>
  </ul>
</div>
</template>
<script>
  export default{
    props  : ['nav1',"nav2","nav3","nav4","icon1","icon2","icon3","icon4",
      "iconcolor1","iconcolor2","iconcolor3","iconcolor4"]

  }
</script>
<style>
  .d-nav{
    height    : 1rem;
    background: #ffffff;
    /*position  : fixed;*/
    width: 100%;
    z-index: 1;
  }
  .d-nav ul{
    color: #333333;
    display: flex;
    width: 90%;
    margin: 0 auto;
    padding: 0.2rem 0;
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
