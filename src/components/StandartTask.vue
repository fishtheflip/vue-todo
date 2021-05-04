<template>
                <div role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Task: {{index + 1}}</h5>
                    </div>
                    <div class="modal-body">
                        <p class="task-text">{{items.text}}</p>
                        <strong>{{items.date}}</strong>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" v-if="showDoneBtn" @click="doneTask(index)" >Done</button>
                        <router-link :to="{name: 'DynTask', params:{id: index, type : showDoneBtn }}"  v-if="showDoneBtn" class="btn btn-secondary"  >Edit</router-link>
                        <button type="button" class="btn btn-warning"  @click="deleteTask(index)">Delete</button>
                    </div>
                    </div>
                    <hr/>
                </div>
</template>
<script>
export default {
    name: 'StandartTask',
    props: ['items', 'showDoneBtn', 'index'],
    methods:{
        deleteTask(i){
            if(this.showDoneBtn){
                console.log('hello')
                this.$store.commit('deleteFinishedTask', i)
            } else{
                console.log('hello too')
                this.$store.commit('deleteUnfinishedTask', i)
            }
        },
        doneTask(i){
            console.log('Got')
            this.$store.commit('doneTask', i)
            this.$store.commit('deleteFinishedTask', i)
        }
    }


}
</script>
<style>
.task-text{
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>