<template>
  <div class="login">
    <div class="l-title"><span>&lt;</span>账户登录</div>
    <div class="none"></div>
    <div class="user-login">
        <p>
          <span>账户</span><input type="text" placeholder="手机/会员名/邮箱" v-model="username" >
        </p>
        <p>
          <span>登陆密码</span><input type="password"  v-model="pwd" placeholder="请输入密码" >
          <i class="fa fa-eye" aria-hidden="true"></i>
        </p>
    </div>
    <div class="none-none">
        <p>
          <input  class="l-submit" type="submit" value="登录" @click="login" >
        </p>
    </div>
    <div class="forget-pwd">忘记密码</div>
    <span class="free-registration">免费注册</span>
  </div>
</template>
<script>
  import Axios from 'axios'
  export default{
    data(){
      return {
        username: '',
        pwd     : ''
      }
    },
    mounted(){
    },
    methods:{
      login(){
        Axios.get('http://127.0.0.1:80/phptest/myblog/welcome/vue_login',{
          params:{
            username: this.username,
            pwd     : this.pwd
          }
        })

          .then(res=>{
            location.href = 'http://127.0.0.1:8080/#/user';
//            console.log(username)
          });

      }
    },



    components: {


    }
  }
</script>
<style scoped>

  .login .free-registration{
    display: inline-block;
    color: #fa8953;
    border: #fa8953 solid 0.01rem;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -0.4rem;
    margin-left: -15%;
    padding: 0.08rem 0.4rem ;

  }
  i{
    float: right;
    margin-right: 3%;
    margin-top: 4px;
  }
  .login{
    background-color: #efeff4;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .none{
    height: 0.3rem;
    background-color: #efeff4;
  }
  input{
    border: none;
    outline: none;
  }
  .free-registration{

  }
  .login .l-title span{
    float: left;
    margin-left: 3%;
  }
  .login .l-title{
    background-color: #fff;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.26rem;
    color: #484848;
  }

  .login .user-login{
    border-bottom: #aaaaaa solid 0.01rem;
    border-top: #aaaaaa solid 0.01rem;
    background-color: #fff;
    color: #6c6c6c;
  }
  .login .user-login span{
    display: inline-block;
    width: 20%;

  }
  .login .user-login p{
    margin-left: 3%;
    padding: 0.1rem 0;
  }
  .login .user-login p:first-child{
    border-bottom: #aaaaaa solid 0.01rem;
  }
  .login .l-submit{
    color: #ff8299;
    height: 0.8rem;
    width: 96%;
    margin-left: 2%;
    background-color: #ff123d;
    border-radius: 0.1rem ;
    margin-top: 0.3rem;
  }
  .login .forget-pwd{
    float: right;
    margin-right: 3%;
    margin-top: 1%;
    color: #5f646e;
  }
</style>
