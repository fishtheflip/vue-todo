<template>

    <div class="container task-container">
        <h1>{{$route.params}}</h1>
       
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
                <router-link to="/about" class="btn btn-success">Back to List</router-link>
            </form>

    </div>
</template>
<script>
import store from '../store'
export default {
    name: 'DynTask',
    methods:{
        onSubmit(e){
            if(this.$route.params.type){
                let newItem = {
                id: 222,
                text: this.exampleTask,
                date: this.exampleDate
                }
                this.$store.commit('deleteFinishedTask', this.$route.params.id)
                this.$store.commit('addNewTask', newItem)
                
            }
            e.preventDefault()
        },
        getItem(){
            if(this.$route.params.type){
                return store.state.unfinishTasks[this.$route.params.id] 
            }
        }
    },
    data(){
        return{
            exampleTask: this.getItem().text,
            exampleDate: this.getItem().date
        }
    }


}
</script>
<style>
    .task-container{
        margin-top: 10vh;
    }
</style>