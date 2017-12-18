<template>
    <div class="discover">
      <div class="d-title">发现</div>
    <common-scroll class="d-scroll"></common-scroll>
      <discover-nav nav1="台词" nav2="话题" nav3="票房" nav4="演出"
      icon1="fa fa-file-text-o" icon2="fa fa-commenting-o" icon3="fa fa-bar-chart" icon4="fa fa-bullseye"></discover-nav>
      <div class="discover-content">
        <router-view></router-view>
      </div>
      <common-footer></common-footer>
    </div>
</template>
<script>
import CommonScroll from "../common/CommonScroll.vue"
import CommonFooter from "../common/CommonFooter.vue"
import DiscoverNav from "../common/DiscoverUserNav.vue"
import Axios from 'axios'
  export default{
    data(){
      return {
        discoverlist: []
      }
    },
    mounted(){
      Axios.get('/static/discoverlist.json')
        .then((res)=>{
          this.discoverlist = res.data.discoverList;
        })
    },
    components: {
        CommonScroll,
        CommonFooter,
        DiscoverNav

    }
  }
</script>
<style>
  .discover .d-title{
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.26rem;
  }
  .discover .d-scroll{
    margin-top: auto;
  }
  .discover .discover-content{
    margin-bottom: 16rem;
  }
</style>
