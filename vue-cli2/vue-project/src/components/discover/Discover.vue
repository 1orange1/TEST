<template>
    <div class="discover">
      <div class="d-title">发现</div>
    <common-scroll class="d-scroll"></common-scroll>
      <discover-nav></discover-nav>
      <router-view></router-view>
      <common-footer></common-footer>
    </div>
</template>
<script>
import CommonScroll from "../common/CommonScroll.vue"
import CommonFooter from "../common/CommonFooter.vue"
import DiscoverNav from "../discover/DiscoverNav.vue"
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

</style>
