import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import { addTaskAC, addTodoListAC, changeTaskAC} from "./store/reducer";


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
            dispatch(addTodoListAC(title))
        },

        addTask: (newTitle,todoListId) => {
            dispatch(addTaskAC(newTitle,todoListId))
        },
        changeTask: (taskId,obj) => {
            dispatch(changeTaskAC(taskId,obj))
        },
        }
    }


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;

