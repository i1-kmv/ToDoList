import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";


class App extends React.Component {


    nextTodoListId = 0;

    addTodoList = (title) => {
        this.props.addTodoList(title);

    }


    render = (tl) => {

        let todoLists = this.props.todoLists.map(tl => <TodoList id={tl.id}
                                                                 title={tl.title}
                                                                 tasks={tl.tasks}
                                                                 addTask={this.props.addTask}
                                                                 changeTask={this.props.changeTask}
        />)

        return (
            <>
                <div>
                    <AddNewItemForm addItem={this.addTodoList}/>
                </div>
                <div className="App">
                    {todoLists}
                </div>
            </>
        )
    };
}


const mapStateToProps = (state) => {
    return {
        todoLists: state.todoLists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodoList: (title) => {
            const action = {
                type: "ADD-TODOLIST",
                title: title
            };

            dispatch(action)
        },
        addTask: (newTitle,todoListId) => {
            const action = {
                type: "ADD-TASK",
                newText: newTitle,
                newTodoListId: todoListId
            };

            dispatch(action)
        },
        changeTask: (taskId,obj) => {
            const action = {
                type: "CHANGE-TASK",
                taskId: taskId,
                delta: obj
            };

            dispatch(action)
        },
        }
    }


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;

