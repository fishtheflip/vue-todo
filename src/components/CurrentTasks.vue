<template>
    <div >
        <div>
            <h3>Current Tasks:</h3>
            <h2 v-if="items.length === 0" >No Task</h2>
            <StandartTask v-for="(item, index) in items" :key="item" :items="items[index]" :showDoneBtn="true" :index="index" />
        </div>
        
    </div>
</template>

<script>
import StandartTask from './StandartTask'
import store from '../store'
export default {
    name: 'CurrentTasks',
    components:{
        StandartTask
    },
    data(){
        return{
            items: store.getters.getUnfinishedPost
        }
    }
        
    
}
</script>