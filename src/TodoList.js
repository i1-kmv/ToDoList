import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class TodoList extends React.Component {


    state = {
        filterValue: "All"
    };



    componentDidMount = () => {

    }



    addTask = (newText) => {

        this.props.addTask(newText, this.props.id)
    }



        changeFilter = (newFilterValue) => {
            this.setState({
                filterValue: newFilterValue
            });
        }

        changeTask = (taskId, obj) => {

            this.props.changeTask(taskId, obj, this.props.todoList)
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
            return (
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}
                                    title = {this.props.title}
                                    id = {this.props.id}
                    />
                    <TodoListTasks className="todoListTasks"
                        changeStatus={this.changeStatus}
                        changeTitle={this.changeTitle}
                        todoListId = {this.props.id}
                        tasks={this.props.tasks.filter(t => {
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
            )
        }
        };


    export default TodoList;

