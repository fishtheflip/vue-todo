<template>
  <div id="nav">
    <Header/>
  </div>
  <router-view/>
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
  }
}
</script>
