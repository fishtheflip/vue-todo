<template>
    <div >
        <div>
            <h3>Finished Tasks:</h3>
            <StandartTask/>
        </div>
        
    </div>
</template>

<script>
import StandartTask from './StandartTask'
export default {
    name: 'SucccessfulTasks',
    components:{
        StandartTask
    }
}
</script>