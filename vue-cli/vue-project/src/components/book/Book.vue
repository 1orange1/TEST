<template>
  <div id="book">
      <common-header title="book" nav="<" bgColor="rgb(121,85,72)"></common-header>
      <common-footer bgColor="rgb(121,85,72)"></common-footer>
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
