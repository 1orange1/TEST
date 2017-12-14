<template>
  <swipe class="my-swipe">
    <swipe-item class="slide1"></swipe-item>
    <swipe-item class="slide2"></swipe-item>
    <swipe-item class="slide3"></swipe-item>
    <swipe-item class="slide4"></swipe-item>
  </swipe>
</template>
<script>
  import {Swipe,SwipeItem} from 'vue-swipe'
  export default{
    components: {
      Swipe,
      SwipeItem
    }
  }
</script>
<style>


  .movie{
    font-size: .3rem;
  }
  .my-swipe {

    height    : 190px;
    color     : #fff;
    font-size : 30px;
    text-align: center;
    margin-top: 1.6rem;
  }

  .slide1 {
    background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513011593339&di=a8a6d09e9ec3a8d8a001fe7f9ccf9f0a&imgtype=0&src=http%3A%2F%2Fwww.czongyi.com%2Fuploadfile%2F2016%2F0303%2F20160303044915326.jpg') no-repeat;
    -webkit-background-size:cover;
    background-size:cover;
    color     : #fff;
  }

  .slide2 {
    background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513011540180&di=6ff9790c661aa8795fc88de6284440ed&imgtype=0&src=http%3A%2F%2Fimg1.dzwww.com%3A8080%2Ftupian%2F20170810%2F81%2F7903886695110492077.jpg') no-repeat;
    -webkit-background-size:cover;
    background-size:cover;
    color     : #000;
  }

  .slide3 {
    background: url('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1585562720,129623430&fm=27&gp=0.jpg') no-repeat;
    -webkit-background-size:cover;
    background-size:cover;
    color     : #fff;
  }
  .slide4 {
    background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513605241&di=0d7a4f0771b358b37af1ea8c63784fe2&imgtype=jpg&er=1&src=http%3A%2F%2Fp2.ifengimg.com%2Fcmpp%2F2016%2F05%2F11%2F09%2Fa478e0e2-f9c3-4a0b-aae6-f9823142a44c_size236_w500_h277.jpg') no-repeat;
    -webkit-background-size:cover;
    background-size:cover;
    color     : #fff;
  }
</style>
