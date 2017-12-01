<template>
  <div class="header" :style="{
    background:bgColor
  }">
    <button>首页 </button>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
  export default {
      props:['title','bgColor']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    height    : 1rem;
    background: rgb(33, 150, 243);
    display   : flex;
    position  : fixed;
    top       : 0;
    width     : 100%;
  }
  .header button{
    width : 1rem;
    height: 1rem;
    color : #fff;
    float : left;
  }
  .header h2{
    float      : left;
    color      : #fff;
    text-align : center;
    flex       : 1;
    text-indent: -1rem;
  }

</style>
