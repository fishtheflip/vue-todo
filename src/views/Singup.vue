<template>
    <div class="home container">
    <Login :name="singup"/>
    </div>
</template>
<script>
import Login from "../components/Login"
export default {
    name: 'Singup',
    data(){
        return{
            singup: 'Sing Up'
        }
    },
    components: {
        Login
    }
}
</script>