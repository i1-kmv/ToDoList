import {createStore} from "redux";



const initialState = {
    todoLists: [
        {"id":0, "title":"today", tasks:[
            {"id":0, "title": "youtube", "isDone": false, "priority": "low" }]}
    ]
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
       case "ADD-TODOLIST":
           let newTodoList = {
               title: action.title,
               id:(new Date()).getTime(),
               tasks: []
           }
           return {
                ...state,
               todoLists: [newTodoList, ...state.todoLists]
           }
       case "ADD-TASK":
           let newTask = {
               title: action.newText,
               isDone: false,
               priority: 'low',
               id: (new Date()).getTime()
           };
           return {
               ...state,
               todoLists: state.todoLists.map(tl => {
                   if (action.newTodoListId == tl.id) {
                       return {
                           ...tl,
                           tasks: [newTask, ...tl.tasks]
                       }
                   }else {
                           return tl;
                       }

               })
           }
       case "CHANGE-TASK":
           return {
               ...state,
               todoLists: state.todoLists.map(tl => {
                   let task = tl.tasks.find(t => t.id == action.taskId);
                   if (task == null)
                   return tl
                   else {
                       return {
                           ...tl,
                           tasks: tl.tasks.map(t =>{
                               if (t.id != action.taskId) {
                                   return t;
                               }
                               else {
                                   return {
                                       ...t,
                                       ...action.delta
                                   }
                               }

                           })
                       }
                   }
               })
           }
       case "DELETE-TODOLIST":
           return {
               ...state,
               todoLists: state.todoLists.filter(tl => tl.id != action.id)
           }
       case "DELETE-task":
           return{
           ...state,
               todoLists: state.todoLists.map(tl => {
                   if (tl.id != action.todoListId) return tl;
                   else return {
                       ...tl,
                       tasks: tl.tasks.filter(t => t.id != action.taskId)
                   }
               })
           }
   }



   return state;
}

const store = createStore(reducer);
export default store;