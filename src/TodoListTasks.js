import React from 'react';
import TodoListTask from "./TodoListTask";
import {connect} from "react-redux";
import {deleteTaskAC} from "./store/reducer";


class TodoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.tasks.map((task) => {
            return (
                <TodoListTask
                    key = {task.id}
                    task={task}
                    changeStatus={this.props.changeStatus}
                    changeTitle={this.props.changeTitle}
                    deleteTask={this.props.deleteTask}
                    todoListId = {this.props. todoListId}
                />
            )
        });
        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (taskId, todoListId) => {
            dispatch(deleteTaskAC(taskId, todoListId))
        }
    }
}

const ConnectedTodoListTasks = connect(null, mapDispatchToProps)(TodoListTasks);

export default ConnectedTodoListTasks;



