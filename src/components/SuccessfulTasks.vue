<template>
    <div >
        <div>
            <h3>Finished Tasks:</h3>
            <h2 v-if="items.length === 0" >No Task</h2>
            <StandartTask v-for="(item, index) in items" :key="index" :items="items[index]"  :index="index" />
        </div>
        
    </div>
</template>

<script>
import StandartTask from './StandartTask'
import store from '../store'
export default {
    name: 'SucccessfulTasks',
    components:{
        StandartTask
    },
    data(){
        return{
            items: store.getters.getFinishedPost
        }
    }
}
</script>