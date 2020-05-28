export const ADD_TODOLIST = "todolist/ADD-TODOLIST";
export const ADD_TASK = "todolist/ADD-TASK";
export const CHANGE_TASK = "todolist/CHANGE-TASK";
export const DELETE_TODOLIST = "todolist/DELETE-TODOLIST";
export const DELETE_TASK = "todolist/DELETE-TASK";


const initialState = {
    todoLists: [
        {
            "id": 0, "title": "today", tasks: [
                {"id": 0, "title": "youtube", "isDone": false, "priority": "low"}]
        }
    ]
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOLIST:
            let newTodoList = {
                title: action.title,
                id: (new Date()).getTime(),
                tasks: []
            };
            return {
                ...state,
                todoLists: [newTodoList, ...state.todoLists]
            }
        case ADD_TASK:
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
                    } else {
                        return tl;
                    }

                })
            }
        case CHANGE_TASK:
            return {
                ...state,
                todoLists: state.todoLists.map(tl => {
                    let task = tl.tasks.find(t => t.id == action.taskId);
                    if (task == null)
                        return tl
                    else {
                        return {
                            ...tl,
                            tasks: tl.tasks.map(t => {
                                if (t.id != action.taskId) {
                                    return t;
                                } else {
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
        case DELETE_TODOLIST:
            return {
                ...state,
                todoLists: state.todoLists.filter(tl => tl.id != action.id)
            }
        case DELETE_TASK:
            return {
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

export const addTodoListAC = (title) => ({type: ADD_TODOLIST, title: title});
export const addTaskAC = (newTitle,todoListId) => ({type: ADD_TASK, newText: newTitle,newTodoListId: todoListId});
export const changeTaskAC = (taskId,obj) => ({type: CHANGE_TASK, taskId: taskId,delta: obj});
export const deleteTodoListAC = (id) => ({type: DELETE_TODOLIST,  id: id});
export const deleteTaskAC = (taskId, todoListId) => ({type: DELETE_TASK,   taskId,  todoListId});