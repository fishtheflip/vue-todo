<template>
  <div class="about container">
    <SetupTask/>
    <CurrentTasks/>
    <SuccesfulTasks/>

  </div>
</template>
<script>
import SetupTask from '../components/SetupTask'
import CurrentTasks from '../components/CurrentTasks'
import SuccesfulTasks from '../components/SuccessfulTasks'

export default {
  name: 'About',
  components: {
    SetupTask,
    CurrentTasks,
    SuccesfulTasks
  }
}
</script>
<style>
  .about{
    margin-top: 10vh;;
  }
</style>