<template>
  <div class="home container">
    <Login :name="login"/>
  </div>
</template>

<script>
import Login from '../components/Login'
export default {
  name: 'Home',
  components: {
    Login
  },
  data(){
    return{
      login: 'Log In',
      
    }
  }
}
</script>
