<template>
  <div id="nav">
    <Header/>
  </div>
  <router-view/>
  <div>
    
  </div>
  <Footer/>
</template>

<style>

</style>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },

  computed:{
    getUnfinishedPost(){
      return this.$store.getters.getUnfinishedPost
    }
  }
}
</script>
