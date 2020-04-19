import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {


    state = {
        tasks: [],
        filterValue: "All"
    };

    componentDidMount = () => {
        this.restoreState()
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state)

        localStorage.setItem("state", stateAsString);
    }

    restoreState = () => {
        let stateAsString = localStorage.getItem("state")
        if (stateAsString) {
            let state = JSON.parse(stateAsString)
            state.tasks.forEach(t=>{
              if  (t.id>=this.nextTaskId) {
                  this.nextTaskId = t.id + 1;
              }
            });
            this.setState(state);
        }
    }


    nextTaskId = 0;

    addTask = (newText) => {

        let newTask = {
            title: newText,
            isDone: false,
            priority: 'low',
            id: this.nextTaskId
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, () => {
            this.saveState();
        });
    }

        changeFilter = (newFilterValue) => {
            this.setState({
                filterValue: newFilterValue
            });
        }

        changeTask = (taskId, obj) => {
            let tasksCopy = this.state.tasks.map(t => {
                if (t.id === taskId) {
                    /* return {...t, isDone: status};*/
                    return {...t, ...obj};
                }
                return t;
            });
            this.setState({
                tasks: tasksCopy
            });

        }

        changeStatus = (status, taskId) => {
            let obj = {
                isDone: status
            }
            this.changeTask(taskId, obj)

        }

        changeTitle = (title, taskId) => {
            let obj = {
                title: title
            }
            this.changeTask(taskId, obj)
        }


        render = () => {
            return <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks
                        changeStatus={this.changeStatus}
                        changeTitle={this.changeTitle}
                        tasks={this.state.tasks.filter(t => {
                            switch (this.state.filterValue) {
                                case "All":
                                    return true;
                                case "Completed":
                                    return t.isDone;
                                case "Active":
                                    return !t.isDone;
                                default:
                                    return true;
                            }
                            ;
                        })}/>

                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>

        };
    }


    export
    default
    App;

