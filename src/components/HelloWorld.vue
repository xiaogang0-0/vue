<template>
  <div class="container-fluid">
    <div class="row">
      <div class="faded-bg animated"></div>
      <div class="hidden-xs col-sm-8 col-md-9">
        <div class="clearfix">
          <div class="col-sm-12 col-md-10 col-md-offset-2">
            <div class="logo-title-container">
              <img class="img-responsive pull-left logo hidden-xs animated fadeIn" src="http://www.laravel.cn/images/backend/logo-icon-light.png" alt="Logo Icon">
              <div class="copy animated fadeIn">
                <h1>Voyager</h1>
                <p>Welcome to Voyager. The Missing Admin for Laravel</p>
              </div>
            </div> <!-- .logo-title-container -->
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-4 col-md-3 login-sidebar animated fadeInRightBig">

        <div class="login-container animated fadeInRightBig">

          <h2>请登录:</h2>

          <form action="http://www.laravel.cn/backend/login" method="POST">
            <input type="hidden" name="_token" value="fB9CQP9fivSy1ukt6IgVvlH3ka7q9ilj0AQB1Q0L">
            <div class="group">
              <input type="text" name="email" value="" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label><i class="glyphicon glyphicon-user"></i><span class="span-input"> 邮件</span></label>
            </div>

            <div class="group">
              <input type="password" name="password" required>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label><i class="glyphicon glyphicon-lock"></i><span class="span-input"> 密码</span></label>
            </div>

            <button type="submit" class="btn btn-block login-button" name="submit">
              <span class="signingin hidden"><span class="glyphicon glyphicon-refresh"></span> 登录中...</span>
              <span class="signin">登录</span>
            </button>

          </form>


        </div> <!-- .login-container -->

      </div> <!-- .login-sidebar -->
    </div> <!-- .row -->
  </div> <!-- .container-fluid -->
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "./assets/css/backend/login.css";
</style>
