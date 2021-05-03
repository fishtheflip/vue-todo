import { createStore } from 'vuex'

export default createStore({
  state: {
    unfinishTasks: [{id:1, text: 'Drink coffe', date: 'today'}],
    finishedTasks: [{id:1, text: 'Make app', date: 'today'},
    {id:1, text: 'Eat cake', date: 'today'}]
  },
  mutations: {
    addNewTask(state, payload){
      this.state.unfinishTasks.push(payload)

    },
    deleteFinishedTask(state, payload){
      this.state.unfinishTasks.splice(payload, 1)
    },
    deleteUnfinishedTask(state, payload){
      this.state.finishedTasks.splice(payload, 1)
    },
    doneTask(state, payload){
      let newItem = this.state.unfinishTasks[payload]
      this.state.finishedTasks.push(newItem)
    }
  }, 
  actions:{

  },
  getters:{
    getUnfinishedPost(state){
      return state.unfinishTasks
    },
    getFinishedPost(state){
      return state.finishedTasks
    },
    getTask(state, id){
      return state.unfinishTasks[id]
    }
  }
})
