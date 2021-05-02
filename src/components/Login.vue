<template>
    <form>
  <div class="form-group">
    <div class="login-box">
        <h2>{{name}}</h2>
    </div>
      
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <router-link to="/about" class="btn btn-primary">Submit</router-link>
</form>
</template>
<script>
export default {
    name: 'Login',
    props:['name']
}
</script>
<style>
    form{
        margin-top: 10vh;
    }
    .login-box{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>