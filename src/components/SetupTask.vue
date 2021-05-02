<template>
    <form>
        <div class="todo-display">
            <h1 class="display-4">TO DO</h1>
        </div>
        <div class="form-group">
            <label for="exampleTask">Task</label>
            <input type="text" class="form-control" id="exampleexampleTask"  placeholder="Enter your task">
            
        </div>
        <div class="form-group">
            <label for="exampleDate">Date</label>
            <input type="text" class="form-control" id="exampleDate" placeholder="Enter the date of completion of the task">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
export default {
    name: 'SetupTask',

}
</script>
<style>
    .todo-display{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>