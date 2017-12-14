<template>
<div>
  <cinema-header></cinema-header>
  <cinema-nav></cinema-nav>
  <common-scroll></common-scroll>
  <div class="c-list">
    <cinema-list v-for="(obj,index) in cinemaList" :key="index" :cname="obj.cname" :caddr="obj.caddr" :vip="obj.vip"
    :money="obj.money" :cdes="obj.cdes"></cinema-list>
  </div>
  <common-footer></common-footer>
</div>
</template>
<script>
  import CinemaHeader from "./CinemaHeader"
  import CommonFooter from "../common/CommonFooter"
  import CinemaNav from "./CinemaNav"
  import CommonScroll from "../common/CommonScroll"
  import CinemaList from "./CinemaList"
  import {Swipe,SwipeItem} from 'vue-swipe'

  export default{
      data(){
          return {
              cinemaList:[{
                  cname:"嘉兴国际影城（黑大店）",
                    vip:"影城卡",
                  caddr:"南岗区学府路51号哈尔滨服装城4层",
                  cdes :'退票',
                  money:'8.8元'
                },
                {
                  cname:"中影国际影城",
                  caddr:"南岗区哈西大街12号天悦国际居然之家三层",
                  vip:"影城卡",
                  cdes :'退票 杜比厅',
                  money:'10.8元'
                },
                {
                  cname:"万达广场店",
                  caddr:"南岗区学府路51号哈尔滨服装城4层",
                  vip:"影城卡",
                  cdes :'退票 改签',
                  money:'16.8元'
                },
                {
                  cname:"CGV影城",
                  caddr:"南岗区中兴大道168号哈西万达广场3层",
                  vip:"影城卡",
                  cdes :'退票',
                  money:'28.8元'
                },
                {
                  cname:"华谊兄弟影院",
                  caddr:"道里区群力第五大道王府井购物中心4层",
                  vip:"影城卡",
                  cdes :'退票',
                  money:'11.8元'
                },
                {
                  cname:"中影国际影城",
                  caddr:"南岗区哈西大街12号天悦国际居然之家三层",
                  vip:"影城卡",
                  cdes :'退票 改签',
                  money:'8.8元'
                },
                {
                  cname:"哈西万达广场店",
                  caddr:"南岗区学府路51号哈尔滨万达广场4层",
                  vip:"影城卡",
                  cdes :'退票',
                  money:'15.8元'
                }
              ]
          }
      },

    components: {
      CinemaHeader,
      CommonFooter,
      CommonScroll,
      CinemaNav,
      CinemaList,
      Swipe,
      SwipeItem
    }
  }
</script>
<style>
.c-list{
  margin-bottom: 1rem;
}
</style>
