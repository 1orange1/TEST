<template>
  <div id="book">
      <common-header title="book" bgColor="rgb(121,85,72)"></common-header>
      <common-footer></common-footer>
  </div>
</template>
<script>
  import CommonHeader from "../common/CommonHeader.vue"
  import CommonFooter from "../common/CommonFooter.vue"
  export default{
      components:{
          CommonHeader,
          CommonFooter
      }

  }
</script>
<style>

</style>
