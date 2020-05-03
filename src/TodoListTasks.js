import React from 'react';
import TodoListTask from "./TodoListTask";
import {connect} from "react-redux";


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
            const action = {
                type: "DELETE-task",
                taskId,
                todoListId
            };

            dispatch(action)
        }
    }
}

const ConnectedTodoListTasks = connect(null, mapDispatchToProps)(TodoListTasks);

export default ConnectedTodoListTasks;



