<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" >
          <div class="container">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action 1</a></li>
                <li><a class="dropdown-item" href="#">Action 2</a></li>
                <li><a class="dropdown-item" href="#">Action 3</a></li>
              </ul>
            </div>
            <div class="btn-field">
              <router-link  class="btn btn-secondary" to="/">Log In</router-link>
              <router-link  class="btn btn-success" to="/singup">Sing Up</router-link> 
          
            </div>
          </div>
          </nav>
      </header>

</template>
<script>
export default {
  name: 'Header'
}
</script>