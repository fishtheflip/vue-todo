<template>
    <form @submit="onSubmit">
        <div class="todo-display">
            <h1 class="display-4">TO DO</h1>
        </div>
        <div class="form-group">
            <label for="exampleTask">Task</label>
            <input type="text" class="form-control" id="exampleTask"  placeholder="Enter your task"
            v-model.trim="exampleTask">
            
        </div>
        <div class="form-group">
            <label for="exampleDate">Date</label>
            <input type="text" class="form-control" id="exampleDate" placeholder="Enter the date of completion of the task"
            v-model.trim="exampleDate">
        </div>
        <button type="submit" class="btn btn-primary" >Submit</button>
    </form>
</template>

<script>

export default {
    name: 'SetupTask',
    data(){
        return{
            exampleTask: '',
            exampleDate: ''
        }
    },
    methods: {
        
        onSubmit(e) {
            
        let newItem = {
                id: 222,
                text: this.exampleTask,
                date: this.exampleDate
        }
          this.$store.commit('addNewTask', newItem)
          e.preventDefault()
        }
    }

}
</script>
<style>
    .todo-display{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>