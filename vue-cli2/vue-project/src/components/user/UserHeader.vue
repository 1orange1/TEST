<template>
  <div class="user-header">
    <div class="user-name">
      <i class="fa fa-cog set-up" aria-hidden="true"></i>
      <i class="fa fa-bell-o message" aria-hidden="true"></i>
      <div class="member">
        <img src="http://k2.jsqq.net/uploads/allimg/1702/7_170225142254_2.jpg" alt="">
        <div class="member-intro">
          <h3>会员名称</h3>
          <span>关注&nbsp;0</span><span>被关注&nbsp;0</span>
          <p>  会员</p>
        </div>
      </div>
    </div>
    <div class="message-centre">会员中心<span>&gt;</span></div>
    <div class="break"></div>
  </div>
</template>
<script>

</script>
<style>
  .user-name{
    color: #ffffff;
    width: 100%;
    height: 2.8rem;
    background-color: #2eb1a8;
  }
  .user-name i{
    font-size: 0.44rem;
    margin-top: 0.2rem;
  }
  .user-name .set-up{
    margin-left: 0.2rem;
  }
  .user-name .message{
    float: right;
    margin-right: 0.2rem;
  }
  .user-name .member{
    margin-top: 0.32rem;
  }
  .user-name img{
    float: left;
    height: 1.4rem;
    width: 1.4rem;
    border-radius: 50%;
    margin-left: 0.4rem;
    margin-right: 0.22rem;
  }
  .user-name .member-intro span{
    color: #d7f1ef;
    border-right: #92d8d3 1px solid;
    padding-right: 0.2rem;
  }
  .user-name .member-intro span:nth-child(3){
    border: none;
    padding-left: 0.2rem;
  }
  .user-header .message-centre{

    height: 0.8rem;
    line-height: 0.8rem;
    background-color: #ffffff;
    width: 90%;
    margin: 0 auto;
  }
  .user-header .message-centre span{
    float: right;
    color: #a3a3a3;
  }
  .user-header .break{
    height: 0.2rem;
    background-color:#f5f5f5;

  }


</style>
}
