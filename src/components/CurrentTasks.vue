<template>
    <div >
        <div>
            <h3>Current Tasks:</h3>
            <StandartTask/>
        </div>
        
    </div>
</template>

<script>
import StandartTask from './StandartTask'
export default {
    name: 'CurrentTasks',
    components:{
        StandartTask
    }
        
    
}
</script>