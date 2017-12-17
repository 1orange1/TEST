<template>

    <div class='cinema-list'>
      <div class="cinema-name"><b>{{cname}}</b>&nbsp;
        <span class="vip">{{vip}}</span>
        <div  class="money"><span>{{money}}</span>起</div></div>
      <div class="cinema-addr">{{caddr}}</div>
      <span class="cdes">{{cdes}}</span>
    </div>

</template>
<script>
  export default {
    props: ['cname','caddr','vip','cdes','money'],
    data () {
      return {

      }
    }
  }
</script>
<style scoped>
  .cinema-list .cinema-name{
    font-size: 0.25rem;
  }
  .cinema-list {
    /*width: 100%;*/
    /*height: 0.8rem;*/
    margin-left: 0.25rem;
    padding-top:0.22rem;
    padding-bottom:0.2rem;
    border-bottom:0.1px #ededed solid;
    margin-bottom: 0;
  }
  .cinema-list .vip{
    padding: 2px;

    font-size: 2px;
    color: #ffffff;
    background-color: #6dc772;
    border-radius: 12%;
  }
  .cinema-list .money{
    display: inline;
    position: absolute;
    right: 0.3rem;
    font-size: 0.2rem;
  }
  .cinema-list .money span{
    color: #ff4d64;
    font-size: 0.24rem;

  }
  .cinema-list .cdes{
    font-size: 0.1rem;
    padding: 2px;
    color: #44a4ed;
    border: 1px #44a4ed solid;
    border-radius: 12%;
  }
</style>
